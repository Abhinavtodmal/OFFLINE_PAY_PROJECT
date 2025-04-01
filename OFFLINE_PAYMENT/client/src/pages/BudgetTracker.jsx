import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const BudgetTracker = () => {
  const [budget, setBudget] = useState(0); // User's monthly budget
  const [expenses, setExpenses] = useState(0); // Total expenses
  const [inputExpense, setInputExpense] = useState(""); // Input for adding expenses
  const [pin, setPin] = useState(""); // PIN for verification
  const [localPin, setLocalPin] = useState(null); // User's PIN fetched from the backend
  const [showPinModal, setShowPinModal] = useState(true); // Controls PIN modal visibility

  // Fetch user data (including PIN, budget, and expenses) from the server
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }

      console.log("Fetching user data...");
      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User data fetched successfully:", res.data);

      setLocalPin(res.data.user.pin); // Set the user's PIN from the response
      setBudget(parseFloat(res.data.user.budget) || 0); // Ensure budget is a number
      setExpenses(parseFloat(res.data.user.expenses) || 0); // Ensure expenses is a number
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
        window.location.href = "/login";
      }
    }
  };

  // Fetch budget and expenses from the server
  const getBudgetAndExpenses = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }

      console.log("Fetching budget and expenses...");
      const response = await axios.get("http://localhost:8000/users/getBudgetAndExpenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Budget and expenses fetched successfully:", response.data);
      setBudget(response.data.budget);
      setExpenses(response.data.expenses);
    } catch (error) {
      console.error("Error fetching budget and expenses:", error);
    }
  };

  // Handle PIN submission
  const handlePinSubmit = async () => {
    console.log("Submitted PIN:", pin);
    console.log("Local PIN:", localPin);

    if (pin == localPin) {
      console.log("PIN is correct. Proceeding...");
      setShowPinModal(false); // Hide the PIN modal after successful validation
    } else {
      console.error("Wrong PIN. Please try again.");
      alert("Wrong PIN. Please try again.");
      setPin(""); // Clear the PIN input
    }
  };
////////////////////////////////////////////////////////////////////////////////////////
const handleAddExpense = async () => {
  console.log("Adding expense:", inputExpense);

  // Validate the input expense
  if (!inputExpense || isNaN(inputExpense)) {
    console.error("Invalid expense amount:", inputExpense);
    alert("Please enter a valid expense amount.");
    return;
  }

  try {
    // Get the token from local storage
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found.");
      alert("No token found. Please log in again.");
      return;
    }

    // Get the userId from local storage
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found.");
      alert("User ID not found. Please log in again.");
      return;
    }

    // Calculate the new expenses
    const newExpenses = expenses + parseFloat(inputExpense);
    console.log("New expenses:", newExpenses);

    // Send the request to the server
    const response = await axios.post(
      "http://localhost:8000/users/addExpense",
      {
        userId: userId, // Include the user ID
        amount: parseFloat(inputExpense), // Include the amount to add
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Handle the response
    if (response.status === 200) {
      console.log("Expense added successfully:", response.data);
      setExpenses(newExpenses); // Update expenses in the state
      setInputExpense(""); // Clear the input field
      alert("Expense added successfully!");
    } else {
      console.error("Failed to add expense:", response.data);
      alert("Failed to add expense. Please try again.");
    }
  } catch (error) {
    console.error("Error adding expense:", error);
    alert("An error occurred while adding the expense. Please try again.");
  }
};
////////////////////////////////
  // Update the budget
  const handleUpdateBudget = async () => {
    console.log("Updating budget:", budget);

    if (!budget || isNaN(budget)) {
      console.error("Invalid budget amount:", budget);
      alert("Please enter a valid budget amount.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/users/updateBudget",
        { budget: parseFloat(budget) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Budget updated successfully:", response.data);
        alert("Budget updated successfully!");

        // Fetch updated budget and expenses
        await getBudgetAndExpenses();
      } else {
        console.error("Failed to update budget:", response.data);
        alert("Failed to update budget. Please try again.");
      }
    } catch (error) {
      console.error("Error updating budget:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      alert("An error occurred while updating the budget.");
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    console.log("Component mounted. Fetching user data...");
    getUser();
  }, []);

  // Calculate the progress percentage
  const progress = (expenses / (budget || 1)) * 100; // Ensure budget is not zero
  console.log("Progress:", progress);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Budget Tracker</h1>

        {/* Budget Input */}
        <div className="mb-6">
          <label htmlFor="budget" className="block text-sm font-medium mb-2 text-black dark:text-white">
            Monthly Budget
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(parseFloat(e.target.value) || 0)} // Ensure budget is a number
              className="w-full p-2 border border-black rounded-md text-black dark:text-white dark:border-gray-600 dark:bg-gray-700"
              placeholder="Enter your monthly budget"
            />
            <button
              onClick={handleUpdateBudget}
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Update
            </button>
          </div>
        </div>

        {/* Expense Input */}
        <div className="mb-6">
          <label htmlFor="expense" className="block text-sm font-medium mb-2 text-black dark:text-white">
            Add Expense
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="expense"
              value={inputExpense}
              onChange={(e) => setInputExpense(e.target.value)}
              className="w-full p-2 border border-black rounded-md text-black dark:text-white dark:border-gray-600 dark:bg-gray-700"
              placeholder="Enter expense amount"
            />
            <button
              onClick={handleAddExpense}
              className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
{/* //////////////////////////// */}

{/* //////////////////////////// */}
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Spent: ₹{(expenses || 0).toFixed(2)} / ₹{(budget || 0).toFixed(2)}
          </p>
        </div>

        {/* Remaining Budget */}
        <div className="text-xl text-black dark:text-white">
          Remaining Budget: ₹{" "}
          <span className="font-bold">{((budget || 0) - (expenses || 0)).toFixed(2)}</span>
        </div>

        {/* Pin Modal */}
        {showPinModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-60">
            <div className="modal-content bg-white p-4 rounded-md h-[250px] border border-black dark:bg-gray-800 dark:border-gray-600">
              <label htmlFor="pin" className="font-bold block mb-2 text-black dark:text-white">
                Enter PIN:
              </label>
              <input
                type="password"
                id="pin"
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