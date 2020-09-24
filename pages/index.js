import GeneralSeo from "@seo/GeneralSeo";
import Layout from "@templates/Layout";
import Contact from "@organisms/Contact";
import LastPost from "@organisms/LastPost";
import LastProject from "@organisms/LastProject";
import HeroBanner from "@molecules/HeroBanner";
import Intro from "@molecules/Intro";
import Keyvisual from "@molecules/Keyvisual";

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
