import { Button, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import { API_URL } from "../config";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";

interface Props {
  quotes: Quote[];
}

const Home = ({ quotes }: Props) => {
  return (
    <div>
      <Head>
        <title>Monogatari Quotes</title>
        <meta name="description" content="List of monogatari quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        maxW="container.md"
        alignContent="center"
        justifyContent="center"
      >
        <Text
          mt={4}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          as="h1"
          fontWeight="bold"
        >
          Monogatari Quotes
        </Text>
        <QuotesList quotes={quotes}></QuotesList>
        <Button>Prev</Button>
        <Button>Next</Button>
      </Container>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/quotes`);
  const data = await res.json();
  return {
    props: {
      quotes: data,
    },
  };
}
