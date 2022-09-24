import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { CreateQuote } from "../types";
import { ContributeProps } from "../../../pages/contribute";
import { Season } from "../../seasons/types";
import { createQuote } from "../service";

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
          placeholder="Koyomi Araragi..."
        >
          {characters.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </Select>
        <FormLabel>Season</FormLabel>
        <Select
          value={seasonIdValue}
          onChange={(e) => setSeasonIdValue(e.target.value)}
          placeholder="Kizumonogatari...."
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
          placeholder="Kizumonogatari I: Tekketsu-hen"
        >
          {episodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </Select>
        <FormLabel>Frase</FormLabel>
        <Textarea placeholder="Koyomi Araragi..." required></Textarea>
        <Button mt={4} colorScheme="teal" type="submit" width="full">
          Enviar
        </Button>
      </FormControl>
    </form>
  );
}