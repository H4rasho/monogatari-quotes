import { FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { getCachedCharacters } from "../core/characters/service";
import { Character } from "../core/characters/types";
import { getEpisodes } from "../core/episodes/service";
import { Episode } from "../core/episodes/types";
import { getSeasons } from "../core/seasons/service";
import { Season } from "../core/seasons/types";

interface ContributeProps {
  characters: Character[];
  seasons: Season[];
  episodes: Episode[];
}

export default function Contribute({
  characters,
  seasons,
  episodes,
}: ContributeProps) {
  return (
    <Layout>
      <FormControl>
        <FormLabel>Personaje</FormLabel>
        <Select placeholder="Koyomi Araragi...">
          {characters.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </Select>
        <FormLabel>Season</FormLabel>
        <Select placeholder="Kizumonogatari....">
          {seasons.map((season) => (
            <option key={season.id} value={season.id}>
              {season.name}
            </option>
          ))}
        </Select>
        <FormLabel>Episode</FormLabel>
        <Select placeholder="Kizumonogatari I: Tekketsu-hen">
          {episodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </Select>
        <FormLabel>Frase</FormLabel>
        <Textarea placeholder="Koyomi Araragi..."></Textarea>
      </FormControl>
    </Layout>
  );
}

export async function getStaticProps() {
  const { results: characters } = await getCachedCharacters();
  const { results: seasons } = await getSeasons();
  const { results: episodes } = await getEpisodes();

  return {
    props: {
      characters,
      seasons,
      episodes,
    },
  };
}
