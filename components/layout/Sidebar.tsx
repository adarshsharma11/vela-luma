'use client';

import {
  BarChart3,
  BookOpen,
  CreditCard,
  LayoutDashboard,
  LifeBuoy,
  MessageSquareText,
  MessagesSquare,
  UserPlus,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar } from '@/components/ui/Avatar';
import {
  ACCESS_LEVEL_LABELS,
  APP_NAME,
  APP_TAGLINE,
  NAVIGATION_LABELS,
  ROUTES,
} from '@/constants/app';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

interface NavigationItem {
  readonly href: string;
  readonly label: string;
  readonly icon: LucideIcon;
}

export interface SidebarProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const navigationItems: ReadonlyArray<NavigationItem> = [
  { href: ROUTES.DASHBOARD, label: NAVIGATION_LABELS.DASHBOARD, icon: LayoutDashboard },
  { href: ROUTES.ADD_USER, label: NAVIGATION_LABELS.ADD_USER, icon: UserPlus },
  { href: ROUTES.EDIT_USER, label: NAVIGATION_LABELS.EDIT_USER, icon: Users },
  { href: ROUTES.PROMPTS, label: NAVIGATION_LABELS.PROMPTS, icon: MessageSquareText },
  { href: ROUTES.TRAINING, label: NAVIGATION_LABELS.TRAINING, icon: BookOpen },
  { href: ROUTES.SUPPORT, label: NAVIGATION_LABELS.SUPPORT, icon: LifeBuoy },
  { href: ROUTES.BILLING, label: NAVIGATION_LABELS.BILLING, icon: CreditCard },
  { href: ROUTES.REPORTS, label: NAVIGATION_LABELS.REPORTS, icon: BarChart3 },
  { href: ROUTES.CHAT, label: NAVIGATION_LABELS.CHAT, icon: MessagesSquare },
] as const;

export const Sidebar = ({ isOpen, onClose }: SidebarProps): JSX.Element => {
  const pathname = usePathname();
  const {
    state: { user },
  } = useAuth();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-30 bg-slate-950/40 transition md:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-navy-800 text-white transition-transform md:static md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gold-500/30 px-6 py-6">
          <div>
            <p className="text-2xl font-semibold tracking-wide text-white">{APP_NAME}</p>
            <p className="mt-1 text-sm text-gold-400">{APP_TAGLINE}</p>
            <div className="mt-4 h-px w-16 bg-gold-500" />
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-slate-300 transition hover:bg-navy-700 md:hidden"
            onClick={onClose}
            aria-label={NAVIGATION_LABELS.MENU}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            {NAVIGATION_LABELS.MENU}
          </p>
          <nav className="mt-4 space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition',
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                      : 'text-slate-300 hover:bg-navy-700 hover:text-white',
                  )}
                  onClick={onClose}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {user ? (
          <div className="border-t border-navy-700 px-6 py-5">
            <div className="flex items-center gap-3">
              <Avatar initials={user.avatarInitials} className="bg-navy-700 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-xs text-slate-300">{ACCESS_LEVEL_LABELS[user.accessLevel]}</p>
              </div>
            </div>
          </div>
        ) : null}
      </aside>
    </>
  );
};
