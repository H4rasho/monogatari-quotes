import { Alert, AlertIcon, Button, Flex, useToast } from "@chakra-ui/react";

export default function DocumentationItem({
  description,
  endpoint,
}: {
  description: React.ReactNode;
  endpoint: string;
}) {
  const toast = useToast();
  return (
    <>
      {description}
      <Flex gap={2}>
        <Button
          _hover={{
            backgroundColor: "purple.500",
            color: "white",
            transition: "all 0.6s",
          }}
          onClick={() => {
            navigator.clipboard.writeText(endpoint);
            toast({
              title: "Copiado en el portapapeles.",
              status: "success",
              duration: 1000,
            });
          }}
        >
          {endpoint}{" "}
        </Button>
      </Flex>
    </>
  );
}
