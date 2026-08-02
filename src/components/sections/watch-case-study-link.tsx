'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoModal from '@/components/general/video-modal';

interface WatchCaseStudyLinkProps {
  videoUrl?: string;
  title?: string;
  label?: string;
  className?: string;
}

export default function WatchCaseStudyLink({
  videoUrl = 'https://player.vimeo.com/video/1133505199?h=e3a4b6e232',
  title = 'Floofers — AI-Powered Pet Care Case Study Overview',
  label = 'Watch Case Study Overview',
  className = '',
}: WatchCaseStudyLinkProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className={`mt-2 ${className}`}>
        <button
          onClick={() => setIsVideoOpen(true)}
          type="button"
          className="inline-flex items-center gap-2.5 text-sm md:text-base font-semibold text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg py-1 px-1 -ml-1"
          aria-label={label}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-950/60 text-gray-700 dark:text-gray-400 group-hover:scale-110 group-hover:bg-gray-200 dark:group-hover:bg-gray-900/80 transition-all duration-200 shadow-xs">
            <Play className="w-4 h-4 fill-gray-700 dark:fill-gray-400 translate-x-0.5" />
          </span>
          <span className="decoration-gray-300 dark:decoration-gray-700 group-hover:decoration-gray-600 dark:group-hover:decoration-gray-400 transition-colors">
            {label}
          </span>
        </button>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
        title={title}
      />
    </>
  );
}
