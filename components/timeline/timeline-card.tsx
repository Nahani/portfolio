import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Experience } from '@/types/experience';

interface TimelineCardProps extends Experience {}

export function TimelineCard({ title, company, period, description, logo, technologies }: TimelineCardProps) {
  return (
    <Card className="timeline-card relative overflow-hidden border bg-background/50 backdrop-blur-sm">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary/50" />
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <p className="text-lg font-medium text-primary">{company}</p>
                </div>
                <span className="mt-1 md:mt-0 self-start md:self-auto rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                  {period}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 