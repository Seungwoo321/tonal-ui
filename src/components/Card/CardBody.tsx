'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('text-on-surface-variant', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';
