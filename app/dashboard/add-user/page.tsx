'use client';

import { useEffect, useState } from 'react';

import { InviteUserForm } from '@/components/users/InviteUserForm';
import { COPY, PAGE_TITLES } from '@/constants/app';

export default function AddUserPage(): JSX.Element {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect((): (() => void) | undefined => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToastMessage(null), 2500);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const handleInviteSuccess = (): void => {
    setToastMessage(COPY.inviteSuccess);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{PAGE_TITLES.ADD_USER}</h1>
      </div>

      {toastMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {toastMessage}
        </div>
      ) : null}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900">{COPY.inviteTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{COPY.inviteSubtitle}</p>
        </div>
        <InviteUserForm onSubmitSuccess={handleInviteSuccess} />
      </section>
    </div>
  );
}
