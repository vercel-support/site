import Layout from "@components/layout";
import SEO from "@components/seo";
import Link from "next/link";

const About = () => (
  <Layout className="prose sm:prose-lg">
    <SEO title="About" description="What I'm all about." />

    <h1>About</h1>

    <p>
      I am a frontend engineer living in Nagoya, Japan but originally from
      Cincinnati, Ohio. I first came to Japan in 2004 for study abroad and after
      returning to the US for one year to finish my degrees in International
      Relations and Asian Studies, I returned to Japan as an English teacher.
      After working in private and public schools for a decade, I became a
      self-taught programmer. I caught the programming bug while{" "}
      <Link href="/focusing">
        <a>automating OmniFocus</a>
      </Link>{" "}
      . After seeing what could be done with code, I learned Ruby and then Rails
      in hopes of turning my hobby into a career.
    </p>

    <p>
      After struggling to find enjoyment with the backend, I realized how much I
      enjoyed the frontend. While learning a bit of Laravel, I discovered{" "}
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        Vue.js
      </a>{" "}
      and quickly fell in love. I left my job as a teacher and began working in
      frontend development. Recently interested in functional programming, I got
      into{" "}
      <a
        href="https://reasonml.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        ReasonML
      </a>{" "}
      and then{" "}
      <a
        href="https://reasonml.github.io/reason-react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ReasonReact.
      </a>{" "}
      With my newfound passion for functional programming, I found that React
      made more sense to me than Vue did, beginning my love affair with React.
    </p>

    <p>
      I'm also deeply passionate about{" "}
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        the Tailwind approach to CSS
      </a>
      . I've written a{" "}
      <a
        href="https://github.com/brandonpittman/tailwindcss-plugin-fancy"
        target="_blank"
        rel="noopener noreferrer author"
      >
        number of Tailwind plugins
      </a>
      and promote the usage of atomic, functional, and utility-driven CSS
      whenever and wherever possible.
    </p>

    <p>
      I'm married to a lovely woman whom I met by total chance at Oktoberfest in
      Nagoya one lovely day in 2014. She's gorgeous, smart, and most
      importantly, funny. We keep each other laughing on a daily basis and I'm
      lucky to have her. No kids yet, but we're working on that.
    </p>

    <p>
      I play video games in my free time. I love cooking, craft beer, and good
      whisky. I love a good long bike ride on a nice days and I meet up with
      local friends to play board games a couple times a month.
    </p>

    <p>
      If you're ever in need of help building a frontend project in React or
      Vue, or if you need help with Tailwind CSS, I'm available for client work.
      You can{" "}
      <Link href="/available">
        <a>get in touch with me here</a>
      </Link>
      .
    </p>
  </Layout>
);

export default About;
