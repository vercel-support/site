import Layout from "@components/layout";
import SEO from "@components/seo";
import format from "date-fns/fp/format";
const dateToFormat = new Date(2020, 8, 22);
const lastUpdated = format("MMMM d, yyyy")(dateToFormat);

const Now = () => (
  <Layout className="prose sm:prose-lg">
    <SEO title="Now" description="What I'm up to now." />

    <h1>Now</h1>
    <p>
      <span className="block">
        This is a{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nownownow.com/about"
        >
          Now
        </a>{" "}
        page.
      </span>
      <span className="block">Last updated on {lastUpdated}.</span>
    </p>

    <h2>Family</h2>
    <p>
      I got married on June 13, 2020. My wife and I had been together for over 5
      years and living together for more than 2 years. The adjustment to married
      life was smooth—very little changed. We're planning on having kids soon
      and trying to decide if we want to live in the US or stay in Japan. This
      will largely depend on my future career plans. Should I happen to find a
      frontend job back in the US, we might move to there in the next couple of
      years.
    </p>

    <h2>Work</h2>
    <p>
      I'm currently working for a company that specializes in online ad sales,
      in their development section. We're currently working on v2 of our
      advertisement management software platform—currently in beta and launching
      the public release in February 2021.
    </p>

    <h2>Side Projects</h2>
    <p>
      I'm keeping myself busy improving my{" "}
      <a rel="noreferrer noopener" target="_blank" href="https://reactjs.org">
        React
      </a>{" "}
      skills by testing out new ideas on this website and prepping for the day
      where I can do React work full-time. (🤞) I'm working on building an
      audience on Twitter for{" "}
      <a
        href="https://twitter.com/japankitio"
        target="_blank"
        rel="noopener noreferrer author"
      >
        JapanKit
      </a>
      , a project I hope to launch over at{" "}
      <a
        href="https://japankit.io"
        target="_blank"
        rel="author noopener noreferrer"
      >
        JapanKit.io
      </a>{" "}
      that will include premium content for people looking to either travel to
      or live in Japan. With the state of the world as it is right now, I
      haven't felt in a rush to get international travel content ready in a
      hurry though.
    </p>
  </Layout>
);

export default Now;
