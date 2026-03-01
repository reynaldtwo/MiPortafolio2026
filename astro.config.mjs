// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL ?? 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      host: '127.0.0.1',
      port: 4321,
    },
  },
});
