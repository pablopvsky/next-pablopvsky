module.exports = {
  target: "serverless",
  i18n: {
    locales: ["en-us", "es-co"],
    defaultLocale: "es-co",
    localeDetection: false,
  },
  images: {
    loader: "imgix",
    path: "",
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};
