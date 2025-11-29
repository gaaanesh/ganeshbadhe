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
// import WorkSection from '@/components/sections/work';
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
        url: 'https://ganeshbadhe.in/images/homeutilities-landing-preview.jpg',
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
        <div className="px-4 pt-16 flex flex-col justify-start items-center gap-14">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center">
              <div className="text-center justify-center text-theme-foreground text-xs font-semibold leading-4">Landing Page Design</div>
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
              <div className="text-center justify-center text-theme-foreground text-4xl font-bold leading-10">HomeUtilities – Smart Expiry Tracker App</div>
              <div className="text-center justify-center text-theme-muted-foreground text-xl font-normal leading-7">Landing Page Design | UX + UI Concept</div>
            </div>
          </div>
        </div>

        <div className="self-stretch p-4 inline-flex justify-center items-center gap-8">
          <div className="flex-1 flex justify-center items-center gap-4">
            {/* <div className="w-[730px] h-[484px] bg-zinc-300 rounded-3xl shadow-2xl border border-theme-border"></div> */}
            {/* <img className="rounded-3xl" src="https://placehold.co/727x485" /> */}
            <Image
              src={HomeUtilitiesDesktop}
              alt="HomeUtilities"
              className="z-10 max-w-4xl w-full"
            ></Image>
            {/* <Image
              src={HomeUtilitiesMobile}
              alt="HomeUtilities DesktopBanner"
              className="z-10 w-[272px] -ml-12"
            ></Image> */}
            {/* <img className="rounded-2xl shadow-2xl border border-theme-border" src="https://placehold.co/223x483" /> */}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 md:gap-12 md:px-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-theme-secondary-foreground text-2xl font-bold leading-8">Background</div>
            <div className="self-stretch justify-center"><span className="text-lg font-normal leading-7">HomeUtilities is a smart expiry tracking app designed to help users reduce food and medicine waste effortlessly. The app lets users simply snap a photo of their groceries or medicines, and it automatically detects expiry dates, sends timely reminders, and even suggests recipes for ingredients nearing expiry.<br/><br/>The goal of this landing page was to </span><span className="text-lg font-bold leading-7">convert visitors into app downloads </span><span className="text-lg font-normal leading-7">by communicating the product’s value quickly and visually.</span></div>
          </div>
        

        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-theme-secondary-foreground text-2xl font-bold leading-8">Role</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch inline-flex justify-start items-start">
                <div className="justify-center text-theme-muted-foreground text-base font-normal leading-6"> </div>
                <div className="flex-1 justify-center"><span className="text-base font-bold leading-6">Project Type:</span><span className="text-base font-normal leading-6"> UX/UI Design – Landing Page Design</span></div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start">
                <div className="justify-center text-theme-muted-foreground text-base font-normal leading-6"> </div>
                <div className="flex-1 justify-center"><span className="text-base font-bold leading-6">Timeline:</span><span className="text-base font-normal leading-6"> 2 weeks</span></div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start">
                <div className="justify-center text-theme-muted-foreground text-base font-normal leading-6"> </div>
                <div className="flex-1 justify-center"><span className="text-base font-bold leading-6">Role:</span><span className="text-base font-normal leading-6"> Product Designer (UX/UI)</span></div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start">
                <div className="justify-center text-theme-muted-foreground text-base font-normal leading-6"> </div>
                <div className="flex-1 justify-center"><span className="text-base font-bold leading-6">Tools:</span><span className="text-base font-normal leading-6"> Figma, Adobe Illustrator, Photoshop</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="justify-center text-theme-secondary-foreground text-3xl font-bold leading-9">Challenge</div>
          <div className="self-stretch justify-center"><span className="text-base font-normal leading-6">Many people forget expiry dates of groceries or medicines, leading to unnecessary waste and financial loss. The challenge was to </span><span className="text-base font-bold leading-6">design a landing page that communicates trust, simplicity and usefulness</span><span className="text-base font-normal leading-6"> - all within a few seconds of a visitor arriving.</span></div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="justify-center text-theme-secondary-foreground text-3xl font-bold leading-9">Design Objectives</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <ul className='list-decimal ml-5'>
              <li className='py-1'>
                <span className="text-base font-bold leading-6">Instant Clarity:</span><span className="text-base font-normal leading-6"> Use bold copy and clean hierarchy to make the value proposition clear (“Your Home, Closer Than Ever!”).</span>
              </li>
              <li className='py-1'>
                <span className="text-base font-bold leading-6">Emotional Resonance:</span><span className="text-base font-normal leading-6"> Highlight relatable frustrations (tracking that medicine cabinet?, throwing expired food?) to trigger empathy and motivation.</span>
              </li>
              <li className='py-1'>
                <span className="text-base font-bold leading-6">Visual Storytelling:</span><span className="text-base font-normal leading-6"> Use mobile mockups to show the app’s core flow — photo capture, detection, reminders, and recipe suggestions.</span>
              </li>
              <li className='py-1'>
                <span className="text-base font-semibold leading-6">Smooth Conversion Flow:</span><span className="text-base font-normal leading-6"> Include clear CTAs (“Get on App Store / Play Store”) and concise FAQ to handle last-minute objections.</span>
              </li>
            </ul>
        </div>
            
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="w-72 h-10 justify-center text-theme-secondary-foreground text-3xl font-bold leading-9">UX Approach</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <ul className='list-disc ml-5'>
              <li>
                <div className="flex-1 justify-center py-1"><span className="text-base font-semibold leading-6">Problem Framing: </span><span className="text-base font-normal leading-6">Started by identifying daily struggles of users who often forget expiry dates or overstock groceries.</span></div>
              </li>
              <li>
                <div className="flex-1 justify-center py-1"><span className="text-base font-semibold leading-6">Content Hierarchy & Flow: </span><span className="text-base font-normal leading-6">Created a concise one-page layout that guides users through awareness → understanding → conversion.</span></div>
              </li>
              <li>
                <div className="flex-1 justify-center py-1"><span className="text-base font-semibold leading-6">Copy Strategy: </span><span className="text-base font-normal leading-6">Framed messaging around outcomes (“Save Money”, “Stay Fresh”, “Cook Smart Recipes”) rather than features.</span></div>
              </li>
              <li>
                <div className="flex-1 justify-center py-1"><span className="text-base font-semibold leading-6">Visual Hierarchy: </span><span className="text-base font-normal leading-6">Designed clear contrast between blue gradients (trust and freshness) and clean white space for legibility.</span></div>
              </li>
            </ul>
          
          </div>
        </div>
      </div>

        <section className="w-full max-w-5xl py-16 gap-6 px-4 md:gap-12 md:px-8">
          <div className="justify-center text-theme-secondary-foreground text-3xl font-bold leading-9 mb-5">UI Design Highlights</div>
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 md:gap-0">
            <div className="flex w-full flex-col mb-5 md:mb-0 justify-between md:gap-12 gap-8 md:flex-row">
              <div className="flex justify-center md:order-first md:justify-end md:w-1/2">
                <Image
              src={heroSectionImg}
              alt=""
              className="z-10 border md:border-0 md:shadow-2xl shadow-xl md:shadow-gray-500 shadow-gray-300 rounded-t-2xl"
              style={{ objectFit: 'cover' }}
            ></Image>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2 self-center">
                <div className="self-stretch justify-center px-2">
                  <span className="text-base font-bold leading-6">Hero Section<br/></span>
                  <span className="text-base font-normal leading-6">Combines a bold promise, a real app mockup, and direct CTAs to drive immediate engagement.</span>
                </div>

              </div>
            </div>

            <div className="flex w-full flex-col mb-5 md:mb-0 justify-between md:gap-12 gap-8 md:flex-row md:bg-gray-100 md:dark:bg-gray-50">
              <div className="flex justify-center md:order-first md:justify-end md:w-1/2">
                <Image
              src={problemSolutionFlowImg}
              alt=""
              className="z-10 border md:border-0 md:shadow-2xl shadow-xl md:shadow-gray-500 shadow-gray-300"
              style={{ objectFit: 'cover' }}
            ></Image>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2 self-center">
                <div className="self-stretch justify-center px-2">
                  <span className="text-base font-bold leading-6">Problem–Solution Flow<br/></span>
                  <span className="text-base font-normal leading-6">Sections like “Are you tired of…” and “What if you could…” build a logical narrative.</span>
                </div>

              </div>
            </div>

            <div className="flex w-full flex-col mb-5 md:mb-0 justify-between md:gap-12 gap-8 md:flex-row">
              <div className="flex justify-center md:order-first md:justify-end md:w-1/2">
                <Image
              src={howItWorksImg}
              alt=""
              className="z-10 border md:border-0 md:shadow-2xl shadow-xl md:shadow-gray-500 shadow-gray-300"
              style={{ objectFit: 'cover' }}
            ></Image>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2 self-center">
                <div className="self-stretch justify-center px-2">
                  <span className="text-base font-bold leading-6">How It Works<br/></span>
                  <span className="text-base font-normal leading-6">Step-by-step visual explanation reduces cognitive load and boosts comprehension.</span>
                </div>

              </div>
            </div>

            <div className="flex w-full flex-col mb-5 md:mb-0 justify-between md:gap-12 gap-8 md:flex-row md:bg-gray-100 md:dark:bg-gray-50">
              <div className="flex justify-center md:order-first md:justify-end md:w-1/2">
                <Image
              src={FAQSectionHomeImg}
              alt=""
              className="z-10 border md:border-0 md:shadow-2xl shadow-xl md:shadow-gray-500 shadow-gray-300 rounded-b-2xl"
              style={{ objectFit: 'cover' }}
            ></Image>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2 self-center">
                <div className="self-stretch justify-center px-2">
                  <span className="text-base font-bold leading-6">FAQ Section<br/></span>
                  <span className="text-base font-normal leading-6">Addresses potential user concerns, building confidence and transparency.</span>
                </div>
              </div>
            </div>


          </div>
        </section>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="w-72 h-10 justify-center text-theme-secondary-foreground text-3xl font-bold leading-9">Outcome</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch justify-center"><span className="text-base font-normal leading-6">The landing page effectively delivers a sense of </span><span className='font-bold inline'>trust, clarity, and ease, encouraging users </span><span className="text-base font-normal leading-6">to take action instantly. It showcases the product’s purpose, functionality, and emotional benefit in a cohesive, modern design.</span></div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-4">
          <div className="w-72 h-10 justify-center text-theme-secondary-foreground text-3xl font-bold leading-9">Next Steps</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch justify-center"><span className="text-base font-normal leading-6">In future iterations, the focus would be on </span><span className='font-bold inline'>A/B testing headlines, CTA placement, and personalized visuals </span><span className="text-base font-normal leading-6">to further optimize conversions.</span></div>
          </div>
        </div>

      </div>
      </div>
      {/* <AboutMeSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}