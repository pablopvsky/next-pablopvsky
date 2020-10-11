import NProgress from "nprogress";
import Router from "next/router";

import Navbar from "@organisms/Navbar";
import Footer from "@organisms/Footer";
import SubHeader from "@molecules/SubHeader";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children }) => (
  <main className="dark-mode">
    <Navbar />
    <SubHeader />
    <div className="page">
      <div className="page-body ">{children}</div>
    </div>
    <Footer />
  </main>
);

export default Layout;
