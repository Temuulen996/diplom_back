const express = require("express");
const {
  findAll,
  findByProductID,
  findByUserID,
  findByID,
} = require("../controller/wishlist.controller");
const router = express.Router();
router.route("/").get(findAll);
router.route("/:id").get(findByID);
router.route("/product/:productID").get(findByProductID);
router.route("/user/:userID").get(findByUserID);
module.exports = router;
