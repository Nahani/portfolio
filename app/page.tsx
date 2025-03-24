import { Hero } from '@/components/hero';
import { Timeline } from '@/components/timeline';
import { Projects } from '@/components/projects';
import { TechnicalExpertise } from '@/components/expertise';

export default function Home() {
  return (
    <>
      <Hero />
      <TechnicalExpertise />
      <Timeline />
      <Projects />
    </>
  );
}