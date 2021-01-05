import Layout from "@components/layout";
import { quotes, getRandomQuote } from "./api/stoic";

const meta = {
  title: "Random Stoic Quote",
  description: "A small app that outputs a random Stoic quote.",
};

const Stoic = ({ author, quote }: { author: string; quote: string }) => {
  return (
    <Layout className="prose dark:prose-dark" meta={meta}>
      <h2>Random Stoic Quote</h2>
      <blockquote className="whitespace-pre-line">{quote}</blockquote>
      <i>{author}</i>
    </Layout>
  );
};

export async function getServerSideProps() {
  const props = getRandomQuote(quotes);
  return {
    props,
  };
}

export default Stoic;
