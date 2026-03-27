'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const progressBarVariants = cva('h-full rounded-full transition-all duration-300', {
  variants: {
    variant: {
      primary: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-error',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const trackSizeMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
} as const;

export interface ProgressBarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  max?: number;
  label?: string;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, max = 100, label, variant, size, className, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const trackSize = trackSizeMap[size ?? 'md'];

    return (
      <div ref={ref} className={className} {...props}>
        {label && (
          <div className="mb-1 text-sm text-on-surface-variant">{label}</div>
        )}
        <div
          className={cn(
            'w-full overflow-hidden rounded-full bg-surface-container-high',
            trackSize,
          )}
        >
          <div
            className={cn(progressBarVariants({ variant, size }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export { progressBarVariants };
