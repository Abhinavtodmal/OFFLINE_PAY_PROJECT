import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import DemoCarousel from "../components/Carousel";
import axios from "axios";
import HeroOffline from "../components/HeroOffline";

const HomeOffline = () => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token"); // Fetch token from local storage

    if (!userId || !token) {
      window.location.href = "/login";
      return;
    }

    try {
      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`, // Use Bearer token
        },
      });

      console.log(res.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        window.location.href = "/login"; // Redirect if unauthorized
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <DemoCarousel /> */}
      <HeroOffline />
    </>
  );
};

export default HomeOffline;
