import GLOBAL from "garitmic.config.json";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

export const formatMeta = (document, locale) => {
  return (
    <Head>
      <title>
        {RichText.asText(document?.title || [])} {document?.title && "|"}{" "}
        {GLOBAL[locale].siteName}
      </title>
      <link
        rel="canonical"
        href={`${GLOBAL[locale].siteURL}${
          document?._meta?.uid ? `/${document?._meta?.uid}` : ""
        }`}
      />
      <link
        rel="alternate"
        href={`${GLOBAL["es"].siteURL}`}
        hreflang="x-default"
      />
      <link rel="alternate" href={`${GLOBAL["en"].siteURL}`} hreflang="en" />
      <meta httpEquiv="Content-Language" content={GLOBAL[locale].lang} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta
        name="description"
        content={
          RichText.asText(document?.excerpt || []) ||
          GLOBAL[locale].siteDescription
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${GLOBAL[locale].social.twitter}`} />
      <meta
        name="twitter:creator"
        content={`@${GLOBAL[locale].social.twitter}`}
      />
      <meta
        property="og:url"
        content={`${GLOBAL[locale].siteURL}${
          document?._meta?.uid ? `/${document?._meta?.uid}` : ""
        }`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${RichText.asText(document?.title || [])} ${
          document?.title && "|"
        } ${GLOBAL[locale].siteName}`}
      />
      <meta
        property="og:description"
        content={
          RichText.asText(document?.excerpt || []) ||
          GLOBAL[locale].siteDescription
        }
      />
      <meta
        property="og:image"
        content={document?.featured_img?.url || GLOBAL[locale].social.openGrap}
      />
      <meta
        property="og:image:alt"
        content={
          document?.featured_img?.alt ||
          RichText.asText(document?.excerpt || []) ||
          `Open Grap logo ${GLOBAL[locale].siteName}`
        }
      />
      <meta property="og:image:width" content="1140" />
      <meta property="og:image:height" content="570" />
    </Head>
  );
};
