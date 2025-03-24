import { Card } from '@/components/ui/card';
import { ExpertiseCategory } from '@/types/expertise';

interface ExpertiseCardProps extends ExpertiseCategory {}

export function ExpertiseCard({ title, icon: Icon, skills }: ExpertiseCardProps) {
  return (
    <Card className="p-8 transition-all hover:shadow-lg">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
} 