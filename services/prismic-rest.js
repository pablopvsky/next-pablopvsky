import PrismicLib from "prismic-javascript";
import GaritmicConfig from "../garitmic.config.json";

let frontClient;

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient;
  else {
    const options = Object.assign(
      {},
      req ? { req } : {},
      GaritmicConfig.accessToken
        ? { accessToken: GaritmicConfig.accessToken }
        : {}
    );
    return PrismicLib.client(GaritmicConfig.apiEndpoint, options);
  }
};
export const Prismic = PrismicLib;

export const linkResolver = (doc) => {
  if (doc.type === "noticias") return "/" + doc.uid;
  else return "/";
};
