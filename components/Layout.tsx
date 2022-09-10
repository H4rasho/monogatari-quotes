import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <Container
      maxW="container.md"
      alignContent="center"
      justifyContent="center"
      as="main"
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
