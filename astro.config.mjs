import { defineConfig } from "astro/config";
import { url, base } from "./src/config.mjs";

import dynamicImport from "vite-plugin-dynamic-import";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: url,
  base: base,
  assets: "_assets",
  assetsPrefix: `${url}/${base}`,
  vite: {
    plugins: [dynamicImport()],
  },
  integrations: [mdx(), tailwind()],
});
