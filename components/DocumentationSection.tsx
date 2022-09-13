import { Heading } from "@chakra-ui/react";

export default function DocumentationSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Heading as="h2" fontSize="2xl" mt={5} textColor="purple.500">
        {title}{" "}
      </Heading>
      {children}
    </>
  );
}
