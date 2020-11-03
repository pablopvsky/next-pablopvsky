import { getLayout, getHomePage } from "@services/prismic-graphql";
import GeneralSeo from "@seo/GeneralSeo";
import Layout from "@components/Layout";
import HomepageBodyHerobanner from "@slices/HomepageBodyHerobanner";
import HomepageBodyHero_one from "@slices/HomepageBodyHero_one";
import HomepageBodyLast_post from "@slices/HomepageBodyLast_post";
import HomepageBodyImage from "@slices/HomepageBodyImage";
import HomepageBodyIntro from "@slices/HomepageBodyIntro";
import HomepageBodyImage_gallery from "@slices/HomepageBodyImage_gallery";
import HomepageBodyContact_form from "@slices/HomepageBodyContact_form";

const Home = ({ page, preview, layout }) => {
  return (
    <Layout preview={preview} data={layout} text="Pablopvsky">
      <GeneralSeo />
      {page.body.map((slice, index) => {
        switch (slice.__typename) {
          case "HomepageBodyHerobanner":
            return (
              <HomepageBodyHerobanner
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyHero_one":
            return (
              <HomepageBodyHero_one
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyLast_post":
            return (
              <HomepageBodyLast_post
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyImage":
            return (
              <HomepageBodyImage
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyIntro":
            return (
              <HomepageBodyIntro
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyImage_gallery":
            return (
              <HomepageBodyImage_gallery
                data={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
          case "HomepageBodyContact_form":
            return (
              <HomepageBodyContact_form
                slice={slice}
                bg={page.background_image.url}
                key={index}
              />
            );
        }
      })}
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, previewData }) => {
  const layout = await getLayout(previewData);
  const page = await getHomePage("pablopvsky", previewData);

  return {
    props: { page, preview, layout },
  };
};

export default Home;
