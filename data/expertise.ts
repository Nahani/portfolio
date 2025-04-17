import { ExpertiseCategory } from '@/types/expertise';

export const expertiseCategories: ExpertiseCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'monitor',
    skills: [
      'React & React Hooks',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Mobile Development',
    iconName: 'smartphone',
    skills: [
      'React Native',
      'Expo',
      'Native APIs',
      'App Store Deployment (Fastlane)',
    ],
  },
  {
    title: 'Backend',
    iconName: 'server',
    skills: [
      'Node.js',
      'Serverless cloud functions (AWS - GCP)',
      'Docker',
    ],
  },
]; 