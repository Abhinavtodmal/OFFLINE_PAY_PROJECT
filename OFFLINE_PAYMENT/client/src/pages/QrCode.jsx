import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

const QrCode = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Ensure token is retrieved
      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`, // Proper token format
        },
      });

      setUser(res.data.user); // Set user details
      setLoading(false);
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-10 items-center justify-center">
          <QRCode
            value={JSON.stringify({ upiId: user?.upiId, receiverId: user?._id })}
            style={{ width: "200px", height: "200px", marginTop: "100px" }}
          />
          <span className="border border-black dark:border-white p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
            {user?.upiId}
          </span>
        </div>
      )}
    </>
  );
};

export default QrCode;