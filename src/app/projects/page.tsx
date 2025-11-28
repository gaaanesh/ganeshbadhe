// import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import Image from 'next/image';

import SagarFullPose from '/public/images/ganeshbadhe-full-pose.jpg';
import HomeUtilitiesDesktop from '/public/images/homeUtilities-desktop-mobile-banner.png';
import heroSectionImg from '/public/images/hero-section-homeUtilities.jpg';
import problemSolutionFlowImg from '/public/images/problem-solution-flow-homeUtilities.jpg';
import howItWorksImg from '/public/images/how-It-Works-homeUtilities.jpg';
import FAQSectionHomeImg from '/public/images/FAQ-Section-homeUtilities.jpg';
// import AboutMeSection from '@/components/sections/about-me';
// import ServicesSection from '@/components/sections/services';
// import SkillsSection from '@/components/sections/skills';
// import ExperienceSection from '@/components/sections/experiences';
// import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection, { AllWorkSection } from '@/components/sections/work';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HomeUtilities Landing Page – UX/UI Case Study',
  description:
    'Discover the UX/UI design process behind HomeUtilities, a smart expiry tracker landing page built to reduce food and medicine waste through clear storytelling and conversion-focused design.',
  openGraph: {
    title: 'HomeUtilities Landing Page – UX/UI Case Study by Ganesh Badhe',
    description:
      'A clean, conversion-focused landing page for HomeUtilities — designed to help users save money and reduce waste with smart expiry tracking and reminders.',
    url: '/public/images/homeUtilities-desktop-mobile-banner.png',
    images: [
      {
        url: 'https://ganeshbadhe.dev/images/homeutilities-landing-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'HomeUtilities Landing Page Preview – UX/UI Design by Ganesh Badhe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeUtilities Landing Page – UX/UI Case Study by Ganesh Badhe',
    description:
      'UX/UI case study showcasing the design process behind HomeUtilities, a smart expiry tracker landing page focused on clarity, empathy, and conversion-driven storytelling.',
    images: ['/public/images/homeUtilities-desktop-mobile-banner.png'],
    creator: '@gbbadhe', // optional – add your handle if available
  },
};



export default function LandingPage() {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="inline-flex flex-col justify-start items-center">
        <div className="px-4 pt-16 flex flex-col justify-start items-center gap-14 max-w-4xl">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center">
              <div className="text-center justify-center text-theme-foreground text-xs font-semibold leading-4">Selected Works</div>
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
              <div className="text-center justify-center text-theme-foreground text-4xl font-bold leading-10">UX/UI Design & Frontend Projects</div>
              <div className="text-center justify-center text-theme-muted-foreground text-xl font-normal leading-7">A curated selection of projects and case studies combining user-centered design, thoughtful interfaces, and front-end craftsmanship...</div>
            </div>
          </div>
        </div>

        </div>
        <AllWorkSection />
      {/* <AboutMeSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      
      <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}