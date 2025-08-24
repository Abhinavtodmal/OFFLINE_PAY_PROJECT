const express = require("express");

const {
  getExpenses,
  editExpense,
  deleteExpense,
  addExpense,
  updateBudget,
  getBudgetAndExpenses,
  syncPayment
} = require("../controllers/BudgetController.js");

const router = express.Router();

// Budget Routes
router.route("/updateBudget").post(updateBudget);
router.route("/addExpense").post(addExpense);
router.route("/getBudgetAndExpenses").get(getBudgetAndExpenses);
router.route("/deleteExpense").delete(deleteExpense);
router.route("/editExpense").put(editExpense);
router.get("/getExpenses", getExpenses);

router.post('/sync', syncPayment);

/////
router.post('/', async (req, res) => {
  try {
    const payment = await Payment.create({
      ...req.body,
      status: 'completed',
      source: 'offline-sync'
    });
    
    res.json({ 
      success: true,
      paymentId: payment._id 
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});
////
module.exports = router;
