'use client'
import { Suspense } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ScrollTracker } from './analytics/scroll-tracker';
import { TimeTracker } from './analytics/time-tracker';
import { PageViewTracker } from './analytics/page-view-tracker';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollTracker />
      <TimeTracker />
      <Suspense>
        <PageViewTracker />
      </Suspense>
    </>
  );
} 