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

const Layout = ({ children, data, text }) => {
  return (
    <main className={data?.dark_mode ? "dark-mode" : "light-mode"}>
      <div className="page">
        <Navbar text={text} data={data} />
        <div className="page-body ">{children}</div>
        <Footer data={data} />
      </div>
    </main>
  );
};

export default Layout;
