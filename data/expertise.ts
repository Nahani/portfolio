import { Monitor, Smartphone, Server } from 'lucide-react';
import { ExpertiseCategory } from '@/types/expertise';

export const expertiseCategories: ExpertiseCategory[] = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: [
      'React & React Hooks',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      'React Native',
      'Expo',
      'Native APIs',
      'App Store Deployment (Fastlane)',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Node.js',
      'Serverless cloud functions (AWS - GCP)',
      'Docker',
    ],
  },
]; 