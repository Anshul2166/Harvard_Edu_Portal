// load the things we need
var mongoose = require("mongoose"),Schema = mongoose.Schema;

// define the schema for our user model
var commentSchema = mongoose.Schema({
  author:{ type: Schema.Types.ObjectId, ref: 'users' },
  createdAt:{type:Date,default:Date.now()},
  content:String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model("comments", commentSchema);
