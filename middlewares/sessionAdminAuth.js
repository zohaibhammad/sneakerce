function sessionAdminAuth(req, res, next) {
  //set variable for every pug file
  res.locals.admin = req.session.admin;
  next();
}

module.exports = sessionAdminAuth;
