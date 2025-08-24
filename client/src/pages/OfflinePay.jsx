import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function OfflinePay() {
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [scanner, setScanner] = useState(true);
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    senderId: "",
    receiverId: "",
    amount: "",
    pin: "",
    option: "1",
  });

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

      setPaymentData((prevData) => ({
        ...prevData,
        senderId: res.data.user._id,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        window.location.href = "/login"; // Redirect if unauthorized
      }
    }
  };

  const qrData = async (text) => {
    try {
      const parsedData = JSON.parse(text);
      setPaymentData((prevData) => ({
        ...prevData,
        receiverId: parsedData.upiId,
      }));
      setScanner(false);
      setShowAmountModal(true);
    } catch (error) {
      console.error("Error parsing QR code data:", error);
    }
  };

  const handleAmountModalClose = () => {
    setShowAmountModal(false);
    setShowPinModal(false);
    setPaymentData({
      senderId: "",
      receiverId: "",
      amount: "",
      pin: "",
    });
    setScanner(true);
  };

  const handlePay = () => {
    setShowAmountModal(false);
    setShowPinModal(true);
  };

  const encrypt = btoa(JSON.stringify(paymentData)); // Encrypt data

  const handlePinSubmit = () => {
    console.log("Payment Data:", paymentData);

    const smsLink = `sms:+919350728474?body=${encrypt}%0A`;
    window.open(smsLink);
    setShowPinModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative m-auto mt-[100px]">
        <div style={{ position: "relative" }}>
          <Scanner
            components={{
              audio: false,
              video: false,
            }}
            options={{
              delayBetweenScanAttempts: 1000,
              delayBetweenScanSuccess: 10000,
            }}
            onResult={(text) => {
              qrData(text);
            }}
            enabled={scanner}
            onError={(error) => console.log(error?.message)}
          />
          {showAmountModal && (
            <div>
              <div
                className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
                style={{ zIndex: 999 }}
              >
                <div className="modal-content  bg-gray-300 p-4 rounded-md">
                  <span
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={handleAmountModalClose}
                  >
                    &times;
                  </span>
                  <p>UPI ID: {paymentData.receiverId}</p>
                  <label htmlFor="amount">Enter Amount to Pay:</label>
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
                    className="block w-full border-gray-300 rounded-md mt-2  bg-gray-300"
                  />
                  <button
                    onClick={handlePay}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          )}
          {showPinModal && (
            <div
              className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
              style={{ zIndex: 999 }}
            >
              <div className="modal-content bg-gray-300 p-4 rounded-md">
               
                <label htmlFor="pin">Enter PIN:</label>
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
                  className="block w-full border-gray-300 rounded-md mt-2  bg-gray-300 "
                />
                <button
                  onClick={handlePinSubmit}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md " 
                >
                  Pay Now
                </button>
              </div>
            </div>
          )}
          <br />
          <h1>Maximum Limit: 2000Rs.</h1>
        </div>
      </div>
    </>
  );
}
