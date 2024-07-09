import episodes from "../../db/episodes.json";
import { Episode } from "./types";

export const getEpisodes = async (): Promise<{
  results?: Episode[];
  error?: unknown;
}> => {
  return { results: episodes };
};

export const getEpisodeById = (id: string) => {
  const episode = episodes.find((episode) => episode.id === id);
  if (!episode) {
    throw new Error("Episode not found");
  }
  return { results: episode };
};
