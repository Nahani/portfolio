'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';

export function Header() {
  const { logSocialLinkClick, logContactClick } = useAnalytics();

  const handleSocialClick = (platform: string) => {
    logSocialLinkClick(platform);
  };

  const handleContactClick = () => {
    logContactClick('email');
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold">Nolan Potier</span>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a 
                href="https://github.com/nahani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
                onClick={() => handleSocialClick('github')}
              >
                <Github className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a 
                href="https://linkedin.com/in/nolan-potier" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
                onClick={() => handleSocialClick('linkedin')}
              >
                <Linkedin className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a 
                href="mailto:contact@nolanpotier.dev" 
                className="flex items-center"
                onClick={handleContactClick}
              >
                <Mail className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Contact</span>
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}