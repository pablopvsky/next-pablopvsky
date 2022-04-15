import { useRouter } from "next/router";
import { SliceZone } from "@prismicio/react";
import { components } from "@slices/index";

import { createClient } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import HomepageBodyHerobanner from "@components/HomepageBodyHerobanner";
import HomepageBodyHero_one from "@components/HomepageBodyHero_one";
import HomepageBodyLast_post from "@components/HomepageBodyLast_post";
import HomepageBodyImage from "@components/HomepageBodyImage";
import HomepageBodyIntro from "@components/HomepageBodyIntro";
import HomepageBodyImage_gallery from "@components/HomepageBodyImage_gallery";

const Home = ({ preview, locale, document }) => {
  console.log(document);

  return (
    <Layout preview={preview} text="Pablopvsky" locale={locale}>
      <SliceZone slices={document.data.slices} components={components} />
      <HomepageBodyHero_one locale={locale} />
      <HomepageBodyLast_post locale={locale} />
      <HomepageBodyImage
        src="https://images.prismic.io/pablopvsky/3b50208f-5572-4526-af98-1db29440bbb8_9d60f9b0-b3fc-4332-bc2f-95df7afeb9d4_arrow-down.png?auto=compress,format"
        height={208}
        width={10}
      />
      <HomepageBodyImage_gallery locale={locale} />
      <HomepageBodyImage
        src="https://images.prismic.io/pablopvsky/3b50208f-5572-4526-af98-1db29440bbb8_9d60f9b0-b3fc-4332-bc2f-95df7afeb9d4_arrow-down.png?auto=compress,format"
        height={208}
        width={10}
      />
      <HomepageBodyImage
        src="https://images.prismic.io/pablopvsky/01643507-8048-4165-9d53-0447ef2ef464_85992e77-9d0e-4fcf-8f54-f86b2e5ac99f_keyvisual%2Bpablopvsky.jpg?auto=compress,format?auto=format&fit=max&w=1200"
        height={833}
        width={936}
      />
      <HomepageBodyIntro locale={locale} />
      <HomepageBodyImage
        src="https://images.prismic.io/pablopvsky/3b50208f-5572-4526-af98-1db29440bbb8_9d60f9b0-b3fc-4332-bc2f-95df7afeb9d4_arrow-down.png?auto=compress,format"
        height={208}
        width={10}
      />
      <HomepageBodyImage
        src="https://images.prismic.io/pablopvsky/2379abd7-a034-4109-ba4f-1cea428e3ccc_cd532d9c-738b-4cf8-b10e-cbd0f0ff5dc3_figura%2Bpablopvsky%2B2.png?auto=compress,format?auto=format&fit=max&w=768"
        height={264}
        width={264}
      />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData, locale }) => {
  const client = createClient({ previewData });
  const document = await client.getSingle("home");
  return {
    props: { document, locale },
  };
};

export default Home;
