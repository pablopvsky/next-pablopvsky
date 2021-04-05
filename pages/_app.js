import Router from "next/router";
import "aura-design/style.css";
import "public/style.css";

import * as gtag from "public/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
