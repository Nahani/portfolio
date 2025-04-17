'use client';

import { Monitor, Smartphone, Server } from 'lucide-react';

// Type-safe mapping of icon names to components
export const iconRegistry = {
  monitor: Monitor,
  smartphone: Smartphone,
  server: Server,
  // Add other icons as needed
};

export type IconName = keyof typeof iconRegistry; 