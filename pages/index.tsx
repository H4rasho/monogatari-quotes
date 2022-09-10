import { Button, Container, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { API_URL } from "../config";
import Footer from "../components/Footer";

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
        as="main"
      >
        <Text
          mt={4}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          as="h1"
          fontWeight="bold"
          textAlign="center"
        >
          Monogatari Quotes
        </Text>
        <QuotesList quotes={quotes}></QuotesList>
        <HStack justify="right" mt={5}>
          <Button leftIcon={<ArrowBackIcon />} bg="black" color="white">
            Prev
          </Button>
          <Button rightIcon={<ArrowForwardIcon />} bg="black" color="white">
            Next
          </Button>
        </HStack>
      </Container>
      <Footer />
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
