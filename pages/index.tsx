import Head from "next/head";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";
import H1 from "../ui/headings/H1";
import Layout from "../ui/Layout";
import { getQuotes } from "../core/quotes/service";

interface Props {
  quotes: Quote[];
}

const Home = ({ quotes }: Props) => {
  return (
    <div>
      <Head>
        <title>Monogatari Quotes</title>
        <meta name="description" content="List of Monogatari Series quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <H1 mt={10}>Monogatari Quotes</H1>
        <QuotesList quotes={quotes}></QuotesList>
      </Layout>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { results } = await getQuotes(0, 4);

  return {
    props: {
      quotes: results,
    },
  };
}
