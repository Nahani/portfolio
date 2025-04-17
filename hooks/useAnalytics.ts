'use client'
import { useEffect, useState } from 'react';
import { initAnalytics, logAnalyticsEvent } from '@/lib/firebase';

export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const analytics = await initAnalytics();
      setIsInitialized(analytics !== null);
    };

    initialize();
  }, []);

  // Section visibility tracking
  const logSectionView = (sectionId: string) => {
    logAnalyticsEvent('section_view', { section_id: sectionId });
  };

  // Social and contact interactions
  const logSocialLinkClick = (platform: string) => {
    logAnalyticsEvent('social_link_click', { platform });
  };

  const logContactClick = (method: string) => {
    logAnalyticsEvent('contact_click', { method });
  };

  // Project interactions
  const logProjectInteraction = (projectTitle: string, interactionType: 'view' | 'expand' | 'collapse' | 'link_click' | 'carousel_nav') => {
    logAnalyticsEvent('project_interaction', { 
      project_title: projectTitle, 
      interaction_type: interactionType 
    });
  };

  // Project links
  const logProjectLinkClick = (projectTitle: string, linkType: 'github' | 'demo' | 'website') => {
    logAnalyticsEvent('project_link_click', { 
      project_title: projectTitle, 
      link_type: linkType 
    });
  };

  // Expertise interactions
  const logExpertiseInteraction = (category: string, skill?: string) => {
    logAnalyticsEvent('expertise_interaction', { 
      category,
      skill 
    });
  };

  // Theme toggle
  const logThemeChange = (theme: string) => {
    logAnalyticsEvent('theme_change', { theme });
  };

  // Scroll depth
  const logScrollDepth = (depth: number) => {
    logAnalyticsEvent('scroll_depth', { depth: `${depth}%` });
  };

  // Time on page
  const logTimeOnPage = (seconds: number) => {
    logAnalyticsEvent('time_on_page', { seconds });
  };

  // Legacy events
  const logPageView = (pagePath: string, pageTitle: string) => {
    logAnalyticsEvent('page_view', { page_path: pagePath, page_title: pageTitle });
  };

  const logButtonClick = (buttonName: string, componentName?: string) => {
    logAnalyticsEvent('button_click', { button_name: buttonName, component_name: componentName });
  };

  const logFormSubmit = (formName: string, success: boolean) => {
    logAnalyticsEvent('form_submit', { form_name: formName, success });
  };

  const logCustomEvent = (eventName: string, params?: Record<string, any>) => {
    logAnalyticsEvent(eventName, params);
  };

  return {
    isInitialized,
    logPageView,
    logButtonClick,
    logFormSubmit,
    logCustomEvent,
    logSectionView,
    logSocialLinkClick,
    logContactClick,
    logProjectInteraction,
    logProjectLinkClick,
    logExpertiseInteraction,
    logThemeChange,
    logScrollDepth,
    logTimeOnPage
  };
}; 