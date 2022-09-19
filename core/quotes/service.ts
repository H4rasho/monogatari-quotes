import { supabase } from "../database";
import { Quote } from "./types";

export const getQuotes = async (): Promise<{
  results?: Quote[];
  error?: unknown;
}> => {
  const { data: quotes, error } = await supabase.from("quotes").select(`
    *,
    characters (
      name
    ),
    episodes (
      name,
      seasons (
        name
      )
    )
  `);

  return { results: quotes, error };
};
