// public/assets/js/db.js
const DB_NAME = 'PaymentDB';
const STORE_NAME = 'payments';
const DB_VERSION = 2; // Increment when changing schema

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { 
          keyPath: 'localId',
          autoIncrement: true 
        });
        // Create indexes for querying
        store.createIndex('by_status', 'status');
        store.createIndex('by_timestamp', 'timestamp');
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export async function savePayment(payment) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    const paymentWithMeta = {
      ...payment,
      status: 'pending',
      timestamp: Date.now(),
      synced: false,
      retries: 0
    };
    
    const request = store.add(paymentWithMeta);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

export async function getPendingPayments() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('by_status');
    const request = index.getAll('pending');
    
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = (event) => reject(event.target.error);
  });
}

export async function markAsSynced(localId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    const getRequest = store.get(localId);
    
    getRequest.onsuccess = () => {
      const payment = getRequest.result;
      if (payment) {
        payment.status = 'synced';
        payment.synced = true;
        payment.syncTimestamp = Date.now();
        
        const updateRequest = store.put(payment);
        updateRequest.onsuccess = () => resolve();
        updateRequest.onerror = (event) => reject(event.target.error);
      }
    };
    
    getRequest.onerror = (event) => reject(event.target.error);
  });
}

export async function incrementRetry(localId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    const getRequest = store.get(localId);
    
    getRequest.onsuccess = () => {
      const payment = getRequest.result;
      if (payment) {
        payment.retries += 1;
        const updateRequest = store.put(payment);
        updateRequest.onsuccess = () => resolve(payment.retries);
        updateRequest.onerror = (event) => reject(event.target.error);
      }
    };
    
    getRequest.onerror = (event) => reject(event.target.error);
  });
}

// Additional utility functions if needed
export async function getAllPayments() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = (event) => reject(event.target.error);
  });
}