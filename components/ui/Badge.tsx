import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'blue' | 'gold' | 'success' | 'danger';

export interface BadgeProps extends PropsWithChildren {
  readonly variant?: BadgeVariant;
  readonly className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700',
  blue: 'bg-blue-50 text-blue-700',
  gold: 'bg-gold-300/25 text-gold-500',
  success: 'bg-emerald-50 text-emerald-700',
  danger: 'bg-red-50 text-red-700',
};

export const Badge = ({
  children,
  variant = 'default',
  className,
}: BadgeProps): JSX.Element => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
