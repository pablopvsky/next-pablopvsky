import Prismic from "@prismicio/client";
import GLOBAL from "garitmic.config.json";
import { API_URL_KIT, API_TOKEN } from "@utils/constants";

export const apiEndpoint = API_URL_KIT;
export const accessToken = API_TOKEN;

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export async function getArchives(previewData = {}, page = 1, type = "poemas") {
  const { ref } = previewData;
  const client = Client();

  const data =
    (await client.query(
      Prismic.Predicates.at("document.type", type),
      {
        pageSize: GLOBAL.ArchivePageSize,
        orderings: `[my.${type}.date desc]`,
        page,
      },
      ref ? { ref } : null
    )) || {};

  return data;
}

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query("", { pageSize: 100, lang: "*", page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 **/
export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};
