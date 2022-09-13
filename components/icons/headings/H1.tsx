import { Heading } from "@chakra-ui/react";
import { HeadingCustomProps } from "./tpyes";

export default function H1({ children, ...rest }: HeadingCustomProps) {
  return (
    <Heading
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      as="h1"
      fontWeight="bold"
      textAlign="center"
      textColor={"purple.500"}
      {...rest}
    >
      {children}
    </Heading>
  );
}
