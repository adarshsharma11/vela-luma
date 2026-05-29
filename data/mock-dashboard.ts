import { ACCESS_LEVELS } from '@/constants/app';
import { ActivityItem, DashboardStats, TeamMember } from '@/types/dashboard';

export const MOCK_STATS: DashboardStats = {
  activeUsers: 18,
  totalSeats: 20,
  queriesToday: 142,
  queriesChangePercent: 12,
  guardrailAlerts: 3,
  imagesCreated: 27,
} as const;

export const MOCK_ACTIVITY: ReadonlyArray<ActivityItem> = [
  { id: 'a1', userName: 'James Miller', initials: 'JM', action: 'Asked about commission policy', timestamp: '2m ago', color: 'blue' },
  { id: 'a2', userName: 'Priya Kapoor', initials: 'PK', action: 'Generated a listing flyer - 12 Oak Drive', timestamp: '8m ago', color: 'amber' },
  { id: 'a3', userName: 'Tom Reeves', initials: 'TR', action: 'Guardrail triggered - competitor mention', timestamp: '14m ago', color: 'red' },
  { id: 'a4', userName: 'Anika Singh', initials: 'AS', action: 'Asked how to write a buyer offer letter', timestamp: '22m ago', color: 'blue' },
] as const;

export const MOCK_TEAM: ReadonlyArray<TeamMember> = [
  { id: 't1', email: 'james@velaluma.ai', name: 'James Miller', accessLevel: ACCESS_LEVELS.CHAT_ONLY, status: 'active', lastActive: '2m ago' },
  { id: 't2', email: 'priya@velaluma.ai', name: 'Priya Kapoor', accessLevel: ACCESS_LEVELS.CHAT_ONLY, status: 'active', lastActive: '8m ago' },
  { id: 't3', email: 'tom@velaluma.ai', name: 'Tom Reeves', accessLevel: ACCESS_LEVELS.CHAT_ONLY, status: 'active', lastActive: '14m ago' },
  { id: 't4', email: 'anika@velaluma.ai', name: 'Anika Singh', accessLevel: ACCESS_LEVELS.ADMIN, status: 'active', lastActive: '22m ago' },
] as const;
