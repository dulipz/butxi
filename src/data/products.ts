// BUTXI Gourmet — Produktdaten (aus der Live-Site butxigourmet.com übernommen)
// Bilder: Die 5 Haupt-Produktbilder sind aktuell von der Live-Site verlinkt.
// Für den Launch: Originale aus der WordPress-Mediathek nach /public/images/products/ exportieren
// und die image-Pfade hier aktualisieren.

export type Category = 'Saucen' | 'Gewürze' | 'Olivenöl' | 'Salz' | 'Bundles' | 'Startersets';

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: Category;
  heat: number | null; // 0–5, null = ohne Schärfeangabe
  volume?: string;
  desc: string;
  longDesc?: string;
  image?: string;
  badge?: string;
  badgeVariant?: 'sand' | 'olive' | 'fire' | 'dark';
  tags?: string[];
  isNew?: boolean;
}

const WP = 'https://butxigourmet.com/wp-content/uploads';
const PLACEHOLDER = '/images/products/product_001.webp';

export const products: Product[] = [
  // ---------- Saucen ----------
  {
    slug: 'habanero-orange', name: 'Habanero Orange', price: 12.49, category: 'Saucen', heat: 3,
    volume: '100 ml',
    desc: 'Fruchtige Orange trifft auf klare Habanero-Schärfe. Sonne aus Mallorca — direkt auf den Teller.',
    longDesc: 'Sonnengereifte Orangen und Habaneros aus Eigenanbau: fruchtig im Antritt, klar und warm in der Schärfe. Perfekt zu Tacos, Hähnchen, Meeresfrüchten, Bowls, Marinaden und Dips.',
    image: `${WP}/2026/02/Habanero_Orange_Produktbild-413x413.png`,
    badge: 'Bestseller', badgeVariant: 'sand',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'fulla-d-olivera', name: 'Fulla D´Olivera', price: 12.49, category: 'Saucen', heat: 1,
    volume: '100 ml',
    desc: 'Mild, rund, mit feinem Olivenblatt — der sanfte Einstieg ins Feuer Mallorcas.',
    longDesc: 'Die mildeste Sauce im Sortiment: Olivenblatt, Kräuter und ein Hauch Chili. Für alle, die Aroma vor Schärfe stellen — zu Fisch, Gemüse und mediterranen Gerichten.',
    image: `${WP}/2026/02/Fulla_D%C2%B4Olivera_Produktbild-413x413.png`,
    badge: 'Eigenanbau', badgeVariant: 'olive',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'salsa-coenta', name: 'Salsa Coenta', price: 12.49, category: 'Saucen', heat: 2,
    volume: '100 ml',
    desc: 'Die Allrounderin: würzig, mittelscharf, perfekt zu Tapas und Gegrilltem.',
    longDesc: 'Würzig, ausgewogen, mittelscharf — die Sauce für jeden Tag. Zu Tapas, Gegrilltem, Pasta oder einfach aufs Brot. Ein Tropfen genügt.',
    image: `${WP}/2026/02/Unbenannt-52_ergebnis-413x413.webp`,
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'carolina-reaper', name: 'Carolina Reaper', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Nur für Mutige. Die schärfste Schote der Welt — pur aus Eigenanbau.',
    longDesc: 'Die Carolina Reaper ist die schärfste Chili der Welt — und hier kommt sie pur aus unserem Eigenanbau in die Flasche. Extreme Schärfe, überraschend fruchtig. Vorsichtig dosieren.',
    image: `${WP}/2026/02/Carolina-Reaper_Produktbild-413x413.png`,
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'carolina-chocolate', name: 'Carolina Chocolate', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Dunkel, rauchig, extrem — die Reaper-Variante mit tiefem, fast schokoladigem Aroma.',
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'trinidad-scorpion', name: 'Trinidad Scorpion', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Gelbe Trinidad Scorpion Amarillo: strahlend fruchtig, gnadenlos scharf.',
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'jalapeno', name: 'Jalapeño', price: 12.49, category: 'Saucen', heat: 2,
    volume: '100 ml',
    desc: 'Grün, frisch, lebendig — die klassische Jalapeño-Sauce mit klarem Kick.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'ueep-salsa-coenta', name: 'UEEP! Salsa Coenta', price: 12.49, category: 'Saucen', heat: 3,
    volume: '100 ml',
    desc: 'Die Coenta mit einem Extra-Schlag Feuer. UEEP! — mehr muss man nicht sagen.',
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'naga-jolokia', name: 'Naga Jolokia „Ahumada Fantasma"', price: 12.49, category: 'Saucen', heat: 4,
    volume: '100 ml',
    desc: 'Geräucherte Ghost-Chili: tiefer Rauch, langer Abgang, ernstzunehmende Schärfe.',
    badge: 'Sehr scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'la-rabiosa', name: 'BUTXI La Rabiosa', price: 6.49, category: 'Saucen', heat: 3,
    desc: 'Die Wütende: Tomate, Knoblauch und ein Feuer, das langsam aufsteigt.',
    tags: ['100% natürlich', 'Vegan'],
  },
  {
    slug: 'confitura-picante', name: 'Confitura Picante', price: 6.49, category: 'Saucen', heat: 2,
    desc: 'Scharfe Konfitüre — süß trifft Feuer. Zu Käse, Brot und allem Gegrillten.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'salsa-allioli-scharf', name: 'BUTXI Salsa Allioli – Scharf', price: 6.49, category: 'Saucen', heat: 2,
    desc: 'Cremiges Allioli mit Chili-Kick — mallorquinischer Klassiker, neu entfacht.',
    tags: ['Glutenfrei'],
  },
  {
    slug: 'salsa-allioli', name: 'BUTXI Salsa Allioli', price: 6.49, category: 'Saucen', heat: 0,
    desc: 'Das klassische Allioli: Knoblauch, Öl, Handwerk. Ohne Schärfe, voller Charakter.',
    tags: ['Glutenfrei'],
  },

  // ---------- Gewürze ----------
  {
    slug: 'jalapenos-laminados', name: 'Jalapeños Laminados', price: 3.99, category: 'Gewürze', heat: 2,
    desc: 'Getrocknete Jalapeño-Scheiben — knusprige Schärfe zum Streuen und Kochen.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'paella-spice-blend', name: 'Butxi Paella', price: 3.99, category: 'Gewürze', heat: 0,
    desc: 'Die Gewürzmischung für echte Paella — Safran, Paprika und mallorquinische Kräuter.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },

  // ---------- Olivenöl ----------
  {
    slug: 'aceite-picante', name: 'Aceite Picante', price: 7.99, category: 'Olivenöl', heat: 2,
    desc: 'Natives Olivenöl, langsam mit Chilis aus Eigenanbau infundiert. Für Pizza, Pasta, Brot.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'aceite-sitrie', name: 'Aceite Sitrie', price: 14.95, category: 'Olivenöl', heat: 2,
    desc: 'Scharfes Öl mit Zitrusnote — hell, aromatisch, mit feinem Feuer im Abgang.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },

  // ---------- Salz ----------
  {
    slug: 'meersalz-mit-chili', name: 'BUTXI Meersalz mit Chili', price: 3.99, category: 'Salz', heat: 1,
    desc: 'Mallorquinische Salzflocken mit Chili — das Finish, das man sieht und schmeckt.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'meersalz-mit-safran', name: 'BUTXI Meersalz mit Safran', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Goldene Salzflocken mit Safran — für Reisgerichte, Fisch und besondere Momente.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'meersalz-mit-hibiskus', name: 'BUTXI Meersalz mit Hibiskus', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Blumig-säuerliche Hibiskusnote auf Meersalz — auffällig auf Salaten und Desserts.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'meersalz-rosmarin-zitrone', name: 'BUTXI Meersalz „Rosmarin & Zitrone"', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Rosmarin und Zitronenschale auf Salzflocken — mediterran, frisch, vielseitig.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },
  {
    slug: 'meersalz-schwarze-olive', name: 'Meersalz mit Schwarzer Olive', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Dunkle Salzflocken mit schwarzer Olive — intensiv, erdig, umami.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
  },

  // ---------- Bundles & Sets ----------
  {
    slug: '7er-tasting-set', name: 'Butxi Hot Sauce — 7er Tasting Set', price: 14.99, category: 'Startersets', heat: null,
    desc: 'Die ganze BUTXI Handschrift in einem Set: sieben Sorten zum Probieren, von mild bis extrem.',
    image: `${WP}/2026/01/image00005-removebg-preview-e1772711615554.png`,
    badge: 'Starterset', badgeVariant: 'dark',
    tags: ['Geschenkidee'],
  },
  {
    slug: 'meersalz-trio', name: 'Butxi Meersalz-Trio', price: 6.49, category: 'Salz', heat: 0,
    desc: 'Drei Gourmet-Salze im Set — probieren, kombinieren, verschenken.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee', 'Vegan'],
  },
  {
    slug: 'chili-trio', name: 'Butxi Chili Trio', price: 6.49, category: 'Bundles', heat: 3,
    desc: 'Drei Chili-Klassiker im praktischen Set — die schnelle Tour durchs Feuer Mallorcas.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
  },
  {
    slug: 'gourmet-trio', name: 'Butxi Gourmet Trio', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Das Pasta-Set: drei Begleiter, die jedes Nudelgericht auf Butxi-Niveau heben.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
  },
  {
    slug: 'tapas-trio', name: 'Butxi Tapas Trio', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Mallorca auf dem Tisch: drei Sorten für den perfekten Tapas-Abend.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
  },
  {
    slug: 'blister-calamar', name: 'Blister Calamar', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Das Set für Meeresfrüchte — abgestimmt auf Calamari, Gambas und alles aus dem Meer.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
  },
];

export function productImage(p: Product): string {
  return p.image ?? PLACEHOLDER;
}

export function formatPrice(value: number): string {
  return value.toFixed(2).replace('.', ',') + ' €';
}

export const categories = ['Alle', 'Saucen', 'Gewürze', 'Olivenöl', 'Salz', 'Bundles', 'Startersets'] as const;

export const HEAT_LABELS = ['Ohne Schärfe', 'Mild', 'Mittel', 'Scharf', 'Sehr scharf', 'Extrem'];
