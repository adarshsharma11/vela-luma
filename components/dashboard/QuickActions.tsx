import {
  Brain,
  ChartNoAxesColumnIncreasing,
  CreditCard,
  MessageSquareMore,
  MessagesSquare,
  UserRoundPen,
  UserRoundPlus,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { PAGE_TITLES, ROUTES } from '@/constants/app';

interface QuickActionItem {
  readonly href: string;
  readonly label: string;
  readonly icon: LucideIcon;
  readonly accentClassName: string;
}

const actions: ReadonlyArray<QuickActionItem> = [
  {
    href: ROUTES.ADD_USER,
    label: PAGE_TITLES.ADD_USER,
    icon: UserRoundPlus,
    accentClassName: 'bg-blue-50 text-blue-600',
  },
  {
    href: ROUTES.EDIT_USER,
    label: PAGE_TITLES.EDIT_USER,
    icon: UserRoundPen,
    accentClassName: 'bg-slate-100 text-navy-900',
  },
  {
    href: ROUTES.TRAINING,
    label: PAGE_TITLES.TRAINING,
    icon: Brain,
    accentClassName: 'bg-amber-50 text-amber-600',
  },
  {
    href: ROUTES.SUPPORT,
    label: PAGE_TITLES.SUPPORT,
    icon: MessageSquareMore,
    accentClassName: 'bg-blue-50 text-blue-600',
  },
  {
    href: ROUTES.BILLING,
    label: PAGE_TITLES.BILLING,
    icon: CreditCard,
    accentClassName: 'bg-gold-300/20 text-gold-500',
  },
  {
    href: ROUTES.REPORTS,
    label: PAGE_TITLES.REPORTS,
    icon: ChartNoAxesColumnIncreasing,
    accentClassName: 'bg-slate-100 text-navy-900',
  },
  {
    href: ROUTES.CHAT,
    label: PAGE_TITLES.CHAT,
    icon: MessagesSquare,
    accentClassName: 'bg-emerald-50 text-emerald-600',
  },
] as const;

export const QuickActions = (): JSX.Element => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-7">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.href}
            href={action.href}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
          >
            <div
              className={cn(
                'inline-flex rounded-full p-3 transition group-hover:scale-105',
                action.accentClassName,
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-900">{action.label}</p>
          </Link>
        );
      })}
    </div>
  );
};
