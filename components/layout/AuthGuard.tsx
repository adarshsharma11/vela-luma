'use client';

import { LoaderCircle } from 'lucide-react';
import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants/app';
import { useAuth } from '@/context/AuthContext';

export const AuthGuard = ({ children }: PropsWithChildren): JSX.Element | null => {
  const router = useRouter();
  const {
    state: { isAuthenticated, isLoading },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.replace(ROUTES.LOGIN);
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <LoaderCircle className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
