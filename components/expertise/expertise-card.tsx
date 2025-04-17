'use client';

import { Card } from '@/components/ui/card';
import { ExpertiseCategory } from '@/types/expertise';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useState, useEffect, useRef } from 'react';
import { iconRegistry } from './icon-registry';

interface ExpertiseCardProps extends ExpertiseCategory {}

export function ExpertiseCard({ title, iconName, skills }: ExpertiseCardProps) {
  const { logExpertiseInteraction } = useAnalytics();
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasLogged, setHasLogged] = useState(false);
  
  // Get the icon component from the registry
  const Icon = iconRegistry[iconName];

  // Track when expertise card is viewed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasLogged) {
          logExpertiseInteraction(title);
          setHasLogged(true);
        }
      },
      { threshold: 0.7 } // Card is 70% visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [title, logExpertiseInteraction, hasLogged]);

  const handleSkillClick = (skill: string) => {
    logExpertiseInteraction(title, skill);
  };

  return (
    <Card className="p-8 transition-all hover:shadow-lg" ref={cardRef}>
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li 
            key={skill} 
            className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
} 