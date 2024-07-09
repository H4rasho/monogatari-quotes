import characters from "../../db/characters.json";
import { Character } from "./types";

export const getCachedCharacters = async (): Promise<{
  results?: Character[];
  error?: unknown;
}> => {
  return { results: characters };
};

export const getCharacterById = (id: string) => {
  const character = characters.find((character) => character.id === id);

  if (!character) {
    throw new Error("Character not found");
  }

  return { results: character };
};
