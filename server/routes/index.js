//Main route file for each routes

var express = require("express");
var router = express.Router();
var users=require("./users");
var posts=require("./posts");

router.use("/users",users);
router.use("/posts",posts);
module.exports = router;
