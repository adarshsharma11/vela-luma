export interface BillingSummary {
  readonly pricePerSeat: number;
  readonly nextBillingDate: string;
  readonly seatsUsed: number;
  readonly totalSeats: number;
  readonly usagePercent: number;
  readonly totalMonthlyAmount: number;
}

export interface BillingMember {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly access: string;
  readonly status: 'active';
  readonly monthlyAmount: number;
}

export interface ReportCard {
  readonly id: string;
  readonly icon: 'activity' | 'trophy' | 'help' | 'thumbs-up' | 'thumbs-down';
  readonly value: string;
  readonly metricLabel: string;
  readonly title: string;
  readonly description: string;
  readonly accent: 'blue' | 'gold' | 'navy' | 'green' | 'red';
}

export interface ChatMessage {
  readonly id: string;
  readonly sender: 'user' | 'assistant';
  readonly content: string;
  readonly timestamp: string;
  readonly source?: string;
}

export interface SupportQuestion {
  readonly id: string;
  readonly question: string;
  readonly askedAt: string;
  readonly status: 'answered';
}

export interface TrainingContent {
  readonly summary: string;
  readonly guardRails: string;
}
