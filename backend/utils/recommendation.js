const Product = require("../models/Product");

async function getRecommendedProducts(baseProductId) {
  const baseProduct = await Product.findById(baseProductId);
  const similarProducts = await Product.find({
    category: baseProduct.category,
    _id: { $ne: baseProductId }
  }).limit(5);
  return similarProducts;
}

module.exports = { getRecommendedProducts };