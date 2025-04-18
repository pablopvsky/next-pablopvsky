import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta, { MetaProps } from "@/components/Meta";

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
