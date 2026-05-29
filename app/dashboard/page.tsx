'use client';

import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { COPY } from '@/constants/app';
import { useAuth } from '@/context/AuthContext';
import { MOCK_ACTIVITY, MOCK_STATS } from '@/data/mock-dashboard';

export default function DashboardPage(): JSX.Element {
  const {
    state: { user },
  } = useAuth();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">
          {COPY.welcomeBack}, {user?.name ?? ''}!
        </h1>
        <p className="mt-2 text-sm text-slate-500">{COPY.appDescription}</p>
      </section>

      <StatsGrid stats={MOCK_STATS} />

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {COPY.quickActions}
        </h2>
        <QuickActions />
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {COPY.recentActivity}
        </h2>
        <RecentActivity items={MOCK_ACTIVITY} />
      </section>
    </div>
  );
}
