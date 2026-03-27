'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const iconButtonVariants = cva(
  'flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high active:scale-90 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'min-h-[36px] min-w-[36px]',
        md: 'min-h-[44px] min-w-[44px]',
        lg: 'min-h-[52px] min-w-[52px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { iconButtonVariants };
