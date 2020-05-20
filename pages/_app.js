import "../styles/tailwind.css";
import "../styles/dank-mono.css";
import "../styles/prism-night-owl.css";
import React, { useEffect } from "react";
// import Router from "next/router";
import { StaticKitProvider } from "@statickit/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let tracker = window.document.createElement("script");
    let firstScript = window.document.getElementsByTagName("script")[0];
    tracker.defer = true;
    tracker.setAttribute("site", "EXCJWHRT");
    tracker.setAttribute("spa", "auto");
    tracker.setAttribute("excluded-domains", "now.sh,localhost");
    tracker.src = "https://cdn.usefathom.com/script.js";
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }, []);

  return (
    <StaticKitProvider site="a3b65ef2871d">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="blp"
          data-description="Support my open-source activities!"
          data-message=""
          data-color="#5F7FFF"
          data-position="right"
          data-x_margin="18"
          data-y_margin="18"
          defer
        />
      </Head>
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}
