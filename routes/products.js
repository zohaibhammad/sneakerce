var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var checkAdminSessionAuth = require("../middlewares/checkAdminSessionAuth");
var checkSessionAuth = require("../middlewares/checkSessionAuth");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  //console.log(req.session.user);
  res.render("products/list", { title: "Products In DB", products });
});

router.get("/adminlist", checkAdminSessionAuth, async function (
  req,
  res,
  next
) {
  let products = await Product.find();
  console.log(products);
  //console.log(req.session.user);
  res.render("products/adminlist", { title: "Products In DB", products });
});

router.get("/add", checkAdminSessionAuth, async function (req, res, next) {
  res.render("products/add");
});

// store data in db
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products/adminlist");
});

router.get("/delete/:id", checkAdminSessionAuth, async function (
  req,
  res,
  next
) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products/adminlist");
});

router.get("/cart/:id", checkSessionAuth, async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  console.log("Add This Product in cart");
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(product);
  res.cookie("cart", cart);
  res.redirect("/products");
});

router.get("/cart/remove/:id", checkSessionAuth, async function (
  req,
  res,
  next
) {
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.splice(
    cart.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("cart", cart);
  res.redirect("/cart");
});

router.get("/edit/:id", checkAdminSessionAuth, async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  product.color = req.body.color;
  await product.save();
  res.redirect("/products/adminlist");
});

module.exports = router;
