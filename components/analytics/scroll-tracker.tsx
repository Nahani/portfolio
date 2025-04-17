'use client';

import { useEffect, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export function ScrollTracker() {
  const { logScrollDepth } = useAnalytics();
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);
  const [lastLoggedDepth, setLastLoggedDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll depth as a percentage
      const scrollTop = window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollable = documentHeight - windowHeight;

      // If there's nothing to scroll, return
      if (scrollable <= 0) return;

      // Calculate percentage
      const scrollPercentage = Math.floor((scrollTop / scrollable) * 100);

      // Update max scroll depth
      if (scrollPercentage > maxScrollDepth) {
        setMaxScrollDepth(scrollPercentage);

        // Log scroll depth at 25%, 50%, 75%, and 100% thresholds
        const currentThreshold = Math.floor(scrollPercentage / 25) * 25;
        if (currentThreshold > lastLoggedDepth) {
          logScrollDepth(currentThreshold);
          setLastLoggedDepth(currentThreshold);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScrollDepth, lastLoggedDepth, logScrollDepth]);

  return null;
} 