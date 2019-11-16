var express = require('express');
var router = express.Router();
const Project = require('../models/project');

router.get('/all', async (req, res) => {
	try {
		console.log('Hitting');
		const resp = await Project.find({});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.get('/single-project/:id', async (req, res) => {
	let id = req.params.id;
	try {
		const resp = await Project.findOne({ _id: id });
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.post('/add-project', async (req, res) => {
	try {
		// let userId="5d750d3848e845208da09944";
		let userId = req.user._id;
		const newProject = new Project({
			title: req.body.title,
			description: req.body.description,
			deploymentUrl: req.body.deploymentUrl,
			githubUrl: req.body.githubUrl,
			keywords: req.body.keywords,
			createdBy: userId,
		});
		console.log(newProject);
		try {
			await newProject.save();
			res.status(200).send({ message: 'Project is successfully created' });
		} catch (error) {
			console.log(error);
		}
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Project.findByIdAndUpdate(id, req.body, { new: true }, function(err, model) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send(model);
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Project.remove({ _id: id }, function(err) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send({ msg: 'Successfully delete' });
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

router.post('/:id/add-comment', async (req, res) => {
	try {
		let id = req.params.id;
		let comments = req.body.comments;
		const project = await Project.findOne({ _id: id });
		project.comments = comments;
		await project.save();
		res.status(200).send({ message: 'Comments successfully added' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.put('/apply/:id', async (req, res) => {
	try {
		let projectId = req.params.id;
		let userId = req.user._id;
		// let userId="5d750d3848e845208da09946";
		const newTicket = {
			title: req.body.title,
			message: req.body.message,
			emailInfo: req.body.emailInfo,
			githubLink: req.body.githubLink,
			userId: userId,
		};
		const updatedProject = await Project.findOneAndUpdate(
			{ _id: projectId },
			{
				$push: {
					tickets: newTicket,
				},
			},
			{ new: true }
		);
		await updatedProject.save();
		res.status(200).send(updatedProject);
	} catch (error) {
		console.log(error);
	}
});

router.put('/remove-apply/:id', async (req, res) => {
	try {
		let projectId = req.params.id;
		let userId = req.user._id;
		await Project.findOneAndUpdate({ _id: projectId }, { $pull: { tickets: { userId: userId } } }, function(err) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send({ msg: 'Successfully delete' });
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

module.exports = router;
