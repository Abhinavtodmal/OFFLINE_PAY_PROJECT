import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const BudgetTracker = () => {
  // Core States
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [inputExpense, setInputExpense] = useState("");
  const [pin, setPin] = useState("");
  const [localPin, setLocalPin] = useState(null);
  const [showPinModal, setShowPinModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Expense tracking states
  const [categories] = useState(["Food", "Transport", "Entertainment", "Utilities", "Shopping", "Other"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [darkMode, setDarkMode] = useState(false);
  const [expenseHistoryLoading, setExpenseHistoryLoading] = useState(false);
  
  // Edit expense states
  const [editingExpense, setEditingExpense] = useState(null);
  const [editAmount, setEditAmount] = useState("");
  const [editCategory, setEditCategory] = useState("");

  // Fetch all user data including expenses
  const getUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const userRes = await axios.get("http://localhost:8000/users/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLocalPin(userRes.data.user.pin);
      setBudget(Number(userRes.data.user.budget) || 0);
      setExpenses(Number(userRes.data.user.expenses) || 0);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        window.location.href = "/login";
      }
    }
  };

  // Fetch expense history
  const fetchExpenseHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      setExpenseHistoryLoading(true);
      const response = await axios.get("http://localhost:8000/users/getExpenses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setExpenseList(response.data || []);
    } catch (error) {
      console.error("Error fetching expense history:", error);
      setError("Failed to load expense history");
    } finally {
      setExpenseHistoryLoading(false);
    }
  };

  // Handle PIN submission
  const handlePinSubmit = async () => {
    if (pin == localPin) {
      setShowPinModal(false);
    } else {
      alert("Wrong PIN. Please try again.");
      setPin("");
    }
  };

  // Add new expense
  const handleAddExpense = async () => {
    if (!inputExpense || isNaN(inputExpense)) {
      alert("Please enter a valid expense amount.");
      return;
    }
  
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const expenseData = {
        amount: parseFloat(inputExpense),
        category: selectedCategory
      };

      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/users/addExpense",
        expenseData,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Update both budget and expenses from the response
      if (response.data && response.data.updatedUser) {
        setBudget(Number(response.data.updatedUser.budget) || 0);
        setExpenses(Number(response.data.updatedUser.expenses) || 0);
      }

      // Also update the expense list
      await fetchExpenseHistory();
      
      alert(`Expense of ₹${expenseData.amount.toFixed(2)} added successfully!`);
      setInputExpense("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Error adding expense:", error);
      alert(error.response?.data?.message || "Failed to add expense");
    } finally {
      setLoading(false);
    }
  };

  // Update budget
  const handleUpdateBudget = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/users/updateBudget",
        { budget: Number(budget) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.data && response.data.user) {
        setBudget(Number(response.data.user.budget) || 0);
        setExpenses(Number(response.data.user.expenses) || 0);
      }
      
      alert("Budget updated successfully!");
    } catch (error) {
      console.error("Error updating budget:", error);
      alert("Failed to update budget. Please try again.");
    }
  };

  // Edit expense
  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setEditAmount(expense.amount);
    setEditCategory(expense.category);
  };

  // Save edited expense
  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const updatedExpense = {
        expenseId: editingExpense._id,
        amount: parseFloat(editAmount),
        category: editCategory
      };

      const response = await axios.put(
        "http://localhost:8000/users/editExpense",
        updatedExpense,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Update both budget and expenses from the response
      if (response.data && response.data.updatedUser) {
        setBudget(Number(response.data.updatedUser.budget) || 0);
        setExpenses(Number(response.data.updatedUser.expenses) || 0);
      }

      await fetchExpenseHistory();
      setEditingExpense(null);
      alert("Expense updated successfully!");
    } catch (error) {
      console.error("Error updating expense:", error);
      alert("Failed to update expense. Please try again.");
    }
  };

  // Delete expense
  const handleDeleteExpense = async (expenseId) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await axios.delete(
        "http://localhost:8000/users/deleteExpense",
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          data: { expenseId }
        }
      );

      // Update both budget and expenses from the response
      if (response.data && response.data.updatedUser) {
        setBudget(Number(response.data.updatedUser.budget) || 0);
        setExpenses(Number(response.data.updatedUser.expenses) || 0);
      }

      await fetchExpenseHistory();
      alert("Expense deleted successfully!");
    } catch (error) {
      console.error("Error deleting expense:", error);
      alert("Failed to delete expense. Please try again.");
    }
  };

  // Initial data load
  useEffect(() => {
    getUserData();
    fetchExpenseHistory();
  }, []);

  // Export to CSV
  const exportToCSV = () => {
    const headers = "Date,Amount,Category\n";
    const csvContent = headers + expenseList.map(e => 
      `${new Date(e.date).toLocaleDateString()},${e.amount},${e.category}`
    ).join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expenses.csv";
    link.click();
  };

  // 90% Budget Alert
  useEffect(() => {
    if (budget > 0 && expenses >= budget * 0.9) {
      alert("⚠️ Warning: You've spent 90% of your budget!");
    }
  }, [expenses, budget]);

  // Filter expenses by month
  // Filter and sort expenses by month and date
