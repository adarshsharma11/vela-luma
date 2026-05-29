import { ChatMessage } from '@/types/workspace';

export const MOCK_CHAT_MESSAGES: ReadonlyArray<ChatMessage> = [
  {
    id: 'chat-1',
    sender: 'user',
    content: 'How should I respond to a buyer who says our commission is too high?',
    timestamp: '9:14 AM',
  },
  {
    id: 'chat-2',
    sender: 'assistant',
    content:
      "Based on your approved scripts, here's how to handle commission objections:\n\n\"I completely understand — what you're investing in is proven results. Our clients typically net more on their sale than those who go it alone. Would it help to see some comparable results?\"",
    timestamp: '9:14 AM',
    source: 'Client Objection Scripts v2.pdf',
  },
  {
    id: 'chat-3',
    sender: 'user',
    content: "What's our policy on dual agency?",
    timestamp: '9:16 AM',
  },
  {
    id: 'chat-4',
    sender: 'assistant',
    content:
      'Your broker requires written disclosure to both parties before proceeding. Use Form DA-22 and get signatures before any negotiation begins.',
    timestamp: '9:16 AM',
    source: 'Company Policy Handbook §4.2',
  },
] as const;
