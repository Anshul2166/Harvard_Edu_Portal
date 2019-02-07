const express = require("express");
const router = express.Router();

const Posts = require("../models/posts");

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
    const results = await Posts.find({});
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
  let postId=req.params.postId;
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

module.exports = router;
