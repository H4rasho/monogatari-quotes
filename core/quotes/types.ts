import { Character } from "../characters/types";
import { Episode } from "../episodes/types";

export interface Quote {
  id: string;
  quote: string;
  characters: Character;
  episodes: Episode;
}

export interface CreateQuote {
  quote: string;
  characterId: string;
  episodeId: string;
}
