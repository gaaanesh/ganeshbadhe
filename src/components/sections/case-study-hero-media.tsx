'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Play } from 'lucide-react';
import VideoModal from '@/components/general/video-modal';

interface CaseStudyHeroMediaProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  videoUrl?: string;
  buttonLabel?: string;
  placeholderStyle?: React.CSSProperties;
}

export default function CaseStudyHeroMedia({
  imageSrc,
  imageAlt,
  videoUrl = 'https://player.vimeo.com/video/1133505199?h=e3a4b6e232',
  buttonLabel = 'Watch Case Study Overview',
  placeholderStyle,
}: CaseStudyHeroMediaProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className="relative rounded-2xl border border-theme-border aspect-[16/8] flex items-center justify-center overflow-hidden group shadow-lg"
        style={placeholderStyle}
      >
        {/* Hero Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        {/* Ambient Dark Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-colors duration-300 z-10" />

        {/* Centered Play Button Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoOpen(true)}
            aria-label={buttonLabel}
            className="group/btn relative inline-flex items-center gap-3.5 px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 hover:border-white/50 text-white backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {/* Animated Play Icon Circle */}
            <span className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-slate-950 group-hover/btn:bg-amber-400 group-hover/btn:scale-110 transition-all duration-300 shadow-md">
              {/* Subtle Ping Pulse Effect */}
              <span className="absolute -inset-1 rounded-full bg-amber-400/50 animate-ping opacity-75 group-hover/btn:opacity-100" />
              
              <Play className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 stroke-slate-950 translate-x-0.5" />
            </span>

            {/* Button Label */}
            <span className="font-semibold text-sm sm:text-base tracking-wide text-white drop-shadow-sm">
              {buttonLabel}
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
        title={`${imageAlt} — Case Study Overview`}
      />
    </>
  );
}
