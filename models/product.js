const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  image: { type: [String], required: true },
  owner: { type: mongoose.Schema.ObjectId, required: true },
  isSold: { type: Boolean, required: true },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
