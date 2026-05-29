export const APP_NAME = 'Vela Luma' as const;
export const APP_TAGLINE = 'Sails of Light' as const;
export const APP_URL = 'https://velaluma.ai' as const;
export const LOGO_MARK = '⛵' as const;

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  ADD_USER: '/dashboard/add-user',
  EDIT_USER: '/dashboard/edit-user',
  PROMPTS: '/dashboard/prompts',
  TRAINING: '/dashboard/training',
  SUPPORT: '/dashboard/support',
  BILLING: '/dashboard/billing',
  REPORTS: '/dashboard/reports',
  CHAT: '/dashboard/chat',
} as const;

export const ACCESS_LEVELS = {
  CHAT_ONLY: 'chat_only',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
} as const;

export const ACCESS_LEVEL_LABELS: Record<string, string> = {
  chat_only: 'Chat Only',
  admin: 'Admin',
  super_admin: 'Super Admin',
} as const;

export const ACCESS_LEVEL_DESCRIPTIONS: Record<string, string> = {
  chat_only: 'AI chat & image generation',
  admin: 'Manage users & view reports',
  super_admin: 'Full access including billing',
} as const;

export const PROMPT_CATEGORIES = {
  CLIENT_COMMUNICATION: 'Client Communication',
  LISTING_MARKETING: 'Listing & Marketing',
  COMPLIANCE_SCRIPTS: 'Compliance Scripts',
  OBJECTION_HANDLING: 'Objection Handling',
  BUYER_FOLLOWUPS: 'Buyer Follow-Ups',
  DRAFT_TEMPLATES: 'Draft Templates',
} as const;

export const PROMPT_TAGS = {
  MARKETING: 'Marketing',
  EMAIL: 'Email',
  SOCIAL: 'Social',
  FAVOURITE: 'Favourite',
} as const;

export const AUTH_STORAGE_KEY = 'vela_luma_auth' as const;
export const MAX_SEATS = 20 as const;
export const RECENT_ACTIVITY_LIMIT = 10 as const;
export const PASSWORD_MIN_LENGTH = 6 as const;
export const PROMPT_PREVIEW_LENGTH = 92 as const;

export const NAVIGATION_LABELS = {
  MENU: 'Menu',
  DASHBOARD: 'Dashboard',
  ADD_USER: 'Add User',
  EDIT_USER: 'Edit User',
  PROMPTS: 'Prompts',
  TRAINING: 'Training',
  SUPPORT: 'Support',
  BILLING: 'Billing',
  REPORTS: 'Reports',
  CHAT: 'Chat',
} as const;

export const PAGE_TITLES = {
  LOGIN: 'Sign In',
  DASHBOARD: 'Dashboard',
  ADD_USER: 'Add User',
  EDIT_USER: 'Edit User',
  PROMPTS: 'Saved Prompts',
  TRAINING: 'Training',
  SUPPORT: 'Support',
  BILLING: 'Billing',
  REPORTS: 'Reports',
  CHAT: 'Chat',
} as const;

export const BUTTON_LABELS = {
  SIGN_IN: 'Sign in',
  SEND_INVITE: 'Send invite',
  CANCEL: 'Cancel',
  NEW_PROMPT: '+ New Prompt',
} as const;

export const FORM_LABELS = {
  EMAIL: 'Email address',
  PASSWORD: 'Password',
  FULL_NAME: 'Full name',
  ACCESS_LEVEL: 'Access level',
} as const;

export const PLACEHOLDERS = {
  EMAIL: 'you@company.com',
  PASSWORD: 'Enter your password',
  FULL_NAME: 'Optional',
  DASHBOARD_SEARCH: 'Search workspace',
  PROMPT_SEARCH: 'Search prompts',
  CHAT_INPUT: 'Ask your company AI anything...',
  SUPPORT_INPUT: 'Ask a question about Vela Luma...',
} as const;

