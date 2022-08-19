import {
  Avatar,
  Divider,
  HStack,
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
  );
}
