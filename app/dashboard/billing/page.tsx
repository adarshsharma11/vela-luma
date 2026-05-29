import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { BILLING_PAGE_COPY, COPY, PAGE_TITLES } from '@/constants/app';
import { MOCK_BILLING_MEMBERS, MOCK_BILLING_SUMMARY } from '@/data/mock-billing';
import { cn, getInitials } from '@/lib/utils';

export default function BillingPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{PAGE_TITLES.BILLING}</h1>
      </div>

      <section className="grid gap-5 xl:grid-cols-[2fr,1.15fr]">
        <article className="rounded-3xl bg-navy-800 p-8 text-white shadow-soft">
          <div className="flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div>
              <div className="flex items-end gap-4">
                <span className="text-6xl font-semibold">${MOCK_BILLING_SUMMARY.pricePerSeat}</span>
                <span className="pb-3 text-base text-slate-300">
                  {BILLING_PAGE_COPY.pricePerSeatSuffix}
                </span>
              </div>
            </div>
            <div className="border-l border-gold-500/80 pl-6">
              <p className="text-sm text-slate-300">{BILLING_PAGE_COPY.nextBilling}</p>
              <p className="mt-3 text-3xl font-semibold">{MOCK_BILLING_SUMMARY.nextBillingDate}</p>
              <p className="mt-2 text-sm text-slate-300">{BILLING_PAGE_COPY.dueInDays}</p>
              <p className="mt-2 text-sm text-gold-300">{BILLING_PAGE_COPY.cardEnding}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-slate-500">{COPY.seatUsage}</p>
          <div className="mt-5 flex items-end gap-4">
            <span className="text-6xl font-semibold text-slate-900">
              {MOCK_BILLING_SUMMARY.seatsUsed}
            </span>
            <span className="pb-3 text-lg text-slate-400">
              / {MOCK_BILLING_SUMMARY.totalSeats} seats
            </span>
          </div>
          <div className="mt-5 h-3 rounded-full bg-slate-100">
            <div
              className="h-3 rounded-full bg-blue-500"
              style={{ width: `${MOCK_BILLING_SUMMARY.usagePercent}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-400">{BILLING_PAGE_COPY.seatsUsageCaption}</p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {BILLING_PAGE_COPY.billingBreakdown}
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="text-left text-xs font-semibold text-slate-400">
                <th className="pb-3 pr-4">{BILLING_PAGE_COPY.memberLabel}</th>
                <th className="pb-3 pr-4">{COPY.accessLabel}</th>
                <th className="pb-3 pr-4">{COPY.statusLabel}</th>
                <th className="pb-3 text-right">{BILLING_PAGE_COPY.monthlyLabel}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_BILLING_MEMBERS.map((member) => (
                <tr key={member.id}>
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={getInitials(member.name)} size="sm" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                        <p className="text-sm text-slate-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-sm text-slate-600">{member.access}</td>
                  <td className="py-4 pr-4">
                    <Badge variant="success" className="gap-2">
                      <span className={cn('h-2 w-2 rounded-full bg-emerald-600')} />
                      {member.status}
                    </Badge>
                  </td>
                  <td className="py-4 text-right text-sm font-semibold text-slate-900">
                    ${member.monthlyAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">{BILLING_PAGE_COPY.moreUsersLabel}</p>
            <button className="mt-4 text-sm font-medium text-blue-600 transition hover:text-blue-500">
              {BILLING_PAGE_COPY.showUsersToDeactivate}
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">${MOCK_BILLING_SUMMARY.totalMonthlyAmount}</p>
            <p className="mt-2 text-4xl font-semibold text-slate-900">
              ${MOCK_BILLING_SUMMARY.totalMonthlyAmount}{' '}
              <span className="text-lg font-semibold">{BILLING_PAGE_COPY.monthlyTotalSuffix}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
