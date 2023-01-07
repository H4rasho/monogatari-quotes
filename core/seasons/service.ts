import { supabase } from "../database";
import seasons from "../../db/seasons.json";
import { Season } from "./types";

export const getSeasons = async (): Promise<{
  results?: Season[];
  error?: unknown;
}> => {
  const { data: seasons, error } = await supabase.from("seasons").select("*");
  return { results: seasons, error };
};

export const getSeasonsById = (id: string) => {
  const season = seasons.find((season) => season.id === id);
  if (!season) {
    throw new Error("Season not found");
  }
  return { results: season };
};
