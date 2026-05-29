'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type PropsWithChildren,
} from 'react';

import { AUTH_STORAGE_KEY } from '@/constants/app';
import { MOCK_PASSWORD, MOCK_USERS } from '@/data/mock-auth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { AuthState, LoginFormValues, User } from '@/types/auth';

interface AuthContextValue {
  readonly state: AuthState;
  readonly login: (email: LoginFormValues['email'], password: string) => boolean;
  readonly logout: () => void;
}

type AuthAction =
  | { readonly type: 'LOGIN'; readonly payload: User }
  | { readonly type: 'LOGOUT' }
  | { readonly type: 'SET_LOADING'; readonly payload: boolean };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAuthenticated: true, isLoading: false };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false, isLoading: false };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const storage = useLocalStorage<User>(AUTH_STORAGE_KEY);

  useEffect(() => {
    const storedUser = storage.getItem();

    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: storedUser });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: false });
  }, [storage]);

  const login = useCallback(
    (email: string, password: string): boolean => {
      dispatch({ type: 'SET_LOADING', payload: true });

      const matchedUser = MOCK_USERS.find(
        (user) => user.email.toLowerCase() === email.trim().toLowerCase(),
      );

      if (!matchedUser || password !== MOCK_PASSWORD) {
        dispatch({ type: 'SET_LOADING', payload: false });
        return false;
      }

      storage.setItem(matchedUser);
      dispatch({ type: 'LOGIN', payload: matchedUser });
      return true;
    },
    [storage],
  );

  const logout = useCallback((): void => {
    storage.removeItem();
    dispatch({ type: 'LOGOUT' });
  }, [storage]);

  const value = useMemo<AuthContextValue>(() => ({ state, login, logout }), [login, logout, state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
};
