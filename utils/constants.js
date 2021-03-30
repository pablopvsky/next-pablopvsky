import GLOBAL from "garitmic.config.json";

export const API_URL_KIT = GLOBAL.apiEndpoint;
export const GRAPHQL_API_URL = GLOBAL.apiGraphqlEndpoint;
export const API_TOKEN = process.env.ACCESS_TOKEN;
export const API_LOCALE = GLOBAL.lang;
export const LAYOUT_UID = GLOBAL.layoutUid;

export const API_ENDPOINT_KEY = "api";
export const SEND_ENDPOINT_KEY = "send";
