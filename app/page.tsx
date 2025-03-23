import { Hero } from '@/components/hero';
import { Timeline } from '@/components/timeline';
import { Projects } from '@/components/projects';
import { TechnicalExpertise } from '@/components/technical-expertise';

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