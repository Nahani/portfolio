"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import { ProjectCarousel } from './project-carousel';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  images: { src: string; alt: string }[];
}

export function ProjectCard({ title, description, technologies, github, demo, images }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border bg-background/50 backdrop-blur-sm">
      <ProjectCarousel images={images} />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-6 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {github && (
          <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {demo && (
          <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              Website
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 