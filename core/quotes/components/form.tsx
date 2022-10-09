import { useEffect, useState } from "react";
import { FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";

import { CreateQuote } from "../types";
import { ContributeProps } from "../../../pages/contribute";
import { Season } from "../../seasons/types";
import { createQuote } from "../service";
import PrimaryButton from "../../../ui/buttons/primary";

export default function QuoteForm({
  characters,
  seasons,
  episodes,
}: ContributeProps) {
  const [quoteForm, setQuoteForm] = useState<CreateQuote>({
    authorId: "",
    episodeId: "",
    quote: "",
  });
  const [seasonIdValue, setSeasonIdValue] = useState<Season["id"]>(
    seasons[0].id
  );

  const [filteredEpisodes, setFilteredEpisodes] = useState<
    ContributeProps["episodes"]
  >([]);

  useEffect(() => {
    setFilteredEpisodes(
      episodes.filter((episode) => episode.seasonId === seasonIdValue)
    );
  }, [seasonIdValue]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await createQuote(quoteForm);
    if (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Personaje</FormLabel>
        <Select
          value={quoteForm.authorId}
          onChange={(e) =>
            setQuoteForm({ ...quoteForm, authorId: e.target.value })
          }
        >
          {characters.map((character) => (
            <option
              key={character.id}
              value={character.id}
              onChange={(e) => setSeasonIdValue(e.currentTarget.value)}
            >
              {character.name}
            </option>
          ))}
        </Select>
        <FormLabel>Season</FormLabel>
        <Select
          value={seasonIdValue}
          onChange={(e) => setSeasonIdValue(e.target.value)}
        >
          {seasons.map((season) => (
            <option key={season.id} value={season.id}>
              {season.name}
            </option>
          ))}
        </Select>
        <FormLabel>Episode</FormLabel>
        <Select
          value={quoteForm.episodeId}
          onChange={(e) =>
            setQuoteForm({ ...quoteForm, episodeId: e.target.value })
          }
        >
          {filteredEpisodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </Select>
        <FormLabel>Frase</FormLabel>
        <Textarea
          value={quoteForm.quote}
          onChange={(e) =>
            setQuoteForm({ ...quoteForm, quote: e.target.value })
          }
          required
        ></Textarea>
        <PrimaryButton mt={5}>Enviar</PrimaryButton>
      </FormControl>
    </form>
  );
}
