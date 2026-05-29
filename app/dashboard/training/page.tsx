import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { TRAINING_PAGE_COPY } from '@/constants/app';
import { MOCK_TRAINING_CONTENT } from '@/data/mock-training';

export default function TrainingPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Training Area</h1>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">{TRAINING_PAGE_COPY.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {TRAINING_PAGE_COPY.intro}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            {TRAINING_PAGE_COPY.badge}
          </span>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              {TRAINING_PAGE_COPY.summaryLabel}
            </label>
            <textarea
              aria-label={TRAINING_PAGE_COPY.summaryLabel}
              className="min-h-[120px] w-full rounded-2xl border border-blue-500 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none"
              defaultValue={MOCK_TRAINING_CONTENT.summary}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              {TRAINING_PAGE_COPY.guardRailsLabel}
            </label>
            <textarea
              aria-label={TRAINING_PAGE_COPY.guardRailsLabel}
              className="min-h-[120px] w-full rounded-2xl border border-blue-500 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none"
              defaultValue={MOCK_TRAINING_CONTENT.guardRails}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
          <Button className="md:min-w-[160px]">{TRAINING_PAGE_COPY.saveChanges}</Button>
          <Button variant="secondary" className="md:min-w-[120px]">
            {TRAINING_PAGE_COPY.discard}
          </Button>
          <Button
            variant="secondary"
            className="md:ml-6 md:min-w-[170px] md:border-slate-200 md:text-slate-400"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {TRAINING_PAGE_COPY.retrain}
          </Button>
        </div>

        <p className="mt-4 text-xs text-slate-400">{TRAINING_PAGE_COPY.footer}</p>
      </section>
    </div>
  );
}
