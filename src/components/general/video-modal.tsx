'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = 'Case Study Overview Video',
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format autoplay URL
  const getAutoplayUrl = (url: string) => {
    if (!url) return '';
    const hasParams = url.includes('?');
    const separator = hasParams ? '&' : '?';
    
    // Check if autoplay parameter already present
    if (url.includes('autoplay=')) {
      return url;
    }
    
    return `${url}${separator}autoplay=1&autopause=0`;
  };

  const formattedUrl = getAutoplayUrl(videoUrl);

  // Prevent background scrolling & handle Esc key
  useEffect(() => {
    if (!isOpen) return;

    // Save current overflow style
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  // Reset loading state when modal reopens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Light Backdrop covering full viewport */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl animate-modal-content flex flex-col"
      >
        {/* Header / Accessible Title Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm">
          <h2 id="video-modal-title" className="text-sm sm:text-base font-semibold text-white/90 truncate">
            {title}
          </h2>
          
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close video overview modal"
            className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70 bg-slate-950">
              <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
              <p className="text-xs font-medium tracking-wide uppercase text-white/50">Loading video...</p>
            </div>
          )}

          {/* Embedded Lazy-Loaded Iframe */}
          <iframe
            src={formattedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
