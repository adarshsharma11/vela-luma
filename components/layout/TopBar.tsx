'use client';

import { Bell, Menu, Search } from 'lucide-react';

import { COPY, PLACEHOLDERS } from '@/constants/app';

export interface TopBarProps {
  readonly onMenuToggle: () => void;
}

export const TopBar = ({ onMenuToggle }: TopBarProps): JSX.Element => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          onClick={onMenuToggle}
          aria-label={COPY.workspaceSearch}
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            aria-label={COPY.searchLabel}
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            placeholder={PLACEHOLDERS.DASHBOARD_SEARCH}
            type="search"
          />
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
          aria-label={COPY.notifications}
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};
