import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

// Initialize Firebase with automatic configuration
const app = initializeApp();

// Analytics singleton
let analytics: ReturnType<typeof getAnalytics> | null = null;

// Initialize analytics if possible
export const initAnalytics = async () => {
  if (!(await isSupported())) {
    console.log('Firebase Analytics is not supported in this environment');
    return null;
  }
  
  if (!analytics && typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.error('Error initializing Firebase Analytics:', error);
    }
  }
  return analytics;
};

// Log custom events
export const logAnalyticsEvent = async (eventName: string, eventParams?: Record<string, any>) => {
  const analyticsInstance = await initAnalytics();
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, eventParams);
  }
};

export { app }; 