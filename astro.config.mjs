// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://listadedeseos.github.io",
  base: "/listadedeseos-astro",
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
    }),
    icon({
      include: {
        fa: ["*"], // from @iconify-json/fa/icons.json
      },
    }),
  ],
});
