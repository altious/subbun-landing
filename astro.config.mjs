import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://subbun.com",
  integrations: [tailwind()],
  output: "static"
});
