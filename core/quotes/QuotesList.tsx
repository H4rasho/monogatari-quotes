import { Box, Divider, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Image } from "../../utils/customImage";

import { Quote } from "./types";

interface QuoteListProps {
  quotes: Quote[];
}

export default function QuotesList({ quotes }: QuoteListProps) {
  if (quotes.length === 0) {
    return (
      <Text mt={10}>
        No hay frases para mostrar. Intenta con otra búsqueda o con otra página.
      </Text>
    );
  }

  return (
    <List mt={10}>
      {quotes.map((quote) => (
        <ListItem key={quote.quote}>
          <Text fontSize="xl" as="h2" fontWeight="bold" color="purple.500">
            {quote.characters.name}
          </Text>
          <HStack>
            <Text as="h3" fontWeight="semibold" textColor="GrayText">
              {quote.episodes.name} - {quote.episodes.seasons.name}
            </Text>
          </HStack>
          <HStack mt={3} gap={5}>
            <Box minW={[100, 150]}>
              <Image
                src={quote.characters.avatar}
                width={150}
                height={150}
                rounded="full"
                alt={quote.characters.name}
                objectFit="cover"
              />
            </Box>
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
