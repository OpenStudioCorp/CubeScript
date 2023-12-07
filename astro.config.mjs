import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import alpinejs from "@astrojs/alpinejs";
import lit from "@astrojs/lit";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte(), vue(), react(), sitemap(), partytown(), alpinejs(), lit(), prefetch(), tailwind(), solidJs()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  server: {
    host: true
  }
});