import H1 from "../components/headings/H1";
import Layout from "../components/Layout";
import { getCachedCharacters } from "../core/characters/service";
import { Character } from "../core/characters/types";
import { getEpisodes } from "../core/episodes/service";
import { Episode } from "../core/episodes/types";
import QuoteForm from "../core/quotes/components/form";
import { getSeasons } from "../core/seasons/service";
import { Season } from "../core/seasons/types";

export interface ContributeProps {
  characters: Character[];
  seasons: Season[];
  episodes: Episode[];
}

export default function Contribute(props: ContributeProps) {
  return (
    <Layout>
      <H1>Contribuir</H1>
      <QuoteForm {...props} />
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
