function checkAdminSessionAuth(req, res, next) {
  //set variable for every pug file
  if (req.session.admin) return next();
  
  else return res.redirect("/adminlogin");
}

module.exports = checkAdminSessionAuth;
