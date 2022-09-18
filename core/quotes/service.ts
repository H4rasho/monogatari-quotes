import { readFile } from "fs/promises";
import { Quote } from "./types";

export const getQuotes = async (
  limit?: string,
  offset?: string
): Promise<{ results: Quote[] }> => {
  const data = await readFile("./quotes/data.json", "utf-8");
  const quotes = JSON.parse(data);

  const results = quotes.slice(offset, limit);

  return { results };
};
