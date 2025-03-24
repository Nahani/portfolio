import { ProjectCard } from './project-card';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="container pb-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A collection of most impactful projects I&apos;ve worked on.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
} 