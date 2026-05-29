'use client';

import { useMemo, useState } from 'react';

import { MyFavourites } from '@/components/prompts/MyFavourites';
import { PromptFolder } from '@/components/prompts/PromptFolder';
import { PromptItem } from '@/components/prompts/PromptItem';
import { Button } from '@/components/ui/Button';
import {
  BUTTON_LABELS,
  COPY,
  PAGE_TITLES,
  PLACEHOLDERS,
  PROMPT_CATEGORIES,
} from '@/constants/app';
import { MOCK_MY_PROMPTS, MOCK_TEAM_PROMPTS } from '@/data/mock-prompts';
import { PromptFolder as PromptFolderType } from '@/types/prompt';

export default function PromptsPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const normalizedSearch = searchValue.trim().toLowerCase();

  const teamFolders = useMemo<ReadonlyArray<PromptFolderType>>(() => {
    if (!normalizedSearch) {
      return MOCK_TEAM_PROMPTS;
    }

    return MOCK_TEAM_PROMPTS.map((folder) => ({
      ...folder,
      items: folder.items.filter((item) =>
        `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalizedSearch),
      ),
    })).filter((folder) => folder.items.length > 0 || folder.name.toLowerCase().includes(normalizedSearch));
  }, [normalizedSearch]);

  const filteredMine = useMemo(() => {
    return MOCK_MY_PROMPTS.filter((prompt) => {
      if (!normalizedSearch) {
        return true;
      }

      return `${prompt.title} ${prompt.description}`.toLowerCase().includes(normalizedSearch);
    });
  }, [normalizedSearch]);

  const otherFolders = useMemo<ReadonlyArray<PromptFolderType>>(
    () =>
      [
        { id: 'my-folder-recent', name: COPY.recentlyUsed, items: filteredMine.slice(0, 2) },
        {
          id: 'my-folder-drafts',
          name: PROMPT_CATEGORIES.DRAFT_TEMPLATES,
          items: filteredMine.slice(2, 4),
        },
      ] as const,
    [filteredMine],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <h1 className="text-3xl font-semibold text-slate-900">{PAGE_TITLES.PROMPTS}</h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500"
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={PLACEHOLDERS.PROMPT_SEARCH}
            type="search"
            value={searchValue}
          />
          <Button>{BUTTON_LABELS.NEW_PROMPT}</Button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">{COPY.teamPrompts}</h2>
          {teamFolders.map((folder) => (
            <PromptFolder
              key={folder.id}
              name={folder.name}
              countLabel={`${folder.items.length} ${COPY.savedSuffix}`}
              defaultOpen={folder.isExpanded ?? folder.items.length > 0}
            >
              <div className="space-y-3">
                {folder.items.length > 0
                  ? folder.items.map((prompt) => <PromptItem key={prompt.id} prompt={prompt} />)
                  : null}
              </div>
            </PromptFolder>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">{COPY.myPrompts}</h2>
          <MyFavourites favourites={filteredMine} otherFolders={otherFolders} />
        </section>
      </div>
    </div>
  );
}
