import { Character } from "../characters/types";
import { Episode } from "../episodes/types";

export interface Quote {
  id: string;
  quote: string;
  character: Character;
  episode: Episode;
}

export interface CreateQuote {
  quote: string;
  authorId: string;
  episodeId: string;
}
