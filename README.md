# 💳 OfflinePay - Seamless Payments, Anytime, Anywhere

<div align="center">
  <img src="https://img.shields.io/badge/Project-OfflinePay-blueviolet" alt="Project">
  <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8" alt="PWA">
  <img src="https://img.shields.io/badge/Offline-First-important" alt="Offline First">
  <img src="https://img.shields.io/badge/Security-AES--256-green" alt="Security">
  <img src="https://img.shields.io/badge/Twilio-SMS-FF2D20" alt="Twilio">
</div>

## 📌 Overview

OfflinePay is like a digital cheque book for your phone.

Write a "cheque" (create a payment) offline. It stays secure on your device. When you're back online, it automatically clears and you get a confirmation—just like a bank processing a cheque.

No internet? No problem. Pay anytime, anywhere.

---

## ✨ Key Features

<div align="center">
  <table>
    <tr>
      <th><img src="https://img.shields.io/badge/Core-Features-FF6B6B" width="150"></th>
      <th><img src="https://img.shields.io/badge/Offline-Capabilities-4ECDC4" width="150"></th> 
      <th><img src="https://img.shields.io/badge/UX--Tools-Notes/Tracker-45B7D1" width="150"></th>
    </tr>
    <tr>
      <td>
        • 💸 Send & Receive Money<br>
        • 📱 UPI & QR Code Payments<br>
        • 📊 Instant Balance Check<br>
        • 📜 Full Transaction History<br>
        • 🔐 Secure PIN Protection
      </td>
      <td>
        • 📴 **Queue Payments Offline**<br>
        • 🔄 Auto-Sync on Reconnect<br>
        • 🤖 Background Sync API<br>
        • 💾 Local Data Encryption<br>
        • 📲 SMS Confirmation (Twilio)
      </td>
      <td>
        • 🎯 **Monthly Budget Tracker**<br>
        • 📝 **Offline Notes**<br>
        • 📈 Expense Visualization<br>
        • 🔔 Spending Alerts<br>
        • 🌐 Cross-Device Sync
      </td>
    </tr>
  </table>
</div>

---

## 🖼️ Application Screenshots

<div align="center">

### 🏠 Main Dashboard
<img src="./client/assets/main-page.png" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="OfflinePay Main Dashboard">

### 📈 Budget Tracker
<img src="./client/assets/budget-tracker.png" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Budget Tracker Interface">

### 📝 Notes Page
<img src="./client/assets/notes-page.png" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Offline Notes Manager">

### 📱 Transaction SMS (Twilio)
<img src="./client/assets/twilio-sms.jpg" width="40%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Twilio SMS Confirmation">
</div>

---

## 🛠️ Tech Stack

**Frontend & PWA**  
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5" height="20"> <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3" height="20"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript" height="20"> <img src="https://img.shields.io/b/adge/Service_Worker-5A0FC8" height="20">

**Backend & APIs**  
<img src="https://img.shields.io/badge/Node.js-339933?logo=node.js" height="20"> <img src="https://img.shields.io/badge/Express-000000?logo=express" height="20"> <img src="https://img.shields.io/badge/Twilio-FF2D20?logo=twilio" height="20">

**Data & Storage**  
<img src="https://img.shields.io/badge/IndexedDB-ED1C24?logo=indexeddb" height="20"> <img src="https://img.shields.io/badge/LocalStorage-0081CB" height="20"> <img src="https://img.shields.io/badge/AES--256-5A0FC8" height="20">

**DevOps & Deployment**  
<img src="https://img.shields.io/badge/GitHub_Pages-222222?logo=github" height="20"> <img src="https://img.shields.io/badge/HTTPS-SSL_Secure-008000" height="20">

---

## 🚀 How It Works: Offline Magic

1.  **📶 Offline Transaction:**
    - User makes payment without internet
    - Transaction is encrypted (AES-256) and stored locally

2.  **💾 Secure Storage:**
    - Data persisted in browser's IndexedDB
    - Protected with user PIN and encryption

3.  **🔄 Auto-Sync:**
    - Service Worker detects network restoration
    - Queued transactions sync automatically with server

4.  **📲 Confirmation:**
    - Server processes payment via payment gateway
    - Twilio API sends instant SMS confirmation to user

---

