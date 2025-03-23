import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led development of enterprise React applications, mentored junior developers, and implemented CI/CD pipelines.',
  },
  {
    title: 'React Native Developer',
    company: 'Mobile Solutions Inc',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple React Native applications with complex state management and real-time features.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Agency',
    period: '2016 - 2018',
    description: 'Built responsive web applications using React and TypeScript, focusing on performance and accessibility.',
  },
];

export function Timeline() {
  return (
    <section id="experience" className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Professional Experience</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A journey through my professional career, showcasing my growth and expertise in web and mobile development.
        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="timeline-card relative overflow-hidden border bg-background/50 backdrop-blur-sm">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary/50" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">{experience.title}</span>
                <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium">
                  {experience.period}
                </span>
              </CardTitle>
              <p className="text-lg font-medium text-primary">{experience.company}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}