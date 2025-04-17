'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface SectionTrackerProps {
  sectionId: string;
  children: React.ReactNode;
}

export function SectionTracker({ sectionId, children }: SectionTrackerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasLoggedView = useRef(false);
  const { logSectionView } = useAnalytics();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Only log the view once when the section becomes visible
        if (entry.isIntersecting && !hasLoggedView.current) {
          logSectionView(sectionId);
          hasLoggedView.current = true;
        }
      },
      {
        threshold: 0.3, // Section is considered viewed when 30% is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionId, logSectionView]);

  return (
    <div ref={sectionRef} id={sectionId}>
      {children}
    </div>
  );
} 