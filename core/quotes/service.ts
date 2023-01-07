import quotes from "../../db/quotes.json";
import seasons from "../../db/seasons.json";
import { getCharacterById } from "../characters/service";
import { getEpisodeById } from "../episodes/service";

export const getQuotes = async (offset: number, limit: number) => {
  try {
    const quotesToRetrun = quotes.map((quote) => {
      const { results: character } = getCharacterById(quote.authorId);
      const { results: episode } = getEpisodeById(quote.episodeId);

      const season = seasons.find((season) => season.id === episode?.seasonId);

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
