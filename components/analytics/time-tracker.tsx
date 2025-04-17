'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export function TimeTracker() {
  const { logTimeOnPage } = useAnalytics();

  useEffect(() => {
    const startTime = Date.now();
    let intervalId: NodeJS.Timeout;
    let lastLoggedTime = 0;

    // Log time on page every minute up to 5 minutes, then every 5 minutes
    const trackTime = () => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(currentTime / 60);

      if (
        (minutes <= 5 && minutes > lastLoggedTime / 60) || 
        (minutes > 5 && minutes - Math.floor(lastLoggedTime / 60) >= 5)
      ) {
        logTimeOnPage(currentTime);
        lastLoggedTime = currentTime;
      }
    };

    // Check time every 10 seconds
    intervalId = setInterval(trackTime, 10000);

    // Log time when the user leaves the page
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      logTimeOnPage(timeSpent);
      clearInterval(intervalId);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      logTimeOnPage(timeSpent);
    };
  }, [logTimeOnPage]);

  return null;
} 