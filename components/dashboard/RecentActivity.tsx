import { Avatar } from '@/components/ui/Avatar';
import { cn, formatRelativeTime } from '@/lib/utils';
import { ActivityItem } from '@/types/dashboard';

export interface RecentActivityProps {
  readonly items: ReadonlyArray<ActivityItem>;
}

const dotColorMap: Record<ActivityItem['color'], string> = {
  blue: 'bg-blue-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  green: 'bg-emerald-500',
};

export const RecentActivity = ({ items }: RecentActivityProps): JSX.Element => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-soft">
      <ul className="divide-y divide-slate-100">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3">
              <Avatar initials={item.initials} />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.userName}</p>
                <p className="text-sm text-slate-500">{item.action}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className={cn('h-2.5 w-2.5 rounded-full', dotColorMap[item.color])} />
              <span>{formatRelativeTime(item.timestamp)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
