const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ["en-us", "es-co"],
    defaultLocale: "es-co",
    localeDetection: false,
  },
  images: {
    domains: ["images.prismic.io"]
  }
}

module.exports = nextConfig
