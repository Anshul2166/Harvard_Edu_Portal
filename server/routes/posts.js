const express = require("express");
const router = express.Router();
const Posts = require("../models/posts");
const Comments = require("../models/comments");
const Users = require("../models/users");
const { check, validationResult } = require('express-validator/check');

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

router.get("/", async (req, res, next) => {
  try {
    const results = await Posts.find({}).populate({
      path: "comments",
      populate: { path: "author" }
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "You are in / page",
      message: results
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/create-post", isLoggedIn, async (req, res) => {
  
  const { title, description } = req.body;
  let user = req.user;
  try {
    const newPost = await new Posts({
      title,
      description,
      createdBy: user._id
    });
    await newPost.save();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "Post successfully created",
      message: {
        title,
        description,
        createdBy: user._id
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
});

router.put("/:postId", isLoggedIn, async (req, res) => {
  const postId = req.params.postId;
  const data = req.body;
  try {
    const updateResponse = await Posts.findByIdAndUpdate(
      { _id: postId },
      data,
      { upsert: true }
    );
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

router.delete("/:postId", isLoggedIn, async (req, res) => {
  const postId = req.params.postId;
  try {
    const deleteResponse = await Posts.findByIdAndRemove(postId);
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

router.get("/:postId", async (req, res, next) => {
  let postId = req.params.postId;
  try {
    const results = await Posts.findById(postId);
    console.log(results);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "You are in / page",
      message: results
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/:postId/addComment", isLoggedIn, async (req, res) => {
  let postId = req.params.postId;
  const { content } = req.body;
  let user = req.user;
  try {
    const newComment = await new Comments({
      content: content,
      author: user._id
    });
    const response = await newComment.save();
    const post = await Posts.findByIdAndUpdate(postId);
    post.comments.push(response._id);
    const update = await post.save();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "You are in / page",
      message: update
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:postId/upvotes-add", isLoggedIn, async (req, res, next) => {
  let postId = req.params.postId;
  console.log(postId);
  try {
    const userUpvotesPost = await Users.findByIdAndUpdate(req.user._id);
    let isPresent = userUpvotesPost.liked
      .map(ids => ids.toString())
      .includes(postId);
    if (isPresent) {
      console.log("Already there");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "Already existing"
      });
    } else {
      const post = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { upVotes: 1 } },
        { new: true }
      );
      await userUpvotesPost.liked.push(postId);
      await userUpvotesPost.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "You are in / page",
        message: post
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:postId/downVotes-add", isLoggedIn, async (req, res, next) => {
  let postId = req.params.postId;
  try {
    const userDownvotesPost = await Users.findByIdAndUpdate(req.user._id);
    let isPresent = userDownvotesPost.disliked
      .map(ids => ids.toString())
      .includes(postId);
    if (isPresent) {
      console.log("Already there");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "Already existing"
      });
    } else {
      const post = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { downVotes: 1 } },
        { new: true }
      );
      await userDownvotesPost.disliked.push(post._id);
      userDownvotesPost.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "You are in / page",
        message: post
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:postId/upVotes-remove", isLoggedIn, async (req, res, next) => {
  let postId = req.params.postId;
  const userUpvotesPost = await Users.findByIdAndUpdate(req.user._id);
  let isPresent = userUpvotesPost.liked
    .map(ids => ids.toString())
    .includes(postId);
  try {
    if (!isPresent) {
      console.log("Not there");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "Not existing"
      });
    } else {
      const post = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { upVotes: -1 } },
        { new: true }
      );
      await userUpvotesPost.liked.pull(postId);
      await userUpvotesPost.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "You are in / page",
        message: post,
        info: userUpvotesPost
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:postId/downVotes-remove", isLoggedIn, async (req, res, next) => {
  let postId = req.params.postId;
  const userDownvotesPost = await Users.findByIdAndUpdate(req.user._id);
  let isPresent = userDownvotesPost.disliked
    .map(ids => ids.toString())
    .includes(postId);
  try {
    if (!isPresent) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "Not downvoted"
      });
    } else {
      const post = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { downVotes: -1 } },
        { new: true }
      );
      userDownvotesPost.disliked.pull(postId);
      await userDownvotesPost.save();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "You are in / page",
        message: post,
        info: userDownvotesPost
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
