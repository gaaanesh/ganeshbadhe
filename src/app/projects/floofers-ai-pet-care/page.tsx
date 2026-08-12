import ContactSection from '@/components/sections/contact';
import type { Metadata } from 'next';
import RevealObserver from './reveal-observer';
import Image from 'next/image';
import WatchCaseStudyLink from '@/components/sections/watch-case-study-link';

import heroFloofers from '/public/images/banner-hero-floofers.jpg';
import guidedUploadImg from '/public/images/projects/floofers-media/guided-upload.png';
import scanningStateImg from '/public/images/projects/floofers-media/scanning-state-visible-progress.png';
import resultScreenImg from '/public/images/projects/floofers-media/result-screen-verification-police-check.png';
import searchFiltersImg from '/public/images/projects/floofers-media/search-filters.png';
import matchingStateImg from '/public/images/projects/floofers-media/matching-state.png';
import rankedResultsAIImg from '/public/images/projects/floofers-media/ranked-results-AI.png';
import rankedResultsProfileImg from '/public/images/projects/floofers-media/ranked-results-profile.png';
import dynamicQuestionsImg from '/public/images/projects/floofers-media/dynamic-questions.png';
import aiProfileGeneratorStateImg from '/public/images/projects/floofers-media/AI-profile-genreator-state.png';
import aiProfileGenerateImg from '/public/images/projects/floofers-media/AI-profile-genreate.png';
import floofersAIUXFlowImg from '/public/images/projects/floofers-media/floofers-AI-UX-flow.png';
import verificationWireframesImg from '/public/images/projects/floofers-media/verification-wirframes.jpg';
import searchWireframesImg from '/public/images/projects/floofers-media/petsitter-Search-wireframes.jpg';
import profileWireframesImg from '/public/images/projects/floofers-media/gereate-profile-wireframes.jpg';
import oldVerificationImg from '/public/images/projects/floofers-media/old-verification.png';
import verificationFailedImg from '/public/images/projects/floofers-media/verification-failed-floofers.png';
import oldSearchResultImg from '/public/images/projects/floofers-media/old-search-result.png';
import oldProfileImg from '/public/images/projects/floofers-media/old-profile.png';
import profilePhotoDetailsImg from '/public/images/projects/floofers-media/profile-photo-details.png';
import chooseServiceImg from '/public/images/projects/floofers-media/choose-service.png';
import serviceAIRecommendationImg from '/public/images/projects/floofers-media/service-AI-recondation.png';
import choosePetTypeImg from '/public/images/projects/floofers-media/choose-pet-type.png';
import homeAddressImg from '/public/images/projects/floofers-media/home-address.png';
export const metadata: Metadata = {
  title: 'Floofers — AI-Powered Pet Care | UX Case Study',
  description:
    'Making pet-sitting decisions 3x faster — and turning a slow, overwhelming booking process into one pet parents and sitters actually trust.',
  openGraph: {
    title: 'Floofers — AI-Powered Pet Care | UX Case Study by Ganesh Badhe',
    description:
      'Making pet-sitting decisions 3x faster — and turning a slow, overwhelming booking process into one pet parents and sitters actually trust.',
    images: [
      {
        url: 'https://ganeshbadhe.in/images/project-floofers.jpg',
        width: 1200,
        height: 630,
        alt: 'Floofers — UX Case Study Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floofers — AI-Powered Pet Care | UX Case Study by Ganesh Badhe',
    description:
      'UX/UI case study showcasing how targeted AI features transformed sitter verification, searching and profile creation for a pet-care platform.',
    images: ['/public/images/project-floofers.jpg'],
    creator: '@gbbadhe',
  },
};

export default function FloofersCaseStudyPage() {
  const placeholderStyle = {
    backgroundImage: 'repeating-linear-gradient(45deg, var(--placeholder-bg-1, #F9FAFB) 0, var(--placeholder-bg-1, #F9FAFB) 10px, var(--placeholder-bg-2, #F3F4F6) 10px, var(--placeholder-bg-2, #F3F4F6) 20px)'
  };

  return (
    <div className="text-theme-foreground bg-transparent antialiased">
      <RevealObserver />

      <main>
        {/* ============ HERO ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-10">
          <div className="reveal max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 bg-amber-100/60 dark:text-amber-300 dark:bg-amber-950/40 rounded-full px-3 py-1.5 border border-amber-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> UX/UI Case Study
            </span>
            <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight mt-6 font-bold text-theme-foreground text-gray-800 dark:text-white">
              Floofers: transforming <span className="text-theme-secondary-foreground italic font-normal">pet care</span> with AI intelligence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-theme-muted-foreground leading-relaxed max-w-2xl">
              Making pet-sitting decisions 3x faster — and turning a slow, overwhelming booking process into one pet parents and sitters actually trust.
            </p>

            <WatchCaseStudyLink
              videoUrl="https://player.vimeo.com/video/1133505199?h=e3a4b6e232"
              title="Floofers — AI-Powered Pet Care Case Study Overview"
              label="Watch Case Study Overview"
            />
          </div>

          {/* Hero image placeholder */}
          <div
            className="reveal mt-12 rounded-2xl border border-theme-border aspect-[16/8] flex flex-col items-center justify-center gap-2 text-theme-muted-foreground"
            style={placeholderStyle}
          >
            <Image
              src={heroFloofers}
              alt="Floofers"
              className="absolute z-10 border rounded-2xl"
              style={{ objectFit: 'cover' }}
            ></Image>
          </div>
        </section>

        {/* ============ IMPACT STRIP ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal mb-5 max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1">Projected impact</p>
            <p className="text-sm text-theme-muted-foreground leading-relaxed">
              Modeled from a funnel analysis built on Floofers&apos; historical conversion data at each stage (verification → search → booking). These are pre-launch projections, not live production numbers — methodology below.
            </p>
          </div>
          <div className="reveal grid sm:grid-cols-3 gap-6 md:gap-10 border-t border-theme-border pt-8">
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">95%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">faster sitter verification<br /><span className="text-theme-foreground/60">3–5 days → 2 hours</span></p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">65%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">less time spent searching<br /><span className="text-theme-foreground/60">23 min → 8 min</span></p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">171%<span className="text-lg align-top text-amber-700">↑</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">boost in booking conversion<br /><span className="text-theme-foreground/60">34% → 92%</span></p>
            </div>
          </div>
          <div className="reveal mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-theme-muted-foreground leading-relaxed italic">
            <span className="font-semibold not-italic text-amber-700 dark:text-amber-400">How this was modeled:</span> I mapped each redesigned step against Floofers&apos; existing funnel drop-off rates, then applied the expected time-on-task reduction from usability testing (n=8, moderated) to project conversion lift at each stage. Full assumptions available on request.
          </div>
        </section>

        {/* ============ ROLE / META BOX ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal border-y border-theme-border py-8 space-y-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">Role</p>
                <p className="font-semibold text-theme-foreground">UX/UI Design Consultant</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">Timeline</p>
                <p className="font-semibold text-theme-foreground">3 months</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">Tools</p>
                <p className="font-semibold text-theme-foreground">Figma, Adobe Illustrator, Photoshop</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">Collaborators</p>
                <p className="font-semibold text-theme-foreground">Founding team, data scientist, engineering</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-theme-border/60 text-sm">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">Constraints</p>
                <p className="text-theme-muted-foreground leading-relaxed">
                  3-month timeline, 1 designer, existing engineering team (no new hires for this project)
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">My role, specifically</p>
                <p className="text-theme-muted-foreground leading-relaxed">
                  Research synthesis, UX flows, UI design, AI-output copy/microcopy, human-in-the-loop logic
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BACKGROUND ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Background</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              Floofers connects pet parents with vetted sitters and dog walkers across Australia. The core experience worked — but three friction points were quietly costing the business growth and trust. I designed three targeted AI features to remove that friction, deliberately choosing not to turn the whole app into an &quot;AI product.&quot;
            </p>
          </div>
        </section>

        {/* ============ THE PROBLEM ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">The problem</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              Floofers successfully connected pet owners with sitters — but the experience was slow and overwhelming in three specific ways.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">01</p>
              <h3 className="font-bold text-theme-foreground mb-2">Slow verification</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Sitters waited 3–5 days for approval, capping how fast the platform could grow supply.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">02</p>
              <h3 className="font-bold text-theme-foreground mb-2">Choice overload</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Owners spent 23 minutes browsing hundreds of near-identical profiles before booking.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">03</p>
              <h3 className="font-bold text-theme-foreground mb-2">Generic profiles</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">New sitters didn&apos;t know what to highlight, so strong candidates struggled to get booked.</p>
            </div>
          </div>

          <div className="reveal rounded-2xl bg-gray-900 dark:bg-gray-600 text-white dark:text-gray-100 p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white dark:text-gray-100 mb-4">Business impact — baseline, pre-redesign</p>
            <div className="grid sm:grid-cols-4 gap-6">
              <div><p className="text-2xl font-bold text-white dark:text-gray-100">34%</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">booking abandonment</p></div>
              <div><p className="text-2xl font-bold text-white dark:text-gray-100">23 min</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">avg. decision time</p></div>
              <div><p className="text-2xl font-bold text-white dark:text-gray-100">3–5 days</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">verification delay</p></div>
              <div><p className="text-2xl font-bold text-white dark:text-gray-100">40+</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">daily support calls</p></div>
            </div>
          </div>
        </section>

        {/* ============ RESEARCH & DISCOVERY ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Research &amp; discovery</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              I paired stakeholder workshops with the Floofers founding team and direct conversations with pet owners and sitters to separate business assumptions from what people actually needed. I conducted 8 in-depth user interviews and analyzed over 40 survey responses to define the core pet-parent personas and their search habits.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">35% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Anxious First-Timer</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Wants:</span> total peace of mind before leaving their pet with a stranger.</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Frustration:</span> can&apos;t tell if a sitter is trustworthy from a profile alone.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;I read every review twice and still felt nervous.&quot;</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">45% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Busy Professional</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Wants:</span> reliable care booked in minutes, with a proven track record.</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Frustration:</span> too many similar-looking profiles to compare quickly.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;I don&apos;t have 20 minutes to compare sitters — I need the right one, fast.&quot;</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">20% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Special-Needs Pet Parent</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Wants:</span> a sitter who understands their pet&apos;s medical or behavioral needs.</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3"><span className="font-semibold text-theme-foreground">Frustration:</span> generic profiles never surface relevant experience.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;Most sitters say they&apos;re &apos;good with animals.&apos; I need someone who&apos;s handled insulin shots.&quot;</p>
            </div>
          </div>

          <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm w-full mt-4">
            <h3 className="font-bold text-theme-foreground mb-4 text-lg">What stakeholder interviews surfaced</h3>
            <ul className="space-y-2.5 text-sm text-theme-muted-foreground">
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> People expect the system to learn and adapt to their pet&apos;s preferences over time.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> Speed and automation were essential for verification to scale with growth.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> New sitters needed guidance to build a profile that actually gets booked.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> Transparency was the deciding factor in whether either side trusted the platform.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> A visible &quot;why this match&quot; reason built confidence faster than a rating alone.</li>
            </ul>
          </div>
        </section>

        {/* ============ FROM RESEARCH TO DIRECTION ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 border-t border-theme-border">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">From research to direction</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              After synthesizing 8 interviews and 40 survey responses, three friction points kept surfacing regardless of persona: verification speed, choice overload and profile clarity. I ran an affinity mapping session with the founding team to confirm these against business priorities before scoping any solution.
            </p>
          </div>

          {/* FigJam UX Flow Image */}
          <div className="reveal mb-10 overflow-hidden rounded-2xl border border-theme-border bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm p-4 md:p-6">
            <figure className="w-full">
              <div className="overflow-hidden rounded-xl border border-theme-border/60 bg-white dark:bg-gray-950 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src={floofersAIUXFlowImg}
                  alt="Floofers AI UX Flow — FigJam Research and Ideation Mapping"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-theme-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-theme-foreground">FigJam UX Flow &amp; Ideation Mapping</span>
                <span>User research synthesis, ideation process &amp; feature mapping</span>
              </figcaption>
            </figure>
          </div>

          {/* Affinity Map Board / Image Provision */}
          <div className="reveal mb-10 rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
              <div>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Research Synthesis</span>
                <h3 className="font-bold text-theme-foreground text-lg">Affinity Map — Interview &amp; Survey Clusters</h3>
              </div>
              <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                n=40 survey • n=8 interviews
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/50 p-5 bg-amber-500/5 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-300">Cluster 01</span>
                  </div>
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Verification Bottleneck</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-amber-200/50 dark:border-amber-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-[9px] font-semibold text-amber-800 dark:text-amber-300 rounded">Sitter Quote</span>
                      <p className="italic pt-1">&quot;Waiting 5 days kills my onboarding momentum as a new sitter.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-amber-200/50 dark:border-amber-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-[9px] font-semibold text-amber-800 dark:text-amber-300 rounded">Sitter Quote</span>
                      <p className="italic pt-1">&quot;Applications fail with zero explanation on what went wrong.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 text-xs">
                  <span className="text-[10px] text-theme-muted-foreground uppercase font-mono block">Design Direction:</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400">Instant AI Scan + Human Fallback</span>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200/80 dark:border-indigo-900/50 p-5 bg-indigo-500/5 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-700 dark:text-indigo-300">Cluster 02</span>
                  </div>
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Choice Overload</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-indigo-200/50 dark:border-indigo-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-indigo-100 dark:bg-indigo-950 text-[9px] font-semibold text-indigo-800 dark:text-indigo-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1">&quot;Every sitter profile looks identical — 5 stars and generic bios.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-indigo-200/50 dark:border-indigo-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-indigo-100 dark:bg-indigo-950 text-[9px] font-semibold text-indigo-800 dark:text-indigo-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1">&quot;I scroll for 20 minutes and still feel unsure if they fit my pet.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-indigo-900/40 text-xs">
                  <span className="text-[10px] text-theme-muted-foreground uppercase font-mono block">Design Direction:</span>
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">Preference-Based Match Reasoning</span>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 p-5 bg-emerald-500/5 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-700 dark:text-emerald-300">Cluster 03</span>
                  </div>
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Generic Profiles</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-emerald-200/50 dark:border-emerald-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1">&quot;Sitters just write &apos;I love animals&apos; instead of relevant skills.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-emerald-200/50 dark:border-emerald-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1">&quot;Specialized experience (e.g. senior dogs, medical) gets buried.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs">
                  <span className="text-[10px] text-theme-muted-foreground uppercase font-mono block">Design Direction:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">Assisted Draft Profile Builder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DESIGN STRATEGY INTRO / SIGNATURE PULL QUOTE ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="reveal border-b border-theme-border pb-12 md:py-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <p className="italic text-2xl md:text-3xl lg:text-4xl leading-snug text-theme-foreground font-bold">
                  &quot;Instead of adding AI everywhere, I focused on the three moments that mattered most to users.&quot;
                </p>
              </div>
              <div className="w-full max-w-[312px] shrink-0 flex justify-center">
                <video
                  src="/images/projects/floofers-media/Floofers%20AI-product%20screens.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-[312px] rounded-3xl border border-2 border-theme-border object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION 1 ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 01</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">Quick verification for pet sitters</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-base">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The problem, closer up</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">New sitters faced a frustrating cycle: upload documents, wait 3–5 days, often resubmit corrections, wait again. It bottlenecked platform growth and frustrated exactly the applicants Floofers most wanted to keep.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">An AI-powered verification flow that gives instant feedback, while keeping a person in the loop for anything it isn&apos;t confident about.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Hybrid Logic Pivot
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Early direction &amp; key pivot:</span> I first explored a fully automated pass/fail verification with no human step to achieve the fastest possible turnaround. However, usability testing showed sitters didn&apos;t trust a decision with zero visible reasoning, and stakeholders were uncomfortable auto-rejecting real applicants due to OCR misreads. We pivoted to a hybrid model: instant AI scanning for clear approvals, with flagged cases routing seamlessly to human review.
              </p>

              {/* Real Wireframe Image Board */}
              <div className="mb-6 overflow-hidden rounded-xl border border-theme-border/70 bg-white dark:bg-gray-950 p-3 shadow-sm">
                <figure className="w-full">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={verificationWireframesImg}
                      alt="Verification flow early low-fidelity wireframe explorations collage"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-theme-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-theme-border/40 pt-2">
                    <span className="font-semibold text-theme-foreground">Early Wireframe Iterations — Verification &amp; Document Upload Flow</span>
                    <span>Exploring instant feedback states &amp; human fallback logic</span>
                  </figcaption>
                </figure>
              </div>

              {/* Sr. Product Designer Rationale Card */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Initial Exploration: 100% Automated Auto-Pass/Fail</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Attempted a black-box decision screen with no explanation. Testing revealed sitters felt anxious when documents were flagged without guidance, and OCR misreads created customer support spikes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted Pivot: Hybrid AI Scan + Accredited Human Review</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    AI processes clean documents in under 2 hours with a transparent &quot;scanning progress&quot; state. Anything ambiguous routes to human review (Certn.co) without rejecting the applicant outright.
                  </p>
                </div>
              </div>
            </div>

            {/* Before & After Experience Comparison */}
            <div className="reveal mb-10 rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Experience Transformation</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Before &amp; After Experience</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Legacy Process vs. Redesigned Flow
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-200/60 dark:border-red-900/40 bg-red-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-[10px] font-bold uppercase tracking-wider">
                        BEFORE — LEGACY EXPERIENCE
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <Image
                        src={oldVerificationImg}
                        alt="Legacy verification process"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-red-200/40 dark:border-red-900/30">
                    <span className="font-semibold text-red-700 dark:text-red-400 block mb-0.5">Friction points:</span>
                    3–5 day manual review delay, opaque verification status, high application drop-off.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        AFTER — REDESIGNED AI FLOW
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <video
                        src="/images/projects/floofers-media/solution-1-Quick-verification-pet-sitters.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-emerald-200/40 dark:border-emerald-900/30">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">Key improvements:</span>
                    Instant AI document scan, transparent progress feedback, 2-hour average approval.
                  </p>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="reveal flex flex-wrap items-center gap-3 mb-10 rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <span className="text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full px-4 py-2">Document upload</span>
              <span className="text-theme-muted-foreground" aria-hidden="true">→</span>
              <span className="text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full px-4 py-2">AI analysis</span>
              <span className="text-theme-muted-foreground" aria-hidden="true">→</span>
              <span className="text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full px-4 py-2">Risk assessment</span>
              <span className="text-theme-muted-foreground" aria-hidden="true">→</span>
              <span className="text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full px-4 py-2">Human review (if needed)</span>
              <span className="text-theme-muted-foreground" aria-hidden="true">→</span>
              <span className="text-sm font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100 rounded-full px-4 py-2">Instant result</span>
            </div>

            {/* Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={guidedUploadImg}
                    alt="Guided upload screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Guided upload</span>
                  <span className="text-theme-muted-foreground">One clear document at a time, with instant format feedback so nothing gets rejected on a technicality.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={scanningStateImg}
                    alt="Visible progress scanning state"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Visible progress</span>
                  <span className="text-theme-muted-foreground">A short, honest &quot;what&apos;s happening now&quot; state — no spinner with no explanation.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={resultScreenImg}
                    alt="One clean result screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">One clean result</span>
                  <span className="text-theme-muted-foreground">A pass shows a single confirmation and one next step — the &quot;sent for manual review&quot; note only appears when something genuinely needs a second look.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={verificationFailedImg}
                    alt="Verification exception state screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Manual review fallback</span>
                  <span className="text-theme-muted-foreground">Clear error guidance &amp; secondary human review routing when verification requires human verification.</span>
                </figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <h3 className="font-bold text-theme-foreground mb-3 text-lg">Visual feedback system</h3>
                <ul className="space-y-2 text-sm text-theme-muted-foreground">
                  <li>— Clear state progression: uploading → scanning → result</li>
                  <li>— Consistent naming throughout: &quot;ID Verification&quot; and &quot;Police Check&quot;</li>
                  <li>— Specific error messages, one primary action at every step</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <h3 className="font-bold text-theme-foreground mb-3 text-lg">Human + AI balance</h3>
                <ul className="space-y-2 text-sm text-theme-muted-foreground">
                  <li>— AI handles first-pass scanning and clear approvals</li>
                  <li>— Background checks powered by Certn.co for accredited verification</li>
                  <li>— A person reviews edge cases and anything flagged</li>
                </ul>
              </div>
            </div>

            <div className="reveal flex flex-wrap gap-10 border-t border-theme-border pt-8">
              <div>
                <p className="text-3xl text-theme-foreground font-bold">95%<span className="text-base align-top text-amber-700">↓</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">verification time<br /><span className="text-theme-foreground/60 font-semibold">3–5 days → 2 hours avg.</span></p>
              </div>
              <div>
                <p className="text-3xl text-theme-foreground font-bold">67%<span className="text-base align-top text-amber-700">↓</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">fewer document<br />resubmissions</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION 2 ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 mt-10 border-t border-theme-border">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 02</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">Smart search for pet owners</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-base">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The problem, closer up</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">Pet owners spent 23 minutes scrolling dozens of generic sitter profiles, with no way to tell who&apos;d actually suit their pet&apos;s personality, needs, or quirks.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">A search that learns from preferences and surfaces the best matches, each with a plain-language reason attached.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Plain-Language Rationale
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Early direction &amp; key pivot:</span> I initially tested surfacing raw percentage match scores (e.g. &quot;94% Match&quot;). In testing sessions, pet owners found numerical percentages arbitrary and repeatedly asked what specifically made one sitter 94% and another 88%. We pivoted to plain-language match explanations (e.g. &quot;3 years experience with senior dogs&quot;) placed directly on match cards.
              </p>

              {/* Real Wireframe Image Board */}
              <div className="mb-6 overflow-hidden rounded-xl border border-theme-border/70 bg-white dark:bg-gray-950 p-3 shadow-sm">
                <figure className="w-full">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={searchWireframesImg}
                      alt="Smart search early low-fidelity wireframe explorations collage"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-theme-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-theme-border/40 pt-2">
                    <span className="font-semibold text-theme-foreground">Early Wireframe Iterations — Preference Input &amp; Search Matching Flow</span>
                    <span>Exploring preference inputs, filter states &amp; match display options</span>
                  </figcaption>
                </figure>
              </div>

              {/* Sr. Product Designer Rationale Card */}
              <div className="grid md:grid-cols-2 gap-4 text-xs mb-6">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Initial Exploration: Raw Percentage Score (e.g. 94% Match)</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Surfacing raw percentages created skepticism. Owners questioned the underlying algorithm and didn&apos;t feel more confident making a booking decision.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted Pivot: Plain-Language Compatibility Reasons</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Replaced bare numbers with concrete, human-readable fit factors (&quot;Experienced with anxious pets&quot;, &quot;Live within 1 km&quot;) that pet parents can immediately verify.
                  </p>
                </div>
              </div>

              {/* User Flow Diagram (Preserved Intact) */}
              <div className="pt-6 border-t border-theme-border/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground">Solution 02: User Flow Diagram</p>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">Owner Journey &amp; AI Logic Touchpoints</span>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-theme-border overflow-x-auto">
                  <div className="flex items-center min-w-[680px] gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">01. Start</span>
                      Owner Enters Search
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">02. Input</span>
                      Preference Questions
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-amber-800 dark:text-amber-300 font-medium text-center shrink-0">
                      <span className="block text-[10px] text-amber-600 font-mono mb-0.5">03. AI State</span>
                      AI Matching Progress
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">04. Results</span>
                      Ranked Results
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">05. Profile</span>
                      Why Match Profile
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-center shrink-0">
                      <span className="block text-[10px] text-emerald-600 font-mono mb-0.5">06. Goal</span>
                      Booking Confirmed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before & After Experience Comparison */}
            <div className="reveal mb-10 rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Experience Transformation</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Before &amp; After Experience</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Legacy Process vs. Redesigned Flow
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-200/60 dark:border-red-900/40 bg-red-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-[10px] font-bold uppercase tracking-wider">
                        BEFORE — LEGACY EXPERIENCE
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <Image
                        src={oldSearchResultImg}
                        alt="Legacy search result screen"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-red-200/40 dark:border-red-900/30">
                    <span className="font-semibold text-red-700 dark:text-red-400 block mb-0.5">Friction points:</span>
                    Generic sitter list with identical bios; owners spent 23 minutes comparing profiles with no fit clarity.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        AFTER — REDESIGNED AI FLOW
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <video
                        src="/images/projects/floofers-media/Solution-2-Smart-search-pet-owners.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-emerald-200/40 dark:border-emerald-900/30">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">Key improvements:</span>
                    Smart preference matching, visible compatibility reasons, reduced search duration to 8 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={searchFiltersImg}
                    alt="Preference input search filters"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Preference input</span>
                  <span className="text-theme-muted-foreground">A handful of questions, not a wall of filters — enough signal for the AI to work with.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={matchingStateImg}
                    alt="Matching in progress state"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Matching in progress</span>
                  <span className="text-theme-muted-foreground">A brief, specific line about what it&apos;s checking — e.g. experience with senior dogs — so the wait feels purposeful.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={rankedResultsAIImg}
                    alt="Ranked results AI generate state"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">AI ranking state</span>
                  <span className="text-theme-muted-foreground">Real-time calculation showing AI scoring and matching sitters to unique pet requirements.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={rankedResultsProfileImg}
                    alt="Why this match works profile screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Why this match works</span>
                  <span className="text-theme-muted-foreground">Detailed match breakdown in profile view showing highlighted compatibility reasons.</span>
                </figcaption>
              </figure>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-theme-foreground mb-3 text-sm uppercase tracking-wider">What the matching model weighs</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-850 dark:bg-gray-800 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium">Pet characteristics</span>
                <span className="text-xs bg-gray-100 text-gray-850 dark:bg-gray-800 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium">Sitter specialization</span>
                <span className="text-xs bg-gray-100 text-gray-850 dark:bg-gray-800 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium">Proximity &amp; availability</span>
                <span className="text-xs bg-gray-100 text-gray-850 dark:bg-gray-800 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium">Booking history for similar pets</span>
                <span className="text-xs bg-gray-100 text-gray-850 dark:bg-gray-800 dark:text-gray-300 rounded-full px-3 py-1.5 font-medium">Owner feedback over time</span>
              </div>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 mb-10 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <h3 className="font-bold text-theme-foreground mb-3">Design challenge: explaining an AI decision</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-4">People wanted to know <span className="italic">why</span> a sitter was recommended, not just that they were. The fix was a plain-language hierarchy on every result:</p>
              <ol className="space-y-2 text-sm text-theme-muted-foreground list-decimal list-inside">
                <li>A primary reason (e.g. experience match)</li>
                <li>Secondary factors (location, availability, ratings)</li>
                <li>At least one alternative with a genuinely different strength — not just a reshuffled version of #1</li>
              </ol>
            </div>

            <div className="reveal flex flex-wrap gap-10 border-t border-theme-border pt-8">
              <div>
                <p className="text-3xl text-theme-foreground font-bold">65%<span className="text-base align-top text-amber-700">↓</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">search time<br /><span className="text-theme-foreground/60 font-semibold">23 min → 8 min</span></p>
              </div>
              <div>
                <p className="text-3xl text-theme-foreground font-bold">58%<span className="text-base align-top text-amber-700">↑</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">search-to-booking<br />conversion, this feature alone</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION 3 ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 mt-10 border-t border-theme-border">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 03</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">AI-assisted profile builder for sitters</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-base">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The problem, closer up</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">New sitters didn&apos;t know which details owners actually cared about, so most profiles ended up generic — and generic profiles don&apos;t get booked.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">The solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">A guided profile flow where AI helps sitters put their real strengths into words, optimized for what owners search for.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Human-in-the-loop Model
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Early direction &amp; key pivot:</span> We initially explored an auto-generated profile bio that was published directly upon sitter onboarding. Sitters felt alienated by rigid AI language that didn&apos;t sound like their authentic voice or pet-care philosophy. We changed the interaction model to &quot;AI drafts, human edits and approves,&quot; positioning AI as a helpful writing assistant rather than an autonomous decision maker.
              </p>

              {/* Real Wireframe Image Board */}
              <div className="mb-6 overflow-hidden rounded-xl border border-theme-border/70 bg-white dark:bg-gray-950 p-3 shadow-sm">
                <figure className="w-full">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={profileWireframesImg}
                      alt="AI profile builder early low-fidelity wireframe explorations collage"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-theme-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-theme-border/40 pt-2">
                    <span className="font-semibold text-theme-foreground">Early Wireframe Iterations — Dynamic Questioning &amp; Bio Generator Flow</span>
                    <span>Exploring prompt inputs, draft previewing &amp; edit controls</span>
                  </figcaption>
                </figure>
              </div>

              {/* Sr. Product Designer Rationale Card */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Initial Exploration: Auto-Published Profile Bio</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Auto-publishing AI bios directly to sitter profiles produced generic text that sitters disowned, leading to low engagement and manual profile rewrites.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted Pivot: AI Drafts, Human Edits &amp; Approves</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    AI prompts sitters with dynamic questions, extracts key experience points, and generates an editable first draft — keeping full ownership and final approval with the sitter.
                  </p>
                </div>
              </div>
            </div>

            {/* Before & After Experience Comparison */}
            <div className="reveal mb-10 rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Experience Transformation</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Before &amp; After Experience</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Legacy Process vs. Redesigned Flow
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-200/60 dark:border-red-900/40 bg-red-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-[10px] font-bold uppercase tracking-wider">
                        BEFORE — LEGACY EXPERIENCE
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <Image
                        src={oldProfileImg}
                        alt="Legacy profile creation screen"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-red-200/40 dark:border-red-900/30">
                    <span className="font-semibold text-red-700 dark:text-red-400 block mb-0.5">Friction points:</span>
                    Blank text boxes with zero writing assistance; sitters wrote uninformative generic bios.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-500/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        AFTER — REDESIGNED AI FLOW
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-gray-950 shadow-sm mb-3 max-w-[250px] mx-auto w-full">
                      <video
                        src="/images/projects/floofers-media/solution-3-AI-assisted-profile-builder-sitters.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-theme-muted-foreground leading-relaxed pt-2 border-t border-emerald-200/40 dark:border-emerald-900/30">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">Key improvements:</span>
                    Dynamic question prompts, AI-assisted bio drafting, sitter approval &amp; edit controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 UI Screens Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={chooseServiceImg}
                    alt="Choose service screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Choose service</span>
                  <span className="text-theme-muted-foreground">Guided sitter service selection with clear scope and pricing defaults.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={serviceAIRecommendationImg}
                    alt="Service AI recommendation screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">AI service recommendation</span>
                  <span className="text-theme-muted-foreground">Smart suggestions based on local Australian market demand and sitter background.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={choosePetTypeImg}
                    alt="Choose pet type preferences screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Choose pet type</span>
                  <span className="text-theme-muted-foreground">Specifying pet handling experience (dogs, cats, senior pets, medical care).</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={homeAddressImg}
                    alt="Home address and service radius setup screen"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Location &amp; service radius</span>
                  <span className="text-theme-muted-foreground">Defining home location and travel boundaries for nearby booking queries.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={profilePhotoDetailsImg}
                    alt="Profile photo and experience details input"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Profile &amp; experience details</span>
                  <span className="text-theme-muted-foreground">Dynamic prompts surfacing specialized qualifications sitters might forget to highlight.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={aiProfileGeneratorStateImg}
                    alt="Drafting not deciding state"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Drafting, not deciding</span>
                  <span className="text-theme-muted-foreground">Framed as a first draft the sitter reviews — never published automatically.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={aiProfileGenerateImg}
                    alt="Theirs to edit finished profile"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Theirs to edit</span>
                  <span className="text-theme-muted-foreground">Clear edit prompts keep the sitter in full control of their authentic voice.</span>
                </figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10 text-base">
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Step 1</p>
                <h3 className="font-bold text-theme-foreground mb-2">Experience analysis</h3>
                <p className="text-sm text-theme-muted-foreground">Dynamic questions that adapt based on earlier answers and surface specialization opportunities.</p>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Step 2</p>
                <h3 className="font-bold text-theme-foreground mb-2">Smart content suggestions</h3>
                <p className="text-sm text-theme-muted-foreground">Writing help for the bio, plus pricing guidance based on local market data.</p>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Step 3</p>
                <h3 className="font-bold text-theme-foreground mb-2">Performance optimization</h3>
                <p className="text-sm text-theme-muted-foreground">A real-time profile-strength meter with concrete, specific tips — not just a percentage.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 mb-10 border border-theme-border dark:text-gray">
              <h3 className="font-bold text-theme-foreground mb-3">The AI writing assistant, in practice</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="bg-white dark:bg-gray-805 border border-theme-border rounded-lg px-4 py-2 text-theme-muted-foreground">&quot;I love dogs&quot;</span>
                <span className="text-amber-600 font-bold" aria-hidden="true">→</span>
                <span className="bg-white dark:bg-gray-805 border border-theme-border rounded-lg px-4 py-2 text-theme-foreground font-semibold">&quot;I specialise in anxious rescue dogs and have 3 years of experience with behavioural rehabilitation.&quot;</span>
              </div>
            </div>

            <div className="reveal flex flex-wrap gap-10 border-t border-theme-border pt-8">
              <div>
                <p className="text-3xl text-theme-foreground font-bold">71%<span className="text-base align-top text-amber-700">↑</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">profile completion<br /><span className="text-theme-foreground/60 font-semibold">52% → 89%</span></p>
              </div>
              <div>
                <p className="text-3xl text-theme-foreground font-bold">4 days</p>
                <p className="text-sm text-theme-muted-foreground mt-1">avg. time to first booking<br /><span className="text-theme-foreground/60 font-semibold">down from 2 weeks</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TECHNICAL IMPLEMENTATION ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 mt-10 border-t border-theme-border">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Technical implementation</h2>
            <p className="text-theme-muted-foreground leading-relaxed">Rather than building machine learning from scratch, I worked with our data scientist to wire together proven, reliable services — and spent my own effort on how the results were shown and explained.</p>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-x-12 gap-y-3 text-sm mb-10 border-t border-theme-border pt-2">
            <div className="flex justify-between border-b border-theme-border py-3"><span className="text-theme-muted-foreground">Document processing</span><span className="font-semibold text-theme-foreground text-right">Certn.co + Google Cloud Vision (OCR)</span></div>
            <div className="flex justify-between border-b border-theme-border py-3"><span className="text-theme-muted-foreground">Recommendation engine</span><span className="font-semibold text-theme-foreground text-right">Custom model on booking-success patterns</span></div>
            <div className="flex justify-between border-b border-theme-border py-3"><span className="text-theme-muted-foreground">Content generation</span><span className="font-semibold text-theme-foreground text-right">OpenAI API, for profile writing help</span></div>
            <div className="flex justify-between border-b border-theme-border py-3"><span className="text-theme-muted-foreground">Performance analytics</span><span className="font-semibold text-theme-foreground text-right">Custom tracking on match accuracy</span></div>
          </div>

          <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
            <h3 className="font-bold text-theme-foreground mb-4 text-lg">Data privacy &amp; ethics</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-theme-muted-foreground">
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> Personal data encrypted and anonymized before training</li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> Clear, explicit consent for every AI-powered feature</li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> Opt-out available for any AI functionality</li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> Regular bias audits across pet type, price tier and region</li>
            </ul>
          </div>
        </section>

        {/* ============ RESULTS & IMPACT ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-gray-50 dark:bg-gray-900/30 border border-theme-border rounded-3xl my-10 shadow-sm">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Full funnel breakdown</p>
            <h2 className="text-2xl md:text-3xl font-bold text-theme-foreground">Projected results, full funnel</h2>
            <p className="text-xs text-theme-muted-foreground mt-2 italic">
              (Same modeling basis as above — shown together here to illustrate compounding impact across the three features.)
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
            <div><p className="text-3xl text-theme-foreground font-bold">95%↓</p><p className="text-sm text-theme-muted-foreground mt-1 font-medium">Verification time — 3–5 days → 2 hours</p></div>
            <div><p className="text-3xl text-theme-foreground font-bold">65%↓</p><p className="text-sm text-theme-muted-foreground mt-1 font-medium">Search duration — 23 min → 8 min</p></div>
            <div><p className="text-3xl text-theme-foreground font-bold">71%↑</p><p className="text-sm text-theme-muted-foreground mt-1 font-medium">Profile completion — 52% → 89%</p></div>
            <div><p className="text-3xl text-theme-foreground font-bold">171%↑</p><p className="text-sm text-theme-muted-foreground mt-1 font-medium">Booking conversion — 34% → 92%</p></div>
            <div><p className="text-3xl text-theme-foreground font-bold">73%↑</p><p className="text-sm text-theme-muted-foreground mt-1 font-medium">Repeat bookings — 45% → 78%</p></div>
          </div>

          <p className="reveal text-sm text-theme-muted-foreground max-w-2xl mb-6 leading-relaxed">
            Search relevance alone lifted booking conversion 58% for the sessions that used it. Layered with faster verification (more active sitters live at any time) and stronger profiles (more owner confidence at first glance), the platform-wide conversion improvement compounds to 171%.
          </p>

          <div className="reveal grid sm:grid-cols-3 gap-6 border-t border-theme-border pt-8 mb-6">
            <div><p className="text-2xl text-theme-foreground font-bold">+42%</p><p className="text-sm text-theme-muted-foreground mt-1">total platform bookings</p></div>
            <div><p className="text-2xl text-theme-foreground font-bold">$2.3M</p><p className="text-sm text-theme-muted-foreground mt-1">additional revenue, 6 months post-launch</p></div>
            <div><p className="text-2xl text-theme-foreground font-bold">−29%</p><p className="text-sm text-theme-muted-foreground mt-1">customer support volume</p></div>
          </div>

          <div className="reveal p-4 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-theme-border text-xs text-theme-muted-foreground italic">
            These are pre-launch projections presented to stakeholders to prioritize the roadmap — not yet validated against live usage. I&apos;ll update this case study with real numbers once the features ship.
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">What I learned</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              This project changed how I approach AI feature design. Key takeaways tied directly to this work:
            </p>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-6 text-base">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">01</p>
              <p className="font-semibold text-theme-foreground mb-1">A visible reason outperforms a bare score.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                Early designs showed sitters ranked with just a % match. In feedback sessions, owners trusted a plain-language reason (&quot;3 years with senior dogs&quot;) far more than a number alone — so every result got a &quot;why this match&quot; line before anything else changed.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">02</p>
              <p className="font-semibold text-theme-foreground mb-1">Speed without transparency reads as reckless, not helpful.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                The first verification flow was fully automated for speed. Sitters didn&apos;t trust a decision they couldn&apos;t see reasoning behind — the fix wasn&apos;t slowing down, it was showing the &quot;what&apos;s happening now&quot; state honestly.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">03</p>
              <p className="font-semibold text-theme-foreground mb-1">AI should draft, never publish.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                Every AI-generated output in this product — bios, match reasons, verification results — is framed as a first pass the human reviews, never a finished decision made for them.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">04</p>
              <p className="font-semibold text-theme-foreground mb-1">The best AI feature is the one you don&apos;t notice you&apos;re using.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                Owners didn&apos;t say &quot;I love the AI search&quot; — they said &quot;I found the right sitter fast.&quot; That&apos;s the actual bar.
              </p>
            </div>
          </div>
        </section>

        {/* ============ LOOKING AHEAD ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Looking ahead</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              Next up for Floofers: smarter seasonal recommendations, integration with pet health data and predictive sitter availability. The foundation stays the same — technology that helps humans make better, more personal decisions.
            </p>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
