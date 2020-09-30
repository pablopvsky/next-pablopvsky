import { API_ENDPOINT_KEY, SEND_ENDPOINT_KEY } from "lib/constants";

const API_URL = `/${API_ENDPOINT_KEY}/${SEND_ENDPOINT_KEY}`;

export const sendContactForm = async (data) => {
  try {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const value = await fetch(API_URL, config);
    return value;
  } catch (error) {
    return error;
  }
};
