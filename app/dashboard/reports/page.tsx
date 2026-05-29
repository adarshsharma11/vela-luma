import {
  ActivitySquare,
  CircleHelp,
  ThumbsDown,
  ThumbsUp,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

import { PAGE_TITLES, REPORTS_PAGE_COPY } from '@/constants/app';
import { MOCK_REPORT_CARDS } from '@/data/mock-reports';
import { cn } from '@/lib/utils';
import { ReportCard } from '@/types/workspace';

const iconMap: Record<ReportCard['icon'], LucideIcon> = {
  activity: ActivitySquare,
  trophy: Trophy,
  help: CircleHelp,
  'thumbs-up': ThumbsUp,
  'thumbs-down': ThumbsDown,
};

const accentStyles: Record<ReportCard['accent'], { readonly icon: string; readonly value: string }> = {
  blue: { icon: 'bg-blue-50 text-blue-600', value: 'text-blue-500' },
  gold: { icon: 'bg-gold-300/20 text-gold-500', value: 'text-gold-500' },
  navy: { icon: 'bg-slate-100 text-navy-900', value: 'text-navy-900' },
  green: { icon: 'bg-emerald-50 text-emerald-600', value: 'text-emerald-600' },
  red: { icon: 'bg-red-50 text-red-500', value: 'text-red-500' },
};

export default function ReportsPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{PAGE_TITLES.REPORTS}</h1>
      </div>

      <section>
        <h2 className="text-4xl font-semibold text-slate-900">{REPORTS_PAGE_COPY.heading}</h2>
        <p className="mt-2 text-sm text-slate-400">{REPORTS_PAGE_COPY.refreshRate}</p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {MOCK_REPORT_CARDS.map((card) => {
          const Icon = iconMap[card.icon];
          const accent = accentStyles[card.accent];

          return (
            <article
              key={card.id}
              className={cn(
                'rounded-3xl border border-slate-200 bg-white p-5 shadow-soft',
                card.id === 'report-4' || card.id === 'report-5' ? 'xl:col-span-1' : '',
              )}
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <span className={cn('inline-flex rounded-2xl p-3', accent.icon)}>
                  <Icon className="h-8 w-8" />
                </span>
                <div className="text-right">
                  <p className={cn('text-5xl font-semibold', accent.value)}>{card.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{card.metricLabel}</p>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="text-2xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{card.description}</p>
                <button className={cn('mt-6 text-sm font-medium', accent.value)}>
                  {REPORTS_PAGE_COPY.viewReport}
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
