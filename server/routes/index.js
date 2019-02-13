//Main route file for each routes

const express = require("express");
const router = express.Router();
const users = require("./users");
const posts = require("./posts");
const comments = require("./comments");
const communities = require("./communities");

router.use("/users", users);
router.use("/posts", posts);
router.use("/comments", comments);
router.use("/communities", communities);

module.exports = router;
