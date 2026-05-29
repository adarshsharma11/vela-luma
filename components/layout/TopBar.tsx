'use client';

import { Bell, ChevronDown, LogOut, Menu, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Avatar } from '@/components/ui/Avatar';
import { BUTTON_LABELS, COPY, PLACEHOLDERS, ROUTES } from '@/constants/app';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

export interface TopBarProps {
  readonly onMenuToggle: () => void;
}

export const TopBar = ({ onMenuToggle }: TopBarProps): JSX.Element => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    state: { user },
    logout,
  } = useAuth();

  const handleLogout = (): void => {
    logout();
    setIsMenuOpen(false);
    router.push(ROUTES.LOGIN);
  };

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
        {user ? (
          <div className="relative">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-slate-700 transition hover:bg-slate-50"
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            >
              <Avatar initials={user.avatarInitials} size="sm" />
              <span className="hidden text-sm font-medium md:inline">{user.name}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition',
                  isMenuOpen ? 'rotate-180' : '',
                )}
              />
            </button>
            {isMenuOpen ? (
              <div className="absolute right-0 top-14 z-30 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
                <div className="border-b border-slate-100 px-3 py-2">
                  <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  <span>{BUTTON_LABELS.LOGOUT}</span>
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
};
