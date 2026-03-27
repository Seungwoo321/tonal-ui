'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const heroBadgeVariants = cva(
  'inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider',
  {
    variants: {
      variant: {
        default: 'bg-secondary-container text-on-secondary-container',
        primary: 'bg-primary-container text-on-primary-container',
        tertiary: 'bg-tertiary-container text-on-tertiary-container',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface HeroBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof heroBadgeVariants> {}

export const HeroBadge = forwardRef<HTMLSpanElement, HeroBadgeProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(heroBadgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

HeroBadge.displayName = 'HeroBadge';

export { heroBadgeVariants };
