import React from "react";
import Link from "next/link";
import Head from "next/head";

import GLOBAL from "garitmic.config.json";

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>Página no encontrada | {GLOBAL.siteName}</title>
      </Head>

      {statusCode === 404 ? (
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
      ) : (
        <div className="message error halo centertxt pad valign snow">
          <img
            className="smush"
            src="https://media.giphy.com/media/5YgleIOWO1FlHcjNrr/giphy.gif"
            height="100"
          />
          <h1 className="layer title-error">Hubo un problema :(</h1>
          <p className="layer">Intenta nuevamente en unos segundos</p>
        </div>
      )}
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
