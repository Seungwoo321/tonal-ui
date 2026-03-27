'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tableRowVariants = cva('', {
  variants: {
    hoverable: {
      true: 'hover:bg-surface-container-low',
      false: '',
    },
    selected: {
      true: 'bg-primary-fixed/10',
      false: '',
    },
  },
  defaultVariants: {
    hoverable: true,
    selected: false,
  },
});

export interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ hoverable, selected, className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn(tableRowVariants({ hoverable, selected }), className)}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'Table.Row';

export { tableRowVariants };
