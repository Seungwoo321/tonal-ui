'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const chipVariants = cva(
  'inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-default',
  {
    variants: {
      variant: {
        filled: 'bg-secondary-container text-on-secondary-container hover:bg-primary-fixed-dim',
        tonal: 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high',
        outline: 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-low',
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      { variant: 'filled', active: true, className: 'bg-primary text-on-primary shadow-md' },
      { variant: 'tonal', active: true, className: 'bg-primary-fixed text-on-primary-fixed-variant font-semibold' },
      { variant: 'outline', active: true, className: 'border-primary text-primary font-semibold' },
    ],
    defaultVariants: {
      variant: 'filled',
      active: false,
    },
  }
);

export interface ChipProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  ({ variant, active, onClick, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        className={cn(
          chipVariants({ variant, active }),
          onClick && 'cursor-pointer',
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Chip.displayName = 'Chip';

export { chipVariants };
