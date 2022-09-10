import { Badge, Code, Flex, Text } from "@chakra-ui/react";

export default function DocumentationItem({
  description,
  endpoint,
}: {
  description: React.ReactNode;
  endpoint: string;
}) {
  return (
    <>
      {description}
      <a href={endpoint} target="_black" rel="noreferrer noopener">
        <Flex gap={2}>
          <Badge>GET</Badge>
          <Code
            _hover={{
              backgroundColor: "purple.500",
              color: "white",
              transition: "all 0.6s",
            }}
          >
            {endpoint}{" "}
          </Code>
        </Flex>
      </a>
    </>
  );
}
