'use client';

import { forwardRef, useState, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const alertVariants = cva('rounded-md border p-4', {
  variants: {
    variant: {
      info: 'bg-info-container border-info text-on-info-container',
      success: 'bg-success-container border-success text-on-success-container',
      warning: 'bg-warning-container border-warning text-on-warning-container',
      danger: 'bg-error-container border-error text-on-error-container',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  dismissible?: boolean;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, title, dismissible, children, className, ...props }, ref) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex">
          <div className="flex-1">
            {title && <h4 className="mb-1 text-sm font-semibold">{title}</h4>}
            <div className="text-sm">{children}</div>
          </div>
          {dismissible && (
            <button
              onClick={() => setVisible(false)}
              className="ml-4 text-current opacity-50 hover:opacity-100"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { alertVariants };
