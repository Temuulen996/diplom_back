const asyncHandler = require("../middleware/asyncHandler");
const Wishlist = require("../models/wishlist");

exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Wishlist.find();
  res.status(200).send({ success: true, data: data });
});
exports.findByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Wishlist.findById(id);
  res.status(200).send({ success: true, data: data });
});
exports.createWishlist = asyncHandler(async (req, res, next) => {
  const newData = req.body;
  await Wishlist.create(newData);
  res.status(200).send({ success: true });
});
exports.findByProductID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Wishlist.find({ product_id: id });
  res.status(200).send({ success: true, data: data });
});
exports.findByUserID = asyncHandler(async (req, res, next) => {
  const id = req.status.userID;
  const data = await Wishlist.find({ user_id: id });
  res.status(200).send({ success: true, data: data });
});
