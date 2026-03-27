'use client';

import { forwardRef, useEffect, useRef, useImperativeHandle, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const modalVariants = cva(
  'fixed inset-0 m-auto rounded-lg border-none bg-surface-container-lowest p-0 shadow-xl backdrop:bg-black/50',
  {
    variants: {
      size: {
        sm: 'w-full max-w-sm',
        md: 'w-full max-w-lg',
        lg: 'w-full max-w-2xl',
        full: 'w-full max-w-[calc(100vw-2rem)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDialogElement>, 'title'>,
    VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ open, onClose, title, size, className, children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => dialogRef.current!);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open]);

    return (
      <dialog
        ref={dialogRef}
        onClose={onClose}
        className={cn(modalVariants({ size }), className)}
        {...props}
      >
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-on-surface">{title}</h2>
            <button
              onClick={onClose}
              className="text-outline hover:text-on-surface-variant"
            >
              &times;
            </button>
          </div>
          {children}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';

export { modalVariants };
