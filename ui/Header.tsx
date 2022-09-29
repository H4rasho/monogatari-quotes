import { Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { ROUTES } from "../routes/routes";

export default function Header() {
  return (
    <List display="flex" gap={5} justifyContent="right" mt={5}>
      {ROUTES.map((route) => (
        <ListItem key={route.path}>
          <NextLink href={route.path} passHref>
            <Link>{route.name}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
}
