var express = require("express");
var router = express.Router();
var {Admin, validateAdmin} = require("../models/admin");

/* GET users listing. */
router.get("/adminlogin", function (req, res, next) {
  res.render("users/adminlogin");
});
router.get("/adminlogout", function (req, res, next) {
  req.session.admin = null; //Session Change
  res.redirect("/adminlogin");
});

router.post("/adminlogin", async function(req,res,next){
  let {error} = validateAdmin(req.body);
  if (error) return console.log("Enter pls"); res.status(400);
  let admin = await Admin.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(admin);
  if (!admin) return res.redirect("/adminlogin");
  req.session.admin = admin;
  return res.redirect("/products/adminlist");
});

module.exports = router;
