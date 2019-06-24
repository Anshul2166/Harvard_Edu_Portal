const express = require('express');
const router = express.Router();
const Communities = require('../models/community');

const isLoggedIn = require('../helper/isLoggedIn');

//=============================
//Full route /api/communities/...
//=============================

router.get('/demo', (req, res) => {
	res.status(200).send({ message: 'This route is working' });
});

//Send the list of all created communities
router.get('/list', async (req, res) => {
	try {
		const communities = await Communities.find({});
		res.status(200).send(communities);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

//Send the list of all created communities
router.get('/:name', async (req, res) => {
	let community_name = req.params.name;
	try {
		const communities = await Communities.find({ name: community_name });		
		res.status(200).send(communities);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

router.post('/create', isLoggedIn, async (req, res) => {
	const { name, description } = req.body;
	try {
		const communityExist = await Communities.findOne({ name });
		if (req.body.name === '' || req.body.description === '') {
			return res.status(400).send({ message: 'You need to provide both name and description' });
		}
		//Checking if the name is already taken
		if (communityExist) return res.status(400).send({ nameErr: 'Name already taken' });

		const community = await new Communities({
			name,
			description,
		}).save();

		console.log('Community have been successfully created');
		res.status(200).send(community);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

module.exports = router;
