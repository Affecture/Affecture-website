import { defineConfig } from "astro/config";
import { url } from "./src/config.mjs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [mdx()],
});
