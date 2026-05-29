'use client';

import { X } from 'lucide-react';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { COPY } from '@/constants/app';
import { cn } from '@/lib/utils';

export interface ModalProps extends PropsWithChildren {
  readonly isOpen: boolean;
  readonly title: string;
  readonly onClose: () => void;
  readonly className?: string;
}

export const Modal = ({
  isOpen,
  title,
  onClose,
  className,
  children,
}: ModalProps): JSX.Element | null => {
  useEffect((): (() => void) | undefined => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="absolute inset-0" aria-hidden="true" onClick={onClose} />
      <div
        className={cn(
          'relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-soft',
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            onClick={onClose}
            aria-label={COPY.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};
