// load the things we need
var mongoose = require("mongoose");

// define the schema for our user model
var ticketSchema = mongoose.Schema({
  title: String,
  message: String,
  emailInfo:String,
  githubLink:String,
  userInfo:String,
  projectId:{type:mongoose.Schema.Types.ObjectId,ref:'projects'}
});

// create the model for users and expose it to our app
module.exports = mongoose.model("tickets", ticketSchema);
