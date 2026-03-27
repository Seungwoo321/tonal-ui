'use client';

import { forwardRef, type ThHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tableHeaderCellVariants = cva(
  'px-4 py-3 text-xs font-medium uppercase tracking-wider text-outline',
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      align: 'left',
    },
  }
);

export interface TableHeaderCellProps
  extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'>,
    VariantProps<typeof tableHeaderCellVariants> {}

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ align, className, children, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={cn(tableHeaderCellVariants({ align }), className)}
        {...props}
      >
        {children}
      </th>
    );
  }
);

TableHeaderCell.displayName = 'Table.HeaderCell';

export { tableHeaderCellVariants };
