const CACHE_NAME = 'offline-v2';
const FALLBACK_HTML_URL = '/fallback.html';

// App shell + critical assets
const FILES_TO_CACHE = [
  '/',
  '../index.html',
  FALLBACK_HTML_URL,
  
  // Main JS/CSS files (will be hashed in production)
    '../src/components/Navbar/Navbar.jsx',
   '../src/components/Navbar/Navbar.module.css',
  '../src/components/HeroOffline.jsx',
  '../src/components/HeroOnline.jsx',
  '../src/components/Login.jsx',
  '../src/components/Signup.jsx',
  
  // Critical pages for offline mode
  '../src/pages/BudgetTracker.jsx',
  '../src/pages/CheckBalance.jsx',
  '/src/pages/HomeOnline.jsx',
  '../src/pages/PayUPI.jsx',
  '../src/pages/Transaction.jsx',
  '../src/pages/QrScanner.jsx',
  '../src/pages/QrCode.jsx',
  '../src/pages/HomeOffline.jsx',
  '../src/pages/CheckBalanceOffline.jsx',
  '../src/pages/EnhancedOfflineNotes.jsx',
  '../src/pages/OfflinePay.jsx',
  '../src/pages/PayUPIOffline.jsx',
  '../src/pages/TransactionOffline.jsx',
  
  // Assets
  '../src/assets/logo.png',
  '../src/assets/react.svg',
  
  // Manifest
  '../src/App.css',
  '../src/App.jsx',
  '../src/index.css',
  '../src/main.jsx',
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install event triggered');
  
 

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Opened cache:', CACHE_NAME);
        console.log('[ServiceWorker] Pre-caching offline resources');
        return cache.addAll(FILES_TO_CACHE)
          .then(() => {
            console.log('[ServiceWorker] All resources pre-cached successfully');
          })
          .catch((err) => {
            console.error('[ServiceWorker] Failed to cache some resources:', err);
          });
      })
      .then(() => {
        console.log('[ServiceWorker] Skipping waiting phase');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[ServiceWorker] Installation failed:', err);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate event triggered');
  
  event.waitUntil(
    caches.keys().then((keyList) => {
      console.log('[ServiceWorker] Current caches:', keyList);
      
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache:', key);
          return caches.delete(key);
        }
      }));
    })
    .then(() => {
      console.log('[ServiceWorker] Claiming clients');
      return self.clients.claim();
    })
    .then(() => {
      console.log('[ServiceWorker] Activation completed');
    })
    .catch((err) => {
      console.error('[ServiceWorker] Activation failed:', err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  
   console.log('Service Worker: Fetching ')
   event.respondWith(fetch(event.request).catch(() =>caches.match(event.request)));
   
}); 



///////////////////

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-payments') {
    event.waitUntil(
      fetch('/api/payments/sync', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) throw new Error('Sync failed');
        return response.json();
      })
      .catch(error => {
        console.error('Background sync failed:', error);
        // Sync will automatically retry later
      })
    );
  }
});

