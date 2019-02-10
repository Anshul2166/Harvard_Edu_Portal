// load the things we need
var mongoose = require("mongoose"),Schema=mongoose.Schema;
var comments = require("./comments").Schema;

// define the schema for our user model
var postSchema = mongoose.Schema({
  title: String,
  description: String,
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now() }
});

// create the model for users and expose it to our app
module.exports = mongoose.model("posts", postSchema);
