import { ACCESS_LEVELS } from '@/constants/app';
import { User } from '@/types/auth';

export const MOCK_USERS: ReadonlyArray<User> = [
  {
    id: 'user-001',
    email: 'dale@velaluma.ai',
    name: 'Dale Shadbegian',
    accessLevel: ACCESS_LEVELS.SUPER_ADMIN,
    companyName: 'Vela Luma',
    avatarInitials: 'DS',
    createdAt: '2024-01-15',
  },
  {
    id: 'user-002',
    email: 'admin@velaluma.ai',
    name: 'Sarah Chen',
    accessLevel: ACCESS_LEVELS.ADMIN,
    companyName: 'Vela Luma',
    avatarInitials: 'SC',
    createdAt: '2024-02-01',
  },
] as const;

export const MOCK_PASSWORD = 'password123' as const;
