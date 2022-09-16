import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

export const Image = chakra(NextImage, {
  baseStyle: { maxH: 150, maxW: 150 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
