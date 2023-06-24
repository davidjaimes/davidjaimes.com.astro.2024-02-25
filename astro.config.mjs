import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: "https://davidjaimes.com",
  
  integrations: [react(), tailwind()]
});