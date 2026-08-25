// BUTXI Gourmet, Produktdaten (aus der Live-Site butxigourmet.com übernommen)
// Bilder: lokale WebP-Dateien unter /public/images/products/ (aus den Produktfotos
// zugeschnitten). 7 Produkte haben noch kein Foto und nutzen den Platzhalter.
// Details (Zutaten, Nährwerte, Allergene, Aufbewahrung) am 31.07.2026 von der Live-Site übernommen.

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
  details?: ProductDetails;
}

export interface ProductDetails {
  zutaten?: string;
  naehrwerte?: string;   // Zeilen mit \n getrennt
  allergene?: string;
  aufbewahrung?: string; // Aufbewahrung & Verwendung
}

const PLACEHOLDER = '/images/products/product_001.webp';

export const products: Product[] = [
  // ---------- Saucen ----------
  {
    slug: 'habanero-orange', name: 'Habanero Orange', price: 12.49, category: 'Saucen', heat: 3,
    volume: '100 ml',
    desc: 'Fruchtige Orange trifft auf klare Habanero-Schärfe. Sonne aus Mallorca, direkt auf den Teller.',
    longDesc: 'Sonnengereifte Orangen und Habaneros aus Eigenanbau: fruchtig im Antritt, klar und warm in der Schärfe. Perfekt zu Tacos, Hähnchen, Meeresfrüchten, Bowls, Marinaden und Dips.',
    image: '/images/products/habanero-orange.webp',
    badge: 'Bestseller', badgeVariant: 'sand',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: 'Chili (Habanero), Essig, Wasser, Salz',
      naehrwerte: 'pro 100 g\nEnergie: 152 kJ / 23 kcal\nFett: 1,5 g\ndavon gesättigte Fettsäuren: 0,9 g\nKohlenhydrate: 0,9 g\ndavon Zucker: 0,7 g\nEiweiß: 2,5 g\nSalz: 1,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Aufbewahrung: Kühl und trocken lagern. Verwendung: Vor Gebrauch schütteln.',
    },
  },
  {
    slug: 'fulla-d-olivera', name: 'Fulla D´Olivera', price: 12.49, category: 'Saucen', heat: 1,
    volume: '100 ml',
    desc: 'Mild, rund, mit feinem Olivenblatt, der sanfte Einstieg ins Feuer Mallorcas.',
    longDesc: 'Die mildeste Sauce im Sortiment: Olivenblatt, Kräuter und ein Hauch Chili. Für alle, die Aroma vor Schärfe stellen, zu Fisch, Gemüse und mediterranen Gerichten.',
    image: '/images/products/fulla-d-olivera.webp',
    badge: 'Eigenanbau', badgeVariant: 'olive',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: 'Fruchtfleisch scharfer Paprika/Chilis mit ihren Kernen, Öl, Wasser, Salz, Essig.',
      naehrwerte: '(je 100 g)\nEnergie: 149 kJ / 36 kcal\nFett: (Angabe fehlt auf der Website)\ndavon gesättigte Fettsäuren: 4,5 g\nKohlenhydrate: 0,2 g\ndavon Zucker: 4,5 g\nEiweiß: 0,8 g\nSalz: 0,01 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'salsa-coenta', name: 'Salsa Coenta', price: 12.49, category: 'Saucen', heat: 2,
    volume: '100 ml',
    desc: 'Die Allrounderin: würzig, mittelscharf, perfekt zu Tapas und Gegrilltem.',
    longDesc: 'Würzig, ausgewogen, mittelscharf, die Sauce für jeden Tag. Zu Tapas, Gegrilltem, Pasta oder einfach aufs Brot. Ein Tropfen genügt.',
    image: '/images/products/salsa-coenta.webp',
    tags: ['100% natürlich', 'Vegan'],
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 38 kJ / 16 kcal\nFett: 0,8 g\ndavon gesättigte Fettsäuren: 4,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 2,0 g\nSalz: 2,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'carolina-reaper', name: 'Carolina Reaper', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Nur für Mutige. Die schärfste Schote der Welt, pur aus Eigenanbau.',
    longDesc: 'Die Carolina Reaper ist die schärfste Chili der Welt, und hier kommt sie pur aus unserem Eigenanbau in die Flasche. Extreme Schärfe, überraschend fruchtig. Vorsichtig dosieren.',
    image: '/images/products/carolina-reaper.webp',
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: 'Paprika, Carolina Reaper, Essig, Salz, Wasser, Xanthan',
      naehrwerte: 'Nährwertangaben – Energiewert pro 100 g\nEnergie: 35 kJ / 12 kcal\nFett: 0,5 g\ndavon gesättigte Fettsäuren: 0,4 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 1,5 g\nSalz: 3,15 g',
      allergene: 'Enthält Sulfite. Antioxidationsmittel: E 220. (E220 = Schwefeldioxid; gehört zu den Sulfiten)',
      aufbewahrung: 'Keine künstlichen Farbstoffe. VOR GEBRAUCH SCHÜTTELN. Kühl und trocken lagern.',
    },
  },
  {
    slug: 'carolina-chocolate', name: 'Carolina Chocolate', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Dunkel, rauchig, extrem, die Reaper-Variante mit tiefem, fast schokoladigem Aroma.',
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
    image: '/images/products/carolina-chocolate.webp',
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 35 kJ / 11 kcal\nFett: 0,4 g\ndavon gesättigte Fettsäuren: 0,1 g\nKohlenhydrate: 1,8 g\ndavon Zucker: 1,3 g\nEiweiß: 0,5 g\nSalz: 3,00 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'trinidad-scorpion', name: 'Trinidad Scorpion', price: 12.49, category: 'Saucen', heat: 5,
    volume: '100 ml',
    desc: 'Gelbe Trinidad Scorpion Amarillo: strahlend fruchtig, gnadenlos scharf.',
    badge: 'Extrem scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
    image: '/images/products/trinidad-scorpion.webp',
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 38 kJ / 16 kcal\nFett: 0,8 g\ndavon gesättigte Fettsäuren: 4,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 2,0 g\nSalz: 2,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'jalapeno', name: 'Jalapeño', price: 12.49, category: 'Saucen', heat: 2,
    volume: '100 ml',
    desc: 'Grün, frisch, lebendig, die klassische Jalapeño-Sauce mit klarem Kick.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/jalapeno.webp',
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 32 kJ / 12 kcal\nFett: 0,6 g\ndavon gesättigte Fettsäuren: 0,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 1,5 g\nSalz: 3,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'ueep-salsa-coenta', name: 'UEEP! Salsa Coenta', price: 12.49, category: 'Saucen', heat: 3,
    volume: '100 ml',
    desc: 'Die Coenta mit einem Extra-Schlag Feuer. UEEP!, mehr muss man nicht sagen.',
    tags: ['100% natürlich', 'Vegan'],
    image: '/images/products/ueep-salsa-coenta.webp',
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 38 kJ / 16 kcal\nFett: 0,8 g\ndavon gesättigte Fettsäuren: 4,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 2,0 g\nSalz: 2,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'naga-jolokia', name: 'Naga Jolokia „Ahumada Fantasma"', price: 12.49, category: 'Saucen', heat: 4,
    volume: '100 ml',
    desc: 'Geräucherte Ghost-Chili: tiefer Rauch, langer Abgang, ernstzunehmende Schärfe.',
    badge: 'Sehr scharf', badgeVariant: 'fire',
    tags: ['100% natürlich', 'Vegan'],
    image: '/images/products/naga-jolokia.webp',
    details: {
      zutaten: 'Scharfe Paprika/Chili, Essig, Salz, Wasser.',
      naehrwerte: '(je 100 g)\nEnergie: 38 kJ / 16 kcal\nFett: 0,8 g\ndavon gesättigte Fettsäuren: 4,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 2,0 g\nSalz: 2,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'la-rabiosa', name: 'BUTXI La Rabiosa', price: 6.49, category: 'Saucen', heat: 3,
    desc: 'Die Wütende: Tomate, Knoblauch und ein Feuer, das langsam aufsteigt.',
    tags: ['100% natürlich', 'Vegan'],
    image: '/images/products/la-rabiosa.webp',
    details: {
      zutaten: 'Carolina Reaper, Tomate, roter Paprika, Zucker.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 764 kJ / 180 kcal\nFett: 0,5 g (gesättigt 0,0 g)\nKohlenhydrate: 43 g (Zucker 43 g)\nEiweiß: 1,2 g\nSalz: 0,001 g',
      allergene: 'Enthält Sulfite.',
      aufbewahrung: 'Nach dem Öffnen gut verschlossen im Kühlschrank aufbewahren.',
    },
  },
  {
    slug: 'confitura-picante', name: 'Confitura Picante', price: 6.49, category: 'Saucen', heat: 2,
    volume: '100 g',
    desc: 'Scharfe Konfitüre, süß trifft Feuer. Zu Käse, Brot und allem Gegrillten.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/confitura-picante.webp',
    details: {
      zutaten: 'Chili, Zucker, Essig, Sulfite, Pektin. Frucht/Zucker-Anteil: 25% Fruchtanteil, 75% Zucker.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 1278 kJ / 305 kcal\nFett: 0,0 g\ndavon gesättigte Fettsäuren: 0,0 g\nKohlenhydrate: 75,7 g\ndavon Zucker: 71,3 g\nEiweiß: 0,6 g\nSalz: 0,0 g',
      allergene: 'Hinweis: Enthält Sulfite.',
      aufbewahrung: 'Nach dem Öffnen gut verschlossen im Kühlschrank aufbewahren.',
    },
  },
  {
    slug: 'salsa-allioli-scharf', name: 'BUTXI Salsa Allioli – Scharf', price: 6.49, category: 'Saucen', heat: 2,
    desc: 'Cremiges Allioli mit Chili-Kick, mallorquinischer Klassiker, neu entfacht.',
    tags: ['Glutenfrei'],
    details: {
      zutaten: 'Sonnenblumenöl, Knoblauch, Wasser, Gewürze, Salz, Zitronensaft.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 2821 kJ / 686 kcal\nFett: 73,88 g\ndavon gesättigte Fettsäuren: 11,77 g\nKohlenhydrate: 4,06 g\ndavon Zucker: 3,4 g\nEiweiß: 1,1 g\nSalz: 1,35 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Nach dem Öffnen im Kühlschrank aufbewahren und innerhalb von 3 Wochen verbrauchen. Mindestens haltbar bis Ende: siehe Etikett.',
    },
  },
  {
    slug: 'salsa-allioli', name: 'BUTXI Salsa Allioli', price: 6.49, category: 'Saucen', heat: 0,
    desc: 'Das klassische Allioli: Knoblauch, Öl, Handwerk. Ohne Schärfe, voller Charakter.',
    tags: ['Glutenfrei'],
    details: {
      zutaten: 'Sonnenblumenöl, frischer Knoblauch, Salz, Zitrone. Hinweis: Ohne Konservierungsstoffe und ohne künstliche Farbstoffe.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 2821 kJ / 686 kcal\nFett: 73,88 g\ndavon gesättigte Fettsäuren: 11,77 g\nKohlenhydrate: 4,06 g\ndavon Zucker: 3,4 g\nEiweiß: 1,1 g\nSalz: 1,35 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Nach dem Öffnen im Kühlschrank aufbewahren und innerhalb von 3 Wochen verbrauchen.',
    },
  },

  // ---------- Gewürze ----------
  {
    slug: 'jalapenos-laminados', name: 'Jalapeños Laminados', price: 3.99, category: 'Gewürze', heat: 2,
    desc: 'Getrocknete Jalapeño-Scheiben, knusprige Schärfe zum Streuen und Kochen.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/jalapenos-laminados.webp',
    details: {
      zutaten: 'Jalapeño, Essig, Salz und Wasser. Ohne Farbstoffe und ohne Konservierungsstoffe.',
      naehrwerte: 'Nährwertangaben (pro 100 g)\nEnergie: 35 kJ / 12 kcal\nFett: 0,6 g\ndavon gesättigte Fettsäuren: 0,5 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 1,5 g\nSalz: 3,15 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene. Ohne Farbstoffe und ohne Konservierungsstoffe.',
      aufbewahrung: 'Kühl und trocken lagern. Nach dem Öffnen gut verschlossen im Kühlschrank aufbewahren und idealerweise in der Lake halten.',
    },
  },
  {
    slug: 'paella-spice-blend', name: 'Butxi Paella', price: 3.99, category: 'Gewürze', heat: 0,
    desc: 'Die Gewürzmischung für echte Paella, Safran, Paprika und mallorquinische Kräuter.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/paella-spice-blend.webp',
    details: {
      zutaten: 'Salz, Paprika, Maismehl, Farbstoff E102, Knoblauch, schwarzer Pfeffer, Zwiebel, Petersilie, Thymian, Rosmarin, Trennmittel E551, pflanzliches Sonnenblumenöl, Farbstoff E129.',
      naehrwerte: '(je 100 g)\nEnergie: 56 kJ / 13 kcal\nFett: 0,5 g\ndavon gesättigte Fettsäuren: 0,1 g\nKohlenhydrate: 3,5 g\ndavon Zucker: 0,7 g\nEiweiß: 0,4 g\nSalz: 77,71 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene erkennbar.',
      aufbewahrung: 'Aufbewahrung: Kühl und trocken lagern. Verwendung: Zum Würzen von Paella/Reisgerichten (nach Geschmack dosieren).',
    },
  },

  // ---------- Olivenöl ----------
  {
    slug: 'aceite-picante', name: 'Aceite Picante', price: 7.99, category: 'Olivenöl', heat: 2,
    desc: 'Natives Olivenöl, langsam mit Chilis aus Eigenanbau infundiert. Für Pizza, Pasta, Brot.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/aceite-picante.webp',
    details: {
      zutaten: 'Mildes Olivenöl, scharfe Paprika/Chili.',
      naehrwerte: '(je 100 g)\nEnergie: 3717 kJ / 889 kcal\nFett: 98,9 g\ndavon gesättigte Fettsäuren: 15 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 0,9 g\nSalz: 0,01 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },
  {
    slug: 'aceite-sitrie', name: 'Aceite Sitrie', price: 14.95, category: 'Olivenöl', heat: 2,
    desc: 'Scharfes Öl mit Zitrusnote, hell, aromatisch, mit feinem Feuer im Abgang.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/aceite-sitrie.webp',
    details: {
      zutaten: 'Würzöl auf Basis von mildem Olivenöl, scharfen „Fulla d’olivera“-Chilis und einer leichten Rosmarinnote.',
      naehrwerte: 'Durchschnittswerte pro 100 ml\nEnergie: 3717 kJ / 889 kcal\nFett gesamt: 98 g\ndavon gesättigte Fettsäuren: 15 g\nKohlenhydrate: 0,5 g\ndavon Zucker: 0,5 g\nEiweiß: 0,9 g\nSalz: 0,01 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.',
    },
  },

  // ---------- Salz ----------
  {
    slug: 'meersalz-mit-chili', name: 'BUTXI Meersalz mit Chili', price: 3.99, category: 'Salz', heat: 1,
    desc: 'Mallorquinische Salzflocken mit Chili, das Finish, das man sieht und schmeckt.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: '80 % Meersalz, 10 % Paprika, 10 % Rosmarinblätter, Basilikumblätter, zerkleinerte Chili.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 81 kJ / 19 kcal\nFett: 0,5 g\ndavon gesättigte Fettsäuren: 0,1 g\nKohlenhydrate: 4,8 g\ndavon Zucker: 0,7 g\nEiweiß: 0,6 g\nSalz: 77,71 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
  {
    slug: 'meersalz-mit-safran', name: 'BUTXI Meersalz mit Safran', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Goldene Salzflocken mit Safran, für Reisgerichte, Fisch und besondere Momente.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: '80% Meersalz, 2% Safran, 10% Petersilie, 3% Kurkuma, 5% Knoblauch (zerkleinert).',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 81 kJ / 19 kcal\nFett: 0,5 g\ndavon gesättigte Fettsäuren: 0,1 g\nKohlenhydrate: 4,8 g\ndavon Zucker: 0,7 g\nEiweiß: 0,6 g\nSalz: 77,71 g',
      allergene: 'Kennzeichnungspflichtige Allergene (so auf der Website angegeben)',
      aufbewahrung: 'Trocken und kühl lagern, vor Feuchtigkeit schützen.',
    },
  },
  {
    slug: 'meersalz-mit-hibiskus', name: 'BUTXI Meersalz mit Hibiskus', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Blumig-säuerliche Hibiskusnote auf Meersalz, auffällig auf Salaten und Desserts.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    details: {
      zutaten: '80% Meersalz (Sal Marina), 18% Hibiskusblüte (Flor de Hibiscus), 2% Basilikumblatt (Albahaca hoja).',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 29 kJ / 7 kcal\nFett: 0,0 g\ndavon gesättigte Fettsäuren: 0,0 g\nKohlenhydrate: 1,4 g\ndavon Zucker: 1,0 g\nEiweiß: 0,0 g\nSalz: 77,71 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
  {
    slug: 'meersalz-rosmarin-zitrone', name: 'BUTXI Meersalz „Rosmarin & Zitrone"', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Rosmarin und Zitronenschale auf Salzflocken, mediterran, frisch, vielseitig.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/meersalz-rosmarin-zitrone.webp',
    details: {
      zutaten: '80% Meersalz, 15% Zitronenschale, 2% Basilikumblatt, 2% Rosmarinblatt, 1% gemahlener Rosmarin.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 56 kJ / 13 kcal\nFett: 0,5 g (gesättigt 0,1 g)\nKohlenhydrate: 3,5 g (Zucker 0,7 g)\nEiweiß: 0,4 g\nSalz: 77,71 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Trocken, kühl und gut verschlossen lagern.',
    },
  },
  {
    slug: 'meersalz-schwarze-olive', name: 'Meersalz mit Schwarzer Olive', price: 3.99, category: 'Salz', heat: 0,
    desc: 'Dunkle Salzflocken mit schwarzer Olive, intensiv, erdig, umami.',
    tags: ['100% natürlich', 'Vegan', 'Glutenfrei'],
    image: '/images/products/meersalz-schwarze-olive.webp',
    details: {
      zutaten: 'Meersalz, schwarze Olive.',
      naehrwerte: 'Nährwerte pro 100 g\nEnergie: 125 kJ / 30 kcal\nFett: 2,9 g (gesättigt 0,4 g)\nKohlenhydrate: 0,5 g (Zucker 0,0 g)\nEiweiß: 0,2 g\nSalz: 85,57 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Trocken und kühl lagern.',
    },
  },

  // ---------- Bundles & Sets ----------
  {
    slug: '7er-tasting-set', name: 'Butxi Hot Sauce 7er Tasting Set', price: 14.99, category: 'Startersets', heat: null,
    desc: 'Die ganze BUTXI Handschrift in einem Set: sieben Sorten zum Probieren, von mild bis extrem.',
    image: '/images/products/7er-tasting-set.webp',
    badge: 'Starterset', badgeVariant: 'dark',
    tags: ['Geschenkidee'],
    details: {
      zutaten: 'Saucen (1–6): Scharfe Paprika/Chili, Essig, Salz, Wasser. Aceite Picante (7): Olivenöl, scharfe Paprika/Chili.',
      naehrwerte: 'Fulla d’Olivera: Energie 35 kJ / 12 kcal · Fett 0,6 g (davon gesättigt 0,5 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 1,5 g · Salz 3,15 g\nCarolina Chocolate: Energie 35 kJ / 12 kcal · Fett 0,4 g (davon gesättigt 0,1 g) · Kohlenhydrate 1,8 g (davon Zucker 1,3 g) · Eiweiß 0,5 g · Salz 3,00 g\nTrinidad Scorpion: Energie 35 kJ / 12 kcal · Fett 1,9 g (davon gesättigt 1,1 g) · Kohlenhydrate 12,1 g (davon Zucker 11,9 g) · Eiweiß 0,9 g · Salz 4,70 g\nCarolina Reaper: Energie 35 kJ / 12 kcal · Fett 0,6 g (davon gesättigt 0,5 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 1,5 g · Salz 3,15 g\nJalapeño: Energie 35 kJ / 12 kcal · Fett 0,6 g (davon gesättigt 0,5 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 1,5 g · Salz 3,15 g\nHabanero Orange: Energie 35 kJ / 12 kcal · Fett 0,6 g (davon gesättigt 0,5 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 1,5 g · Salz 3,15 g\nAceite Picante (Würzöl): Energie 3700 kJ / 900 kcal · Fett 98 g (davon gesättigt 15 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 0,9 g · Salz 0,01 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
  {
    slug: 'meersalz-trio', name: 'Butxi Meersalz-Trio', price: 6.49, category: 'Salz', heat: 0,
    desc: 'Drei Gourmet-Salze im Set, probieren, kombinieren, verschenken.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee', 'Vegan'],
    image: '/images/products/meersalz-trio.webp',
    details: {
      zutaten: 'Meersalz mit Chili & Knoblauch; Meersalz mit Zitrone & Rosmarin; Meersalz mit Chili & Oregano',
      naehrwerte: '(je 100 g)\nMeersalz mit Chili & Knoblauch: Energie 67 kJ / 11 kcal · Fett 0,7 g (davon gesättigt 0 g) · Kohlenhydrate 0,4 g (davon Zucker 0,4 g) · Eiweiß 0,6 g · Salz 94,58 g\nMeersalz mit Zitrone & Rosmarin: Energie 55 kJ / 13 kcal · Fett 0,5 g (davon gesättigt 0,1 g) · Kohlenhydrate 0,7 g (davon Zucker 0,5 g) · Eiweiß 0,4 g · Salz 77,71 g\nMeersalz mit Chili & Oregano: Energie 67 kJ / 16 kcal · Fett 0,7 g (davon gesättigt 0 g) · Kohlenhydrate 0,4 g (davon Zucker 0,4 g) · Eiweiß 0,6 g · Salz 94,58 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern.',
    },
  },
  {
    slug: 'chili-trio', name: 'Butxi Chili Trio', price: 6.49, category: 'Bundles', heat: 3,
    desc: 'Drei Chili-Klassiker im praktischen Set, die schnelle Tour durchs Feuer Mallorcas.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
    details: {
      zutaten: 'Gemahlene scharfe Paprika (Chili); Getrocknete Chilis; Salzflocken, scharfes Paprikapulver (Chili)',
      naehrwerte: '(je 100 g)\nGemahlene scharfe Paprika: Energie 1250 kJ / 300 kcal · Fett 0,9 g (davon gesättigt 0,1 g) · Kohlenhydrate 45 g (davon Zucker 1,7 g) · Eiweiß 18 g · Salz 2,32 g\nGetrocknete Chilis: Energie 1250 kJ / 300 kcal · Fett 0,9 g (davon gesättigt 0,1 g) · Kohlenhydrate 45 g (davon Zucker 1,7 g) · Eiweiß 18 g · Salz 2,32 g\nSalzflocken mit Chili: Energie 37 kJ / 9 kcal · Fett 0 g (davon gesättigt 0 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 0,5 g · Salz 93,5 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern.',
    },
  },
  {
    slug: 'gourmet-trio', name: 'Butxi Gourmet Trio', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Das Pasta-Set: drei Begleiter, die jedes Nudelgericht auf Butxi-Niveau heben.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
    image: '/images/products/gourmet-trio.webp',
    details: {
      zutaten: 'Meersalz + Hibiskus; Jalapeño-Paste; Meersalz mit Kurkuma & Safran',
      naehrwerte: '(je 100 g)\nMeersalz + Hibiskus: Energie 29 kJ / 7 kcal · Fett 0 g (davon gesättigt 0 g) · Kohlenhydrate 1,4 g (davon Zucker 0 g) · Eiweiß 0 g · Salz 77,71 g\nJalapeño-Paste: Energie 35 kJ / 12 kcal · Fett 0,6 g (davon gesättigt 0,5 g) · Kohlenhydrate 0,5 g (davon Zucker 0,5 g) · Eiweiß 1,5 g · Salz 3,15 g\nMeersalz mit Kurkuma & Safran: Energie 81 kJ / 19 kcal · Fett 0,5 g (davon gesättigt 0,1 g) · Kohlenhydrate 4,8 g (davon Zucker 0,7 g) · Eiweiß 0,9 g · Salz 77,71 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
  {
    slug: 'tapas-trio', name: 'Butxi Tapas Trio', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Mallorca auf dem Tisch: drei Sorten für den perfekten Tapas-Abend.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
    image: '/images/products/tapas-trio.webp',
    details: {
      zutaten: 'Salzflocken, gewürzt (mit Sobrasada); Getrocknete Chilis; Salzflocken, gewürzt (mit schwarzer Olive)',
      naehrwerte: '(je 100 g)\nSalzflocken mit Sobrasada: Energie 198,5 kJ / 44,2 kcal · Fett 2,6 g (davon gesättigt 1,6 g) · Kohlenhydrate 0,2 g (davon Zucker 0 g) · Eiweiß 0,8 g · Salz 88,3 g\nGetrocknete Chilis: Energie 1251 kJ / 301 kcal · Fett 0,9 g (davon gesättigt 0,1 g) · Kohlenhydrate 4,7 g (davon Zucker 1,5 g) · Eiweiß 18 g · Salz 2,32 g\nSalzflocken mit schwarzer Olive: Energie 1251 kJ / 300 kcal · Fett 2,3 g (davon gesättigt 0,1 g) · Kohlenhydrate 0,5 g (davon Zucker 0 g) · Eiweiß 0 g · Salz 85,57 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
  {
    slug: 'blister-calamar', name: 'Blister Calamar', price: 6.49, category: 'Bundles', heat: null,
    desc: 'Das Set für Meeresfrüchte, abgestimmt auf Calamari, Gambas und alles aus dem Meer.',
    badge: 'Set', badgeVariant: 'sand',
    tags: ['Geschenkidee'],
    image: '/images/products/blister-calamar.webp',
    details: {
      zutaten: 'Salztränen mit Sobrasada; Getrocknete Chilischoten / getrocknete Chili; Salztränen mit schwarzer Olive',
      naehrwerte: 'Salztränen mit Sobrasada (pro 100 g): Energie 185,8 kJ / 44,2 kcal · Fett 1,6 g · davon gesättigte Fettsäuren 1,6 g · Kohlenhydrate 0,2 g · davon Zucker 0,0 g · Eiweiß 0,8 g · Salz 88,3 g\nGetrocknete Chilischoten (pro 100 g): Energie 125 kJ / 30 kcal · Fett 0,9 g · davon gesättigte Fettsäuren 0,1 g · Kohlenhydrate 4,7 g · davon Zucker 1,5 g · Eiweiß 1,8 g · Salz 2,32 g',
      allergene: 'Keine kennzeichnungspflichtigen Allergene',
      aufbewahrung: 'Kühl und trocken lagern',
    },
  },
];

export function productImage(p: Product): string {
  return p.image ?? PLACEHOLDER;
}

/** Grundpreis nach § 4 PAngV: Preis je 1 l bzw. 1 kg, abgeleitet aus `volume` (z. B. "100 ml").
 *  Für Sets/Bundles ohne eindeutige Füllmenge (Warenzusammenstellungen) entfällt die Angabe. */
export function basePrice(p: Product): string | null {
  const m = p.volume?.match(/^(\d+(?:[.,]\d+)?)\s*(ml|g|l|kg)$/i);
  if (!m) return null;
  let qty = parseFloat(m[1].replace(',', '.'));
  const unit = m[2].toLowerCase();
  if (unit === 'ml' || unit === 'g') qty /= 1000;
  if (qty <= 0) return null;
  const per = p.price / qty;
  const label = unit === 'ml' || unit === 'l' ? 'l' : 'kg';
  return per.toFixed(2).replace('.', ',') + ' €/' + label;
}

export function formatPrice(value: number): string {
  return value.toFixed(2).replace('.', ',') + ' €';
}

export const categories = ['Alle', 'Saucen', 'Gewürze', 'Olivenöl', 'Salz', 'Bundles', 'Startersets'] as const;

export const HEAT_LABELS = ['Ohne Schärfe', 'Mild', 'Mittel', 'Scharf', 'Sehr scharf', 'Extrem'];
