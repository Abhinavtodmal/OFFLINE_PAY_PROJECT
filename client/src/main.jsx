import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import '../public/service-worker.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  ,
)


// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../service-worker.js') // Path from the root (public folder)
      .then((registration) => {
        console.log('✅ Service Worker registered:', registration.scope);
      })
      .catch((err) => {
        console.error('❌ Service Worker registration failed:', err);
      });
  });
}
