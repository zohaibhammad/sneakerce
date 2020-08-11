var express = require("express");
var router = express.Router();
const Product = require("../models/product");
const cartsub = require("../middlewares/cartsub");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cart", function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("cart", { cart });
});

router.get("/successfulbuy", async function (req, res, next) {
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  var i = 0;
  try{
  for(i = 0; i < 10 ; i++){
  let product = await Product.findOne({
    _id : cart[i]._id,
});

console.log(cart[1]);

product.quantity = product.quantity - 1;

await product.save();
  }}catch(err){  }

    cart.splice(
      0,
      10
    );
    res.cookie("cart", cart);
    res.render("successfulbuy");
 

});

module.exports = router;
