// BUTXI Gourmet, Rezepte (von der Live-Site übernommen)

export interface Recipe {
  slug: string;
  title: string;
  category: string;
  time: string;
  heat: 'mild' | 'mittel' | 'scharf';
  desc: string;
  product: string; // passendes BUTXI Produkt
  image?: string;
}

export const recipes: Recipe[] = [
  {
    slug: 'la-rabiosa-arrabbiata',
    title: 'Piraten-Pasta „La Rabiosa Arrabbiata"',
    category: 'Hauptgänge', time: '25 Min.', heat: 'scharf',
    desc: 'Tomatenwärme, Knoblauchduft und ein Feuer, das langsam aufsteigt.',
    product: 'BUTXI La Rabiosa',
    image: '/images/recipes/la-rabiosa-arrabbiata.webp',
  },
  {
    slug: 'habanero-orange-bowl',
    title: 'Süßkartoffel-Bowl mit Habanero-Orange-Limetten-Dressing',
    category: 'Hauptgänge', time: '35 Min.', heat: 'mittel',
    desc: 'Geröstete Süßkartoffel, frisches Grün und ein Dressing mit Sonne und Schärfe.',
    product: 'Habanero Orange',
    image: '/images/recipes/habanero-orange-bowl.webp',
  },
  {
    slug: 'hoja-de-olivo-avocado-toast',
    title: 'Avocado-Toast „Hoja de Olivo"',
    category: 'Frühstück & Brunch', time: '10 Min.', heat: 'mild',
    desc: 'Cremige Avocado, knuspriges Brot und die mildeste Sauce im Sortiment.',
    product: 'Fulla D´Olivera',
    image: '/images/recipes/hoja-de-olivo-avocado-toast.webp',
  },
  {
    slug: 'ueep-shakshuka',
    title: 'Schnelle Shakshuka „UEEP!" (mit Ei oder vegan)',
    category: 'Frühstück & Brunch', time: '20 Min.', heat: 'mittel',
    desc: 'Die Pfanne, die alle weckt, mit einem Extra-Schlag Coenta-Feuer.',
    product: 'UEEP! Salsa Coenta',
    image: '/images/recipes/ueep-shakshuka.webp',
  },
  {
    slug: 'aceite-picante-focaccia',
    title: 'Focaccia mit Aceite Picante & Salzflocken',
    category: 'Brot & Backen', time: '90 Min.', heat: 'mild',
    desc: 'Luftige Focaccia, scharfes Olivenöl und Salzflocken als Finish.',
    product: 'Aceite Picante',
    image: '/images/recipes/aceite-picante-focaccia.webp',
  },
  {
    slug: 'knoblauchbrot-butxi-picante',
    title: '10-Minuten-Knoblauchbrot mit Butxi-Picante-Gewürz',
    category: 'Brot & Backen', time: '10 Min.', heat: 'mild',
    desc: 'Der schnellste Weg zu gutem Brot: Knoblauch, Butter, Butxi.',
    product: 'Butxi Chili Trio',
    image: '/images/recipes/knoblauchbrot-butxi-picante.webp',
  },
  {
    slug: 'fantasma-cauliflower-wings',
    title: 'Rauchige Blumenkohl-Wings mit Fantasma-Glaze',
    category: 'Salate & Beilagen', time: '45 Min.', heat: 'scharf',
    desc: 'Knusprig gebacken, klebrig glasiert, mit geräucherter Ghost-Chili.',
    product: 'Naga Jolokia „Ahumada Fantasma"',
    image: '/images/recipes/fantasma-cauliflower-wings.webp',
  },
  {
    slug: 'mais-limetten-salat',
    title: 'Mais-Limetten-Salat mit Jalapeño-Kick',
    category: 'Salate & Beilagen', time: '15 Min.', heat: 'mittel',
    desc: 'Süßer Mais, saure Limette, grüne Schärfe, der Sommer in einer Schüssel.',
    product: 'Jalapeño',
    image: '/images/recipes/mais-limetten-salat.webp',
  },
  {
    slug: 'gegrillte-mango-aceite-sitrie',
    title: 'Gegrillte Mango mit Aceite Sitrie & Ahorn-Limetten-Glasur',
    category: 'Süß & Vegan', time: '20 Min.', heat: 'mild',
    desc: 'Karamellisierte Mango trifft Zitrus-Chili-Öl, Dessert mit Charakter.',
    product: 'Aceite Sitrie',
    image: '/images/recipes/gegrillte-mango-aceite-sitrie.webp',
  },
  {
    slug: 'vegane-schoko-mousse',
    title: 'Vegane Schoko-Mousse mit Confitura-Picante-Swirl',
    category: 'Süß & Vegan', time: '25 Min.', heat: 'mild',
    desc: 'Dunkle Schokolade und ein Strudel scharfer Konfitüre. Süß. Dunkel. Gefährlich.',
    product: 'Confitura Picante',
    image: '/images/recipes/vegane-schoko-mousse.webp',
  },
];

export const recipeCategories = [
  'Alle',
  'Hauptgänge',
  'Frühstück & Brunch',
  'Brot & Backen',
  'Salate & Beilagen',
  'Süß & Vegan',
];
