import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TollIcon from '@mui/icons-material/Toll';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NoteIcon from '@mui/icons-material/Note'; // Import the NoteIcon

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Background Illustration */}
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6 relative overflow-hidden">
        <img
          src="/path-to-your-illustration.svg" // Replace with your illustration path
          alt="Illustration"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 dark:opacity-5"
        />

       

        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Seamless Payments, Anytime, Anywhere
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Explore our features to manage your finances effortlessly.
          </p>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Check Balance */}
            <Link to="/checkBalance" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <AccountBalanceIcon className="text-amber-600 dark:text-amber-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-amber-800 dark:text-amber-200 text-lg font-semibold">Check Balance</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      View your account balance instantly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Pay via UPI */}
            <Link to="/payUpi" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-lime-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <TollIcon className="text-lime-600 dark:text-lime-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-lime-800 dark:text-lime-200 text-lg font-semibold">Pay via UPI</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Make quick and secure UPI payments.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Pay Offline */}
            <Link to="/offlinePay" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-violet-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <WifiTetheringOffIcon className="text-violet-600 dark:text-violet-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-violet-800 dark:text-violet-200 text-lg font-semibold">Pay Offline</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Pay without an internet connection.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Scan QR */}
            <Link to="/qrscanner" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-indigo-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <QrCodeScannerIcon className="text-indigo-600 dark:text-indigo-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-indigo-800 dark:text-indigo-200 text-lg font-semibold">Scan QR</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Scan QR codes to make payments.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Receive Money */}
            <Link to="/qr" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-teal-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <CurrencyRupeeIcon className="text-teal-600 dark:text-teal-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-teal-800 dark:text-teal-200 text-lg font-semibold">Receive Money</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Receive payments directly to your account.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Transaction History */}
            <Link to="/transaction" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <ReceiptLongIcon className="text-pink-600 dark:text-pink-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-pink-800 dark:text-pink-200 text-lg font-semibold">Transaction History</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      View all your past transactions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Budget Tracker */}
            <Link to="/budgetTracker" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <AttachMoneyIcon className="text-cyan-600 dark:text-cyan-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-cyan-800 dark:text-cyan-200 text-lg font-semibold">Budget Tracker</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Track and manage your monthly budget.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Save Notes */}
            <Link to="/enhancedofflinenotes" className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-rose-500/50">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 h-64 w-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <NoteIcon className="text-rose-600 dark:text-rose-400 text-5xl mb-4 group-hover:rotate-6 transition-transform group-hover:drop-shadow-glow" />
                    <span className="text-rose-800 dark:text-rose-200 text-lg font-semibold">Save Notes</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Store and manage your notes offline. Access them anytime, anywhere.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;