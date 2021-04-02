module.exports = {
  target: "serverless",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  images: {
    loader: "imgix",
    path: "",
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};
