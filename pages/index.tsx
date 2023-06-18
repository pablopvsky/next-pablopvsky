import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

import { components } from "@/slices";
import Layout from "@/components/Layout";

type HomeProps = {
  locale: string;
  doc: prismic.Content.HomeDocument;
};

const Home = ({ locale, doc }: HomeProps) => {
  return (
    <Layout locale={locale}>
      <SliceZone slices={doc.data.slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps({
  previewData,
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
  const client = createClient({ previewData });

  try {
    //Querying all data
    const home = await client.getSingle("home", { lang: locale });

    return {
      props: {
        locale: locale ?? "es-co",
        doc: home,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Home;
