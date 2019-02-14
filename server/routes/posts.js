const express = require("express");
const router = express.Router();
const Posts = require("../models/posts");
const Comments = require("../models/comments");
const Users = require("../models/users");
const { check, validationResult } = require("express-validator/check");

//==============================
//=Full Route /api/posts/...
//==============================

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

let postCreationValidations = [
  check("title").isLength({ min: 1 }),
  check("description").isLength({ min: 1 }),
  check("community")
    .not()
    .isEmpty()
];

router.get("/find-all/:skip/:limit", async (req, res) => {
  try {
    const skipNumber = parseInt(req.params.skip);
    const limitNumber = parseInt(req.params.limit);
    console.log("Find all have been called", limitNumber);
    const posts = await Posts.find({})
      .sort({ createdAt: -1 })
      .skip(skipNumber)
      .limit(limitNumber)
      .populate("comments comments.author createdBy community");

    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(400).send({ eroor: "Oops some error has occured" });
  }
});
router.post(
  "/create-post",
  isLoggedIn,
  postCreationValidations,
  async (req, res) => {
    const { title, description, community } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let user = req.user;
    try {
      const newPost = await new Posts({
        title,
        description: description,
        createdBy: user._id,
        community
      });
      await newPost.save();
      const populatedPost = await Posts.populate(newPost, {
        path: "comments createdBy community"
      });

      res.status(200).send(populatedPost);
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  }
);

router.put(
  "/:postId",
  isLoggedIn,
  postCreationValidations,
  async (req, res) => {
    const postId = req.params.postId;
    const data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
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
  }
);

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
    const post = await Posts.findById(postId);

    const populatedPost = await Posts.populate(post, {
      path: "comments createdBy community"
    });

    //populating the author of populated comment
    //I know mongodb was not made for this
    //But God will forgive me
    //This is a hackanthon right
    const populatedAuthorField = await Posts.populate(populatedPost, {
      path: "comments.author"
    });
    res.status(200).send(populatedAuthorField);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

let addCommentValidation = [check("content").isLength({ min: 1 })];

router.post(
  "/:postId/addComment",
  isLoggedIn,
  addCommentValidation,
  async (req, res) => {
    let postId = req.params.postId;
    const { content } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let user = req.user;
    try {
      const newComment = await new Comments({
        content: content,
        author: user._id
      });
      const response = await newComment.save();
      const post = await Posts.findByIdAndUpdate(postId);
      //New comments should be in the beginning
      post.comments.unshift(response._id);
      const update = await post.save();
      const populatedPost = await Posts.populate(update, {
        path: "comments createdBy community"
      });

      //populating the author of populated comment
      const populatedAuthorField = await Posts.populate(populatedPost, {
        path: "comments.author"
      });
      res.status(200).send(populatedAuthorField);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

router.put("/:postId/upvotes-add", isLoggedIn, async (req, res, next) => {
  let postId = req.params.postId;
  console.log(postId);
  try {
    const userUpvotesPost = await Users.findByIdAndUpdate(req.user._id);
    let isPresent = userUpvotesPost.liked
      .map(ids => ids.toString())
      .includes(postId);
    let isDisliked = userUpvotesPost.disliked
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
      if (isDisliked) {
        await userUpvotesPost.disliked.pull(postId);
        post.downVotes = post.downVotes - 1;
        await post.save();
      }
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
    let isLiked = userDownvotesPost.liked
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
      if (isLiked) {
        await userDownvotesPost.liked.pull(post._id);
        post.upVotes = post.upVotes - 1;
        await post.save();
      }
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
