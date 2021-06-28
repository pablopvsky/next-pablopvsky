import NProgress from "nprogress";
import Router from "next/router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Meta from "@components/Meta";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children, text, locale, seo }) => {
  return (
    <main>
      <div className="page">
        <Meta {...seo} locale={locale} />
        <Header text={text} locale={locale} />
        <div className="page-body ">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
