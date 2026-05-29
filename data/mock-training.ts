import { TrainingContent } from '@/types/workspace';

export const MOCK_TRAINING_CONTENT: TrainingContent = {
  summary:
    'Our AI is trained on your brokerage voice, transaction workflows, objection handling, and listing communication standards. It should answer in a warm, professional tone, reference approved company materials, and stay aligned with your market positioning across every response.',
  guardRails:
    'Responses must avoid legal advice, disclose when policy language is required, and stay within the approved compliance boundaries for marketing, contracts, and representation. Sensitive company information should never be invented or inferred if the source material does not confirm it.',
} as const;
