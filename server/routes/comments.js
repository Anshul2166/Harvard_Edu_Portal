const express = require("express");
const router = express.Router();

const Comments = require("../models/comments");

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
      message:results
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:commentId", isLoggedIn, async (req, res) => {
  const commentId = req.params.commentId;
  const {content} = req.body;
  try {
    const updateResponse = await Comments.findByIdAndUpdate(commentId);
    console.log(updateResponse);
    updateResponse.content=content;
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

module.exports = router;
