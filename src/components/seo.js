import React from "react";
import Head from "next/head";

const SEO = ({ title, lang, description, image }) => (
  <Head>
    <title>{title + " | Brandon Pittman"}</title>
    <meta name="description" content={description} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@brandonpittman" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
  </Head>
);

SEO.defaultProps = {
  lang: "en",
  description: "Brandon's site.",
  image: "https://blp.is/assets/images/brandon.png"
};

export default SEO;
