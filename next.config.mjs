import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  i18n,
  images: {
    unoptimized: true
  },

  reactStrictMode: false,
};

export default nextConfig;