const filteredExpenses = expenseList
.filter(expense => {
  const expenseDate = new Date(expense.date);
  return expenseDate.getMonth() + 1 === parseInt(selectedMonth);
})
.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date ascending

  // Calculate total expenses for the selected month
  const monthlyTotal = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = budget - monthlyTotal;
 
  // Helper functions
  const formatCurrency = (value) => (Number(value) || 0).toFixed(2);
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <>
      <Navbar />
      <div className={`container mx-auto px-4 py-10 ${darkMode ? "dark" : ""}`}>
        <h1 className="text-2xl font-bold mb-6">Budget Tracker</h1>

        {/* Budget Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Monthly Budget</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value) || 0)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter monthly budget"
              step="0.01"
              min="0"
            />
            <button
              onClick={handleUpdateBudget}
              className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-green-800 dark:text-green-200 text-sm">
                  Update
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Expense Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Add Expense</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={inputExpense}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setInputExpense(isNaN(value) ? "" : value.toFixed(2));
              }}
              step="0.01"
              min="0"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Amount (e.g. 5.00)"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={handleAddExpense}
              disabled={!inputExpense || !selectedCategory || loading}
              className={`relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border transition-transform ${
                !inputExpense || !selectedCategory || loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                {loading ? (
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Adding...
                  </span>
                ) : (
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Add
                  </span>
                )}
              </div>
            </button>
          </div>
          {(!inputExpense || !selectedCategory) && (
            <p className="text-gray-900 text-xs mt-1">
              {!inputExpense && "Please enter an amount"}
              {!inputExpense && !selectedCategory && " and "}
              {!selectedCategory && "select a category"}
            </p>
          )}
        </div>

        {/* Expense History Section */}
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold dark:text-white-900">Expense History</h3>
            <div className="flex gap-2">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {new Date(0, i).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
              <button
                onClick={exportToCSV}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Export CSV
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-2 border dark:border-gray-600 text-left dark:text-gray-200">Date</th>
                  <th className="p-2 border dark:border-gray-600 text-left dark:text-gray-200">Amount</th>
                  <th className="p-2 border dark:border-gray-600 text-left dark:text-gray-200">Category</th>
                  <th className="p-2 border dark:border-gray-600 text-left dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenseHistoryLoading ? (
                  <tr>
                    <td colSpan="4" className="p-4 text-center">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="p-2 text-center text-red-500 dark:text-red-400">
                      {error}
                    </td>
                  </tr>
                ) : filteredExpenses.length > 0 ? (
                  <>
                    {filteredExpenses.map((expense) => (
                      <tr 
                        key={expense._id} 
                        className={`border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          editingExpense?._id === expense._id ? 'bg-yellow-50 dark:bg-gray-800' : 
                          'bg-white dark:bg-gray-800'
                        }`}
                      >
                        <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                          {formatDate(expense.date)}
                        </td>
                        <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                          {editingExpense?._id === expense._id ? (
                            <input
                              type="number"
                              value={editAmount}
                              onChange={(e) => setEditAmount(e.target.value)}
                              className="w-full p-1 border rounded dark:bg-gray-700 dark:text-white"
                              step="0.01"
                              min="0"
                            />
                          ) : (
                            `₹${formatCurrency(expense.amount)}`
                          )}
                        </td>
                        <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                          {editingExpense?._id === expense._id ? (
                            <select
                              value={editCategory}
                              onChange={(e) => setEditCategory(e.target.value)}
                              className="w-full p-1 border rounded dark:bg-gray-700 dark:text-white"
                            >
                              {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                          ) : (
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              expense.category === 'Food' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              expense.category === 'Transport' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                              expense.category === 'Entertainment' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                              expense.category === 'Utilities' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              expense.category === 'Shopping' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' :
                              'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                            }`}>
                              {expense.category}
                            </span>
                          )}
                        </td>
                        <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                          {editingExpense?._id === expense._id ? (
                            <div className="flex gap-2">
                              <button
                                onClick={handleSaveEdit}
                                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                              >
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                                  <span className="text-green-800 dark:text-green-200 text-sm">
                                    Save
                                  </span>
                                </div>
                              </button>
                              <button
                                onClick={() => setEditingExpense(null)}
                                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                              >
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                                  <span className="text-green-800 dark:text-green-200 text-sm">
                                    Cancel
                                  </span>
                                </div>
                              </button>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleEditExpense(expense)}
                                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                              >
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                                  <span className="text-green-800 dark:text-green-200 text-sm">
                                    Edit
                                  </span>
                                </div>
                              </button>
                              <button
                                onClick={() => handleDeleteExpense(expense._id)}
                                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                              >
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                                  <span className="text-green-800 dark:text-green-200 text-sm">
                                    Delete
                                  </span>
                                </div>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                    {/* Summary Row */}
                    <tr className="bg-gray-100 dark:bg-gray-700 font-bold">
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200">Total</td>
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                        ₹{formatCurrency(monthlyTotal)}
                      </td>
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200" colSpan="2">
                        <div className="flex justify-between">
                          <>Remaining Budget:</>
                          <span className={remainingBudget < 0 ? "text-red-500 dark:text-red-400" : "text-green-600 dark:text-green-400"}>
                            ₹{formatCurrency(remainingBudget)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </>
                ) : (
                  <tr>
                    <td colSpan="4" className="p-2 text-center dark:text-gray-200">
                      No expenses found for selected month
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* PIN Modal */}
        {showPinModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-60">
            <div className="bg-white p-4 rounded-md h-[250px] border dark:bg-gray-400">
              <label className="font-bold block mb-2 dark:text-gray-800">Enter PIN:</label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black dark:text-black dark:border-gray-600 dark:bg-gray-400"
              />
              <div className="flex justify-center">
                <button
                  onClick={handlePinSubmit}
                  className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                >
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                    <span className="text-green-800 dark:text-green-200 text-sm">
                      Submit
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BudgetTracker;