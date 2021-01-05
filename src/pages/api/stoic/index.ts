import { NextApiRequest, NextApiResponse } from "next";
import seneca from "./seneca";
import marcus from "./marcus";
export const quotes = [...seneca, ...marcus];

export const getRandomQuote = (data) =>
  data[Math.floor(Math.random() * data.length)];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const quote = getRandomQuote(quotes);
  res.status(200).json(quote);
}
