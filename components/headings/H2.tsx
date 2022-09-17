import { Heading } from "@chakra-ui/react";
import { HeadingCustomProps } from "./tpyes";

export default function H2({ children, ...rest }: HeadingCustomProps) {
  return (
    <Heading as="h2" fontSize="3xl" mt={5} textColor="purple.500" {...rest}>
      {children}
    </Heading>
  );
}
