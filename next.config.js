module.exports = {
  target: "serverless",
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  images: {
    loader: 'imgix',
    path: '',
    deviceSizes: [320, 420, 768, 1024, 1200]
  },
};
