import { defineConfig } from "astro/config";
import config from "./src/config.mjs";
const { url } = config;
import dynamicImport from "vite-plugin-dynamic-import";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: url,
  build: {
    assets: "assets",
    redirects: false,
    assetsPrefix: url,
  },
  vite: {
    plugins: [dynamicImport],
  },
  integrations: [mdx(), tailwind()],
});
