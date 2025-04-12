export const projects = [
  {
    title: 'Symphony Messaging',
    description: `Symphony Messaging is a secure communication platform for financial institutions, serving over 600,000 users across 1,300+ financial institutions worldwide, with a presence in more than 8,900 companies.

- Features an encrypted messaging infrastructure with end-to-end encryption, ensuring all communications remain secure and private even in highly regulated environments

- Provides comprehensive collaboration tools including persistent chat, voice, video conferencing, screen sharing, and file transfer capabilities in a unified interface

- Features an industry-leading 99.9% service availability rate, ensuring business continuity through robust, redundant architecture

- Ensures regulatory compliance with built-in message retention, advanced surveillance capabilities, and complete audit trails to meet global financial regulations including GDPR, MiFID II, and FINRA requirements

- Enables workflow automation through low-code bot development and AI-powered agents, integrated with commonly used financial services tools

- Integrates seamlessly with critical financial systems and third-party applications through an open API architecture, enabling straight-through processing and enhanced workflow efficiency`,
    technologies: ['React', 'TypeScript', 'Electron'],
    demo: 'https://symphony.com/',
    images: [
      {
        src: '/images/projects/symphony/sym1.png',
        alt: 'E-commerce Platform Homepage'
      },
      {
        src: '/images/projects/symphony/sym2.png',
        alt: 'E-commerce Platform Product Page'
      },
      {
        src: '/images/projects/symphony/sym3.png',
        alt: 'E-commerce Platform Cart'
      }
    ]
  },
  {
    title: 'Livestream Calculator',
    description: `Livestream Calculator is a modern, responsive Progressive Web App (PWA) for traders to calculate optimal position sizing based on risk management parameters. Developed in partnership with famous French Trader Romain Bailleul.

- Calculates maximum position sizes based on drawdown amount, stop loss in points, and trading platform rules

- Supports multiple trading platforms including TopStep, APEX, FTMO/WGF, and UFUNDED with their specific risk management rules

- Provides optimized combinations of mini and micro contracts to maximize position size while staying within risk limits

- Features visual indicators for different contract types and warnings when positions exceed maximum allowed loss

- Includes alternative position sizing options within 2% of maximum allowed loss for flexibility

- Automatically detects browser language and supports both English and French interfaces with full localization

- Installable as a Progressive Web App (PWA) for mobile and desktop use`,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Firebase'],
    demo: 'https://livestream-calculator.web.app',
    github: 'https://github.com/Nahani/livestream-calculator',
    youtubeId: 'ZbYSCnfa86c',
    images: [
      {
        src: '/images/projects/lst-calculator/screenshot_dark.jpg',
        alt: 'Livestream Calculator Dark Mode'
      },
      {
        src: '/images/projects/lst-calculator/screenshot_light.jpg',
        alt: 'Livestream Calculator Light Mode'
      },
      {
        src: '/images/projects/lst-calculator/mobile.jpg',
        alt: 'Livestream Calculator Mobile'
      },
      

    ]
  },
  {
    title: 'First Land Of Poker',
    description: `First Land Of Poker (FLOP) is a social poker app designed to unite poker enthusiasts worldwide. The app was developed for WeOpt, with poker legend Patrik Antonius as its ambassador.

- Enables users to connect with friends by adding them to their "crew" and share poker content including photos, videos, and status updates
    
- Features an interactive experience where players can share their current games, view real-time information about ongoing games, and invite others to join
    
- Includes an extensive casino directory filterable by location and name, making it easy for players to find games whether at home or traveling
    
- Provides tournament festival schedules and event information, with plans for future integration of live tournament updates, registration capabilities, and bankroll tracking
    
The app was officially launched during the Patrik Antonius Poker Challenge (PAPC) in Tallinn, Estonia, and available on both Apple's App Store and Google Play.`,
    technologies: ['React Native', 'TypeScript', 'Redux', 'AWS'],
    demo: 'https://firstlandofpoker.com/fr/flop-app',
    images: [
      {
        src: '/images/projects/flop/chat.jpg',
        alt: 'First Land Of Poker Chat'
      },
      {
        src: '/images/projects/flop/profile.jpg',
        alt: 'First Land Of Poker Profile'
      },
      {
        src: '/images/projects/flop/find.jpg',
        alt: 'First Land Of Poker Find'
      },
      {
        src: '/images/projects/flop/keep.jpg',
        alt: 'First Land Of Poker Keep'
      },
      {
        src: '/images/projects/flop/news.jpg',
        alt: 'First Land Of Poker News'
      },
      {
        src: '/images/projects/flop/share.jpg',
        alt: 'First Land Of Poker Share'
      },
    ]
  },
  {
    title: 'Le Petit Livreur',
    description: `Le Petit Livreur is a delivery platform with three separate applications, built with React Native and Expo:

- The customer app allows users to browse products, create a cart, and place orders seamlessly.

- The business app enables merchants to receive orders in real time and manage their product catalog efficiently.

- The driver app provides real-time background geolocation tracking and instant notifications to optimize deliveries.

The platform includes a complete Stripe payment integration that processes customer payments and automates weekly transfers to businesses and delivery drivers. The system automatically generates and sends invoices to customers and detailed weekly transaction reports to both businesses and delivery drivers.

Over 60 businesses in the Cannes area use the platform, which has grown to 15,000 active users and 35,000 downloads on the Apple Store and Google Play.`,
    technologies: ['React Native', 'Expo', 'Firebase', 'Stripe'],
    images: [
      {
        src: '/images/projects/lpl/lpl2.jpg',
        alt: 'Le Petit Livreur Shops'
      },
      {
        src: '/images/projects/lpl/lpl1.jpg',
        alt: 'Le Petit Livreur Homepage'
      },
      {
        src: '/images/projects/lpl/lpl3.jpg',
        alt: 'Le Petit Livreur Shoppings'
      },
      {
        src: '/images/projects/lpl/lpl4.png',
        alt: 'Le Petit Livreur Shoppings List'
      },
      {
        src: '/images/projects/lpl/lpl5.jpg',
        alt: 'Le Petit Livreur Stripe'
      },
      {
        src: '/images/projects/lpl/lpl6.jpg',
        alt: 'Le Petit Livreur Print Ticket'
      },
      {
        src: '/images/projects/lpl/lpl7.jpg',
        alt: 'Le Petit Livreur Flyer'
      },
      {
        src: '/images/projects/lpl/lpl8.jpg',
        alt: 'Le Petit Livreur Daily News'
      },
    ]
  },
]; 