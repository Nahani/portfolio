# Portfolio Analytics Guide

This document explains the analytics implementation in your portfolio website and how to interpret the data.

## Analytics Events

The portfolio tracks the following events:

### Page and Section Views

- **page_view**: Tracks when a user loads the site or navigates to a different section via URL/client-side routing.
- **section_view**: Tracks when specific sections (hero, projects, expertise, etc.) become visible in the viewport.

### User Engagement

- **scroll_depth**: Tracks how far down users scroll through your site (25%, 50%, 75%, 100%).
- **time_on_page**: Records how long users spend on your site, logged at regular intervals and when leaving.

### Interaction Events

- **social_link_click**: Tracks clicks on social media links (GitHub, LinkedIn, etc.).
- **contact_click**: Records when users attempt to contact you.
- **theme_change**: Tracks when users toggle between light and dark mode.

### Project Interactions

- **project_interaction**: Logs different types of interactions with project cards:
  - `view`: When a project card becomes visible
  - `expand`: When a user expands the project description
  - `collapse`: When a user collapses the project description
  - `carousel_nav`: When a user navigates through project images

- **project_link_click**: Tracks when users click on project links:
  - `github`: Clicks on GitHub repository links
  - `demo`: Clicks on demo/live website links

### Expertise Interactions

- **expertise_interaction**: Tracks interactions with your expertise/skills:
  - Logs when expertise categories become visible
  - Records when users click on specific skills

## Analyzing the Data in Firebase

### Key Metrics to Monitor

1. **Top Viewed Sections**
   - Which sections are most viewed? This indicates user interest areas.
   - Are users reaching every section of your portfolio, or dropping off?

2. **Project Engagement**
   - Which projects receive the most views and interactions?
   - Are users expanding descriptions to read more about specific projects?
   - Which project links are clicked most often?

3. **User Flow & Drop-off**
   - Using scroll depth and time on page, identify where users lose interest.
   - Check if users are viewing your portfolio thoroughly or only briefly.

4. **Portfolio Effectiveness**
   - Are users clicking contact links after viewing projects or expertise?
   - Do specific projects drive more contact attempts?

5. **External Referrals**
   - Track which social platforms users click through to.

### Using Firebase Analytics Dashboard

1. In Firebase Console, navigate to your project and select "Analytics" in the left menu.
2. Use the "Events" report to see which events occur most frequently.
3. Create custom reports to analyze specific user journeys:
   - Project view → Project link click → Contact
   - Section view duration and progression

4. Set up funnels to track conversion paths:
   - View portfolio → View projects → Click GitHub → Contact

## Implementing Custom Tracking

To track additional events, use the `useAnalytics` hook in your components:

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function YourComponent() {
  const { 
    logCustomEvent, 
    logButtonClick,
    // other tracking methods... 
  } = useAnalytics();
  
  // Track a custom event
  const handleAction = () => {
    logCustomEvent('custom_action', { extra_data: 'value' });
  };
  
  return (
    <button onClick={handleAction}>
      Do Something
    </button>
  );
}
```

## Privacy Considerations

The analytics implementation respects user privacy:

1. Only functional data is collected (no personally identifiable information).
2. Data is anonymized and aggregated in Firebase Analytics.
3. The implementation complies with privacy regulations for analytics.

## Troubleshooting

If events aren't showing up in Firebase:

1. Check that your Firebase configuration in `.env.local` is correct.
2. Verify Firebase Analytics is initialized properly.
3. Use the Firebase Debug View to see real-time events during testing.
4. Check browser console for any initialization errors. 