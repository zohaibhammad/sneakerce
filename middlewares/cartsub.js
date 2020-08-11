const Product = require("../models/product");

async function cartsub(cart,res,next){
    try{
      var i = 0;
      for(i = 0; i < 10 ; i++){
      let product = await Product.findOne({
        _id : cart[i]._id,
    });
    product.quantity = product.quantity - 1;

    await product.save();
    }
  }catch(err){
      res.send(err);
    }
    next();
}

module.exports = cartsub;