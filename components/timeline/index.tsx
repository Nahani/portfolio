import { experiences } from '@/data/experiences';
import { TimelineCard } from './timeline-card';

export function Timeline() {
  return (
    <section id="experience" className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Professional Experience</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A decade of expertise in web and mobile development, from quality assurance to senior front-end engineering in fintech.
        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <TimelineCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
} 