const express = require("express");

const {
  sendMoney,
  sendMoneyOffline,
} = require("../controllers/MoneyController.js");

const router = express.Router();

router.route("/sendMoney").post(sendMoney);
router.route("/sendMoneyOffline").post(sendMoneyOffline);

module.exports = router;
