import { Character } from "../characters/types";

export interface Quote {
  id: string;
  quote: string;
  characters: Character;
  episodes: {
    id: string;
    name: string;
    seasons: {
      id: string;
      name: string;
    };
  };
}
