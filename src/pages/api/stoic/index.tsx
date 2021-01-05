import { NextApiRequest, NextApiResponse } from "next";
export const quotes = [
  {
    author: "Marcus Aurelius",
    quote: "You could leave life right now.",
  },
  {
    author: "Marcus Aurelius",
    quote: `
		Don’t waste the rest of your time here worrying about other people—unless it affects the common good. It will keep you from doing anything useful. You’ll be too preoccupied with what so-and-so is doing, and why, and what they’re saying, and what they’re thinking, and what they’re up to, and all the other things that throw you off and keep you from focusing on your own mind.
	`,
  },
];

export const getRandomQuote = (data) =>
  data[Math.floor(Math.random() * data.length)];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const quote = getRandomQuote(quotes);
  res.status(200).json(quote);
}
