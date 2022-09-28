import { Button } from "@chakra-ui/react";
import { ButtonCustomProps } from "./types";

export default function PrimaryButton({
  children,
  ...rest
}: ButtonCustomProps) {
  return (
    <Button
      bg="purple.500"
      textColor="HighlightText"
      type="submit"
      width="full"
      {...rest}
    >
      {children}
    </Button>
  );
}
