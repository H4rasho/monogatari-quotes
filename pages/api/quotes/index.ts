// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../../core/quotes/service";
import { Quote } from "../../../core/quotes/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[]>
) {
  const limit = req.query.limit as string;
  const offset = req.query.offset as string;
  const { results } = await getQuotes(limit, offset);

  res.status(200).json(results);
}
