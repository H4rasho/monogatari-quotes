import quotes from "../../db/quotes.json";
import { getCharacterById } from "../characters/service";
import { getEpisodeById } from "../episodes/service";
import { getSeasonsById } from "../seasons/service";

export const getQuotes = async (offset: number, limit: number) => {
  try {
    const quotesToRetrun = quotes.map((quote) => {
      const { results: character } = getCharacterById(quote.authorId);
      const { results: episode } = getEpisodeById(quote.episodeId);
      const { results: season } = getSeasonsById(episode.seasonId);
      return {
        ...quote,
        character,
        episode: { ...episode, season },
      };
    });

    return { results: quotesToRetrun.slice(offset, offset + limit) };
  } catch (error) {
    return { error };
  }
};
