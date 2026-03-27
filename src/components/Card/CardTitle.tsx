'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const cardTitleVariants = cva('font-semibold text-on-surface', {
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface CardTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn(cardTitleVariants({ size }), className)} {...props}>
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'Card.Title';

export { cardTitleVariants };
