'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAnalytics } from '@/hooks/useAnalytics';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { logPageView } = useAnalytics();

  useEffect(() => {
    if (pathname) {
      const pageTitle = pathname.split('/').pop() || 'home';
      const queryString = searchParams.toString();
      const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
      
      logPageView(fullPath, pageTitle);
    }
  }, [pathname, searchParams, logPageView]);

  return null;
} 