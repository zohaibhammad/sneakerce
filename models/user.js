var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  credit: Number,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
