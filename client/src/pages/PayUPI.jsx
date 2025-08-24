import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";

const PayUPI = () => {
  const [showReceiverModal, setShowReceiverModal] = useState(true);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentData, setPaymentData] = useState({
    senderId: "",
    receiverUpi: "",
    amount: "",
    pin: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found, please log in again.");
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPaymentData(prev => ({
        ...prev,
        senderId: res.data.user._id,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to load user data");
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  const validateUPI = (upi) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(upi);
  };

  const handleReceiverModalClose = () => {
    if (!paymentData.receiverUpi) {
      toast.error("UPI ID is required");
      return;
    }
    if (!validateUPI(paymentData.receiverUpi)) {
      toast.error("Invalid UPI ID format");
      return;
    }
    setShowReceiverModal(false);
    setShowAmountModal(true);
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(paymentData.amount);
    if (isNaN(amount) || paymentData.amount === "") {
      toast.error("Please enter a valid amount");
      return;
    }
    if (amount <= 0) {
      toast.error("Amount must be positive");
      return;
    }
    setShowAmountModal(false);
    setShowPinModal(true);
  };

  const handlePinSubmit = async () => {
    if (!paymentData.pin) {
      toast.error("PIN is required");
      return;
    }
    if (paymentData.pin.length !== 4 || !/^\d+$/.test(paymentData.pin)) {
      toast.error("PIN must be 4 digits");
      return;
    }

    setIsProcessing(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found, please log in again.");
      }

      const payload = {
        senderId: paymentData.senderId,
        receiverUpi: paymentData.receiverUpi,
        amount: Number(paymentData.amount),
        pin: Number(paymentData.pin)
      };

      const res = await axios.post(
        "http://localhost:8000/users/sendMoney",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsPaymentSuccessful(true);
      setShowStatusPopup(true);
      setShowPinModal(false);
    } catch (error) {
      console.error("Payment error:", error);
      setIsPaymentSuccessful(false);
      setErrorMessage(
        error.response?.data?.message || 
        error.message || 
        "Payment failed. Please try again."
      );
      setShowStatusPopup(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleModalClose = () => {
    if (isPaymentSuccessful) {
      setPaymentData({
        senderId: paymentData.senderId,
        receiverUpi: "",
        amount: "",
        pin: ""
      });
      navigate("/");
    }
    setShowStatusPopup(false);
  };

  return (
    <>
    <Navbar />
    
      {showReceiverModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="modal-content bg-gray-300 p-4 rounded-md relative w-80">
          
            <label htmlFor="receiverUpi" className="font-bold block mb-2 text-black">
              Enter Receiver's UPI ID:
            </label>
            <input
              type="text"
              id="receiverUpi"
              value={paymentData.receiverUpi}
              onChange={(e) =>
                setPaymentData(prev => ({ ...prev, receiverUpi: e.target.value }))
              }
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-300"
              placeholder="example@upi"
            />
            <div className="flex justify-between">
              <button
                onClick={() => navigate("/")}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Cancel
                  </span>
                </div>
              </button>
              <button
                onClick={handleReceiverModalClose}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center  bg-gray-300 dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Next
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {showAmountModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="modal-content  bg-gray-300 p-4 rounded-md relative w-80">
           
            <label htmlFor="amount" className="font-bold block mb-2 text-black">
              Enter Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={paymentData.amount}
              onChange={(e) =>
                setPaymentData(prev => ({ ...prev, amount: e.target.value }))
              }
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-300"
              placeholder="0.00"
              min="1"
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowAmountModal(false);
                  setShowReceiverModal(true);
                }}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Back
                  </span>
                </div>
              </button>
              <button
                onClick={handleAmountSubmit}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Next
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {showPinModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="modal-content  bg-gray-300 p-4 rounded-md relative w-80">
           
            <label htmlFor="pin" className="font-bold block mb-2 text-black ">
              Enter 4-digit PIN:
            </label>
            <input
              type="password"
              id="pin"
              value={paymentData.pin}
              onChange={(e) =>
                setPaymentData(prev => ({
                  ...prev,
                  pin: e.target.value.replace(/\D/g, "").slice(0, 4)
                }))
              }
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-300"
              maxLength="4"
              inputMode="numeric"
              placeholder="Enter 4 digit PIN"
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowPinModal(false);
                  setShowAmountModal(true);
                }}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white  dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Back
                  </span>
                </div>
              </button>
              <button
                onClick={handlePinSubmit}
                disabled={isProcessing || paymentData.pin.length !== 4}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    {isProcessing ? "Processing..." : "Pay"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

{showStatusPopup && (
  <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50">
    <div className="bg-gray-600  p-8 rounded-xl shadow-xl w-96 max-w-[90%] text-center transform transition-all duration-300 animate-fade-in">
      <div className={`text-5xl mb-6 ${isPaymentSuccessful ? 'text-emerald-500' : 'text-rose-500'}`}>
        {isPaymentSuccessful ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <h3 className="text-2xl font-semibold mb-3 dark:text-gray-200 ">
        {isPaymentSuccessful ? 'Payment Successful!' : 'Payment Failed'}
      </h3>
      <p className="mb-6  dark:text-gray-200">
        {isPaymentSuccessful 
          ? `₹${paymentData.amount} sent to ${paymentData.receiverUpi}`
          : errorMessage}
      </p>
      <button
        onClick={handleModalClose}
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          isPaymentSuccessful 
            ? 'bg-emerald-500 hover:bg-emerald-600' 
            : 'bg-rose-500 hover:bg-rose-600'
        } text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isPaymentSuccessful 
            ? 'focus:ring-emerald-500' 
            : 'focus:ring-rose-500'
        }`}
      >
        OK
      </button>
    </div>
  </div>
)}
    </>
  );
};

export default PayUPI