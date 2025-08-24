import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userNameRef = useRef(null);

  useEffect(() => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/users/login", {
        userName,
        password,
      });
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("user", res.data.user.upiId);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <img className="w-66 h-24 mr-2" src={logo} alt="logo" />
          </Link>
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full rounded-lg shadow-2xl bg-white bg-opacity-90 backdrop-blur-md border-2 border-transparent animate-gradient-border md:mt-0 sm:max-w-md xl:p-0 transform hover:scale-105 transition-transform duration-300 hover:shadow-3xl"
          >
            <div className="p-1 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient-border">
              <div className="p-8 space-y-6 bg-white bg-opacity-90 backdrop-blur-md rounded-lg">
                <h7 className="text-3xl font-bold text-center text-gray-800 animate-bounce">
                  Welcome Back!
                </h7>
                <br></br>
                <p7 className="text-center text-gray-800"> {/* Changed to text-gray-800 */}
                  Login to continue to your account
                </p7>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block mb-2 text-left text-gray-800 text-xl font-medium"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="userName"
                      ref={userNameRef}
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Enter your username"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-left text-gray-800 text-xl font-medium"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-500 h-5 w-5 hover:text-gray-700 transition-all duration-300" />
                      ) : (
                        <FaEye className="text-gray-500 h-5 w-5 hover:text-gray-700 transition-all duration-300" />
                      )}
                    </button>
                  </div>
                  {loading ? (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 hover:from-indigo-600 hover:to-purple-600 transition-colors shadow-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transform hover:scale-105 active:scale-95"
                    >
                      <span className="text-white dark:text-white text-sm">
                        Login
                      </span>
                    </button>
                  )}
                  <h7 className="text-center text-gray-800 text-xl"> {/* Changed to text-gray-800 */}
                    Don't have an account yet?{" "}
                    <Link
  to="/signup"
  className="font-semibold text-indigo-500 hover:text-indigo-600 underline transition-all duration-300 hover:scale-105 text-1xl no-dark-mode" // Added no-dark-mode
>
  Sign up
</Link>
                    
                  </h7>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Toaster position="bottom-center" />
    </div>
  );
}