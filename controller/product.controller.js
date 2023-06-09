const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/product");
const User = require("../models/user");
const CustomError = require("../utils/errorObject");
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Product.find();
  // if (!data) {
  //     throw new myError(`Produc`, 400);
  //   }

  res.status(200).send({ success: true, data: data });
});
exports.findById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Product.findById(id);
  if (!data) {
    throw new CustomError(`iim id tai buteegdehuun baihgui baina.`, 400);
  }
  res.status(200).send({ success: true, data: data });
});
exports.createProduct = asyncHandler(async (req, res, next) => {
  const newData = req.body;
  await Product.create(newData);
  res.status(200).send({ success: true });
});
exports.findByOwnerId = asyncHandler(async (req, res, next) => {
  const ownewId = req.params.id;
  const ownerData = await User.findById(ownewId);
  console.log(ownerData);
  let data = await Product.find({ user_id: ownewId });
  // data = { ...data, owner_name: ownerData.fname };

  res.status(200).send({ success: true, data: data });
});
exports.deleteProductById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res, status(200).send({ success: true });
});
