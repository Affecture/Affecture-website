import { defineConfig } from "astro/config";
import config from "./src/config.mjs";

const { url, base } = config;

import dynamicImport from "vite-plugin-dynamic-import";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: url,
  base: base,
  build: {
    assets: "assets",
    redirects: false,
    assetsPrefix: [url, base].join(""),
  },
  vite: {
    plugins: [dynamicImport],
  },
  integrations: [mdx(), tailwind()],
});
