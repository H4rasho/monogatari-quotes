import { supabase } from "../database";
import { CreateQuote, Quote } from "./types";

export const getQuotes = async (): Promise<{
  results?: Quote[];
  error?: unknown;
}> => {
  const { data: quotes, error } = await supabase.from("quotes").select(`
    *,
    characters (
      name,
      avatar
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

export const createQuote = async (quote: CreateQuote) => {
  const { data, error } = await supabase.from("quotes").insert(quote);

  return { results: data, error };
};
