import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface CardProps {
  readonly title: string;
  readonly value: string;
  readonly subtitle?: string;
  readonly icon?: ReactNode;
  readonly className?: string;
}

export const Card = ({
  title,
  value,
  subtitle,
  icon,
  className,
}: CardProps): JSX.Element => {
  return (
    <article
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-soft',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-semibold text-slate-900">{value}</p>
          {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
        </div>
        {icon ? (
          <div className="rounded-xl bg-slate-100 p-3 text-slate-700">{icon}</div>
        ) : null}
      </div>
    </article>
  );
};
