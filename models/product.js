var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: String,
  quantity: Number,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
