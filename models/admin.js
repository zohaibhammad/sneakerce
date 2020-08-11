var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var AdminSchema = mongoose.Schema({
  email: String,
  password: String,
});


const Admin = mongoose.model("Admin", AdminSchema);


function validateAdmin(data){
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
}

module.exports.Admin = Admin;
module.exports.validateAdmin = validateAdmin;
