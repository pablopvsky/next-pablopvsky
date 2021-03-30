import NProgress from "nprogress";
import Router from "next/router";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children, data, text, locale }) => {
  return (
    <main>
      <div className="page">
        <Navbar text={text} locale={locale} />
        <div className="page-body ">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
