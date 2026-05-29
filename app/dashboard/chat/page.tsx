'use client';

import { Mic, Pin, Sailboat, SendHorizonal } from 'lucide-react';

import { Avatar } from '@/components/ui/Avatar';
import { CHAT_PAGE_COPY, PAGE_TITLES, PLACEHOLDERS } from '@/constants/app';
import { MOCK_CHAT_MESSAGES } from '@/data/mock-chat';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

export default function ChatPage(): JSX.Element {
  const {
    state: { user },
  } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-soft">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-300/20 text-gold-500">
          <Sailboat className="h-9 w-9" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold tracking-wide text-navy-900">Vela Luma</h1>
          <p className="mt-1 text-sm text-slate-400">{CHAT_PAGE_COPY.brandSubtitle}</p>
        </div>
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <header className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-900">{CHAT_PAGE_COPY.transcriptTitle}</h2>
            <Pin className="h-4 w-4 text-red-400" />
          </div>
        </header>

        <div className="space-y-6 px-5 py-6 md:px-8">
          {MOCK_CHAT_MESSAGES.map((message) => {
            const isUser = message.sender === 'user';

            return (
              <div
                key={message.id}
                className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}
              >
                <div
                  className={cn(
                    'max-w-3xl rounded-3xl px-6 py-5 shadow-sm',
                    isUser ? 'bg-navy-800 text-white' : 'bg-blue-50 text-slate-700',
                  )}
                >
                  <p className="whitespace-pre-line text-sm leading-7">{message.content}</p>
                  {message.source ? (
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-xs italic text-blue-600">
                        {CHAT_PAGE_COPY.sourcePrefix} {message.source}
                      </p>
                      <Avatar initials="AI" size="sm" className="bg-red-50 text-red-500" />
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 px-2 text-xs text-slate-400">{message.timestamp}</p>
              </div>
            );
          })}
        </div>

        <footer className="border-t border-slate-200 px-5 py-4 md:px-6">
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
            <Mic className="h-5 w-5 text-slate-400" />
            <input
              aria-label={PAGE_TITLES.CHAT}
              className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder={PLACEHOLDERS.CHAT_INPUT}
              type="text"
            />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
              aria-label={PAGE_TITLES.CHAT}
            >
              <SendHorizonal className="h-5 w-5" />
            </button>
          </div>
        </footer>
      </section>

      <div className="flex items-center justify-between px-1 text-xs text-slate-400">
        <span>{PAGE_TITLES.CHAT}</span>
        <span>{user?.name ?? ''}</span>
      </div>
    </div>
  );
}
