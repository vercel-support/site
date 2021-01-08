import * as React from "react";
import Layout from "@components/layout";
import { quotes, getRandomQuote } from "./api/stoic";
import { useRouter, NextRouter } from "next/router";
import { cx } from "@/styles";

const meta = {
  title: "Random Stoic Quote",
  description: "A small app that outputs a random Stoic quote.",
};

type Philosopher = "Marcus Aurelius" | "Seneca";
type StoicProps = { author: Philosopher; text: string; source: string };

const Stoic = ({ author, text, source }: StoicProps) => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const router = useRouter();
  const refreshData = (router: NextRouter) => {
    setIsRefreshing(true);
    router.replace(router.asPath);
  };

  React.useEffect(() => {
    setIsRefreshing(false);
  }, [author, text, source]);

  return (
    <Layout className="prose dark:prose-dark" meta={meta}>
      <div>
        <div className="-mt-16">
          <h2 className="flex items-center space-x-2">
            <span>Random Stoic Quote</span>
            <button
              className={cx(
                isRefreshing ? "animate-spin-reverse" : "focus:ring",
                "px-2 py-1 my-4 text-xs font-medium text-blue-400 border border-transparent rounded-md focus:outline-none"
              )}
              onClick={() => refreshData(router)}
            >
              <span className="sr-only">Refresh quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </h2>
          <blockquote className="whitespace-pre-line">{text}</blockquote>
          <i>
            {author} - {source}
          </i>
        </div>
      </div>

      <hr />

      <div>
        <h2>Why Stoicism?</h2>
        <p>
          Nothing's made a mark on me as of late quite the way Stoicism has. The
          main reason I was interested in Stoicism was the idea that the Stoics
          knew how to quell feelings of rage. I have battled my bad temper my
          whole life, and the idea of learning to control it was appealing. The
          most notable result of reading Stoic philosophy and journaling twice a
          day has been a reduction in not instances of anger but a shortening in
          how long those feelings of anger last. Where I use to stew in the
          juices of anger for hours, I've been able to quickly stop myself, and
          ask "Why are you angry? Did that person you feel offended you{" "}
          <i>intend to offend you</i>? Or are they possibly having a bad day and
          slighted you by mistake? Or is it even possible that you just
          perceived it as a slight?"
        </p>
        <p>
          There's an idea in Stoicism that you are not in control of anything
          but your own thoughts. Because you're in control of your own mind
          though, any offense you perceive is just that, your perception. If you
          do not feel like a victim, then you are not a victim.
        </p>
      </div>
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
