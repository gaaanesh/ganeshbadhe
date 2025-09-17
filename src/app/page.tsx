import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import ServicesSection from '@/components/sections/services';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
