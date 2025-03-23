import { Card } from '@/components/ui/card';
import { Monitor, Smartphone, Server } from 'lucide-react';

export function TechnicalExpertise() {
  const expertise = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: [
        'React & React Hooks',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        'React Native',
        'Expo',
        'Native APIs',
        'App Store Deployment (Fastlane)',
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        'Node.js',
        'Serverless cloud functions (AWS - GCP)',
        'Docker',
      ],
    },
  ];

  return (
    <section className="container pt-10" id="expertise">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
          Mastering modern technologies to build powerful, scalable, and user-centric applications
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {expertise.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="p-8 transition-all hover:shadow-lg">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
} 