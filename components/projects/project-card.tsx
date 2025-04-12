"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { ProjectCarousel } from './project-carousel';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  images: { src: string; alt: string }[];
  youtubeId?: string;
}

export function ProjectCard({ title, description, technologies, github, demo, images, youtubeId }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get the first paragraph (everything before the first line break)
  const firstParagraph = description.split('\n\n')[0];
  
  // Determine if there is more content to show
  const hasMoreContent = description.length > firstParagraph.length;

  return (
    <Card className="flex h-full flex-col overflow-hidden border bg-background/50 backdrop-blur-sm">
      <ProjectCarousel images={images} />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {youtubeId && (
          <div className="aspect-video w-full mb-6">
            <iframe 
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="mb-6 text-muted-foreground">
          <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
            <ReactMarkdown>
              {isExpanded ? description : firstParagraph}
            </ReactMarkdown>
          </div>
          {hasMoreContent && (
            <Button 
              variant="link" 
              size="sm" 
              className="mt-2 flex items-center gap-1 text-xs text-primary hover:text-primary/80"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show more <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
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