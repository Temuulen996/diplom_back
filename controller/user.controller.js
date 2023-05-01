const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/user");
const mongoose = require("mongoose");
const CustomError = require("../utils/errorObject");
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await User.find();
  res.status(200).send({ success: true, data: data });
});
exports.findById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await User.findById(id);
  res.status(200).send({ success: true, data: data });
});
exports.create = asyncHandler(async (req, res, next) => {
  const newUser = req.body;
  await User.create(newUser);
  res.status(200).send({ success: true });
});
exports.addToWishlist = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let newData = req.body.id;
  console.log(newData);
  // newData = new mongoose.Types.ObjectId(newData);
  const prevData = await User.findById(id);
  console.log(prevData);
  if (!prevData) {
    res.status(200).send({ success: false, error: "хэрэглэгч олдсонгүй" });
  } else {
    const prevWishlist = prevData.wishlist;
    const newWishlist = [...prevWishlist, newData];
    console.log(newData);
    await User.findOneAndUpdate({ _id: id }, { wishlist: newWishlist });
    res.status(200).send({ success: true });
  }

  // PersonModel.update({ _id: person._id }, { $push: { friends: friend } }, done);
});
exports.removeFromWishlist = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  let newData = req.body.id;

  newData = new mongoose.Types.ObjectId(req.body.id);
  const prevData = await User.findById(id);
  if (!prevData) {
    res.status(200).send({ success: false, error: "хэрэглэгч олдсонгүй" });
  } else {
    const prevWishlist = prevData.wishlist;
    let newWishlist = [];
    prevWishlist.map((item) => {
      if (newData.toString() != item.toString()) {
        newWishlist.push(item);
      }
    });

    await User.findOneAndUpdate({ _id: id }, { wishlist: newWishlist });
    res.status(200).send({ success: true });
  }
});
