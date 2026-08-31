// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://butxigourmet.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Warenkorb & 404 gehören nicht in den Google-Index
      filter: (page) => !page.includes('/warenkorb/'),
    }),
  ],
});
