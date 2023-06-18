import NProgress from "nprogress";
import Router from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta, { MetaProps } from "@/components/Meta";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

type LayoutProps = {
  children: React.ReactNode;
  locale: string;
  seo?: MetaProps;
};

const Layout = ({ children, locale, seo }: LayoutProps) => {
  return (
    <main>
      <div className="page">
        <Meta {...seo} locale={locale} />
        <Header locale={locale} />
        <div className="page-body ">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
