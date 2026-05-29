import { cn } from '@/lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  readonly initials: string;
  readonly size?: AvatarSize;
  readonly className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
};

export const Avatar = ({
  initials,
  size = 'md',
  className,
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700',
        sizeClasses[size],
        className,
      )}
    >
      {initials}
    </div>
  );
};
