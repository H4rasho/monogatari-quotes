// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../../core/quotes/service";
import { Quote } from "../../../core/quotes/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[] | unknown>
) {
  const limit = req.query.limit ?? 1000;
  const offset = req.query.offset ?? 0;
  const { results, error } = await getQuotes(Number(offset), Number(limit));
  if (results) return res.json(results);
  if (error) return res.status(500).json(error);
}
