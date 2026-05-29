import { SupportQuestion } from '@/types/workspace';

export const MOCK_SUPPORT_QUESTIONS: ReadonlyArray<SupportQuestion> = [
  {
    id: 'support-1',
    question: 'How do I add a new user to my team?',
    askedAt: 'Today 9:02am',
    status: 'answered',
  },
  {
    id: 'support-2',
    question: 'Can I change the AI model my team uses?',
    askedAt: 'Today 8:44am',
    status: 'answered',
  },
  {
    id: 'support-3',
    question: 'Why did my image generation fail yesterday?',
    askedAt: 'Yesterday',
    status: 'answered',
  },
  {
    id: 'support-4',
    question: 'How do I upload a new policy document?',
    askedAt: 'May 22',
    status: 'answered',
  },
  {
    id: 'support-5',
    question: 'What is the difference between Admin and Super Admin?',
    askedAt: 'May 20',
    status: 'answered',
  },
] as const;
