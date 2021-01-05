import { NextApiRequest, NextApiResponse } from "next";
export const quotes = [
  {
    author: "Marcus Aurelius",
    quote: `Human life.

Duration: momentary. Nature: changeable. Perception: dim. Condition of Body: decaying. Soul: spinning around. Fortune: unpredictable. Lasting Fame: uncertain. Sum Up: The body and its parts are a river, the soul a dream and mist, life is warfare and a journey far from home, lasting reputation is oblivion.

Then what can guide us?
Only philosophy.

Which means making sure that the power within stays safe and free from assault, superior to pleasure and pain, doing nothing randomly or dishonestly and with imposture, not dependent on anyone else’s doing something or not doing it. And making sure that it accepts what happens and what it is dealt as coming from the same place it came from. And above all, that it accepts death in a cheerful spirit, as nothing but the dissolution of the elements from which each living thing is composed. If it doesn’t hurt the individual elements to change continually into one another, why are people afraid of all of them changing and separating? It’s a natural thing. And nothing natural is evil.`,
  },
  {
    author: "Marcus Aurelius",
    quote: "You could leave life right now.",
  },
  {
    author: "Marcus Aurelius",
    quote: `Don’t waste the rest of your time here worrying about other people—unless it affects the common good. It will keep you from doing anything useful. You’ll be too preoccupied with what so-and-so is doing, and why, and what they’re saying, and what they’re thinking, and what they’re up to, and all the other things that throw you off and keep you from focusing on your own mind.`,
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
