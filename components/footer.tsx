"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function Footer() {
  const { logSocialLinkClick, logContactClick } = useAnalytics();

  const handleSocialClick = (platform: string) => {
    logSocialLinkClick(platform);
  };

  const handleContactClick = () => {
    logContactClick('email');
  };

  return (
    <footer className="w-full border-t border-t-slate-200 dark:border-t-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/nahani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                  onClick={() => handleSocialClick('github')}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/nolan-potier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                  onClick={() => handleSocialClick('linkedin')}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:contact@nolanpotier.dev"
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                  onClick={handleContactClick}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Nolan Potier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 