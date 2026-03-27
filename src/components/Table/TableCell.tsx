'use client';

import { forwardRef, type TdHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tableCellVariants = cva('px-4 py-3 text-on-surface-variant', {
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
});

export interface TableCellProps
  extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'>,
    VariantProps<typeof tableCellVariants> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ align, className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(tableCellVariants({ align }), className)}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'Table.Cell';

export { tableCellVariants };
