import Layout from "@components/layout";
import { quotes, getRandomQuote } from "./api/stoic";

const meta = {
  title: "Random Stoic Quote",
  description: "A small app that outputs a random Stoic quote.",
};

type Philosopher = "Marcus Aurelius" | "Seneca";
type StoicProps = { author: Philosopher; text: string; source: string };

const Stoic = ({ author, text, source }: StoicProps) => {
  return (
    <Layout className="prose dark:prose-dark" meta={meta}>
      <h2>Random Stoic Quote</h2>
      <blockquote className="whitespace-pre-line">{text}</blockquote>
      <i>
        {author} - {source}
      </i>
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
