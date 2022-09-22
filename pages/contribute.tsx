import { FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { getCachedCharacters } from "../core/characters/service";
import { Character } from "../core/characters/types";

interface ContributeProps {
  characters: Character[];
}

export default function Contribute({ characters }: ContributeProps) {
  console.log(characters);

  return (
    <Layout>
      <FormControl>
        <FormLabel>Personaje</FormLabel>
        <Select placeholder="Koyomi Araragi...">
          {characters.map((character: any) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </Select>
        <FormLabel>Season</FormLabel>
        <Select placeholder="Kizumonogatari...."></Select>
        <FormLabel>Episode</FormLabel>
        <Select placeholder="Kizumonogatari I: Tekketsu-hen"></Select>
        <FormLabel>Frase</FormLabel>
        <Textarea placeholder="Koyomi Araragi..."></Textarea>
      </FormControl>
    </Layout>
  );
}

export async function getStaticProps() {
  const { results: characters } = await getCachedCharacters();

  return {
    props: {
      characters,
    },
  };
}
