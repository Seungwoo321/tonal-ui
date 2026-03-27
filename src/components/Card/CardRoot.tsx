'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const cardRootVariants = cva(
  'rounded-lg border border-outline-variant shadow-sm',
  {
    variants: {
      variant: {
        filled: 'bg-surface-container-lowest',
        elevated: 'bg-surface-container-lowest shadow-md',
        outlined: 'bg-transparent shadow-none',
      },
      padding: {
        true: 'p-6',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      padding: true,
    },
  }
);

export interface CardRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardRootVariants> {}

export const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  ({ variant, padding, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardRootVariants({ variant, padding }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card.Root';

export { cardRootVariants };
