# BUTXI Gourmet — Astro Redesign

Neue Website für [butxigourmet.com](https://butxigourmet.com) — gebaut mit [Astro](https://astro.build) auf Basis des BUTXI Design Systems (Fraunces + Manrope, Chili-Rot #D83220, warmes Cremeweiß).

## Lokal starten

```bash
npm install
npm run dev        # → http://localhost:4321
```

## Build & Vorschau

```bash
npm run build      # statischer Build nach dist/
npm run preview
```

## Struktur

- `src/data/products.ts` — alle 28 Produkte (Name, Preis, Kategorie, Schärfegrad, Texte). Hier Produkte pflegen.
- `src/data/recipes.ts` — Rezepte.
- `src/styles/` — Design-Tokens (colors, typography, spacing, …) + `global.css`.
- `src/components/` — Header, Footer, ProductCard, HeatMeter, CartDrawer, …
- `src/pages/` — alle Seiten. Produktseiten werden aus `products.ts` generiert (`/product/[slug]/`).

## Warenkorb & Checkout (Snipcart)

Der Warenkorb (Drawer, Mengen, Versandfortschritt bis 39 €) läuft lokal ohne Backend.
Für den echten Checkout:

1. Account auf [snipcart.com](https://snipcart.com) anlegen.
2. `.env` anlegen: `PUBLIC_SNIPCART_API_KEY=<dein Public API Key>`
3. „Zur Kasse" übergibt den Warenkorb dann an Snipcart.

## Offene Punkte vor dem Launch

- [ ] Produktbilder aus der WordPress-Mediathek exportieren nach `public/images/products/` und Pfade in `products.ts` aktualisieren (aktuell sind 5 Bilder von der Live-Site verlinkt, der Rest nutzt einen Platzhalter).
- [ ] Rechtstexte (Datenschutz, AGB, Widerruf) aus WordPress übernehmen; USt-IdNr. im Impressum ergänzen.
- [ ] Kontaktformular an ein Backend anbinden (z. B. Cloudflare Worker, Web3Forms).
- [ ] Newsletter-Formular an den Dienst anbinden (z. B. Brevo/Mailchimp).
- [ ] Snipcart-Key hinterlegen und Produkte in Snipcart validieren.

## Deployment (Cloudflare Pages)

Build command: `npm run build` · Output directory: `dist`
