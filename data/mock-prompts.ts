import { PROMPT_CATEGORIES, PROMPT_TAGS } from '@/constants/app';
import { PromptFolder, SavedPrompt } from '@/types/prompt';

export const MOCK_TEAM_PROMPTS: ReadonlyArray<PromptFolder> = [
  {
    id: 'f1',
    name: PROMPT_CATEGORIES.CLIENT_COMMUNICATION,
    items: [
      { id: 'p1', title: 'Initial Outreach Email', description: 'Send a warm first-contact email to [CLIENT]', category: PROMPT_CATEGORIES.CLIENT_COMMUNICATION, tag: PROMPT_TAGS.EMAIL, usageCount: 22, isFavourite: false, isTeamPrompt: true },
    ],
  },
  {
    id: 'f2',
    name: PROMPT_CATEGORIES.LISTING_MARKETING,
    items: [
      { id: 'p2', title: 'New Listing Announcement', description: 'Write a property announcement for [ADDRESS] highlighting [FEATURES]', category: PROMPT_CATEGORIES.LISTING_MARKETING, tag: PROMPT_TAGS.MARKETING, usageCount: 34, isFavourite: false, isTeamPrompt: true },
      { id: 'p3', title: 'Open House Invite Email', description: 'Draft an open house invitation for [ADDRESS] on [DATE] from [TIME]', category: PROMPT_CATEGORIES.LISTING_MARKETING, tag: PROMPT_TAGS.EMAIL, usageCount: 18, isFavourite: false, isTeamPrompt: true },
      { id: 'p4', title: 'Social Media Caption - Just Listed', description: 'Create a 3-sentence Instagram caption for [ADDRESS]. Warm, professional', category: PROMPT_CATEGORIES.LISTING_MARKETING, tag: PROMPT_TAGS.SOCIAL, usageCount: 52, isFavourite: false, isTeamPrompt: true },
      { id: 'p5', title: 'Price Reduction Announcement', description: 'Write a short update notifying our list that [ADDRESS] has been reduced to [PRICE]', category: PROMPT_CATEGORIES.LISTING_MARKETING, tag: PROMPT_TAGS.MARKETING, usageCount: 11, isFavourite: false, isTeamPrompt: true },
      { id: 'p6', title: 'Buyer Thank-You Note', description: 'Draft a warm thank-you to [BUYER] for trusting us to find their new home at [ADDRESS]', category: PROMPT_CATEGORIES.LISTING_MARKETING, tag: PROMPT_TAGS.EMAIL, usageCount: 29, isFavourite: false, isTeamPrompt: true },
    ],
  },
  { id: 'f3', name: PROMPT_CATEGORIES.COMPLIANCE_SCRIPTS, items: [] },
  { id: 'f4', name: PROMPT_CATEGORIES.OBJECTION_HANDLING, items: [] },
] as const;

export const MOCK_MY_PROMPTS: ReadonlyArray<SavedPrompt> = [
  { id: 'mp1', title: 'Commission Objection Response', description: 'Respond with empathy, then pivot to our track record of saving clients money', category: 'Favourites', tag: PROMPT_TAGS.FAVOURITE, usageCount: 12, isFavourite: true, isTeamPrompt: false },
  { id: 'mp2', title: 'Pre-Approval Request Email', description: 'Remind buyer we require pre-approval before showings above [PRICE]', category: 'Favourites', tag: PROMPT_TAGS.FAVOURITE, usageCount: 8, isFavourite: true, isTeamPrompt: false },
  { id: 'mp3', title: 'CMA Summary Paragraph', description: 'Summarize the CMA for [ADDRESS] based on the following sold comps: [COMPS]', category: 'Favourites', tag: PROMPT_TAGS.FAVOURITE, usageCount: 21, isFavourite: true, isTeamPrompt: false },
  { id: 'mp4', title: 'Seller Net Sheet Explanation', description: 'Explain the estimated net proceeds to [SELLER] based on the offer of [PRICE]', category: 'Favourites', tag: PROMPT_TAGS.FAVOURITE, usageCount: 7, isFavourite: true, isTeamPrompt: false },
  { id: 'mp5', title: 'Referral Thank-You Message', description: 'Send a warm note to [REFERRER] thanking them for referring [CLIENT] to our team', category: 'Favourites', tag: PROMPT_TAGS.FAVOURITE, usageCount: 15, isFavourite: true, isTeamPrompt: false },
] as const;
