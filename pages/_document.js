import Document, { Html, Head, Main, NextScript } from "next/document";
import HeadContent from "@atoms/HeadContent";

export default class extends Document {
  render() {
    return (
      <Html lang="es-co">
        <Head>
          <meta charSet="UTF-8" />
          <HeadContent />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
