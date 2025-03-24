import { expertiseCategories } from '@/data/expertise';
import { ExpertiseCard } from './expertise-card';

export function TechnicalExpertise() {
  return (
    <section className="container pt-10" id="expertise">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
          Mastering modern technologies to build powerful, scalable, and user-centric applications
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {expertiseCategories.map((category) => (
          <ExpertiseCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
} 