export interface DashboardStats {
  readonly activeUsers: number;
  readonly totalSeats: number;
  readonly queriesToday: number;
  readonly queriesChangePercent: number;
  readonly guardrailAlerts: number;
  readonly imagesCreated: number;
}

export interface ActivityItem {
  readonly id: string;
  readonly userName: string;
  readonly initials: string;
  readonly action: string;
  readonly timestamp: string;
  readonly color: 'blue' | 'amber' | 'red' | 'green';
}

export interface TeamMember {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly accessLevel: string;
  readonly status: 'active' | 'invited' | 'suspended';
  readonly lastActive: string;
}
