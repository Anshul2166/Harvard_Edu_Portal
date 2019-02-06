// load the things we need
var mongoose = require("mongoose");
var comments=require("./comments");

// define the schema for our user model
var userSchema = mongoose.Schema({
  title: String,
  description: String,
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  comments: [comments]
});

// create the model for users and expose it to our app
module.exports = mongoose.model("users", userSchema);
