import { ACCESS_LEVELS } from '@/constants/app';

export type AccessLevel = typeof ACCESS_LEVELS[keyof typeof ACCESS_LEVELS];

export interface User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly accessLevel: AccessLevel;
  readonly companyName: string;
  readonly avatarInitials: string;
  readonly createdAt: string;
}

export interface AuthState {
  readonly user: User | null;
  readonly isAuthenticated: boolean;
  readonly isLoading: boolean;
}

export interface LoginFormValues {
  readonly email: string;
  readonly password: string;
}

export interface InviteUserFormValues {
  readonly email: string;
  readonly name: string;
  readonly accessLevel: AccessLevel;
}
