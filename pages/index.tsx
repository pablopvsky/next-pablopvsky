import { useRouter } from "next/router";
import { SliceZone } from "@prismicio/react";
import { createClient, Content } from "@/prismicio";

import { components } from "@/slices";
import Layout from "@/components/Layout";

type HomeProps = {
  locale: string
  document: any
};

const Home = ({ locale, document }: HomeProps) => {
  return (
    <Layout locale={locale}>
      <SliceZone slices={document.data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData, locale }) => {
  const client = createClient({ previewData });
  const document = await client.getSingle("home", { lang: locale });
  return {
    props: { document, locale },
  };
};

export default Home;
