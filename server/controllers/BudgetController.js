
const Budget = require("../models/BudgetModel");
const User = require("../models/UserModel");
require("dotenv").config({ path: "./server/.env" });
const jwt = require("jsonwebtoken");

const syncService = require('../services/syncService');

const syncPayment = async (req, res) => {
  try {
    const result = await syncService.processOfflinePayment(req.body, req.user.id);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};



// Get user's budget and expenses
const getBudgetAndExpenses = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Optional chaining
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded.id) return res.status(401).json({ error: "Invalid token format" });

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: "User Not Found" });

    res.status(200).json({
      budget: user.budget,
      expenses: user.expenses,
      remainingBudget: user.budget - user.expenses,
    });
  } catch (error) {
    console.error("Error fetching budget and expenses:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Update budget
 // Update User Budget
const updateBudget = async (req, res) => {
  const { budget } = req.body;

  try {
    const token = req.headers.authorization.split(" ")[1]; // Extract token
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token
    const user = await User.findById(decoded.id); // Fetch user from DB

    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    user.budget = budget; // Update budget
    await user.save();

    res.status(200).json({ message: "Budget updated successfully", user });
  } catch (error) {
    
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add expense

const addExpense = async (req, res) => {
  try {
    // Verify authorization token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Decode token to get user ID
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Extract data from request body
    const { amount, category } = req.body;

    // Validate input
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Find or create budget
    let budget = await Budget.findOne({ userId });
    if (!budget) {
      budget = new Budget({ 
        userId,
        budget: 0, // Initialize with 0 budget
        expenses: 0,
        expensesList: [],
        categories: [
          { name: "Food", value: 0 },
          { name: "Transport", value: 0 },
          { name: "Entertainment", value: 0 },
          { name: "Utilities", value: 0 },
          { name: "Shopping", value: 0 }
        ]
      });
    }

    // Add the new expense
    const expenseAmount = parseFloat(amount);
    const newExpense = {
      amount: expenseAmount,
      category,
      date: new Date()
    };

    budget.expensesList.push(newExpense);
    budget.expenses += expenseAmount;

    // Update the corresponding category
    const categoryIndex = budget.categories.findIndex(c => c.name === category);
    if (categoryIndex !== -1) {
      budget.categories[categoryIndex].value += expenseAmount;
    } else {
      // If category doesn't exist, add it
      budget.categories.push({ name: category, value: expenseAmount });
    }

    // Save the updated budget
    await budget.save();

    res.status(200).json({
      message: "Expense added successfully",
      budget: {
        totalBudget: budget.budget,
        totalExpenses: budget.expenses,
        remaining: budget.budget - budget.expenses,
        categories: budget.categories
      }
    });
  } catch (error) {
   
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: error.message });
  }
};



// Get all expenses

const getExpenses = async (req, res) => {
  try {
    // 1. Extract and verify the token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2. Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id; // Assuming your JWT stores user ID as `id`

    if (!userId) {
      return res.status(401).json({ message: "Invalid token: No user ID found" });
    }

    // 3. Find the budget using the decoded userId
    const budget = await Budget.findOne({ userId });
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json(budget.expensesList);
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: error.message });
  }
};

///////////////

// Helper function to verify token
const editExpense = async (req, res) => {
  try {
    // Verify authorization token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Decode token to get user ID
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Extract data from request body
    const { expenseId, amount, category } = req.body;

    // Validate input
    if (!expenseId) {
      return res.status(400).json({ message: "Expense ID is required" });
    }
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Find the budget
    const budget = await Budget.findOne({ userId });
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    // Find the expense to edit
    const expenseIndex = budget.expensesList.findIndex(
      expense => expense._id.toString() === expenseId
    );
    
    if (expenseIndex === -1) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const oldExpense = budget.expensesList[expenseIndex];
    const expenseAmount = parseFloat(amount);
    const amountDifference = expenseAmount - oldExpense.amount;

    // Update the expense
    budget.expensesList[expenseIndex] = {
      ...oldExpense,
      amount: expenseAmount,
      category,
      date: new Date() // Update the date to now
    };

    // Update totals
    budget.expenses += amountDifference;

    // Update categories
    // Remove amount from old category
    const oldCategoryIndex = budget.categories.findIndex(c => c.name === oldExpense.category);
    if (oldCategoryIndex !== -1) {
      budget.categories[oldCategoryIndex].value -= oldExpense.amount;
    }

    // Add amount to new category
    const newCategoryIndex = budget.categories.findIndex(c => c.name === category);
    if (newCategoryIndex !== -1) {
      budget.categories[newCategoryIndex].value += expenseAmount;
    } else {
      budget.categories.push({ name: category, value: expenseAmount });
    }

    // Save the updated budget
    await budget.save();

    res.status(200).json({
      message: "Expense updated successfully",
      budget: {
        totalBudget: budget.budget,
        totalExpenses: budget.expenses,
        remaining: budget.budget - budget.expenses,
        categories: budget.categories
      }
    });
  } catch (error) {
   
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    // Verify authorization token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Decode token to get user ID
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Extract data from request body
    const { expenseId } = req.body;
  
    // Validate input
    if (!expenseId) {
      return res.status(400).json({ message: "Expense ID is required" });
    }

    // Find the budget
    const budget = await Budget.findOne({ userId });
    if (!budget) {
      console.log(`Budget not found for user ${userId}`);
      return res.status(404).json({ message: "Budget not found" });
    }

    // Debug: Log all expense IDs
    console.log(`Existing expense IDs: ${budget.expensesList.map(e => e._id.toString())}`);

    // Find the expense to delete
    const expenseIndex = budget.expensesList.findIndex(
      expense => expense._id.toString() === expenseId
    );
    
    if (expenseIndex === -1) {
      console.log(`Expense ${expenseId} not found in user's budget`);
      return res.status(404).json({ 
        message: "Expense not found",
        details: {
          providedId: expenseId,
          availableIds: budget.expensesList.map(e => e._id.toString())
        }
      });
    }

    const deletedExpense = budget.expensesList[expenseIndex];
    console.log(`Found expense to delete:`, deletedExpense);

    // Remove from expenses list
    budget.expensesList.splice(expenseIndex, 1);

    // Update totals
    budget.expenses -= deletedExpense.amount;
    console.log(`Updated total expenses: ${budget.expenses}`);

    // Update category
    const categoryIndex = budget.categories.findIndex(c => c.name === deletedExpense.category);
    if (categoryIndex !== -1) {
      budget.categories[categoryIndex].value -= deletedExpense.amount;
      console.log(`Updated category ${deletedExpense.category} value: ${budget.categories[categoryIndex].value}`);
      
      // Remove category if value is 0
      if (budget.categories[categoryIndex].value <= 0) {
        budget.categories.splice(categoryIndex, 1);
        console.log(`Removed empty category ${deletedExpense.category}`);
      }
    }

    // Save the updated budget
    await budget.save();
    console.log(`Budget successfully updated after deletion`);

    res.status(200).json({
      message: "Expense deleted successfully",
      budget: {
        totalBudget: budget.budget,
        totalExpenses: budget.expenses,
        remaining: budget.budget - budget.expenses,
        categories: budget.categories
      }
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ 
      message: error.message,
      stack: process.env.ENV === 'development' ? error.stack : undefined
    });
  }
};
//////////

module.exports = {
   
    getExpenses ,
    editExpense,
    deleteExpense,
    addExpense ,
    updateBudget ,
    getBudgetAndExpenses,
    syncPayment
  };
