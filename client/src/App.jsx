import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import QrCode from './pages/QrCode'
import QrScanner from './pages/QrScanner'
import Transaction from './pages/Transaction'
import CheckBalance from './pages/CheckBalance'
import HomeOnline from './pages/HomeOnline'
import HomeOffline from './pages/HomeOffline'
import OfflinePay from './pages/OfflinePay'
import PayUPI from './pages/PayUPI'
import PayUPIOffline from './pages/PayUPIOffline'
import CheckBalanceOffline from './pages/CheckBalanceOffline'
import TransactionOffline from './pages/TransactionOffline'
import BudgetTracker from './pages/BudgetTracker'
import EnhancedOfflineNotes from './pages/EnhancedOfflineNotes'

import OfflineBanner from './components/common/OfflineBanner';
import SyncStatus from './components/common/SyncStatus';

function App() {
  return (
    <>
      <OfflineBanner />
      <SyncStatus />
    <Router>
      <Routes>
      <Route path='/login' element={<Login />} />
        <Route path="/" element={<HomeOnline />} />
        <Route path='/offlinePay' element={<HomeOffline />} />
       
        <Route path='/signup' element={<Signup />} />
        <Route path='/qr' element={<QrCode />} />
        <Route path='/qrscanner' element={<QrScanner />} />
        <Route path='/payUpi' element={<PayUPI />} />
        <Route path='/payUpiOffline' element={<PayUPIOffline />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/transactionOffline' element={<TransactionOffline />} />
        <Route path='/checkBalance' element={<CheckBalance />} />
        <Route path="/offline" element={<OfflinePay />} />
        <Route path="/checkbalanceoffline" element={<CheckBalanceOffline />} />
        <Route path='/budgetTracker' element={<BudgetTracker />} />
        <Route path='/enhancedofflinenotes' element={<EnhancedOfflineNotes />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
