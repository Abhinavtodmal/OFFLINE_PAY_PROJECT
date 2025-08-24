import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import DemoCarousel from "../components/Carousel";
import axios from "axios";
import Hero from "../components/HeroOnline";

const HomeOnline = () => {
  useEffect(() => {
    // console.log("Component mounted. Fetching user data...");
    getUser();
  }, []);

  const getUser = async () => {
    // console.log("getUser function called.");

    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    console.log("Retrieved token from localStorage:", token);

    if (!token) {
      console.error("No token found in localStorage. Redirecting to login page...");
      window.location.href = "/login";
      return; // Stop further execution
    }

    try {
      // console.log("Making API request to fetch user data...");
      // console.log("Request URL:", "http://localhost:8000/users/getUser");
      // console.log("Request Headers:", { Authorization: `Bearer ${token}` });

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("API response received:", res);
      // console.log("User data:", res.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
        console.error("Response headers:", error.response.headers);

        if (error.response.status === 401) {
          console.error("Unauthorized: Invalid or missing token. Redirecting to login page...");
          window.location.href = "/login";
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <DemoCarousel /> */}
      <Hero />
    </>
  );
};

export default HomeOnline;