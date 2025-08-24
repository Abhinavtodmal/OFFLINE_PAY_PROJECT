import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

export default function CheckBalanceOffline() {
  const [balance, setBalance] = useState(null);
  const [pin, setPin] = useState("");
  const [localPin, setLocalPin] = useState(null);
  const [showPinModal, setShowPinModal] = useState(true);
  const [senderId, setSenderId] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = localStorage.getItem("token"); // Retrieve token
    if (!token) {
      window.location.href = "/login"; // Redirect if token is missing
      return;
    }

    try {
      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`, // Use Bearer Token
        },
      });

      setSenderId(res.data.user._id);
      setLocalPin(res.data.user.pin);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        window.location.href = "/login"; // Redirect if unauthorized
      }
    }
  };

  const data = {
    pin: pin,
    senderId: senderId,
    option: "2",
  };

  const encrypt = btoa(JSON.stringify(data)); // Encrypt data

  const handlePinSubmit = () => {
    const smsLink = `sms:+919350728474?body=${encrypt}%0A`;
    window.open(smsLink);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Bank Balance</h1>
        {balance !== null ? (
          <div className="text-xl">
            Your current balance: ₹ <span className="font-bold">{balance}</span>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {/* Pin Modal */}
        {showPinModal && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="modal-content  bg-gray-300 p-4 rounded-md">
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
}
