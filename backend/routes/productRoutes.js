const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req, res) => {
  const { search, category } = req.query;
  const filter = {};
  if (search) filter.name = { $regex: search, $options: "i" };
  if (category) filter.category = category;

  const products = await Product.find(filter);
  res.json(products);
});

module.exports = router;