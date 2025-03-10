import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PayUPI = () => {
  const [showReceiverModal, setShowReceiverModal] = useState(true);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
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
      const token = localStorage.getItem("token"); // Get token from localStorage
      if (!token) {
        throw new Error("No token found, please log in again.");
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data.user);
      setPaymentData((prevData) => ({
        ...prevData,
        senderId: res.data.user._id,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleReceiverModalClose = () => {
    setShowReceiverModal(false);
    setShowAmountModal(true);
  };

  const handleAmountSubmit = () => {
    setShowAmountModal(false);
    setShowPinModal(true);
  };

  const handlePinSubmit = () => {
    console.log("Payment Data:", paymentData);
    const pay = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found, please log in again.");
        }

        const res = await axios.post(
          "http://localhost:8000/users/sendMoney",
          paymentData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Payment Response:", res.data);
        alert("Payment Successful!");
        navigate("/");
      } catch (error) {
        console.error("Error making payment:", error);
        alert("Payment Failed!");
      }
    };
    pay();
    setShowPinModal(false);
  };

  return (
    <>
      {showReceiverModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="modal-content bg-white p-4 rounded-md">
            <span
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleReceiverModalClose}
            >
              &times;
            </span>
            <label htmlFor="receiverUpi" className="font-bold block mb-2 text-black">
              Enter Receiver's UPI ID:
            </label>
            <input
              type="text"
              id="receiverUpi"
              value={paymentData.receiverUpi}
              onChange={(e) =>
                setPaymentData((prevData) => ({
                  ...prevData,
                  receiverUpi: e.target.value,
                }))
              }
              className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black"
            />
            <div className="flex justify-center">
              <button
                onClick={handleReceiverModalClose}
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
      {showAmountModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="modal-content bg-white p-4 rounded-md">
            <span
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => setShowAmountModal(false)}
            >
              &times;
            </span>
            <label htmlFor="amount" className="font-bold block mb-2 text-black">
              Enter Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={paymentData.amount}
              onChange={(e) =>
                setPaymentData((prevData) => ({
                  ...prevData,
                  amount: e.target.value,
                }))
              }
              className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black"
            />
            <div className="flex justify-center">
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
          <div className="modal-content bg-white p-4 rounded-md">
            <span
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => setShowPinModal(false)}
            >
              &times;
            </span>
            <label htmlFor="pin" className="font-bold block mb-2 text-black">
              Enter PIN:
            </label>
            <input
              type="password"
              id="pin"
              value={paymentData.pin}
              onChange={(e) =>
                setPaymentData((prevData) => ({
                  ...prevData,
                  pin: e.target.value,
                }))
              }
              className="block w-full border border-black rounded-md px-3 py-2 mb-4 text-black"
            />
            <div className="flex justify-center">
              <button
                onClick={handlePinSubmit}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    Pay
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayUPI;