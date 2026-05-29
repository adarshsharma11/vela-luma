import { REPORTS_PAGE_COPY } from '@/constants/app';
import { ReportCard } from '@/types/workspace';

export const MOCK_REPORT_CARDS: ReadonlyArray<ReportCard> = [
  {
    id: 'report-1',
    icon: 'activity',
    value: '18',
    metricLabel: REPORTS_PAGE_COPY.usersActiveSuffix,
    title: REPORTS_PAGE_COPY.activeTodayTitle,
    description: REPORTS_PAGE_COPY.activeTodayDescription,
    accent: 'blue',
  },
  {
    id: 'report-2',
    icon: 'trophy',
    value: 'Top 3',
    metricLabel: REPORTS_PAGE_COPY.thisWeekSuffix,
    title: REPORTS_PAGE_COPY.leaderboardsTitle,
    description: REPORTS_PAGE_COPY.leaderboardsDescription,
    accent: 'gold',
  },
  {
    id: 'report-3',
    icon: 'help',
    value: '142',
    metricLabel: REPORTS_PAGE_COPY.queriesTodaySuffix,
    title: REPORTS_PAGE_COPY.commonQuestionsTitle,
    description: REPORTS_PAGE_COPY.commonQuestionsDescription,
    accent: 'navy',
  },
  {
    id: 'report-4',
    icon: 'thumbs-up',
    value: '94%',
    metricLabel: REPORTS_PAGE_COPY.helpfulRateSuffix,
    title: REPORTS_PAGE_COPY.positiveFeedbackTitle,
    description: REPORTS_PAGE_COPY.positiveFeedbackDescription,
    accent: 'green',
  },
  {
    id: 'report-5',
    icon: 'thumbs-down',
    value: '3',
    metricLabel: REPORTS_PAGE_COPY.flagsThisWeekSuffix,
    title: REPORTS_PAGE_COPY.negativeFeedbackTitle,
    description: REPORTS_PAGE_COPY.negativeFeedbackDescription,
    accent: 'red',
  },
] as const;
