import { PromptFolder } from '@/components/prompts/PromptFolder';
import { PromptItem } from '@/components/prompts/PromptItem';
import { COPY } from '@/constants/app';
import { PromptFolder as PromptFolderType, SavedPrompt } from '@/types/prompt';

export interface MyFavouritesProps {
  readonly favourites: ReadonlyArray<SavedPrompt>;
  readonly otherFolders: ReadonlyArray<PromptFolderType>;
}

export const MyFavourites = ({
  favourites,
  otherFolders,
}: MyFavouritesProps): JSX.Element => {
  return (
    <div className="space-y-4">
      <PromptFolder
        name={COPY.myFavourites}
        countLabel={`${favourites.length} ${COPY.itemsSuffix}`}
        defaultOpen
        variant="gold"
      >
        <div className="space-y-3">
          {favourites.map((prompt) => (
            <PromptItem key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </PromptFolder>
      {otherFolders.map((folder) => (
        <PromptFolder
          key={folder.id}
          name={folder.name}
          countLabel={`${folder.items.length} ${COPY.itemsSuffix}`}
        >
          <div className="space-y-3">
            {folder.items.length > 0
              ? folder.items.map((prompt) => <PromptItem key={prompt.id} prompt={prompt} />)
              : null}
          </div>
        </PromptFolder>
      ))}
    </div>
  );
};
