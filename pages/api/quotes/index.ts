// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "fs/promises";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { limit, offset } = req.query;
  const data = await readFile("./quotes/data.json", "utf-8");
  const quotes = JSON.parse(data);

  const result = quotes.slice(offset, limit);
  
  res.status(200).json(result);
}
