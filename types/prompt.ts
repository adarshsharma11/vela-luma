export interface SavedPrompt {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly tag?: string;
  readonly usageCount: number;
  readonly isFavourite: boolean;
  readonly isTeamPrompt: boolean;
}

export interface PromptFolder {
  readonly id: string;
  readonly name: string;
  readonly items: ReadonlyArray<SavedPrompt>;
  readonly isExpanded?: boolean;
}
