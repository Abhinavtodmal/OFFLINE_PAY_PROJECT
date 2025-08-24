// src/components/common/SyncStatus.jsx
import { useEffect, useState } from 'react';
import { syncManager } from '../../../public/assets/js/sync';
import { getPendingPayments } from '../../../public/assets/js/db';

const SyncStatus = () => {
  const [status, setStatus] = useState({
    pending: 0,
    isSyncing: false,
    lastSynced: null
  });

  useEffect(() => {
    const updateStatus = async () => {
      const pending = await getPendingPayments();
      setStatus(prev => ({ ...prev, pending: pending.length }));
    };

    const unsubscribe = syncManager.addListener(({ event }) => {
      switch (event) {
        case 'start':
          setStatus(prev => ({ ...prev, isSyncing: true }));
          break;
        case 'complete':
          updateStatus(); // Refresh the pending count
          setStatus(prev => ({
            ...prev,
            isSyncing: false,
            lastSynced: new Date()
          }));
          break;
      }
    });

    // Initial status update
    updateStatus();

    // Cleanup
    return () => {
      unsubscribe();
    };
  }, []);

  if (status.pending === 0 && !status.isSyncing) return null;

  return (
    <div className="sync-status">
      {status.isSyncing ? (
        <span>Syncing {status.pending} payments...</span>
      ) : (
        <span>{status.pending} payments pending sync</span>
      )}
      {status.lastSynced && (
        <span className="last-synced">
          Last synced: {status.lastSynced.toLocaleTimeString()}
        </span>
      )}
    </div>
  );
};

export default SyncStatus;