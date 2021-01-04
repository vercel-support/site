import Layout from "@components/layout";

const meta = {
  title: "Random Stoic Quote",
  description: "A small app that outputs a random Stoic quote.",
};

const quotes = [
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

const getRandomQuote = (data) => data[Math.floor(Math.random() * data.length)];

const Stoic = () => {
  const { author, quote } = getRandomQuote(quotes);

  return (
    <Layout className="prose prose-dark" meta={meta}>
      <h2>Random Stoic Quote</h2>
      <blockquote>{quote}</blockquote>
      <i>{author}</i>
    </Layout>
  );
};

export default Stoic;
