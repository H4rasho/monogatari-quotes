import { Season } from "../seasons/types";

export interface Episode {
  id: string;
  name: string;
  seasonId: string;
}

export interface EpisodePopulated {
  id: string;
  name: string;
  seasonId: string;
  season: Season;
}
