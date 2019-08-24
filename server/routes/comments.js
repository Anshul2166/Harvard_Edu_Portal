const express = require('express');
const router = express.Router();
const Comments = require('../models/comments');
const { check, validationResult } = require('express-validator/check');

//function to check if the user is already logged in or not
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.statusCode = 401;
		res.setHeader('Content-Type', 'application/json');
		res.json({ success: false, status: 'You are not logged in!' });
	}
}

router.get('/demo', async (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json({
		success: true,
		status: 'You are in /demo page',
	});
});

router.get('/:commentId', async (req, res, next) => {
	const commentId = req.params.commentId;
	try {
		const results = await Comments.findById(commentId);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json({
			success: true,
			status: 'Results successfully done',
			message: results,
		});
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

let updateCommentValidations = [check('content').isLength({ min: 1 })];

router.put('/:commentId', isLoggedIn, updateCommentValidations, async (req, res) => {
	const commentId = req.params.commentId;
	const { content } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	try {
		const updateResponse = await Comments.findByIdAndUpdate(commentId);
		updateResponse.content = content;
		await updateResponse.save();
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json({
			success: true,
			status: 'Put successfully created',
		});
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

router.delete('/:commentId', isLoggedIn, async (req, res) => {
	const commentId = req.params.commentId;
	try {
		const deleteResponse = await Comments.findByIdAndRemove(commentId);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json({
			success: true,
			status: 'Delete successfully done',
		});
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

router.put('/:commentId/like', isLoggedIn, async (req, res) => {
	const commentId = req.params.commentId;
	try {
    const likeComment = await Comments.findByIdAndUpdate(commentId);
    
		let isPresent = likeComment.liked.some(function(userId) {
			return userId.equals(req.user._id);
    });
    let isDisliked = likeComment.disliked.some(function(userId) {
			return userId.equals(req.user._id);
    });
    
		if (isPresent) {
      //user has already liked it
      //re-clicking on like means unliking
			await likeComment.liked.pull(req.user._id);
			await likeComment.save();
			const populatedComment = await Comments.populate(likeComment, {
				path: 'author',
			});
			//Already liked disliking
			res.status(200).send(populatedComment);
		} else {
			if (isDisliked) {
        //user has earlier disliked the post
				await likeComment.disliked.pull(req.user._id);
			}
			await likeComment.liked.push(req.user._id);
			await likeComment.save();
			const populatedComment = await Comments.populate(likeComment, {
				path: 'author',
			});
			//Already liked disliking
			res.status(200).send(populatedComment);
			//Like successfully done
		}
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

router.put('/:commentId/dislike', isLoggedIn, async (req, res) => {
	const commentId = req.params.commentId;
	try {
		const dislikeComment = await Comments.findByIdAndUpdate(commentId);
		// let isPresent = dislikeComment.disliked.map(ids => ids.toString()).includes(req.user._id.toString());
    // let isLiked = dislikeComment.disliked.map(ids => ids.toString()).includes(req.user._id);
    
    let isPresent = dislikeComment.disliked.some(function(userId) {
			return userId.equals(req.user._id);
    });
    let isLiked = dislikeComment.liked.some(function(userId) {
			return userId.equals(req.user._id);
    });

		if (isPresent) {
      //user has already disliked the post
      //reclicking the dislike again means cancel
			await dislikeComment.disliked.pull(req.user._id);
			await dislikeComment.save();
			const populatedComment = await Comments.populate(dislikeComment, {
				path: 'author',
			});
			//Already liked disliking
			res.status(200).send(populatedComment);
		} else {
			if (isLiked) {
        //user has liked the post earlier
        console.log("Dislike comment");
				await dislikeComment.liked.pull(req.user._id);
			}
			await dislikeComment.disliked.push(req.user._id);
			await dislikeComment.save();
			const populatedComment = await Comments.populate(dislikeComment, {
				path: 'author',
			});
			//Already liked disliking
			res.status(200).send(populatedComment);
		}
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

module.exports = router;
