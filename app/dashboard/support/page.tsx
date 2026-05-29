import { CircleHelp, SendHorizonal } from 'lucide-react';

import { PLACEHOLDERS, SUPPORT_PAGE_COPY } from '@/constants/app';
import { MOCK_SUPPORT_QUESTIONS } from '@/data/mock-support';
import { cn } from '@/lib/utils';

export default function SupportPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Support</h1>
      </div>

      <section className="rounded-none border border-slate-400 bg-white p-7 shadow-soft">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold text-slate-900">{SUPPORT_PAGE_COPY.title}</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            {SUPPORT_PAGE_COPY.online}
          </span>
        </div>

        <div className="pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {SUPPORT_PAGE_COPY.recentQuestions}
          </p>

          <div className="mt-2">
            {MOCK_SUPPORT_QUESTIONS.map((item) => (
              <div
                key={item.id}
                className="grid gap-4 border-b border-slate-200 py-4 lg:grid-cols-[1fr,120px]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex rounded-full bg-blue-50 p-1.5 text-blue-500">
                    <CircleHelp className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-slate-800">{item.question}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.askedAt}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 lg:justify-end">
                  <span className={cn('h-3 w-3 rounded-full bg-emerald-600')} />
                  <span className="text-sm text-emerald-700">{SUPPORT_PAGE_COPY.answered}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 rounded-full border border-slate-200 px-12 py-2 text-sm text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
          >
            {SUPPORT_PAGE_COPY.showMore}
          </button>

          <div className="mt-5 flex items-center gap-3">
            <input
              aria-label={SUPPORT_PAGE_COPY.title}
              className="h-14 flex-1 rounded-full border-2 border-blue-500 bg-white px-5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder={PLACEHOLDERS.SUPPORT_INPUT}
              type="text"
            />
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
              aria-label={SUPPORT_PAGE_COPY.title}
            >
              <SendHorizonal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
