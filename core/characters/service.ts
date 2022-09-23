import { supabase } from "../database";
import { Character } from "./types";

export const getCachedCharacters = async (): Promise<{
  results?: Character[];
  error?: unknown;
}> => {
  const { data: characters, error } = await supabase
    .from("characters")
    .select("*");

  return { results: characters, error };
};
