import GLOBAL from "garitmic.config.json";
import Head from "next/head";

const GeneralSeo = () => (
  <Head>
    <title>{GLOBAL.siteName}</title>
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="description" content={GLOBAL.siteDescription} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={`@${GLOBAL.social.twitter}`} />
    <meta name="twitter:creator" content={`@${GLOBAL.social.twitter}`} />
    <meta property="og:url" content={GLOBAL.siteURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={GLOBAL.siteName} />
    <meta property="og:description" content={GLOBAL.siteDescription} />
    <meta property="og:image" content={GLOBAL.social.openGrap} />
    <meta property="og:image:alt" content="Open Graph logo Pablopvsky" />
    <meta property="og:image:width" content="1140" />
    <meta property="og:image:height" content="570" />
    <link rel="canonical" href={GLOBAL.siteURL} />
  </Head>
);

export default GeneralSeo;
