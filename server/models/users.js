// load the things we need
var mongoose = require("mongoose"),Schema=mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

// define the schema for our user model
var userSchema = mongoose.Schema({
  name: String,
  local: {
    username: String,
    password: {
      type: String,
      sparse: true,
    },
    email: String,
  },
  liked:[{ type: Schema.Types.ObjectId, ref: 'posts' }],
  disliked:[{ type: Schema.Types.ObjectId, ref: 'posts' }],
  posts:[{ type: Schema.Types.ObjectId, ref: 'posts' }]
});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("users", userSchema);
