'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const radioGroupVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'flex gap-4',
      vertical: 'flex flex-col gap-2',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'onChange'>,
    VariantProps<typeof radioGroupVariants> {
  name: string;
  label?: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ name, label, options, value, onChange, orientation, disabled, className, ...props }, ref) => {
    return (
      <fieldset ref={ref} disabled={disabled} className={className} {...props}>
        {label && (
          <legend className="mb-2 text-sm font-medium text-on-surface-variant">
            {label}
          </legend>
        )}
        <div className={cn(radioGroupVariants({ orientation }))}>
          {options.map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-on-surface-variant">{opt.label}</span>
              {opt.description && (
                <span className="text-xs text-outline">({opt.description})</span>
              )}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { radioGroupVariants };
