import { Season } from "../seasons/types";

export interface Episode {
  id: string;
  name: string;
  seasonId: string;
  seasons: Season;
}
