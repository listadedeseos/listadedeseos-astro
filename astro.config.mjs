// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://listadedeseos.es",
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
