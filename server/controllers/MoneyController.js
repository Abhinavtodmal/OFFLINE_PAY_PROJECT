const User = require("../models/UserModel.js");

require("dotenv").config();

require("crypto-js");

// Load Twilio credentials from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myPhoneNumber = process.env.MY_PHONE_NUMBER; // Import phone number

const client = require("twilio")(accountSid, authToken);

const sendMoneyOffline = async (req, res) => {
  try {
    const encodedData = req.body.message;
    const decodedData = Buffer.from(encodedData, "base64").toString("utf8");
    const data = JSON.parse(decodedData);
    const choice = data.option;

    if (choice == "1") {
      const { pin, amount, receiverId, senderId } = data;

      // Validate required fields
      if (!pin || !amount || !receiverId || !senderId) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const sender = await User.findOne({ _id: senderId });
      const receiver = await User.findOne({ upiId: receiverId });

      // Check if users exist
      if (!sender) {
        return res.status(404).json({ message: "Sender not found" });
      }
      if (!receiver) {
        return res.status(404).json({ message: "Receiver not found" });
      }

      const senderUpi = sender.upiId;
      var options = { timeZone: "Asia/Kolkata", timeZoneName: "short" };
      const date = new Date().toLocaleString("en-IN", options);

      if (sender.amount > amount && sender.pin == pin) {
        sender.amount -= amount;
        receiver.amount += amount;
        const referenceNumber = Math.floor(Math.random() * 1000000000);

        sender.transactions.push({
          type: "Debit",
          referenceNumber,
          amount,
          upiId: receiverId,
          date,
        });

        receiver.transactions.push({
          type: "Credit",
          referenceNumber,
          amount,
          upiId: senderUpi,
          date,
        });

        await sender.save();
        await receiver.save();

        client.messages.create({
          body: `Rs.${amount} sent to ${receiverId} successfully.`,
          from: "+17752787510",
          to: myPhoneNumber,
        });

        return res.status(200).json({ message: "Amount Sent Successfully" });
      } else {
        client.messages.create({
          body: "Transaction Failed due to Insufficient Balance or Wrong Pin",
          from: "+17752787510",
          to: myPhoneNumber,
        });
        return res
          .status(400)
          .json({ message: "Insufficient Balance or Wrong Pin" });
      }
    } else if (choice == "2") {
      const { pin, senderId } = data;

      if (!pin || !senderId) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const sender = await User.findOne({ _id: senderId });

      if (!sender) {
        return res.status(404).json({ message: "Sender not found" });
      }

      if (sender.pin == pin) {
        client.messages.create({
          body: `Your current balance is Rs.${sender.amount}`,
          from: "+17752787510",
          to: myPhoneNumber,
        });
        return res.status(200).json({ balance: sender.amount });
      } else {
        client.messages.create({
          body: "Unable to check balance due to Wrong Pin",
          from: "+17752787510",
          to: myPhoneNumber,
        });
        return res.status(400).json({ message: "Wrong Pin" });
      }
    } else if (choice == "3") {
      const { senderId } = data;

      if (!senderId) {
        return res.status(400).json({ message: "Missing sender ID" });
      }

      const sender = await User.findOne({ _id: senderId });

      if (!sender) {
        return res.status(404).json({ message: "Sender not found" });
      }

      const last5Transactions = sender.transactions.slice(-5);
      client.messages.create({
        body: `Last 5 Transactions: ${JSON.stringify(last5Transactions)}`,
        from: "+17752787510",
        to: myPhoneNumber,
      });
      return res.status(200).json({ last5Transactions });
    } else {
      client.messages.create({
        body: "Invalid Option",
        from: "+17752787510",
        to: myPhoneNumber,
      });
      return res.status(400).json({ message: "Invalid Option" });
    }
  } catch (error) {
    console.error("Error in sendMoneyOffline:", error);
    client.messages.create({
      body: "An error occurred during transaction",
      from: "+17752787510",
      to: myPhoneNumber,
    });
    return res.status(500).json({ message: "Internal server error" });
  }
};

const mongoose = require("mongoose");

const sendMoney = async (req, res) => {
  const { amount, receiverUpi, senderId, pin } = req.body;

  try {
   
    // Ensure senderId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(senderId)) {
      return res.status(400).json({ message: "Invalid senderId format" });
    }

    const sender = await User.findById(senderId);
    

    const receiver = await User.findOne({ upiId: receiverUpi });
   

    if (!sender) {
      return res.status(404).json({ message: "Sender account not found" });
    }
    if (!receiver) {
      return res.status(404).json({ message: "Receiver account not found" });
    }

    // Validate PIN
    if (sender.pin !== pin) {
      return res.status(400).json({ message: "Incorrect PIN" });
    }

    // Check for sufficient balance
    if (sender.amount < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Generate a unique reference number
    const referenceNumber = Math.floor(Math.random() * 1000000000);

    // Update balances
    sender.amount -= amount;
    receiver.amount += amount;

    // Record transactions
    const transactionDate = new Date().toLocaleString();

    sender.transactions.push({
      type: "Debit",
      referenceNumber,
      amount,
      upiId: receiverUpi,
      date: transactionDate,
    });

    receiver.transactions.push({
      type: "Credit",
      referenceNumber,
      amount,
      upiId: sender.upiId,
      date: transactionDate,
    });

    // Save changes
    await sender.save();
    await receiver.save();

    res
      .status(200)
      .json({ message: "Amount sent successfully", referenceNumber });
  } catch (error) {
    console.error("Error in sendMoney:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  sendMoney,
  sendMoneyOffline,
};
