import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Hero() {
  return (
    <div className="container py-16 md:py-15">
      <Card className="hero-gradient relative overflow-hidden rounded-2xl border bg-background/50 p-8 backdrop-blur-sm">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative z-10">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Available for hire
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Senior<br />Front End Developer
            </h1>
            <h2 className="mb-4 text-xl font-medium text-muted-foreground md:text-2xl">
              React · React Native · TypeScript Expert
            </h2>
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
                  {/* <DropdownMenuItem asChild>
                    <a href="#contact" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Form
                    </a>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="lg" variant="outline" className="rounded-full text-base">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
              <div className="relative h-[300px] w-[300px]">
                <Image
                  src="/images/nolanpotier.jpg"
                  alt="Profile"
                  className="rounded-full border-4 border-background object-cover shadow-xl"
                  width={300}
                  height={300}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}