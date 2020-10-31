import GeneralSeo from "@seo/GeneralSeo";
import Layout from "@components/Layout";
import Contact from "@components/Contact";
import LastPost from "@components/LastPost";
import LastProject from "@components/LastProject";
import HeroBanner from "@components/HeroBanner";
import Intro from "@components/Intro";
import Keyvisual from "@components/Keyvisual";

const Home = () => (
  <Layout>
    <GeneralSeo />
    <HeroBanner />
    <Intro />
    <LastPost />
    <LastProject />
    <Keyvisual />
    <Contact />
  </Layout>
);

export default Home;
