import NProgress from "nprogress";
import Router from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
  <main>
    <Navbar />
    <div className="page">
      <div className="page-body ">{children}</div>
    </div>
    <Footer />
  </main>
);

export default Layout;
