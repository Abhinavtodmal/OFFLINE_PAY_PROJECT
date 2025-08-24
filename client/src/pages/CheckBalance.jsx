import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const CheckBalance = () => {
  const [balance, setBalance] = useState(null);
  const [pin, setPin] = useState("");
  const [localPin, setLocalPin] = useState(null);
  const [showPinModal, setShowPinModal] = useState(true);

  // Fetch user data (including PIN) from the server
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLocalPin(res.data.user.pin); // Set the user's PIN from the response
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
        window.location.href = "/login";
      }
    }
  };

  // Handle PIN submission
  const handlePinSubmit = async () => {
    if (pin == localPin) {
      try {
        console.log("PIN is correct. Fetching balance...");
        await fetchBalance();
        setShowPinModal(false); // Hide the PIN modal after successful validation
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    } else {
      alert("Wrong PIN. Please try again.");
      setPin(""); // Clear the PIN input
    }
  };

  // Fetch the user's balance from the server
  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBalance(res.data.user.amount); // Set the user's balance from the response
    } catch (error) {
      console.error("Error fetching balance:", error);
      if (error.response?.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
        window.location.href = "/login";
      }
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    getUser();
  }, []);

  // Hide the PIN modal if balance is fetched
  useEffect(() => {
    if (balance !== null && showPinModal === true) {
      setShowPinModal(false);
    }
  }, [balance, showPinModal]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Bank Balance</h1>
        {balance !== null ? (
          <div className="text-xl">
            Your current balance: ₹{" "}
            <span className="font-bold">{balance}</span>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {/* Pin Modal */}
        {showPinModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-60">
            <div className="modal-content bg-gray-300 p-4 rounded-md h-[250px] border border-black">
              <label htmlFor="pin" className="font-bold block mb-2 text-black">
                Enter PIN:
              </label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black bg-gray-300" 
                placeholder="Enter 4 digit PIN"
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

export default CheckBalance;