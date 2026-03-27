'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const switchVariants = cva(
  'relative inline-flex shrink-0 rounded-full transition-colors',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-[52px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const thumbSizeMap = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const;

const thumbTranslateMap = {
  sm: { on: 'translate-x-4', off: 'translate-x-0.5' },
  md: { on: 'translate-x-5.5', off: 'translate-x-0.5' },
  lg: { on: 'translate-x-6', off: 'translate-x-0.5' },
} as const;

export interface SwitchProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ label, checked, onChange, size, disabled, className, ...props }, ref) => {
    const resolvedSize = size ?? 'md';
    const thumbSize = thumbSizeMap[resolvedSize];
    const thumbTranslate = checked
      ? thumbTranslateMap[resolvedSize].on
      : thumbTranslateMap[resolvedSize].off;

    return (
      <label
        ref={ref}
        className={cn('flex cursor-pointer items-center gap-3', className)}
        {...props}
      >
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange(!checked)}
          className={cn(
            switchVariants({ size }),
            checked ? 'bg-primary' : 'bg-surface-container-highest',
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          <span
            className={cn(
              'inline-block translate-y-0.5 rounded-full bg-surface-container-lowest shadow transition-transform',
              thumbSize,
              thumbTranslate,
            )}
          />
        </button>
        {label && (
          <span className="text-sm text-on-surface-variant">{label}</span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { switchVariants };
