const express = require("express");
const {
  loginUser,
  registerUser,
  getUser,
} = require("../controllers/userController.js");

const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getUser").get(getUser);


module.exports = router;
