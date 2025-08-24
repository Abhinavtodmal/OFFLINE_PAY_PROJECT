import { useEffect, useState } from 'react';
import { networkMonitor } from '../../../public/assets/js/network';

const OfflineBanner = () => {
  const [isOnline, setIsOnline] = useState(networkMonitor.isOnline);

  useEffect(() => {
    return networkMonitor.addListener((online) => {
      setIsOnline(online);
    });
  }, []);

  if (isOnline) return null;

  return (
    <div className="offline-banner">
      ⚠️ You're offline. Payments will be synced when connection is restored.
    </div>
  );
};

export default OfflineBanner;