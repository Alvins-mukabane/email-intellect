'use client';

import { useState, useEffect } from 'react';

export default function NetworkGuard() {
  const [isOffline, setIsOffline] = useState(() => (typeof navigator !== 'undefined' ? !navigator.onLine : false));

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-orange-600 text-white p-2 text-center text-sm font-bold flex items-center justify-center gap-2 animate-in slide-in-from-top">
      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      You are currently offline. Check your internet connection.
    </div>
  );
}


