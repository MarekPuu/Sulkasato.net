// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://sulkasato.net",
  output: "static",
  integrations: [sitemap(), robotsTxt(), icon()],
});
