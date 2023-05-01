const express = require("express");
const { findAllUser } = require("../controllers/user_controller.controller");
const router = express.Router();

router.route("/").get(findAllUser);

module.exports = router;
