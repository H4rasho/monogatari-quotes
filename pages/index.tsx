import Head from "next/head";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";
import { API_URL } from "../config";
import H1 from "../components/headings/H1";
import Layout from "../components/Layout";

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
  const data = await fetch(`${API_URL}/api/quotes?limit=4`);
  const quotes = await data.json();

  return {
    props: {
      quotes,
    },
  };
}
