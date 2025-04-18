import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfileImage } from '@/components/hero/profile-image';

export function Hero() {
  return (
    <div className="container py-8 md:py-14">
      <Card className="hero-gradient relative overflow-hidden rounded-2xl border bg-background/50 p-8 backdrop-blur-sm">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative z-10">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Available for hire
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Senior<br />Front End Developer
            </h1>
            <div className="mb-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-lg cursor-default">
                <Image
                  src="/images/icons/react.svg"
                  alt="React"
                  width={20}
                  height={20}
                  className="text-primary md:w-[24px] md:h-[24px] transition-transform duration-300 group-hover:rotate-12"
                />
                <span className="text-sm md:text-base">React</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-lg cursor-default">
                <Image
                  src="/images/icons/next-js.svg"
                  alt="Next.js"
                  width={20}
                  height={20}
                  className="text-primary md:w-[26px] md:h-[26px] transition-transform duration-300 group-hover:rotate-12"
                />
                <span className="text-sm md:text-base">Next.js</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-lg cursor-default">
                <Image
                  src="/images/icons/react-native.svg"
                  alt="React Native"
                  width={20}
                  height={20}
                  className="text-primary md:w-[24px] md:h-[24px] transition-transform duration-300 group-hover:rotate-12"
                />
                <span className="text-sm md:text-base">React Native</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-lg cursor-default">
                <Image
                  src="/images/icons/typescript.svg"
                  alt="TypeScript"
                  width={20}
                  height={20}
                  className="text-primary md:w-[24px] md:h-[24px] transition-transform duration-300 group-hover:rotate-12"
                />
                <span className="text-sm md:text-base">TypeScript</span>
              </div>
            </div>
            <p className="mb-8 max-w-[600px] text-lg text-muted-foreground">
              With over 10 years of experience building scalable applications and leading development teams.
              Specialized in creating exceptional user experiences with modern web technologies.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="rounded-full text-base">
                    Get in Touch
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <a href="mailto:nolanpotier@gmail.com" className="flex items-center cursor-pointer w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://linkedin.com/in/nolan-potier" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer w-full">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#projects">
              <Button size="lg" variant="outline" className="rounded-full text-base">
                View Projects
              </Button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
      </Card>
    </div>
  );
}