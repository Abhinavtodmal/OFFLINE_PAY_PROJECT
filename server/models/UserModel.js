const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Transaction Schema
const TransactionSchema = new mongoose.Schema({
  referenceNumber: String,
  type: String,
  upiId: String,
  amount: Number,
  date: String,
});

// User Schema
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true, 
  },
  upiId: {
    type: String,
  },
  fullName: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true, 
  },
  phoneNo: {
    type: Number,
    required: true, 
  },
  pin: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    default: 10000, // Default balance for new users
    min: 0, // Ensure amount is not negative
  },
  transactions: [TransactionSchema], // Array of transactions


  createdAt: {
    type: Date,
    default: Date.now,
  },

 
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = new mongoose.model("userDatas", userSchema);
