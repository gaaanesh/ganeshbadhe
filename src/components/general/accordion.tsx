'use client';

import React from 'react';

interface AccordionProps {
  /** The clickable summary / title */
  title: string;
  /** Optional tag or subtitle text */
  tag?: string;
  /** Whether open by default */
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({
  title,
  tag,
  defaultOpen = false,
  children,
  className = '',
}: AccordionProps) {
  return (
    <details
      open={defaultOpen || undefined}
      className={`group rounded-2xl border border-theme-border bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <summary className="cursor-pointer select-none list-none p-4 md:p-5 flex items-center justify-between gap-3 hover:bg-gray-100/60 dark:hover:bg-gray-800/40 transition-colors">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-theme-foreground text-sm md:text-base">{title}</span>
          {tag && (
            <span className="text-[10px] font-semibold tracking-wider uppercase text-theme-muted-foreground bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full border border-theme-border">
              {tag}
            </span>
          )}
        </div>
        <svg
          className="w-4 h-4 text-theme-muted-foreground transition-transform duration-200 group-open:rotate-180 shrink-0"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-theme-border/60">
        {children}
      </div>
    </details>
  );
}
