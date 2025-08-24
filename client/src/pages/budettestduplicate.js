import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import { 
  PieChart, 
  Pie, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Cell 
} from "recharts";

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
  const [success, setSuccess] = useState(null);

  // New Features States
  const [categories] = useState(["Food", "Transport", "Entertainment", "Utilities", "Shopping"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [goal, setGoal] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [pieData, setPieData] = useState([]);

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Fetch all user data
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLocalPin(res.data.user.pin);
      setBudget(parseFloat(res.data.user.budget) || 0);
      setExpenses(parseFloat(res.data.user.expenses) || 0);
      setGoal(parseFloat(res.data.user.goal) || 0);
      setExpenseList(res.data.user.expensesList || []);
      
      // Fetch pie chart data after getting user data
      await fetchPieChartData(token);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        window.location.href = "/login";
      }
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

  // Fetch pie chart data
  const fetchPieChartData = async (token) => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/users/getPieChartData', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPieData(response.data.categories || [
        { name: 'Food', value: 0 },
        { name: 'Transport', value: 0 },
        { name: 'Entertainment', value: 0 },
        { name: 'Utilities', value: 0 },
        { name: 'Shopping', value: 0 }
      ]);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch pie chart data:', err);
      setError('Failed to load chart data');
      // Set default data if API fails
      setPieData([
        { name: 'Food', value: 0 },
        { name: 'Transport', value: 0 },
        { name: 'Entertainment', value: 0 },
        { name: 'Utilities', value: 0 },
        { name: 'Shopping', value: 0 }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Update pie chart data
  const updatePieChartData = async (updatedCategories) => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }
  
      const response = await axios.post(
        'http://localhost:8000/users/updatePieChartData',
        { categories: updatedCategories },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (!response.data) {
        throw new Error("No data received from server");
      }
  
      const pieChartData = transformExpensesToPieData(response.data.expensesList);
      setPieData(pieChartData);
      
      return response.data;
      
    } catch (err) {
      console.error('Update error:', err);
      
      let errorMessage = 'Failed to update chart data';
      
      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = 'Session expired. Please login again.';
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else {
        errorMessage = err.message || errorMessage;
      }
      
      setError(errorMessage);
      throw err;
      
    } finally {
      setLoading(false);
    }
  };
  
  // Helper function to transform expensesList to pie chart format
  const transformExpensesToPieData = (expensesList) => {
    if (!expensesList || !Array.isArray(expensesList)) return [];
    
    const categoryMap = expensesList.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});
  
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value,
      color: getRandomColor()
    }));
  };

  // Reset pie chart data
  const resetPieChart = async () => {
    if (!window.confirm('Are you sure you want to reset all pie chart data? This cannot be undone.')) {
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      // 1. Clear backend data
      await axios.post(
        'http://localhost:8000/users/resetPieChartData',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      // 2. Reset frontend state
      setPieData([
        { name: 'Food', value: 0 },
        { name: 'Transport', value: 0 },
        { name: 'Entertainment', value: 0 },
        { name: 'Utilities', value: 0 },
        { name: 'Shopping', value: 0 }
      ]);
      
      // 3. Refresh data
      await fetchPieChartData(token);
      
      setSuccess('Pie chart data reset successfully!');
      setTimeout(() => setSuccess(null), 3000);
      
    } catch (err) {
      console.error('Reset error:', err);
      setError('Failed to reset pie chart data');
    } finally {
      setLoading(false);
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
      const userId = localStorage.getItem("userId");

      const newExpense = {
        amount: parseFloat(inputExpense),
        category: selectedCategory,
        date: new Date().toISOString()
      };

      const response = await axios.post(
        "http://localhost:8000/users/addExpense",
        { userId, ...newExpense },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setExpenses(expenses + newExpense.amount);
        setExpenseList([...expenseList, newExpense]);
        setInputExpense("");
        setSelectedCategory("");
        
        const updatedPieData = pieData.map(item => 
          item.name === selectedCategory 
            ? { ...item, value: item.value + newExpense.amount }
            : item
        );
        await updatePieChartData(updatedPieData);
        
        setSuccess('Expense added successfully!');
        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
      setError("Failed to add expense.");
    }
  };

  // Update budget
  const handleUpdateBudget = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/users/updateBudget",
        { budget: parseFloat(budget) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Budget updated successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error("Error updating budget:", error);
      setError("Failed to update budget.");
    }
  };

  useEffect(() => {
    console.log("Component mounted. Fetching user data...");
    getUser();
  }, []);

  // Set savings goal
  const handleSetGoal = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/users/setGoal",
        { goal: parseFloat(goal) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Savings goal set!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error("Error setting goal:", error);
      setError("Failed to set goal.");
    }
  };

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
  const filteredExpenses = expenseList.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === parseInt(selectedMonth);
  });

  // Prepare chart data
  const categoryData = categories.map(category => ({
    name: category,
    value: filteredExpenses
      .filter(e => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0)
  }));

  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(0, i).toLocaleString('default', { month: 'short' }),
    expenses: expenseList
      .filter(e => new Date(e.date).getMonth() === i)
      .reduce((sum, e) => sum + e.amount, 0)
  }));

  // Calculate progress
  const progress = (expenses / (budget || 1)) * 100;

  return (
    <>
      <Navbar />
      <div className={`container mx-auto px-4 py-10 ${darkMode ? "dark" : ""}`}>
        <h1 className="text-2xl font-bold mb-6">Budget Tracker</h1>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md dark:bg-green-900 dark:text-green-200">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}

        {/* Budget Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Monthly Budget</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter monthly budget"
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

        {/* Expense Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Add Expense</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={inputExpense}
              onChange={(e) => setInputExpense(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Amount"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={handleAddExpense}
              className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-green-800 dark:text-green-200 text-sm">
                  Add
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Savings Goal */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Savings Goal</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter savings goal"
            />
            <button
              onClick={handleSetGoal}
              className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-green-800 dark:text-green-200 text-sm">
                  Set Goal
                </span>
              </div>
            </button>
          </div>
          {goal > 0 && (
            <div className="mt-2">
              <progress 
                value={budget - expenses} 
                max={goal} 
                className="w-full h-2" 
              />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Savings: ₹{(budget - expenses).toFixed(2)} / ₹{goal.toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-2 dark:text-gray-200">
            Spent: ₹{expenses.toFixed(2)} / ₹{budget.toFixed(2)}
          </p>
          <p className="text-xl mt-2 dark:text-gray-200">
            Remaining: ₹{(budget - expenses).toFixed(2)}
          </p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Category Pie Chart */}
          <div className="bg-white dark:bg-gray-700 dark:text-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Expense Categories</h3>
              <button
                onClick={resetPieChart}
                disabled={loading}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded disabled:opacity-50"
              >
                Reset Chart
              </button>
            </div>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <p>Loading chart data...</p>
              </div>
            ) : (
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Monthly Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Monthly Expenses</h3>
            <BarChart width={300} height={300} data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expenses" fill="#8884d8" />
            </BarChart>
          </div>
        </div>

        {/* Expense History */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold dark:text-gray-200">Expense History</h3>
            <div className="flex gap-2">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
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
                  <th className="p-2 border dark:border-gray-600">Date</th>
                  <th className="p-2 border dark:border-gray-600">Amount</th>
                  <th className="p-2 border dark:border-gray-600">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.length > 0 ? (
                  filteredExpenses.map((expense, index) => (
                    <tr key={index} className="border-b dark:border-gray-600">
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                        {new Date(expense.date).toLocaleDateString()}
                      </td>
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                        ₹{expense.amount.toFixed(2)}
                      </td>
                      <td className="p-2 border dark:border-gray-600 dark:text-gray-200">
                        {expense.category}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-2 text-center dark:text-gray-200">
                      No expenses found
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
            <div className="bg-white p-4 rounded-md h-[250px] border dark:bg-gray-800">
              <label className="font-bold block mb-2 dark:text-gray-200">Enter PIN:</label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black dark:text-white dark:border-gray-600 dark:bg-gray-700"
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