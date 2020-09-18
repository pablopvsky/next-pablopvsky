import Link from "next/link";
import Head from "next/head";

import Layout from "@templates/Layout";
import GLOBAL from "garitmic.config.json";

const Error = () => (
  <Layout>
    <Head>
      <title>Página no encontrada | {GLOBAL.siteName}</title>
    </Head>
    <div className="message-full halo centertxt valign snow">
      <img
        className="smush"
        src="https://media.giphy.com/media/5YgleIOWO1FlHcjNrr/giphy.gif"
        height="100"
      />
      <h1 className="layer title-error">Esta página no existe :(</h1>
      <p className="layer">
        <Link href="/" as="/">
          <a className="button-link">Volver al inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default Error;
