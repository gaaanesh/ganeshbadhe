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
              Making pet-sitting decisions 3× faster with targeted AI — not an AI product, but a product that uses AI where it matters.
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
              Pre-launch projections modeled from Floofers&apos; historical funnel data (verification → search → booking).
            </p>
          </div>
          <div className="reveal grid sm:grid-cols-3 gap-6 md:gap-10 border-t border-theme-border pt-8">
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">95%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">verification time<br /><span className="text-theme-foreground/60">3–5 days → 2 hours</span></p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">65%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">search duration<br /><span className="text-theme-foreground/60">23 min → 8 min</span></p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">171%<span className="text-lg align-top text-amber-700">↑</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">booking conversion<br /><span className="text-theme-foreground/60">34% → 92%</span></p>
            </div>
          </div>
          <div className="reveal mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-theme-muted-foreground leading-relaxed italic">
            <span className="font-semibold not-italic text-amber-700 dark:text-amber-400">Methodology:</span> Funnel drop-off rates × time-on-task reduction from usability testing (n=8, moderated). Full assumptions available on request.
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
                  3-month timeline · 1 designer · existing engineering team
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-1.5">My role, specifically</p>
                <p className="text-theme-muted-foreground leading-relaxed">
                  Research synthesis · UX flows · UI design · AI microcopy · human-in-the-loop logic
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
              Floofers connects pet parents with vetted sitters across Australia. Three friction points were quietly costing growth and trust. I designed three targeted AI features to fix them.
            </p>
          </div>
        </section>

        {/* ============ THE PROBLEM ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">The problem</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              The experience was slow and overwhelming in three specific ways.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">01</p>
              <h3 className="font-bold text-theme-foreground mb-2">Slow verification</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">3–5 day approval delay capped platform supply growth.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">02</p>
              <h3 className="font-bold text-theme-foreground mb-2">Choice overload</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">23 min average scrolling near-identical profiles before booking.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">03</p>
              <h3 className="font-bold text-theme-foreground mb-2">Generic profiles</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Strong candidates couldn&apos;t surface relevant experience — generic bios don&apos;t get booked.</p>
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
              8 in-depth interviews + 40 survey responses. Stakeholder workshops to separate business assumptions from real user needs.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">35% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Anxious First-Timer</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs peace of mind — can&apos;t gauge trust from profiles alone.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;I read every review twice and still felt nervous.&quot;</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">45% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Busy Professional</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs reliable care booked fast — too many similar profiles to compare.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;I don&apos;t have 20 minutes to compare sitters — I need the right one, fast.&quot;</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">20% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Special-Needs Pet Parent</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs specialized experience surfaced — generic bios bury it.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">&quot;I need someone who&apos;s handled insulin shots.&quot;</p>
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
              Three friction points surfaced across every persona. Affinity mapping with the founding team confirmed alignment with business priorities.
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
              <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-900/30 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
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
                      <p className="italic pt-1 dark:text-gray-100">&quot;Waiting 5 days kills my onboarding momentum as a new sitter.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-amber-200/50 dark:border-amber-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-[9px] font-semibold text-amber-800 dark:text-amber-300 rounded">Sitter Quote</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Applications fail with zero explanation on what went wrong.&quot;</p>
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
                      <p className="italic pt-1 dark:text-gray-100">&quot;Every sitter profile looks identical — 5 stars and generic bios.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-indigo-200/50 dark:border-indigo-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-indigo-100 dark:bg-indigo-950 text-[9px] font-semibold text-indigo-800 dark:text-indigo-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;I scroll for 20 minutes and still feel unsure if they fit my pet.&quot;</p>
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
                      <p className="italic pt-1 dark:text-gray-100">&quot;Sitters just write &apos;I love animals&apos; instead of relevant skills.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-emerald-200/50 dark:border-emerald-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 rounded font-mono">Owner Quote</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Specialized experience (e.g. senior dogs, medical) gets buried.&quot;</p>
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
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Problem</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">Upload → wait 3–5 days → resubmit → wait again. Bottlenecked supply growth.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">AI-powered verification with instant feedback. Human review for edge cases only.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-900/30 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Hybrid Logic Pivot
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Fully automated pass/fail → sitters didn&apos;t trust black-box decisions. Pivoted to hybrid: AI scans clear cases, flags ambiguous ones for human review.
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
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Explored: 100% Automated Pass/Fail</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Black-box decisions caused sitter anxiety. OCR misreads spiked support tickets.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted: Hybrid AI Scan + Human Review</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Clean documents approved in under 2 hours. Ambiguous cases route to Certn.co human review.
                  </p>
                </div>
              </div>
            </div>

            {/* Before & After */}
            <div className="reveal mb-10">
              <div className="flex flex-col sm:flex-row items-start justify-center gap-8 max-w-2xl mx-auto">
                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldVerificationImg}
                      alt="Legacy verification process"
                      className="w-full h-auto object-cover p-2"
                    />
                  </div>
                  <p className="text-xs text-theme-muted-foreground mt-2">3–5 day manual review, opaque status</p>
                </div>

                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">After</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
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
                  <p className="text-xs text-theme-muted-foreground mt-2">AI scan + 2-hour approval</p>
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
                  <span className="text-theme-muted-foreground">One document at a time with instant format feedback.</span>
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
                  <span className="text-theme-muted-foreground">Honest &quot;what&apos;s happening now&quot; state — no unexplained spinner.</span>
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
                  <span className="text-theme-muted-foreground">Single confirmation + one next step.</span>
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
                  <span className="text-theme-muted-foreground">Clear guidance when human review is needed.</span>
                </figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <h3 className="font-bold text-theme-foreground mb-3 text-lg">Visual feedback</h3>
                <ul className="space-y-2 text-sm text-theme-muted-foreground">
                  <li>— Uploading → scanning → result state progression</li>
                  <li>— Consistent naming: &quot;ID Verification&quot; / &quot;Police Check&quot;</li>
                  <li>— Specific errors, one action per step</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <h3 className="font-bold text-theme-foreground mb-3 text-lg">Human + AI balance</h3>
                <ul className="space-y-2 text-sm text-theme-muted-foreground">
                  <li>— AI handles clear approvals</li>
                  <li>— Certn.co for accredited background checks</li>
                  <li>— Human reviews edge cases</li>
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
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Problem</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">23 minutes scrolling generic profiles with no way to gauge fit.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">Preference-based matching with plain-language reasons on every result.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-900/30 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Plain-Language Rationale
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Raw percentage scores (&quot;94% Match&quot;) felt arbitrary in testing. Replaced with plain-language reasons (&quot;3 years with senior dogs&quot;) on every card.
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
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Explored: Raw % Match Score</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Bare percentages created skepticism — owners couldn&apos;t verify the number.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted: Plain-Language Reasons</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    &quot;Experienced with anxious pets&quot; / &quot;Live within 1 km&quot; — verifiable at a glance.
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
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-100 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">01. Start</span>
                      Owner Enters Search
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-100 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">02. Input</span>
                      Preference Questions
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-amber-800 dark:text-amber-300 font-medium text-center shrink-0">
                      <span className="block text-[10px] text-amber-600 font-mono mb-0.5">03. AI State</span>
                      AI Matching Progress
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-100 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">04. Results</span>
                      Ranked Results
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-100 border border-theme-border font-medium text-center shrink-0">
                      <span className="block text-[10px] text-theme-muted-foreground uppercase font-mono mb-0.5">05. Profile</span>
                      Why Match Profile
                    </div>
                    <span className="text-amber-600 font-bold">→</span>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-700 font-bold text-center shrink-0">
                      <span className="block text-[10px] text-emerald-600 font-mono mb-0.5">06. Goal</span>
                      Booking Confirmed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before & After */}
            <div className="reveal mb-10">
              <div className="flex flex-col sm:flex-row items-start justify-center gap-8 max-w-2xl mx-auto">
                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldSearchResultImg}
                      alt="Legacy search result screen"
                      className="w-full h-auto object-cover p-2"
                    />
                  </div>
                  <p className="text-xs text-theme-muted-foreground mt-2">Generic list, 23 min decision time</p>
                </div>

                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">After</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
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
                  <p className="text-xs text-theme-muted-foreground mt-2">Smart matching, 8 min to book</p>
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
                  <span className="text-theme-muted-foreground">A few targeted questions — not a filter wall.</span>
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
                  <span className="text-theme-muted-foreground">Shows what it&apos;s checking so the wait feels purposeful.</span>
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
                  <span className="text-theme-muted-foreground">Real-time scoring against pet-specific requirements.</span>
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
                  <span className="text-theme-muted-foreground">Compatibility reasons highlighted in profile view.</span>
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
              <h3 className="font-bold text-theme-foreground mb-3">Explaining AI decisions</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-4">Users needed to know <span className="italic">why</span>, not just who. Every result shows:</p>
              <ol className="space-y-2 text-sm text-theme-muted-foreground list-decimal list-inside">
                <li>Primary match reason</li>
                <li>Secondary factors (location, availability)</li>
                <li>One genuinely different alternative</li>
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
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Problem</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">Sitters didn&apos;t know what to highlight — generic profiles don&apos;t get booked.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Solution</p>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">Guided profile flow with AI writing assistance, optimized for what owners search for.</p>
              </div>
            </div>

            {/* Getting there — Early Direction & Wireframe Exploration */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Iterative Design Process</span>
                  <h3 className="font-bold text-theme-foreground text-lg">Getting there — early direction &amp; wireframe explorations</h3>
                </div>
                <span className="text-xs text-theme-muted-foreground font-mono bg-white dark:bg-gray-900/30 px-3 py-1 rounded-full border border-theme-border self-start sm:self-auto">
                  Low-Fi Explorations → Human-in-the-loop Model
                </span>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Auto-published bios felt generic and inauthentic. Switched to &quot;AI drafts, human edits and approves&quot; — writing assistant, not decision maker.
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
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Explored: Auto-Published Bio</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Generic AI text that sitters disowned. Low engagement, manual rewrites.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted: AI Drafts, Human Approves</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Dynamic questions → editable first draft. Sitter keeps full ownership.
                  </p>
                </div>
              </div>
            </div>

            {/* Before & After */}
            <div className="reveal mb-10">
              <div className="flex flex-col sm:flex-row items-start justify-center gap-8 max-w-2xl mx-auto">
                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldProfileImg}
                      alt="Legacy profile creation screen"
                      className="w-full h-auto object-cover p-2"
                    />
                  </div>
                  <p className="text-xs text-theme-muted-foreground mt-2">Blank text fields, generic bios</p>
                </div>

                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">After</p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
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
                  <p className="text-xs text-theme-muted-foreground mt-2">AI-guided drafting, sitter approval</p>
                </div>
              </div>
            </div>

            {/* Solution 3 UI Screens Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
                <p className="text-sm text-theme-muted-foreground">Adaptive questions surface specializations.</p>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Step 2</p>
                <h3 className="font-bold text-theme-foreground mb-2">Smart suggestions</h3>
                <p className="text-sm text-theme-muted-foreground">Bio writing help + local market pricing guidance.</p>
              </div>
              <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-theme-muted-foreground mb-2">Step 3</p>
                <h3 className="font-bold text-theme-foreground mb-2">Profile strength</h3>
                <p className="text-sm text-theme-muted-foreground">Real-time meter with actionable tips, not just a %.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 mb-10 border border-theme-border dark:text-gray">
              <h3 className="font-bold text-theme-foreground mb-3">AI writing assistant in practice</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="bg-white dark:bg-gray-805 border border-theme-border rounded-lg px-4 py-2 text-theme-muted-foreground">&quot;I love dogs&quot;</span>
                <span className="text-amber-600 font-bold" aria-hidden="true">→</span>
                <span className="bg-white dark:bg-gray-805 border border-theme-border rounded-lg px-4 py-2 text-theme-foreground font-semibold">&quot;I specialise in anxious rescue dogs with 3 years of behavioural rehabilitation experience.&quot;</span>
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
            <p className="text-theme-muted-foreground leading-relaxed">Proven services wired together — my effort went into how results are shown and explained.</p>
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
            Search relevance lifted conversion 58% alone. Layered with faster verification and stronger profiles, platform-wide improvement compounds to 171%.
          </p>

          <div className="reveal grid sm:grid-cols-3 gap-6 border-t border-theme-border pt-8 mb-6">
            <div><p className="text-2xl text-theme-foreground font-bold">+42%</p><p className="text-sm text-theme-muted-foreground mt-1">total platform bookings</p></div>
            <div><p className="text-2xl text-theme-foreground font-bold">$2.3M</p><p className="text-sm text-theme-muted-foreground mt-1">additional revenue, 6 months post-launch</p></div>
            <div><p className="text-2xl text-theme-foreground font-bold">−29%</p><p className="text-sm text-theme-muted-foreground mt-1">customer support volume</p></div>
          </div>

          <div className="reveal p-4 rounded-xl bg-gray-100 dark:bg-gray-800/60 dark:text-gray-100  border border-theme-border text-xs text-theme-muted-foreground italic">
            These are pre-launch projections presented to stakeholders to prioritize the roadmap — not yet validated against live usage. I&apos;ll update this case study with real numbers once the features ship.
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">What I learned</h2>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-6 text-base">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">01</p>
              <p className="font-semibold text-theme-foreground mb-1">Visible reasons &gt; bare scores.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                &quot;3 years with senior dogs&quot; builds more trust than &quot;94% Match&quot; ever could.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">02</p>
              <p className="font-semibold text-theme-foreground mb-1">Speed without transparency feels reckless.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                The fix wasn&apos;t slowing down — it was showing what&apos;s happening honestly.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">03</p>
              <p className="font-semibold text-theme-foreground mb-1">AI should draft, never publish.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                Every AI output is a first pass the human reviews.
              </p>
            </div>

            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xl text-amber-700 dark:text-amber-400 mb-2 font-bold font-display">04</p>
              <p className="font-semibold text-theme-foreground mb-1">The best AI feature is invisible.</p>
              <p className="text-xs text-theme-muted-foreground leading-relaxed">
                Users said &quot;I found the right sitter fast&quot; — not &quot;I love the AI.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* ============ LOOKING AHEAD ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Looking ahead</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              Next: seasonal recommendations, pet health data integration, predictive sitter availability. Same foundation — technology that helps humans decide better.
            </p>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
