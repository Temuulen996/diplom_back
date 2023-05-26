const express = require("express");
const {
  findAll,
  findByUserID,
  findByProductID,
} = require("../controller/donation.controller");
const { findByID } = require("../controller/wishlist.controller");
const router = express.Router();
router.route("/").get(findAll).post();
router.route("/:id").get(findByID);
router.route("/user/:userID").get(findByUserID);
router.route("/product/:productID").get(findByProductID);
module.exports = router;
