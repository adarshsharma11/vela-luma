import { ACCESS_LEVEL_LABELS, ACCESS_LEVELS, MAX_SEATS } from '@/constants/app';
import { BillingMember, BillingSummary } from '@/types/workspace';

export const MOCK_BILLING_SUMMARY: BillingSummary = {
  pricePerSeat: 39,
  nextBillingDate: 'June 1, 2026',
  seatsUsed: 18,
  totalSeats: MAX_SEATS,
  usagePercent: 90,
  totalMonthlyAmount: 900,
} as const;

export const MOCK_BILLING_MEMBERS: ReadonlyArray<BillingMember> = [
  {
    id: 'bm-1',
    name: 'Priya Kapoor',
    email: 'priya@co.com',
    access: ACCESS_LEVEL_LABELS[ACCESS_LEVELS.ADMIN],
    status: 'active',
    monthlyAmount: 50,
  },
  {
    id: 'bm-2',
    name: 'James Miller',
    email: 'james@co.com',
    access: ACCESS_LEVEL_LABELS[ACCESS_LEVELS.CHAT_ONLY],
    status: 'active',
    monthlyAmount: 50,
  },
  {
    id: 'bm-3',
    name: 'Tom Reeves',
    email: 'tom@co.com',
    access: ACCESS_LEVEL_LABELS[ACCESS_LEVELS.CHAT_ONLY],
    status: 'active',
    monthlyAmount: 50,
  },
  {
    id: 'bm-4',
    name: 'Anika Singh',
    email: 'anika@co.com',
    access: ACCESS_LEVEL_LABELS[ACCESS_LEVELS.SUPER_ADMIN],
    status: 'active',
    monthlyAmount: 50,
  },
] as const;
