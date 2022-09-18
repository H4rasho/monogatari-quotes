// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../../core/quotes/service";
import { Quote } from "../../../core/quotes/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote>
) {
  const { results } = await getQuotes();
  const randomNumber = Math.floor(Math.random() * results.length);

  const result = results[randomNumber];

  res.status(200).json(result);
}
