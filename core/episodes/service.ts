import { supabase } from "../database";
import { Episode } from "./types";

export const getEpisodes = async (): Promise<{
  results?: Episode[];
  error?: unknown;
}> => {
  const { data: episodes, error } = await supabase.from("episodes").select("*");
  return { results: episodes, error };
};
