'use client';

import { Copy, Pencil, Pin } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import { COPY, PROMPT_PREVIEW_LENGTH, PROMPT_TAGS } from '@/constants/app';
import { truncate } from '@/lib/utils';
import { SavedPrompt } from '@/types/prompt';

export interface PromptItemProps {
  readonly prompt: SavedPrompt;
}

export const PromptItem = ({ prompt }: PromptItemProps): JSX.Element => {
  const handleCopy = async (): Promise<void> => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(prompt.description);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-slate-900">{prompt.title}</p>
          {prompt.tag ? (
            <Badge variant={prompt.tag === PROMPT_TAGS.FAVOURITE ? 'gold' : 'blue'}>
              {prompt.tag}
            </Badge>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-slate-500">
          {truncate(prompt.description, PROMPT_PREVIEW_LENGTH)}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {COPY.usedCountPrefix} {prompt.usageCount}x
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          aria-label={COPY.copyAction}
          onClick={() => {
            void handleCopy();
          }}
        >
          <Copy className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          aria-label={COPY.pinAction}
        >
          <Pin className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          aria-label={COPY.editAction}
        >
          <Pencil className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
