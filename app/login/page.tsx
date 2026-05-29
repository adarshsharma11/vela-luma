'use client';

import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_URL,
  BUTTON_LABELS,
  COPY,
  FORM_LABELS,
  LOGIN_DEMO_EMAIL,
  LOGIN_DEMO_PASSWORD,
  LOGO_MARK,
  PASSWORD_MIN_LENGTH,
  PLACEHOLDERS,
  ROUTES,
  VALIDATION_MESSAGES,
} from '@/constants/app';
import { useAuth } from '@/context/AuthContext';
import { LoginFormValues } from '@/types/auth';

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const { login, state } = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: LOGIN_DEMO_EMAIL,
      password: LOGIN_DEMO_PASSWORD,
    },
  });

  useEffect(() => {
    if (state.isAuthenticated) {
      router.replace(ROUTES.DASHBOARD);
    }
  }, [router, state.isAuthenticated]);

  const onSubmit = (values: LoginFormValues): void => {
    const isValid = login(values.email, values.password);

    if (!isValid) {
      setError('root', { type: 'manual', message: COPY.invalidCredentials });
      return;
    }

    router.push(ROUTES.DASHBOARD);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="text-center">
          <p className="text-4xl">{LOGO_MARK}</p>
          <h1 className="mt-4 text-3xl font-semibold text-navy-900">{APP_NAME}</h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-gold-500">
            {APP_TAGLINE}
          </p>
          <p className="mt-4 text-sm text-slate-500">{COPY.loginSubtitle}</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: VALIDATION_MESSAGES.EMAIL_REQUIRED,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: VALIDATION_MESSAGES.EMAIL_INVALID,
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                label={FORM_LABELS.EMAIL}
                placeholder={PLACEHOLDERS.EMAIL}
                type="email"
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: VALIDATION_MESSAGES.PASSWORD_REQUIRED,
              minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: VALIDATION_MESSAGES.PASSWORD_MIN,
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                label={FORM_LABELS.PASSWORD}
                placeholder={PLACEHOLDERS.PASSWORD}
                type="password"
                error={errors.password?.message}
              />
            )}
          />

          <div className="flex justify-end">
            <Link className="text-sm font-medium text-blue-600 hover:text-blue-500" href={APP_URL}>
              {COPY.forgotPassword}
            </Link>
          </div>

          {errors.root?.message ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errors.root.message}
            </p>
          ) : null}

          <Button className="w-full" isLoading={isSubmitting} size="lg" type="submit">
            {BUTTON_LABELS.SIGN_IN}
          </Button>
        </form>

        <div className="mt-6 space-y-4 text-center">
          <p className="text-sm text-slate-500">{COPY.noAccount}</p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-500">
            <Lock className="h-4 w-4 text-blue-600" />
            <span>{COPY.privacyNote}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
