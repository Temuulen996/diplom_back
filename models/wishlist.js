const mongoose = require("mongoose");
const WishlistSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.ObjectId, required: true },
    product_id: { type: mongoose.Schema.ObjectId, required: true },
  },
  { timestamps: true }
);
const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;
