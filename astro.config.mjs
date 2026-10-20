// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.butxigourmet.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Warenkorb & 404 gehören nicht in den Google-Index; EN/ES-Rechtstexte sind
      // nur das deutsche Original (kanonisch → deutsche Seite) und bleiben ebenfalls draußen
      filter: (page) =>
        !['/warenkorb/', '/en/cart/', '/es/carrito/',
          '/en/imprint/', '/en/privacy/', '/en/terms/', '/en/withdrawal/',
          '/es/aviso-legal/', '/es/privacidad/', '/es/condiciones/', '/es/desistimiento/',
        ].some((p) => page.endsWith(p)),
    }),
  ],
});
