import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const experiences = [
  {
    title: 'Senior Front-End Engineer | React | TypeScript | FinTech',
    company: 'Symphony',
    period: 'July 2020 - Present',
    description: 'At Symphony Communication, I design and develop high-performance, secure user interfaces for the leading financial services communication. My expertise in React, TypeScript, and modern front-end architectures enhances user experience.',
    logo: '/images/companies/symphony.jpg',
  },
  {
    title: 'Founder',
    company: 'Le Petit Livreur',
    period: 'January 2018 - January 2023',
    description: 'Le Petit Livreur provides delivery services to more than 60 businesses in the Cannes area. The platform has grown to 15,000 active users with 35,000 app downloads on Apple Store and Google Play.',
    logo: '/images/companies/lepetitlivreur.jpg',
  },
  {
    title: 'Front-End Engineer | React | React Native | TypeScript',
    company: 'WeOpt',
    period: 'February 2018 - July 2020',
    description: 'As a Front End Engineer, I developed web and mobile apps to meet design requirements and fulfill user stories. I also managed production deployments using React JS, React Native, GitLab CI/CD, and AWS.',
    logo: '/images/companies/weopt.jpg',
  },
  {
    title: 'QA Engineer',
    company: 'Amadeus IT Group',
    period: 'October 2014 - September 2018',
    description: 'Led QA initiatives in the R&D-RDM-CBT (Payment & Ticketing) department, focusing on payment product validation. Key responsibilities included determining test objectives, reviewing specifications, creating test plans, and managing defects. Technologies: Python, SQL, REST, Selenium, HP ALM, Jira, Scrum, ISTQB.',
    logo: '/images/companies/amadeus.jpg',
  },
  {
    title: 'Developer',
    company: 'CFM Monaco - Private Banking',
    period: 'March 2014 - September 2014',
    description: 'Designed and developed intranet applications to streamline and automate internal bank workflows. Gathered and analyzed requirements from various bank departments to create software solutions that improved efficiency and productivity. Technologies: SharePoint, C# .NET.',
    logo: '/images/companies/indosuez.png',
  },
];

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
          <Card key={index} className="timeline-card relative overflow-hidden border bg-background/50 backdrop-blur-sm">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary/50" />
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{experience.title}</span>
                    <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium">
                      {experience.period}
                    </span>
                  </CardTitle>
                  <p className="text-lg font-medium text-primary">{experience.company}</p>
                </div>
              </div>
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