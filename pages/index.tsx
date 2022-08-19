import {
  Container,
  Text,
  List,
  ListItem,
  HStack,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import Head from "next/head";

interface Props {
  quotes: {
    id: string;
    quote: string;
    image: string;
    characterId: string;
    chapterId: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
      id: string;
      name: string;
      description: string;
      avatar: string;
      createdAt: Date;
      updatedAt: Date;
    };
    episode: {
      id: string;
      name: string;
      number: number;
      seasonId: string;
      createdAt: Date;
      updatedAt: Date;
      season: {
        id: string;
        name: string;
        synopsis: string;
        releaseDate: Date;
        createdAt: Date;
        updatedAt: Date;
      };
    };
  }[];
}

const Home = ({ quotes }: Props) => {
  return (
    <div>
      <Head>
        <title>Monogatari Quotes</title>
        <meta name="description" content="List of monogatari quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.md" alignContent="center">
        <Text
          mt={4}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          as="h1"
          fontWeight="bold"
          textAlign="center"
        >
          Monogatari Quotes
        </Text>

        <List mt={10}>
          {quotes.map((quote) => (
            <ListItem key={quote.id}>
              <Text fontSize="xl" as="h2" fontWeight="bold">
                {quote.author.name}
              </Text>
              <HStack>
                <Text as="h3" fontWeight="semibold" textColor="GrayText">
                  {quote.episode.name} - EP {quote.episode.number} -{" "}
                  {quote.episode.season.name}
                </Text>
              </HStack>
              <HStack mt={3} gap={5}>
                <Avatar
                  src={quote.author.avatar}
                  w={[20, 100, 130]}
                  h={[20, 100, 130]}
                />
                <Text
                  fontSize={{ md: "xl" }}
                  as="p"
                  fontWeight="light"
                  fontStyle="italic"
                >
                  {quote.quote}
                </Text>
              </HStack>
              <Divider mt={5} />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://monogatari-quotes-production.up.railway.app/quotes"
  );
  const data = await res.json();
  return {
    props: {
      quotes: data,
    },
  };
}
