'use client';

import { forwardRef, useEffect, useState, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const toastVariants = cva(
  'fixed right-4 top-4 z-50 rounded-md px-4 py-3 text-sm shadow-lg transition-all duration-300',
  {
    variants: {
      variant: {
        success: 'bg-success text-on-success',
        danger: 'bg-error text-on-error',
        info: 'bg-primary text-on-primary',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export interface ToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClose'>,
    VariantProps<typeof toastVariants> {
  message: string;
  duration?: number;
  onClose: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant, message, duration = 3000, onClose, className, ...props }, ref) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
      <div
        ref={ref}
        className={cn(
          toastVariants({ variant }),
          visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
          className,
        )}
        {...props}
      >
        {message}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export { toastVariants };
