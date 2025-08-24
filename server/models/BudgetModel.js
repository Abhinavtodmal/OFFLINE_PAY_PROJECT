const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    categories: [
      {
        name: String,
        value: Number,
      },
    ],

    budget: {
      type: Number,
      default: 0,
    },
    expenses: {
      type: Number,
      default: 0,
    },

    expensesList: [
      {
        amount: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Budget", BudgetSchema);
