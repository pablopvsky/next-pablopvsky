module.exports = {
  target: "serverless",
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
