import { Button, Container, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import QuotesList from "../core/quotes/QuotesList";
import { Quote } from "../core/quotes/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { readFile } from "fs/promises";

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
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await readFile("./quotes/data.json", "utf-8");
  const quotes = JSON.parse(data);

  return {
    props: {
      quotes,
    },
  };
}
