import { Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <List display="flex" gap={5} justifyContent="right" mt={5}>
      <ListItem>
        <NextLink href="/" passHref>
          <Link>Demo</Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/documentation" passHref>
          <Link>API Documentation</Link>
        </NextLink>
      </ListItem>
    </List>
  );
}
