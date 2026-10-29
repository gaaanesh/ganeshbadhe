'use client';

import React from 'react';

type MetricStatus = 'Measured' | 'Prototype-tested (n=8)' | 'Modeled projection';

interface MetricBadgeProps {
  status: MetricStatus;
  className?: string;
}

const statusStyles: Record<MetricStatus, string> = {
  'Measured':
    'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  'Prototype-tested (n=8)':
    'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/50',
  'Modeled projection':
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50',
};

export default function MetricBadge({ status, className = '' }: MetricBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border whitespace-nowrap ${statusStyles[status]} ${className}`}
    >
      {status}
    </span>
  );
}
