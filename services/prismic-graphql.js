import Prismic from "prismic-javascript";
import {
  API_URL_KIT,
  API_TOKEN,
  GRAPHQL_API_URL,
  API_LOCALE,
  LAYOUT_UID,
} from "@lib/constants";

export const PrismicClient = Prismic.client(API_URL_KIT, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getLayout(previewData) {
  const data = await fetchAPI(
    `	
    query getLayout($uid: String!, $lang: String!) {
      layout(uid: $uid, lang: $lang) {
        dark_mode
        copy_right
        logo
        header_menu {
          header_link_menu_text
          header_link_menu_pathname
          header_menu_link_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
        secundary_logo
        subheader_cover
        footer_logo
        footer_secondary_logo
        footer_menu {
          footer_link_menu_text
          footer_link_menu_pathname
          footer_menu_link_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
        footer_follow_menu {
          footer_follow_icon
          footer_follow_link {
            __typename
            ... on _ExternalLink {
              url
              target
            }
          }
        }
        footer_secundary_menu {
          footer_secundary_link_menu_text
          footer_secundary_link_menu_pathname
          footer_secundary_link_menu_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
      }
    }    
  `,
    {
      previewData,
      variables: {
        uid: LAYOUT_UID,
        lang: API_LOCALE,
      },
    }
  );

  return data.layout;
}

export async function getHomePage(uid, previewData) {
  const data = await fetchAPI(
    `
    query pageByUid($uid: String!, $lang: String!) {
      homepage(uid: $uid, lang: $lang) {
        title
        excerpt
        _meta {
          uid
        }
        background_image
        body {
          __typename
          ... on HomepageBodyHerobanner {
            primary {
              herobanner_title
              herobanner_subtitle
              herobanner_image
            }
          }
          ... on HomepageBodyHero_one {
            primary {
              hero_one_title
              hero_one_description
              hero_one_image
            }
          }
          ... on HomepageBodyImage_gallery {
            primary {
              column_gallery_title
              column_gallery_description
            }
            fields {
              column_gallery_image
              column_gallery_image_item {
                __typename
                ... on _ExternalLink {
                  url
                  target
                }
              }
            }
          }
          ... on HomepageBodyIntro {
            primary {
              intro_title
              intro_description
            }
          }
          ...on HomepageBodyImage {
            primary {
              image
            }
          }
          ...on HomepageBodyContact_form {
            primary {
              contact_form_title
              contact_form_description
            }
          }
          ...on HomepageBodyLast_post {
            primary {
              last_post_title
              last_post_description
            }
          }
        }
      }
    }    
  `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );
  return data.homepage;
}
