'use client';

import React from 'react';

interface TodoBlockProps {
  /** Short label shown as prefix */
  label?: string;
  /** The prompt or question for Ganesh */
  children: React.ReactNode;
  /** If true, renders inline instead of as a block */
  inline?: boolean;
  className?: string;
}

export default function TodoBlock({
  label = 'TODO – Ganesh to confirm',
  children,
  inline = false,
  className = '',
}: TodoBlockProps) {
  if (inline) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 rounded px-2 py-0.5 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
        <span className="font-bold">{label}:</span> {children}
      </span>
    );
  }

  return (
    <div
      className={`rounded-xl border-2 border-dashed border-rose-300 dark:border-rose-700 bg-rose-50/80 dark:bg-rose-950/30 p-4 my-4 ${className}`}
      role="note"
      aria-label={label}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
        <div className="text-sm">
          <span className="font-bold text-rose-700 dark:text-rose-400">{label}:</span>{' '}
          <span className="text-rose-600 dark:text-rose-300">{children}</span>
        </div>
      </div>
    </div>
  );
}
