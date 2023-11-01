import { defineConfig } from "astro/config";
import { url } from "./src/config.mjs";

import dynamicImport from "vite-plugin-dynamic-import";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: url,
  vite: {
    plugins: [dynamicImport()],
  },
  integrations: [mdx(), tailwind()],
});
