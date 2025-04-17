# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my professional experience, projects, and expertise in front-end development.

## Features

- 🎨 Modern and clean design with dark/light mode support
- ⚡ Built with Next.js 15 for optimal performance
- 📱 Fully responsive design for all devices
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 🖼️ Optimized image loading with Next.js Image component
- 🎯 Project showcase with interactive carousel
- 📊 Timeline of professional experience
- 💡 Expertise section highlighting technical skills
- 📈 Firebase Analytics integration for visitor tracking and insights

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Markdown:** react-markdown, marked
- **Typography:** @tailwindcss/typography
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Analytics:** Firebase Analytics
- **Deployment:** Firebase App Hosting

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn package manager
- Firebase project (for analytics)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nahani/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase project details

```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-nextjs/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── expertise/        # Expertise section components
│   ├── projects/         # Project showcase components
│   ├── profile/          # Profile related components
│   ├── timeline/         # Timeline components
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   └── images/          # Image assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Key Components

- **Hero Section:** Introduction with profile image and key skills
- **Projects:** Interactive showcase of portfolio projects
- **Timeline:** Chronological view of professional experience
- **Expertise:** Technical skills and expertise areas
- **Image Modal:** Optimized image viewing experience
- **Project Carousel:** Smooth project navigation

## Performance Optimizations

- Image optimization using Next.js Image component
- Client-side components isolated where necessary
- Efficient loading states and transitions
- Responsive image sizing
- Optimized font loading

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Email: contact@nolanpotier.dev
- LinkedIn: [Nolan Potier](https://linkedin.com/in/nolan-potier) 