import { CheckCircle2, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface AccessLevelCardProps {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
  readonly iconClassName?: string;
  readonly isSelected: boolean;
  readonly onSelect: () => void;
}

export const AccessLevelCard = ({
  title,
  description,
  icon: Icon,
  iconClassName,
  isSelected,
  onSelect,
}: AccessLevelCardProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-start justify-between rounded-2xl border p-4 text-left transition',
        isSelected
          ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-100/60'
          : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50',
      )}
      onClick={onSelect}
    >
      <div>
        <span
          className={cn(
            'inline-flex rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm',
            iconClassName,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <p className="mt-4 text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>
      <CheckCircle2
        className={cn(
          'h-5 w-5 shrink-0 transition',
          isSelected ? 'text-blue-600 opacity-100' : 'text-slate-300 opacity-0',
        )}
      />
    </button>
  );
};
