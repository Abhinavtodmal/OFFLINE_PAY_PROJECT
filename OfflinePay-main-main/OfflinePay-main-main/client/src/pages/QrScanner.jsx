import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const QrScanner = () => {
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    senderId: "",
    receiverUpi: "",
    amount: "",
    pin: "",
  });
  const [scanner, setScanner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login page...");
        return;
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPaymentData((prevData) => ({
        ...prevData,
        senderId: res.data.user._id,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const qrData = async (text) => {
    try {
      const parsedData = JSON.parse(text);
      setPaymentData((prevData) => ({
        ...prevData,
        receiverUpi: parsedData.upiId,
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
      receiverUpi: "",
      amount: "",
      pin: "",
    });
    setScanner(true);
  };

  const handlePay = () => {
    setShowAmountModal(false);
    setShowPinModal(true);
  };

  const handlePinSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Authentication failed. Please login again.");
        return;
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

    setShowPinModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative m-auto mt-[100px]">
        <div style={{ position: "relative" }}>
          <Scanner
            components={{ audio: false, video: false }}
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
            <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-100" style={{ zIndex: 999 }}>
              <div className="modal-content bg-white p-[100px] rounded-md">
                <span className="absolute top-0 right-0 cursor-pointer" onClick={handleAmountModalClose}>
                  &times;
                </span>
                <p>UPI ID: {paymentData.receiverUpi}</p>
                <br />
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
                  className="block w-full border-black rounded-md mt-2"
                />
                <button onClick={handlePay} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Pay
                </button>
              </div>
            </div>
          )}
          {showPinModal && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" style={{ zIndex: 999 }}>
              <div className="modal-content bg-white p-4 rounded-md">
                <span className="absolute top-0 right-0 cursor-pointer" onClick={handleAmountModalClose}>
                  &times;
                </span>
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
                  className="block w-full border-gray-300 rounded-md mt-2"
                />
                <button onClick={handlePinSubmit} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Pay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!showAmountModal && !showPinModal && <Link to="/offline"></Link>}
    </>
  );
};

export default QrScanner;
