// CSS
import '../styles/tailwind.css'
import '../styles/dank-mono.css'
import '../styles/prism-night-owl.css'

// React stuff
import React, { useEffect } from 'react';
import Router from 'next/router';
import { StaticKitProvider } from '@statickit/react';
import * as Fathom from 'fathom-client'
import Head from 'next/head'
// import App from 'next/app'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('EXCJWHRT');
      Fathom.trackPageview();
    }
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
        ></script>

      </Head>
      <Component {...pageProps} />
    </StaticKitProvider>
  ) 
}

export default MyApp
