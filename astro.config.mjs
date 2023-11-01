import { defineConfig } from "astro/config";
import { url } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
  site: url,
});
