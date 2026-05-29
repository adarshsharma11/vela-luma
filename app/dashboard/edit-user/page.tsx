import Link from 'next/link';

import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ACCESS_LEVEL_LABELS, COPY, MAX_SEATS, PAGE_TITLES, ROUTES } from '@/constants/app';
import { MOCK_TEAM } from '@/data/mock-dashboard';
import { MOCK_USERS } from '@/data/mock-auth';
import { getInitials } from '@/lib/utils';

const statusVariantMap = {
  active: 'success',
  invited: 'blue',
  suspended: 'danger',
} as const;

export default function EditUserPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">{PAGE_TITLES.EDIT_USER}</h1>
          <p className="mt-2 text-sm text-slate-500">{COPY.memberDirectory}</p>
        </div>
        <Link href={ROUTES.ADD_USER}>
          <Button>{PAGE_TITLES.ADD_USER}</Button>
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-[280px,1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-medium text-slate-500">{COPY.seatUsage}</p>
          <p className="mt-3 text-4xl font-semibold text-slate-900">
            {MOCK_TEAM.length + MOCK_USERS.length}/{MAX_SEATS}
          </p>
          <p className="mt-3 text-sm text-slate-500">{COPY.accountOwner}</p>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
            <Avatar initials={MOCK_USERS[0].avatarInitials} />
            <div>
              <p className="text-sm font-semibold text-slate-900">{MOCK_USERS[0].name}</p>
              <p className="text-sm text-slate-500">{MOCK_USERS[0].email}</p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="text-xl font-semibold text-slate-900">{COPY.teamMembers}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">{COPY.accessLabel}</th>
                  <th className="px-6 py-4">{COPY.statusLabel}</th>
                  <th className="px-6 py-4">{COPY.lastActive}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {MOCK_TEAM.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar initials={getInitials(member.name)} size="sm" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                          <p className="text-sm text-slate-500">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {ACCESS_LEVEL_LABELS[member.accessLevel]}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={statusVariantMap[member.status]}>{member.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{member.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
