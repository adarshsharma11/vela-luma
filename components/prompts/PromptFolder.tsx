'use client';

import { ChevronDown, ChevronRight, Folder } from 'lucide-react';
import { PropsWithChildren, useState } from 'react';

import { Badge } from '@/components/ui/Badge';
import { COPY } from '@/constants/app';
import { cn } from '@/lib/utils';

type PromptFolderVariant = 'default' | 'gold';

export interface PromptFolderProps extends PropsWithChildren {
  readonly name: string;
  readonly countLabel: string;
  readonly defaultOpen?: boolean;
  readonly variant?: PromptFolderVariant;
}

export const PromptFolder = ({
  name,
  countLabel,
  defaultOpen = false,
  variant = 'default',
  children,
}: PromptFolderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <button
        type="button"
        className={cn(
          'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50',
          variant === 'gold' ? 'bg-gold-300/10 hover:bg-gold-300/15' : '',
        )}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'inline-flex rounded-xl p-2',
              variant === 'gold' ? 'bg-gold-300/20 text-gold-500' : 'bg-slate-100 text-slate-600',
            )}
          >
            <Folder className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">{name}</p>
            <Badge variant={variant === 'gold' ? 'gold' : 'default'}>{countLabel}</Badge>
          </div>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-slate-500" />
        )}
      </button>
      {isOpen ? (
        <div className="border-t border-slate-100 bg-white px-5 py-4">
          {children ?? <p className="text-sm text-slate-500">{COPY.noPrompts}</p>}
        </div>
      ) : null}
    </div>
  );
};
