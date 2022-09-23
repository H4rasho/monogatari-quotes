import { supabase } from "../database";
import { Season } from "./types";

export const getSeasons = async (): Promise<{
  results?: Season[];
  error?: unknown;
}> => {
  const { data: seasons, error } = await supabase.from("seasons").select("*");
  return { results: seasons, error };
};
