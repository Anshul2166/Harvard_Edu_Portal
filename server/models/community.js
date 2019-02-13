const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const communitySchema = mongoose.Schema({
  name: "",
  description: ""
});

module.exports = mongoose.model("communities", communitySchema);
