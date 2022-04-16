import { useRouter } from "next/router";
import { SliceZone } from "@prismicio/react";
import { components } from "@slices/index";

import { createClient } from "@utils/prismic-rest";
import Layout from "@components/Layout";

const Home = ({ preview, locale, document }) => {

  return (
    <Layout preview={preview} text="Pablopvsky" locale={locale}>
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
