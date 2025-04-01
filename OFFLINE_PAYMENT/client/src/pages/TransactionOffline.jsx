import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionOffline = () => {
  const [senderId, setSenderId] = useState("");

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

      setSenderId(res.data.user._id);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const data = {
    senderId: senderId || localStorage.getItem("userId"), // Ensure senderId is correctly set
    option: "3",
  };
  const encrypt = btoa(JSON.stringify(data));

  const handleSubmit = () => {
    const smsLink = `sms:+919350728474?body=${encrypt}%0A`;
    window.open(smsLink);
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Get last 5 transactions details on SMS
    </button>
  );
};

export default TransactionOffline;
