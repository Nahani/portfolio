import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'React Native mobile app for task management with real-time updates and offline support.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard built with React and D3.js for data visualization.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A collection of my most impactful projects, demonstrating my expertise in various technologies.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="project-card flex h-full flex-col border bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-6 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}