import { Button, Container, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { API_URL } from "../config";
import Footer from "../components/Footer";
import Header from "../components/Header";
import H1 from "../components/headings/H1";

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

      <Container
        maxW="container.md"
        alignContent="center"
        justifyContent="center"
        as="main"
      >
        <Header />

        <H1>Monogatari Quotes</H1>
        <QuotesList quotes={quotes}></QuotesList>
        <HStack justify="right" mt={5}>
          <Button leftIcon={<ArrowBackIcon />} bg="black" color="white">
            Prev
          </Button>
          <Button rightIcon={<ArrowForwardIcon />} bg="black" color="white">
            Next
          </Button>
        </HStack>

        <Footer />
      </Container>
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
