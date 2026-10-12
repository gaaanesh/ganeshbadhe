import ContactSection from '@/components/sections/contact';
import type { Metadata } from 'next';
import RevealObserver from './reveal-observer';
import Image from 'next/image';
import WatchCaseStudyLink from '@/components/sections/watch-case-study-link';
import MetricBadge from '@/components/general/metric-badge';
import TodoBlock from '@/components/general/todo-block';
import Accordion from '@/components/general/accordion';

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
/* Wireframe collage imports preserved — images hidden from page, not deleted */
// import verificationWireframesImg from '/public/images/projects/floofers-media/verification-wirframes.jpg';
// import searchWireframesImg from '/public/images/projects/floofers-media/petsitter-Search-wireframes.jpg';
// import profileWireframesImg from '/public/images/projects/floofers-media/gereate-profile-wireframes.jpg';
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
            <TodoBlock inline label="TODO – Ganesh to confirm">
              Hero says &quot;3× faster&quot;. Search time 23→8 min is ~2.9×. Keep 3× as rounded or correct to 2.9×?
            </TodoBlock>

            <WatchCaseStudyLink
              videoUrl="https://player.vimeo.com/video/1133505199?h=e3a4b6e232"
              title="Floofers — AI-Powered Pet Care Case Study Overview"
              label="Watch Case Study Overview"
            />
          </div>

          {/* Hero image */}
          <div
            className="reveal mt-12 rounded-2xl border border-theme-border aspect-[16/8] flex flex-col items-center justify-center gap-2 text-theme-muted-foreground"
          >
            <Image
              src={heroFloofers}
              alt="Floofers AI pet care platform — hero banner showing the three AI-powered features"
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
            <p className="text-xs text-theme-muted-foreground mt-1 italic">
              Scope: These projections cover the three redesigned flows only — not the entire platform.
            </p>
          </div>
          <div className="reveal grid sm:grid-cols-3 gap-6 md:gap-10 border-t border-theme-border pt-8">
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">95%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">verification time<br /><span className="text-theme-foreground/60">3–5 days → 2 hours</span></p>
              <MetricBadge status="Modeled projection" className="mt-2" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">65%<span className="text-lg align-top text-amber-700">↓</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">search duration<br /><span className="text-theme-foreground/60">23 min → 8 min</span></p>
              <MetricBadge status="Prototype-tested (n=8)" className="mt-2" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-theme-foreground font-bold">171%<span className="text-lg align-top text-amber-700">↑</span></p>
              <p className="mt-2 text-sm text-theme-muted-foreground leading-snug">booking conversion<br /><span className="text-theme-foreground/60">34% → 92%</span></p>
              <MetricBadge status="Modeled projection" className="mt-2" />
              <TodoBlock inline label="TODO – Ganesh to confirm" className="mt-2">
                34% baseline = booking conversion (confirmed). But result says 34%→92% = 171% increase. Verify this is the correct conversion metric, not abandonment.
              </TodoBlock>
            </div>
          </div>

          {/* Collapsible methodology block — replaces "Full assumptions available on request" */}
          <Accordion title="How these numbers were derived" className="mt-6">
            <div className="pt-4 space-y-3 text-sm text-theme-muted-foreground">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-theme-muted-foreground mb-1">Baseline source</p>
                  <p>Floofers&apos; historical funnel data (verification → search → booking)</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-theme-muted-foreground mb-1">Date range</p>
                  <TodoBlock inline label="TODO">Date range for baseline data</TodoBlock>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-theme-muted-foreground mb-1">Method</p>
                  <p>Funnel drop-off rates × time-on-task reduction from usability testing (n=8, moderated)</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-theme-muted-foreground mb-1">Formula / assumptions</p>
                  <TodoBlock inline label="TODO">Exact formula and assumptions for each metric</TodoBlock>
                </div>
              </div>
            </div>
          </Accordion>
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

            {/* Constraints that shaped decisions */}
            <div className="pt-4 border-t border-theme-border/60">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-2">Constraints that shaped decisions</p>
              <ul className="space-y-1.5 text-sm text-theme-muted-foreground">
                <li className="flex gap-2"><span className="text-amber-700 font-bold shrink-0">—</span>
                  <span>3-month timeline → <TodoBlock inline label="TODO">How did the timeline shape a specific design decision?</TodoBlock></span>
                </li>
                <li className="flex gap-2"><span className="text-amber-700 font-bold shrink-0">—</span>
                  <span>1 designer → <TodoBlock inline label="TODO">How did working solo shape a specific design decision?</TodoBlock></span>
                </li>
              </ul>
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
              <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-2">Felt by: sitters · Caused by: manual review process</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">3–5 day approval delay capped platform supply growth.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">02</p>
              <h3 className="font-bold text-theme-foreground mb-2">Choice overload</h3>
              <p className="text-xs font-medium text-indigo-700 dark:text-indigo-400 mb-2">Felt by: pet parents · Caused by: undifferentiated listings</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">23 min average scrolling near-identical profiles before booking.</p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-2xl text-theme-foreground mb-2 font-bold">03</p>
              <h3 className="font-bold text-theme-foreground mb-2">Generic profiles</h3>
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-2">Caused by: sitters · Felt by: pet parents</p>
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Strong candidates couldn&apos;t surface relevant experience — generic bios don&apos;t get booked.</p>
            </div>
          </div>
        </section>

        {/* ============ RESEARCH & DISCOVERY (merged with "From research to direction") ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Research &amp; discovery</h2>
            <p className="text-theme-muted-foreground leading-relaxed">
              8 in-depth interviews + 40 survey responses. Stakeholder workshops to separate business assumptions from real user needs.
            </p>
            <p className="text-xs text-theme-muted-foreground mt-2 italic">
              Research scope: 3 sitters and 5 pet parents interviewed (out of 8 total). Quotes below are composite, synthesized from multiple participants.
            </p>
          </div>

          {/* Persona cards */}
          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">35% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Anxious First-Timer</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs peace of mind — can&apos;t gauge trust from profiles alone.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">
                &quot;I read every review twice and still felt nervous.&quot;
                <span className="block text-[10px] not-italic text-theme-muted-foreground mt-1">Composite quote</span>
              </p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">45% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Busy Professional</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs reliable care booked fast — too many similar profiles to compare.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">
                &quot;I don&apos;t have 20 minutes to compare sitters — I need the right one, fast.&quot;
                <span className="block text-[10px] not-italic text-theme-muted-foreground mt-1">Composite quote</span>
              </p>
            </div>
            <div className="rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 mb-3 font-medium">20% of owners</p>
              <h3 className="font-bold text-theme-foreground mb-2 text-lg">The Special-Needs Pet Parent</h3>
              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-3">Needs specialized experience surfaced — generic bios bury it.</p>
              <p className="text-sm italic text-theme-muted-foreground border-l-2 border-theme-border pl-3">
                &quot;I need someone who&apos;s handled insulin shots.&quot;
                <span className="block text-[10px] not-italic text-theme-muted-foreground mt-1">Composite quote</span>
              </p>
            </div>
          </div>

          {/* Stakeholder findings */}
          <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm w-full mt-4 mb-10">
            <h3 className="font-bold text-theme-foreground mb-4 text-lg">What stakeholder interviews surfaced</h3>
            <ul className="space-y-2.5 text-sm text-theme-muted-foreground">
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> People expect the system to learn and adapt to their pet&apos;s preferences over time.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> Speed and automation were essential for verification to scale with growth.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> New sitters needed guidance to build a profile that actually gets booked.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> Transparency was the deciding factor in whether either side trusted the platform.</li>
              <li className="flex gap-3"><span className="text-amber-700 font-bold">—</span> A visible &quot;why this match&quot; reason built confidence faster than a rating alone.</li>
            </ul>
          </div>

          {/* FigJam UX Flow Image (from former "From research to direction" section) */}
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

          {/* Affinity Map — 3 Clusters (kept, "Verification Bottleneck" renamed to "Slow verification") */}
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
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Slow verification</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-amber-200/50 dark:border-amber-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-[9px] font-semibold text-amber-800 dark:text-amber-300 rounded">Sitter · Composite</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Waiting 5 days kills my onboarding momentum as a new sitter.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-amber-200/50 dark:border-amber-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-amber-100 dark:bg-amber-950 text-[9px] font-semibold text-amber-800 dark:text-amber-300 rounded">Sitter · Composite</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Applications fail with zero explanation on what went wrong.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 text-xs">
                  <span className="text-[10px] text-theme-muted-foreground uppercase font-mono block">Design Direction:</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400">AI Scan + Human Fallback</span>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200/80 dark:border-indigo-900/50 p-5 bg-indigo-500/5 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-700 dark:text-indigo-300">Cluster 02</span>
                  </div>
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Choice overload</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-indigo-200/50 dark:border-indigo-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-indigo-100 dark:bg-indigo-950 text-[9px] font-semibold text-indigo-800 dark:text-indigo-300 rounded font-mono">Owner · Composite</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Every sitter profile looks identical — 5 stars and generic bios.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-indigo-200/50 dark:border-indigo-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-indigo-100 dark:bg-indigo-950 text-[9px] font-semibold text-indigo-800 dark:text-indigo-300 rounded font-mono">Owner · Composite</span>
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
                  <h4 className="font-bold text-theme-foreground mb-3 text-base">Generic profiles</h4>
                  <div className="space-y-2.5 text-xs text-theme-muted-foreground">
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-emerald-200/50 dark:border-emerald-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 rounded font-mono">Owner · Composite</span>
                      <p className="italic pt-1 dark:text-gray-100">&quot;Sitters just write &apos;I love animals&apos; instead of relevant skills.&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-emerald-200/50 dark:border-emerald-900/40 shadow-sm relative">
                      <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 rounded font-mono">Owner · Composite</span>
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
                <p className="text-xs text-theme-muted-foreground mt-3 italic">
                  Optional overview — each moment is detailed individually below.
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

        {/* ============ SOLUTION 1: QUICK VERIFICATION ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 01 · Slow verification → Quick verification</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">Quick verification for pet sitters</h2>

            <div className="mb-8 text-base">
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Upload → wait 3–5 days → resubmit → wait again. AI-powered verification with instant feedback replaces this. Human review for edge cases only.</p>
            </div>

            {/* Explored vs. Adopted pivot (main pivot evidence — kept) */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Design pivot</span>
                  <h3 className="font-bold text-theme-foreground text-lg">From fully automated to hybrid AI + human</h3>
                </div>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Fully automated pass/fail → sitters didn&apos;t trust black-box decisions. Pivoted to hybrid: AI scans clear cases, flags ambiguous ones for human review.
              </p>

              {/* Explored vs. Adopted cards */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Explored: 100% Automated Pass/Fail</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Black-box decisions caused sitter anxiety. Low trust in automated outcomes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">✓ Adopted: Hybrid AI Scan + Human Review</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Clean documents approved instantly via Certn.co. Ambiguous cases route to human review (2 hours avg turnaround).
                  </p>
                </div>
              </div>
            </div>

            {/* Before & After */}
            <div className="reveal mb-10">
              <div className="flex flex-col sm:flex-row items-start justify-center gap-8 max-w-2xl mx-auto">
                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before <span className="font-normal text-theme-foreground/60">· 3–5 day delay</span></p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldVerificationImg}
                      alt="Legacy verification process — 3 to 5 day manual review with opaque status"
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

            {/* Two-path verification flow */}
            <div className="reveal mb-10 rounded-2xl border border-theme-border p-6 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
              <h3 className="font-bold text-theme-foreground mb-4 text-lg">Two verification paths</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
                  <p className="text-xs font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 mb-2">Path A: Clear case</p>
                  <p className="text-sm text-theme-muted-foreground leading-relaxed mb-2">Document passes AI scan → instant approval via Certn.co</p>
                  <p className="text-xs text-theme-muted-foreground">
                    Routing criteria: document legibility score above threshold, no flags
                  </p>
                  <TodoBlock inline label="TODO" className="mt-2">Share of cases going to Path A vs Path B — what&apos;s the ideal split?</TodoBlock>
                </div>
                <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                  <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 mb-2">Path B: Needs human review</p>
                  <p className="text-sm text-theme-muted-foreground leading-relaxed mb-2">AI flags ambiguity → routed to Certn.co human review → 2 hours avg turnaround</p>
                  <p className="text-xs text-theme-muted-foreground">
                    Routing criteria: low legibility, mismatched data, or flagged background
                  </p>
                </div>
              </div>
            </div>

            {/* Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={guidedUploadImg}
                    alt="Guided upload screen — one document at a time with instant format feedback"
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
                    alt="Visible progress scanning state showing what is being checked"
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
                    alt="Path A — one clean result screen with single confirmation and next step"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Path A: One clean result</span>
                  <span className="text-theme-muted-foreground">Single confirmation + one next step.</span>
                </figcaption>
              </figure>
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={verificationFailedImg}
                    alt="Path B — manual review fallback with clear guidance on what happens next"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Path B: Manual review fallback</span>
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
                  <li>— AI handles clear approvals (instant via Certn.co)</li>
                  <li>— Certn.co for accredited background checks</li>
                  <li>— Human reviews edge cases (2 hours avg)</li>
                </ul>
              </div>
            </div>

            <div className="reveal flex flex-wrap gap-10 border-t border-theme-border pt-8">
              <div>
                <p className="text-3xl text-theme-foreground font-bold">95%<span className="text-base align-top text-amber-700">↓</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">verification time<br /><span className="text-theme-foreground/60 font-semibold">3–5 days → 2 hours avg.</span></p>
                <MetricBadge status="Modeled projection" className="mt-2" />
              </div>
              <div>
                <p className="text-3xl text-theme-foreground font-bold">67%<span className="text-base align-top text-amber-700">↓</span></p>
                <p className="text-sm text-theme-muted-foreground mt-1">fewer document<br />resubmissions</p>
                <MetricBadge status="Prototype-tested (n=8)" className="mt-2" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION 2: SMART SEARCH ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 mt-10 border-t border-theme-border">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 02 · Choice overload → Smart search</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">Smart search for pet owners</h2>

            <div className="mb-8 text-base">
              <p className="text-sm text-theme-muted-foreground leading-relaxed">23 minutes scrolling generic profiles with no way to gauge fit. Preference-based matching with plain-language reasons on every result.</p>
            </div>

            {/* Design pivot */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Design pivot</span>
                  <h3 className="font-bold text-theme-foreground text-lg">From raw scores to plain-language reasons</h3>
                </div>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Raw percentage scores (&quot;94% Match&quot;) felt arbitrary in testing. Replaced with plain-language reasons (&quot;3 years with senior dogs&quot;) on every card.
              </p>

              {/* Explored vs. Adopted */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
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
            </div>

            {/* Before & After */}
            <div className="reveal mb-10">
              <div className="flex flex-col sm:flex-row items-start justify-center gap-8 max-w-2xl mx-auto">
                <div className="w-full max-w-[250px] mx-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before <span className="font-normal text-theme-foreground/60">· 23 min avg decision time</span></p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldSearchResultImg}
                      alt="Legacy search result screen — generic list requiring 23 min average decision time"
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
                    alt="Preference input search filters — a few targeted questions instead of a filter wall"
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
                    alt="Matching in progress state showing what the system is checking"
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
                    alt="Ranked results with real-time AI scoring against pet requirements"
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
                    alt="Why this match works — compatibility reasons highlighted in profile view"
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
                <MetricBadge status="Prototype-tested (n=8)" className="mt-2" />
              </div>
              {/* "58%↑ search-to-booking" removed — no confirmed derivation */}
            </div>
          </div>
        </section>

        {/* ============ SOLUTION 3: AI PROFILE BUILDER ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 mt-10 border-t border-theme-border">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Solution 03 · Generic profiles → AI-assisted profiles</p>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-theme-foreground">AI-assisted profile builder for sitters</h2>

            <div className="mb-8 text-base">
              <p className="text-sm text-theme-muted-foreground leading-relaxed">Sitters didn&apos;t know what to highlight — generic profiles don&apos;t get booked. Guided profile flow with AI writing assistance, optimized for what owners search for.</p>
            </div>

            {/* Design pivot */}
            <div className="reveal rounded-2xl border border-theme-border p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-theme-border/60 pb-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400 font-medium block mb-0.5">Design pivot</span>
                  <h3 className="font-bold text-theme-foreground text-lg">From auto-published to human-approved drafts</h3>
                </div>
              </div>

              <p className="text-sm text-theme-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-theme-foreground">Key pivot:</span> Auto-published bios felt generic and inauthentic. Switched to &quot;AI drafts, human edits and approves&quot; — writing assistant, not decision maker.
              </p>

              {/* Explored vs. Adopted */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                  <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Explored: Auto-Published Bio</p>
                  <p className="text-theme-muted-foreground leading-relaxed">
                    Generic AI text that felt impersonal. Low engagement, manual rewrites.
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted-foreground mb-3">Before <span className="font-normal text-theme-foreground/60">· 52% completion baseline</span></p>
                  <div className="overflow-hidden rounded-xl border border-theme-border bg-white dark:bg-gray-950">
                    <Image
                      src={oldProfileImg}
                      alt="Legacy profile creation screen — blank text fields producing generic bios"
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

            {/* AI-relevant screens (kept visible) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <figure className="max-w-[280px] mx-auto w-full">
                <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={serviceAIRecommendationImg}
                    alt="AI service recommendation screen with smart suggestions based on local market demand"
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
                    src={aiProfileGeneratorStateImg}
                    alt="AI drafting state — framed as a first draft the sitter reviews, never published automatically"
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
                    alt="Finished profile editing screen — clear edit prompts keep the sitter in full control"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold block text-theme-foreground">Theirs to edit</span>
                  <span className="text-theme-muted-foreground">Clear edit prompts keep the sitter in full control of their authentic voice.</span>
                </figcaption>
              </figure>
            </div>

            {/* Standard onboarding screens in accordion */}
            <Accordion title="Full onboarding flow" tag="Standard screens" className="mb-10">
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <span className="text-theme-muted-foreground">Dynamic prompts surfacing specialized qualifications.</span>
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
              </div>
            </Accordion>

            <TodoBlock label="TODO – Ganesh to confirm">
              Pricing guidance and service recommendations in Solution 3 — is this a fourth AI moment, or part of the profile builder? Should it be called out separately?
            </TodoBlock>

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
                <TodoBlock inline label="TODO" className="mt-2">Profile strength meter is described but has no screen. Provide a screenshot or hide this claim.</TodoBlock>
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
                <MetricBadge status="Prototype-tested (n=8)" className="mt-2" />
              </div>
              <div>
                <p className="text-3xl text-theme-foreground font-bold">4 days</p>
                <p className="text-sm text-theme-muted-foreground mt-1">avg. time to first booking<br /><span className="text-theme-foreground/60 font-semibold">down from 2 weeks</span></p>
                <MetricBadge status="Modeled projection" className="mt-2" />
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
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span>Designed in: Personal data encrypted and anonymized before training</span></li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span>Designed in: Clear, explicit consent for every AI-powered feature</span></li>
              <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span>Designed in: Opt-out available for any AI functionality</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">◇</span> <span>Planned: Regular bias audits across pet type, price tier and region</span>
                <TodoBlock inline label="TODO">Were bias audits implemented or still planned?</TodoBlock>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ BASELINE + RESULTS (moved baseline directly above results) ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-gray-50 dark:bg-gray-900/30 border border-theme-border rounded-3xl my-10 shadow-sm">
          {/* Pre-redesign baseline — moved here so each result sits next to its baseline */}
          <div className="reveal mb-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-theme-muted-foreground mb-3">Pre-redesign baseline</p>
            <div className="rounded-2xl bg-gray-900 dark:bg-gray-600 text-white dark:text-gray-100 p-6 md:p-8">
              <div className="grid sm:grid-cols-4 gap-6">
                <div><p className="text-2xl font-bold text-white dark:text-gray-100">34%</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">booking conversion</p></div>
                <div><p className="text-2xl font-bold text-white dark:text-gray-100">23 min</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">avg. search time</p></div>
                <div><p className="text-2xl font-bold text-white dark:text-gray-100">3–5 days</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">verification delay</p></div>
                <div><p className="text-2xl font-bold text-white dark:text-gray-100">40+</p><p className="text-sm text-white/70 dark:text-gray-100 mt-1">daily support calls</p></div>
              </div>
              <MetricBadge status="Measured" className="mt-4" />
            </div>
          </div>

          {/* Projected results — referencing, not fully restating */}
          <div className="reveal mb-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3 font-medium">Full funnel breakdown</p>
            <h2 className="text-2xl md:text-3xl font-bold text-theme-foreground">Projected results, full funnel</h2>
            <p className="text-xs text-theme-muted-foreground mt-2 italic">
              Scope: These projections cover the three redesigned flows only. Each metric is shown with its baseline above and its source solution.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
            <div>
              <p className="text-3xl text-theme-foreground font-bold">95%↓</p>
              <p className="text-sm text-theme-muted-foreground mt-1 font-medium">Verification time — 3–5 days → 2 hours</p>
              <p className="text-xs text-theme-muted-foreground">→ Solution 01: Quick verification</p>
              <MetricBadge status="Modeled projection" className="mt-1" />
            </div>
            <div>
              <p className="text-3xl text-theme-foreground font-bold">65%↓</p>
              <p className="text-sm text-theme-muted-foreground mt-1 font-medium">Search duration — 23 min → 8 min</p>
              <p className="text-xs text-theme-muted-foreground">→ Solution 02: Smart search</p>
              <MetricBadge status="Prototype-tested (n=8)" className="mt-1" />
            </div>
            <div>
              <p className="text-3xl text-theme-foreground font-bold">71%↑</p>
              <p className="text-sm text-theme-muted-foreground mt-1 font-medium">Profile completion — 52% → 89%</p>
              <p className="text-xs text-theme-muted-foreground">→ Solution 03: AI-assisted profiles</p>
              <MetricBadge status="Prototype-tested (n=8)" className="mt-1" />
            </div>
            <div>
              <p className="text-3xl text-theme-foreground font-bold">171%↑</p>
              <p className="text-sm text-theme-muted-foreground mt-1 font-medium">Booking conversion — 34% → 92%</p>
              <p className="text-xs text-theme-muted-foreground">→ Combined funnel effect</p>
              <MetricBadge status="Modeled projection" className="mt-1" />
            </div>
            <div>
              <p className="text-3xl text-theme-foreground font-bold">73%↑</p>
              <p className="text-sm text-theme-muted-foreground mt-1 font-medium">Repeat bookings — 45% → 78%</p>
              <p className="text-xs text-theme-muted-foreground">→ Combined funnel effect</p>
              <MetricBadge status="Modeled projection" className="mt-1" />
            </div>
          </div>

          {/* $2.3M / +42% / −29% — REMOVED per user confirmation */}

          <div className="reveal p-4 rounded-xl bg-gray-100 dark:bg-gray-800/60 dark:text-gray-100 border border-theme-border text-xs text-theme-muted-foreground italic">
            These are pre-launch projections presented to stakeholders to prioritize the roadmap — not yet validated against live usage. See the &quot;Status &amp; outcome&quot; section below for current state.
          </div>
        </section>

        {/* ============ STATUS & OUTCOME (new section) ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">Status &amp; outcome</h2>
          </div>
          <div className="reveal">
            <TodoBlock label="TODO – Ganesh to fill in">
              <ul className="space-y-2 mt-2 text-sm list-none">
                <li><strong>What shipped?</strong> shipped / partially shipped / not shipped / unknown</li>
                <li><strong>What was cut?</strong> Which features were descoped or deferred?</li>
                <li><strong>What did stakeholders decide?</strong> Actual stakeholder response and decisions</li>
                <li><strong>What would you measure first?</strong> First metric to validate post-launch</li>
              </ul>
            </TodoBlock>
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="reveal max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-bold text-theme-foreground">What I learned</h2>
          </div>
          <div className="reveal">
            <TodoBlock label="TODO – Ganesh to write in your own words">
              <p className="mb-2">Replace the four aphorisms below with honest reflections:</p>
              <ul className="space-y-2 mt-2 text-sm list-none">
                <li><strong>One thing I got wrong:</strong> What assumption or decision didn&apos;t pan out?</li>
                <li><strong>One real disagreement or trade-off:</strong> Where did you push back or compromise?</li>
                <li><strong>One thing I&apos;d do differently:</strong> What would you change with hindsight?</li>
              </ul>
            </TodoBlock>

            {/* Original aphorisms kept below the TODO block — remove once Ganesh writes replacements */}
            <div className="grid sm:grid-cols-2 gap-6 text-base mt-8 opacity-60">
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
