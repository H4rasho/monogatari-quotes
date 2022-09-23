import { Season } from "../seasons/types";

export interface Episode {
  id: string;
  name: string;
  seasons: Season;
}