export const COPY = {
  appDescription: 'Private AI workspace for modern real estate teams.',
  loginSubtitle: "Please sign in to your team's AI workspace.",
  forgotPassword: 'Forgot password?',
  invalidCredentials: 'Invalid email or password',
  noAccount: "Don't have an account? Contact your admin →",
  privacyNote: 'Your data is private and secure inside Vela Luma.',
  quickActions: 'Quick Actions',
  recentActivity: 'Recent Activity',
  welcomeBack: 'Welcome Back',
  inviteTitle: 'Invite a crew member',
  inviteSubtitle: 'Set access and send a secure welcome email in seconds.',
  inviteNote: 'A welcome email is sent instantly with a temporary password.',
  inviteSuccess: 'Invite sent successfully.',
  teamPrompts: 'Team Prompts',
  myPrompts: 'My Prompts',
  myFavourites: 'My Favourites',
  recentlyUsed: 'Recently Used',
  noPrompts: 'No saved prompts yet.',
  comingSoon: 'Coming soon',
  searchLabel: 'Search',
  seatUsage: 'Seat usage',
  teamMembers: 'Team Members',
  accountOwner: 'Account Owner',
  accessLabel: 'Access',
  statusLabel: 'Status',
  lastActive: 'Last active',
  memberDirectory: 'Manage seat access and activity across the team.',
  copyAction: 'Copy',
  pinAction: 'Pin',
  editAction: 'Edit',
  usedCountPrefix: 'Used',
  savedSuffix: 'saved',
  itemsSuffix: 'items',
  close: 'Close',
  notifications: 'Notifications',
  workspaceSearch: 'Workspace search',
} as const;

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: 'Email address is required.',
  EMAIL_INVALID: 'Enter a valid email address.',
  PASSWORD_REQUIRED: 'Password is required.',
  PASSWORD_MIN: `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`,
  ACCESS_REQUIRED: 'Select an access level.',
} as const;

export const BILLING_PAGE_COPY = {
  pricePerSeatSuffix: 'per seat / month',
  nextBilling: 'Next billing',
  dueDate: 'June 1, 2026',
  dueInDays: 'in 6 days',
  cardEnding: 'Visa ending 4242',
  seatsUsedSuffix: '/ 20 seats',
  seatsUsageCaption: '90% used  -  2 seats available',
  billingBreakdown: 'Billing Breakdown',
  memberLabel: 'Member',
  monthlyLabel: 'Monthly',
  moreUsersLabel: '+ 14 more users...',
  showUsersToDeactivate: 'Show users to deactivate →',
  monthlyTotalSuffix: '/ month',
} as const;

export const REPORTS_PAGE_COPY = {
  heading: 'Select a report',
  refreshRate: 'Data refreshes every 24 hours',
  activeTodayTitle: 'Active Today',
  activeTodayDescription: 'Who logged in and how many queries they ran',
  leaderboardsTitle: 'Leaderboards',
  leaderboardsDescription: 'Ranked by queries, images, and engagement score',
  commonQuestionsTitle: 'Common Questions',
  commonQuestionsDescription: 'Most-asked topics — reveals training gaps',
  positiveFeedbackTitle: 'Positive Feedback',
  positiveFeedbackDescription: 'Responses your team saved or rated helpful',
  negativeFeedbackTitle: 'Negative Feedback',
  negativeFeedbackDescription: 'Flagged responses and guardrail events',
  viewReport: 'View report →',
  usersActiveSuffix: 'users active',
  thisWeekSuffix: 'this week',
  queriesTodaySuffix: 'queries today',
  helpfulRateSuffix: 'helpful rate',
  flagsThisWeekSuffix: 'flags this week',
} as const;

export const CHAT_PAGE_COPY = {
  brandSubtitle: 'Trained on your company  ·  Always on-brand',
  transcriptTitle: 'Buyer Commission Concerns',
  sourcePrefix: 'Source:',
} as const;

export const TRAINING_PAGE_COPY = {
  title: 'Company knowledge',
  badge: 'Trained today',
  intro:
    'This is what your AI has been trained on and is available to your entire team. Keep it current.',
  summaryLabel: 'Training summary',
  guardRailsLabel: 'Guard Rails',
  saveChanges: 'Save changes',
  discard: 'Discard',
  retrain: 'Retrain AI now',
  footer:
    'Retraining takes 2–4 hours. Your team can keep using the AI while it processes.',
} as const;

export const SUPPORT_PAGE_COPY = {
  title: 'Support chat',
  recentQuestions: 'Your recent questions',
  online: 'Online',
  answered: 'Answered',
  showMore: 'Show more',
} as const;
