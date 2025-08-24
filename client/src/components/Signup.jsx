import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Signup() {
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    pin: "",
    phoneNo: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Validate PIN and phone number are numbers
      if (isNaN(formData.pin) || isNaN(formData.phoneNo)) {
        throw new Error("PIN and Phone Number must be numbers");
      }

      const res = await axios.post(
        "http://localhost:8000/users/register",
        {
          ...formData,
          pin: Number(formData.pin),
          phoneNo: Number(formData.phoneNo)
        }
      );
      
      toast.success("Registration successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || 
                         (error.response?.data?.error?.includes('duplicate') ? 
                          "Username or email already exists" : 
                          "Registration failed. Please try again.");
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center py-8">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-8 text-2xl font-semibold text-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <img className="w-66 h-24 mr-2" src={logo} alt="logo" />
          </Link>
          
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full rounded-lg shadow-2xl bg-white bg-opacity-90 backdrop-blur-md border-2 border-transparent animate-gradient-border md:mt-0 xl:p-0 transform hover:scale-[1.01] transition-transform duration-300 hover:shadow-3xl"
            style={{ maxWidth: "42rem" }}
          >
            <div className="p-1 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient-border">
              <div className="p-10 space-y-6 bg-white bg-opacity-90 backdrop-blur-md rounded-lg">
                <h7 className="text-3xl font-bold text-center text-gray-800 animate-bounce">
                  Create Account
                </h7>
                {/* <p className="text-center text-black-600">
                  Join us to get started
                </p> */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userName" className="block mb-2 text-left text-gray-800 text-xl font-medium">
                      Username<h7 className="text-red-500">*</h7>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Username"
                      required
                      value={formData.userName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-left text-gray-800 text-xl font-medium">
                      Full Name<h7 className="text-red-500">*</h7>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Full Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-left text-gray-800 text-xl font-medium">
                      Email<h7 className="text-red-500">*</h7>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pin" className="block mb-2 text-left text-gray-800 text-xl font-medium">
                      PIN<h7 className="text-red-500">*</h7>
                    </label>
                    <input
                      type="number"
                      name="pin"
                      id="pin"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="4-digit PIN"
                      required
                      min="1000"
                      max="9999"
                      value={formData.pin}
                      onChange={(e) => {
                        if (e.target.value.length <= 4) {
                          handleChange(e);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.target.value.length >= 4 && e.key !== 'Backspace' && e.key !== 'Delete') {
                          e.preventDefault();
                        }
                      }}
                      maxLength={4}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNo" className="block mb-2 text-left text-gray-800 text-xl font-medium">
                      Phone Number<h7 className="text-red-500">*</h7>
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      id="phoneNo"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Mobile Number"
                      required
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="password" className="block mb-2 text-xl font-medium text-left text-gray-800">
                      Password<h7 className="text-red-500 text-xl">*</h7>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="w-full p-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      required
                      minLength="6"
                      value={formData.password}
                      onChange={handleChange}
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
                      className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-3 hover:from-indigo-600 hover:to-purple-600 transition-colors shadow-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transform hover:scale-105 active:scale-95"
                    >
                      <span className="text-white dark:text-white text-2xl">
                        Sign Up
                      </span>
                    </button>
                  )}

                  {/* <p className="text-center text-black-600 text-xl ">
                    Already have an account?{" "}
                    <Link
  to="/login"
  className="font-semibold text-indigo-500 hover:text-indigo-600 underline transition-all duration-300 hover:scale-105 text-2xl ignore-dark-mode"
>
  Login
</Link>
                  </p> */}
                   <h7 className="text-center text-gray-800 text-xl"> {/* Changed to text-gray-800 */}
                   Already have an account?{" "}
                                      <Link
                    to="/login"
                    className="font-semibold text-indigo-500 hover:text-indigo-600 underline transition-all duration-300 hover:scale-105 text-1xl no-dark-mode" // Added no-dark-mode
                  >
                       Login
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