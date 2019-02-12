const express = require("express");
const router = express.Router();
const Comments = require("../models/comments");
const { check, validationResult } = require("express-validator/check");

//function to check if the user is already logged in or not
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log("You are not logged in!");
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: "You are not logged in!" });
  }
}

router.get("/demo", async (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    status: "You are in /demo page"
  });
});

router.get("/:commentId", async (req, res, next) => {
  const commentId = req.params.commentId;
  try {
    const results = await Comments.findById(commentId);
    console.log(results);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "Results successfully done",
      message: results
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

let updateCommentValidations=[
  check("content").isLength({min:1})
]

router.put("/:commentId", isLoggedIn,updateCommentValidations, async (req, res) => {
  const commentId = req.params.commentId;
  const { content } = req.body;
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  try {
    const updateResponse = await Comments.findByIdAndUpdate(commentId);
    console.log(updateResponse);
    updateResponse.content = content;
    await updateResponse.save();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "Put successfully created"
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/:commentId", isLoggedIn, async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const deleteResponse = await Comments.findByIdAndRemove(commentId);
    console.log(deleteResponse);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "Delete successfully done"
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:commentId/like", isLoggedIn, async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const likeComment = await Comments.findByIdAndUpdate(commentId);
    console.log(likeComment);
    let isPresent = likeComment.liked
      .map(ids => ids.toString())
      .includes(req.user._id.toString());
    let isDisliked = likeComment.disliked
      .map(ids => ids.toString())
      .includes(req.user._id.toString());
    if (isPresent) {
      await likeComment.liked.pull(req.user._id);
      await likeComment.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Already liked, now disliking"
      });
    } else {
      if (isDisliked) {
        await likeComment.disliked.pull(req.user._id);
      }
      await likeComment.liked.push(req.user._id);
      await likeComment.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Like successfully done"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:commentId/dislike", isLoggedIn, async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const dislikeComment = await Comments.findByIdAndUpdate(commentId);
    console.log(dislikeComment);
    let isPresent = dislikeComment.disliked
      .map(ids => ids.toString())
      .includes(req.user._id.toString());
    let isLiked = dislikeComment.disliked
      .map(ids => ids.toString())
      .includes(req.user._id);
    if (isPresent) {
      await dislikeComment.disliked.pull(req.user._id);
      await dislikeComment.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Already disliked, now removing"
      });
    } else {
      if (isLiked) {
        await dislikeComment.liked.pull(req.user._id);
      }
      await dislikeComment.disliked.push(req.user._id);
      await dislikeComment.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Disliked successfully done"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
