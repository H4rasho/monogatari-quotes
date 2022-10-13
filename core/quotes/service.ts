import { supabase } from "../database";
import { CreateQuote, Quote } from "./types";

export const getQuotes = async (
  offset: number,
  limit: number
): Promise<{
  results?: Quote[];
  error?: unknown;
}> => {
  const { data: quotes, error } = await supabase
    .from("quotes")
    .select(
      `
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
  `
    )
    .range(offset, offset + limit - 1);
  return { results: quotes, error };
};

export const createQuote = async (quote: CreateQuote) => {
  const { data, error } = await supabase.from("quotes").insert(quote);

  return { results: data, error };
};
