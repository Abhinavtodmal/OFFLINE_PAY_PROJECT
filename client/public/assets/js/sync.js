// public/assets/js/sync.js
import { 
  getPendingPayments, 
  markAsSynced, 
  incrementRetry 
} from './db';
import { showToast } from './ui';

class SyncManager {
  constructor() {
    this.isSyncing = false;
    this.listeners = new Set();
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  emit(event) {
    for (const listener of this.listeners) {
      listener({ event });
    }
  }

  async triggerSync() {
    if (!navigator.onLine) {
      showToast('Will sync when online', 'info');
      return;
    }
    return this.processPendingPayments();
  }

  async processPendingPayments() {
    if (this.isSyncing) return;
    this.isSyncing = true;
    this.emit('start');
    
    try {
      const pendingPayments = await getPendingPayments();
      
      for (const payment of pendingPayments) {
        try {
          const response = await this.sendToServer(payment);
          
          if (response.ok) {
            await markAsSynced(payment.localId);
            showToast(`Payment synced`, 'success');
          } else {
            await this.handleSyncError(payment);
          }
        } catch (error) {
          await this.handleSyncError(payment, error);
        }
      }
    } finally {
      this.isSyncing = false;
      this.emit('complete');
    }
  }

  // ... rest of the existing methods (sendToServer, handleSyncError)
}

export const syncManager = new SyncManager();

// Auto-sync when coming online
window.addEventListener('online', () => syncManager.triggerSync());