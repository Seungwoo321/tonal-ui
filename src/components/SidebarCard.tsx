'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const sidebarCardVariants = cva('rounded-xl', {
  variants: {
    variant: {
      default: 'bg-surface-container-lowest p-6',
      elevated: 'bg-surface-container-lowest p-6 shadow-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface SidebarCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarCardVariants> {
  title: string;
  icon?: ReactNode;
}

export const SidebarCard = forwardRef<HTMLDivElement, SidebarCardProps>(
  ({ title, icon, variant, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sidebarCardVariants({ variant }), className)}
        {...props}
      >
        <h4 className="font-headline text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
          {icon}
          {title}
        </h4>
        {children}
      </div>
    );
  }
);

SidebarCard.displayName = 'SidebarCard';

export { sidebarCardVariants };
