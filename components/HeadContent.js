import GLOBAL from "garitmic.config.json";
import { GA_TRACKING_ID } from "public/gtag";

const HeadContent = () => (
  <>
    <link
      rel="shortcut icon"
      sizes="16x16 24x24 32x32 48x48 64x64"
      href="/favicon.ico"
    />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href={`${GLOBAL.favIcon}&w=57&h=57`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href={`${GLOBAL.favIcon}&w=57&h=57`}
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href={`${GLOBAL.favIcon}&w=72&h=72`}
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href={`${GLOBAL.favIcon}&w=114&h=114`}
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href={`${GLOBAL.favIcon}&w=120h=120`}
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href={`${GLOBAL.favIcon}&w=144&h=144`}
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href={`${GLOBAL.favIcon}&w=152&h=152`}
    />
    <link rel="stylesheet" href="https://use.typekit.net/vdw8shd.css" />
    <link href="/style.css" rel="stylesheet" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
      }}
    />
  </>
);

export default HeadContent;
