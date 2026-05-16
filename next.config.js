const withImages = require("next-images");
const { withPlugins } = require("next-compose-plugins");

const nextConfig = {
  env: {
    API_URL: "http://localhost:4000/graphql",
  },
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withPlugins([withImages], nextConfig);
