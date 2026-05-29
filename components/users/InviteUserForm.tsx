'use client';

import { CircleEllipsis, Shield, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { AccessLevelCard } from '@/components/users/AccessLevelCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  ACCESS_LEVEL_DESCRIPTIONS,
  ACCESS_LEVEL_LABELS,
  ACCESS_LEVELS,
  BUTTON_LABELS,
  COPY,
  FORM_LABELS,
  PLACEHOLDERS,
  ROUTES,
  VALIDATION_MESSAGES,
} from '@/constants/app';
import { InviteUserFormValues } from '@/types/auth';

export interface InviteUserFormProps {
  readonly onSubmitSuccess: (values: InviteUserFormValues) => void;
}

const accessLevelOptions: ReadonlyArray<InviteUserFormValues['accessLevel']> = [
  ACCESS_LEVELS.CHAT_ONLY,
  ACCESS_LEVELS.ADMIN,
  ACCESS_LEVELS.SUPER_ADMIN,
] as const;

export const InviteUserForm = ({ onSubmitSuccess }: InviteUserFormProps): JSX.Element => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InviteUserFormValues>({
    defaultValues: {
      email: '',
      name: '',
      accessLevel: ACCESS_LEVELS.CHAT_ONLY,
    },
  });

  const onSubmit = (values: InviteUserFormValues): void => {
            // Requested scaffold behavior: surface submitted values during mock invite flow.
            // eslint-disable-next-line no-console
    console.log(values);
    onSubmitSuccess(values);
    reset({
      email: '',
      name: '',
      accessLevel: ACCESS_LEVELS.CHAT_ONLY,
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            id="invite-email"
            label={FORM_LABELS.EMAIL}
            placeholder={PLACEHOLDERS.EMAIL}
            type="email"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="invite-name"
            label={FORM_LABELS.FULL_NAME}
            placeholder={PLACEHOLDERS.FULL_NAME}
            type="text"
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="accessLevel"
        control={control}
        rules={{ required: VALIDATION_MESSAGES.ACCESS_REQUIRED }}
        render={({ field }) => (
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700">{FORM_LABELS.ACCESS_LEVEL}</p>
            <div className="grid gap-3 lg:grid-cols-3">
              {accessLevelOptions.map((accessLevel) => (
                <AccessLevelCard
                  key={accessLevel}
                  title={ACCESS_LEVEL_LABELS[accessLevel]}
                  description={ACCESS_LEVEL_DESCRIPTIONS[accessLevel]}
                  icon={
                    accessLevel === ACCESS_LEVELS.CHAT_ONLY
                      ? CircleEllipsis
                      : accessLevel === ACCESS_LEVELS.ADMIN
                        ? Shield
                        : Star
                  }
                  iconClassName={
                    accessLevel === ACCESS_LEVELS.CHAT_ONLY
                      ? 'text-slate-500'
                      : accessLevel === ACCESS_LEVELS.ADMIN
                        ? 'text-red-500'
                        : 'text-gold-500'
                  }
                  isSelected={field.value === accessLevel}
                  onSelect={() => field.onChange(accessLevel)}
                />
              ))}
            </div>
            {errors.accessLevel?.message ? (
              <p className="text-sm text-red-600">{errors.accessLevel.message}</p>
            ) : null}
          </div>
        )}
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button className="sm:min-w-[160px]" isLoading={isSubmitting} type="submit">
          {BUTTON_LABELS.SEND_INVITE}
        </Button>
        <Button
          variant="secondary"
          className="sm:min-w-[140px]"
          onClick={() => router.push(ROUTES.DASHBOARD)}
        >
          {BUTTON_LABELS.CANCEL}
        </Button>
      </div>

      <p className="text-sm text-slate-500">{COPY.inviteNote}</p>
    </form>
  );
};
