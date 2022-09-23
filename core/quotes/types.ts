import { Character } from "../characters/types";
import { Season } from "../seasons/types";

export interface Quote {
  id: string;
  quote: string;
  characters: Character;
  episodes: {
    id: string;
    name: string;
    seasons: Season;
  };
}
