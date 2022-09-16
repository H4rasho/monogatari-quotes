import {
  Divider,
  Grid,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { Quote } from "./types";

interface QuoteListProps {
  quotes: Quote[];
}

export default function QuotesList({ quotes }: QuoteListProps) {
  return (
    <List mt={10}>
      {quotes.map((quote) => (
        <ListItem key={quote.quote}>
          <Text fontSize="xl" as="h2" fontWeight="bold">
            {quote.character}
          </Text>
          <HStack>
            <Text as="h3" fontWeight="semibold" textColor="GrayText">
              {quote.episode} - {quote.season}
            </Text>
          </HStack>
          <Grid mt={3} gap={5} templateColumns="auto auto">
            <Image
              src={`/images/${quote.character}.jpg`}
              w={[100, 150]}
              h={[100, 150]}
              rounded="full"
              alt={quote.character}
              objectFit="cover"
            />
            <Text
              fontSize={{ md: "xl" }}
              as="p"
              fontWeight="light"
              fontStyle="italic"
            >
              {quote.quote}
            </Text>
          </Grid>
          <Divider mt={5} />
        </ListItem>
      ))}
    </List>
  );
}
