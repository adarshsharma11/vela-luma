'use client';

import { useCallback, useMemo } from 'react';

export interface LocalStorageHookResult<T> {
  readonly getItem: () => T | null;
  readonly setItem: (value: T) => void;
  readonly removeItem: () => void;
}

export const useLocalStorage = <T,>(key: string): LocalStorageHookResult<T> => {
  const getItem = useCallback((): T | null => {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedValue = window.localStorage.getItem(key);

    if (!storedValue) {
      return null;
    }

    try {
      return JSON.parse(storedValue) as T;
    } catch {
      return null;
    }
  }, [key]);

  const setItem = useCallback(
    (value: T): void => {
      if (typeof window === 'undefined') {
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const removeItem = useCallback((): void => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.removeItem(key);
  }, [key]);

  return useMemo(
    () => ({
      getItem,
      setItem,
      removeItem,
    }),
    [getItem, removeItem, setItem],
  );
};
