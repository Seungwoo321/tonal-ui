'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tableRootVariants = cva('w-full text-sm', {
  variants: {
    density: {
      default: '',
      compact: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2',
      comfortable: '[&_th]:px-5 [&_th]:py-4 [&_td]:px-5 [&_td]:py-4',
    },
  },
  defaultVariants: {
    density: 'default',
  },
});

export interface TableRootProps
  extends HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableRootVariants> {}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ density, className, children, ...props }, ref) => {
    return (
      <div className="overflow-x-auto">
        <table
          ref={ref}
          className={cn(tableRootVariants({ density }), className)}
          {...props}
        >
          {children}
        </table>
      </div>
    );
  }
);

TableRoot.displayName = 'Table.Root';

export { tableRootVariants };
