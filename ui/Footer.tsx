import { Center, Text, TextProps } from "@chakra-ui/react";

export interface CopirihtTextProps extends TextProps {
  children: string;
}

const CopirihtText = ({ children, ...rest }: CopirihtTextProps) => (
  <Text textColor="gray" as="p" fontSize="smaller" {...rest}>
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Center as="footer" mt={5} flexDirection="column">
      <a
        href="https://twitter.com/H4rasho"
        target="_black"
        rel="noreferrer noopener"
      >
        <CopirihtText
          _hover={{
            color: "purple.900",
          }}
        >
          Made by @H4rasho
        </CopirihtText>
      </a>
      <CopirihtText>All Quotes Belong to Monogatari Series</CopirihtText>
    </Center>
  );
}
