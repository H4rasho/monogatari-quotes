import { Character } from "../characters/types";
import { EpisodePopulated } from "../episodes/types";

export interface Quote {
  id: string;
  quote: string;
  character: Character;
  episode: EpisodePopulated;
}

export interface CreateQuote {
  quote: string;
  authorId: string;
  episodeId: string;
}
