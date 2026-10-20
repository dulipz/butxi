// Übersetzungen für Produkt- und Rezeptdaten.
// Schlüssel = exakter deutscher Originaltext aus src/data/products.ts bzw. recipes.ts,
// Wert = [Englisch, Spanisch]. So lässt sich jede Zeile DE → EN → ES nebeneinander prüfen.
// Fehlt ein Eintrag, wird der deutsche Text angezeigt (und beim Build gewarnt).
// Ändert sich ein deutscher Text in products.ts, muss der Schlüssel hier mitziehen.

import type { Lang } from './config';

type Pair = [en: string, es: string];

export const PHRASES: Record<string, Pair> = {
  // ---------- Produktnamen (nur wo der Name deutsch ist; Marken- und spanische Namen bleiben) ----------
  'BUTXI Salsa Allioli – Scharf': ['BUTXI Salsa Allioli – Spicy', 'BUTXI Salsa Allioli – Picante'],
  'BUTXI Meersalz mit Chili': ['BUTXI Sea Salt with Chilli', 'Sal marina BUTXI con chile'],
  'BUTXI Meersalz mit Safran': ['BUTXI Sea Salt with Saffron', 'Sal marina BUTXI con azafrán'],
  'BUTXI Meersalz mit Hibiskus': ['BUTXI Sea Salt with Hibiscus', 'Sal marina BUTXI con hibisco'],
  'BUTXI Meersalz „Rosmarin & Zitrone"': ['BUTXI Sea Salt “Rosemary & Lemon”', 'Sal marina BUTXI «Romero y limón»'],
  'Meersalz mit Schwarzer Olive': ['Sea Salt with Black Olive', 'Sal marina con aceituna negra'],
  'Butxi Hot Sauce 7er Tasting Set': ['Butxi Hot Sauce Tasting Set (7 pcs)', 'Set de degustación Butxi Hot Sauce (7 uds.)'],
  'Butxi Meersalz-Trio': ['Butxi Sea Salt Trio', 'Trío de sales marinas Butxi'],
  'Naga Jolokia „Ahumada Fantasma"': ['Naga Jolokia “Ahumada Fantasma”', 'Naga Jolokia «Ahumada Fantasma»'],

  // ---------- Badges & Tags ----------
  'Bestseller': ['Bestseller', 'Más vendido'],
  'Eigenanbau': ['Home-grown', 'Cultivo propio'],
  'Extrem scharf': ['Extremely hot', 'Extremadamente picante'],
  'Sehr scharf': ['Very hot', 'Muy picante'],
  'Starterset': ['Starter set', 'Set de inicio'],
  'Set': ['Set', 'Set'],
  '100% natürlich': ['100% natural', '100% natural'],
  'Vegan': ['Vegan', 'Vegano'],
  'Glutenfrei': ['Gluten-free', 'Sin gluten'],
  'Geschenkidee': ['Gift idea', 'Idea de regalo'],

  // ---------- Kurzbeschreibungen ----------
  'Fruchtige Orange trifft auf klare Habanero-Schärfe. Sonne aus Mallorca, direkt auf den Teller.':
    ['Fruity orange meets the clean heat of habanero. Mallorcan sunshine, straight onto your plate.',
     'La naranja afrutada se une al picor limpio del habanero. Sol de Mallorca, directo al plato.'],
  'Mild, rund, mit feinem Olivenblatt, der sanfte Einstieg ins Feuer Mallorcas.':
    ['Mild and rounded with a touch of olive leaf: the gentle way into the fire of Mallorca.',
     'Suave y redonda, con un toque de hoja de olivo: la entrada amable al fuego de Mallorca.'],
  'Die Allrounderin: würzig, mittelscharf, perfekt zu Tapas und Gegrilltem.':
    ['The all-rounder: savoury, medium-hot, perfect with tapas and anything grilled.',
     'La todoterreno: sabrosa, de picor medio, perfecta para tapas y parrilla.'],
  'Nur für Mutige. Die schärfste Schote der Welt, pur aus Eigenanbau.':
    ['For the brave only. One of the world’s hottest peppers, pure and home-grown.',
     'Solo para valientes. Uno de los chiles más picantes del mundo, puro y de cultivo propio.'],
  'Dunkel, rauchig, extrem, die Reaper-Variante mit tiefem, fast schokoladigem Aroma.':
    ['Dark, smoky, extreme: the Reaper variety with a deep, almost chocolatey aroma.',
     'Oscura, ahumada, extrema: la variedad Reaper con un aroma profundo, casi a chocolate.'],
  'Gelbe Trinidad Scorpion Amarillo: strahlend fruchtig, gnadenlos scharf.':
    ['Yellow Trinidad Scorpion Amarillo: brilliantly fruity, mercilessly hot.',
     'Trinidad Scorpion Amarillo: intensamente afrutada, implacablemente picante.'],
  'Grün, frisch, lebendig, die klassische Jalapeño-Sauce mit klarem Kick.':
    ['Green, fresh, lively: the classic jalapeño sauce with a clear kick.',
     'Verde, fresca, viva: la clásica salsa de jalapeño con un punto picante bien marcado.'],
  'Die Coenta mit einem Extra-Schlag Feuer. UEEP!, mehr muss man nicht sagen.':
    ['Coenta with an extra punch of fire. UEEP! – need we say more?',
     'La Coenta con un golpe extra de fuego. ¡UEEP! No hace falta decir más.'],
  'Geräucherte Ghost-Chili: tiefer Rauch, langer Abgang, ernstzunehmende Schärfe.':
    ['Smoked ghost pepper: deep smoke, a long finish and serious heat.',
     'Chile fantasma ahumado: humo profundo, final largo y un picor que va en serio.'],
  'Die Wütende: Tomate, Knoblauch und ein Feuer, das langsam aufsteigt.':
    ['The furious one: tomato, garlic and a fire that slowly builds.',
     'La rabiosa: tomate, ajo y un fuego que sube poco a poco.'],
  'Scharfe Konfitüre, süß trifft Feuer. Zu Käse, Brot und allem Gegrillten.':
    ['Spicy jam where sweet meets fire. With cheese, bread and anything grilled.',
     'Confitura picante: lo dulce se une al fuego. Con queso, pan y cualquier cosa a la parrilla.'],
  'Cremiges Allioli mit Chili-Kick, mallorquinischer Klassiker, neu entfacht.':
    ['Creamy allioli with a chilli kick: a Mallorcan classic, reignited.',
     'Allioli cremoso con un toque de chile: un clásico mallorquín, encendido de nuevo.'],
  'Das klassische Allioli: Knoblauch, Öl, Handwerk. Ohne Schärfe, voller Charakter.':
    ['Classic allioli: garlic, oil and craftsmanship. No heat, full of character.',
     'El allioli clásico: ajo, aceite y oficio. Sin picante, lleno de carácter.'],
  'Getrocknete Jalapeño-Scheiben, knusprige Schärfe zum Streuen und Kochen.':
    ['Dried jalapeño slices: crunchy heat for sprinkling and cooking.',
     'Rodajas de jalapeño deshidratado: picor crujiente para espolvorear y cocinar.'],
  'Die Gewürzmischung für echte Paella, Safran, Paprika und mallorquinische Kräuter.':
    ['The spice blend for real paella: saffron, paprika and Mallorcan herbs.',
     'La mezcla de especias para una paella de verdad: azafrán, pimentón y hierbas mallorquinas.'],
  'Natives Olivenöl, langsam mit Chilis aus Eigenanbau infundiert. Für Pizza, Pasta, Brot.':
    ['Virgin olive oil slowly infused with our home-grown chillies. For pizza, pasta and bread.',
     'Aceite de oliva virgen infusionado lentamente con chiles de cultivo propio. Para pizza, pasta y pan.'],
  'Scharfes Öl mit Zitrusnote, hell, aromatisch, mit feinem Feuer im Abgang.':
    ['Spicy oil with a citrus note: bright, aromatic, with a gentle fire on the finish.',
     'Aceite picante con notas cítricas: luminoso, aromático, con un fuego sutil al final.'],
  'Mallorquinische Salzflocken mit Chili, das Finish, das man sieht und schmeckt.':
    ['Mallorcan salt flakes with chilli: the finishing touch you can see and taste.',
     'Escamas de sal mallorquina con chile: el toque final que se ve y se saborea.'],
  'Goldene Salzflocken mit Safran, für Reisgerichte, Fisch und besondere Momente.':
    ['Golden salt flakes with saffron, for rice dishes, fish and special moments.',
     'Escamas de sal doradas con azafrán, para arroces, pescado y momentos especiales.'],
  'Blumig-säuerliche Hibiskusnote auf Meersalz, auffällig auf Salaten und Desserts.':
    ['A floral, tangy hibiscus note on sea salt, striking on salads and desserts.',
     'Un toque floral y ácido de hibisco sobre sal marina, llamativo en ensaladas y postres.'],
  'Rosmarin und Zitronenschale auf Salzflocken, mediterran, frisch, vielseitig.':
    ['Rosemary and lemon zest on salt flakes: Mediterranean, fresh, versatile.',
     'Romero y piel de limón sobre escamas de sal: mediterránea, fresca, versátil.'],
  'Dunkle Salzflocken mit schwarzer Olive, intensiv, erdig, umami.':
    ['Dark salt flakes with black olive: intense, earthy, umami.',
     'Escamas de sal oscuras con aceituna negra: intensas, terrosas, umami.'],
  'Die ganze BUTXI Handschrift in einem Set: sieben Sorten zum Probieren, von mild bis extrem.':
    ['The full BUTXI signature in one set: seven flavours to try, from mild to extreme.',
     'Todo el sello BUTXI en un solo set: siete sabores para probar, de suave a extremo.'],
  'Drei Gourmet-Salze im Set, probieren, kombinieren, verschenken.':
    ['Three gourmet salts in one set: taste, combine, give as a gift.',
     'Tres sales gourmet en un set: prueba, combina, regala.'],
  'Drei Chili-Klassiker im praktischen Set, die schnelle Tour durchs Feuer Mallorcas.':
    ['Three chilli classics in a handy set: a quick tour through the fire of Mallorca.',
     'Tres clásicos de chile en un set práctico: un recorrido rápido por el fuego de Mallorca.'],
  'Das Pasta-Set: drei Begleiter, die jedes Nudelgericht auf Butxi-Niveau heben.':
    ['The pasta set: three companions that take any pasta dish to Butxi level.',
     'El set para pasta: tres compañeros que llevan cualquier plato de pasta al nivel Butxi.'],
  'Mallorca auf dem Tisch: drei Sorten für den perfekten Tapas-Abend.':
    ['Mallorca on the table: three flavours for the perfect tapas night.',
     'Mallorca en la mesa: tres sabores para la noche de tapas perfecta.'],
  'Das Set für Meeresfrüchte, abgestimmt auf Calamari, Gambas und alles aus dem Meer.':
    ['The seafood set, made for calamari, prawns and everything from the sea.',
     'El set para marisco, pensado para calamares, gambas y todo lo que viene del mar.'],

  // ---------- Langbeschreibungen ----------
  'Sonnengereifte Orangen und Habaneros aus Eigenanbau: fruchtig im Antritt, klar und warm in der Schärfe. Perfekt zu Tacos, Hähnchen, Meeresfrüchten, Bowls, Marinaden und Dips.':
    ['Sun-ripened oranges and home-grown habaneros: fruity up front, with a clean, warm heat. Perfect with tacos, chicken, seafood, bowls, marinades and dips.',
     'Naranjas maduradas al sol y habaneros de cultivo propio: afrutada al principio, con un picor limpio y cálido. Perfecta para tacos, pollo, marisco, bowls, adobos y dips.'],
  'Die mildeste Sauce im Sortiment: Olivenblatt, Kräuter und ein Hauch Chili. Für alle, die Aroma vor Schärfe stellen, zu Fisch, Gemüse und mediterranen Gerichten.':
    ['The mildest sauce in our range: olive leaf, herbs and a hint of chilli. For anyone who puts flavour before heat, with fish, vegetables and Mediterranean dishes.',
     'La salsa más suave de la gama: hoja de olivo, hierbas y un toque de chile. Para quien prefiere el aroma al picante, con pescado, verduras y platos mediterráneos.'],
  'Würzig, ausgewogen, mittelscharf, die Sauce für jeden Tag. Zu Tapas, Gegrilltem, Pasta oder einfach aufs Brot. Ein Tropfen genügt.':
    ['Savoury, balanced, medium-hot: the everyday sauce. With tapas, grilled food, pasta or simply on bread. One drop is enough.',
     'Sabrosa, equilibrada, de picor medio: la salsa de cada día. Con tapas, parrilla, pasta o simplemente sobre pan. Basta una gota.'],
  'Die Carolina Reaper ist die schärfste Chili der Welt, und hier kommt sie pur aus unserem Eigenanbau in die Flasche. Extreme Schärfe, überraschend fruchtig. Vorsichtig dosieren.':
    ['The Carolina Reaper is one of the world’s hottest chillies, and here it goes straight from our own fields into the bottle. Extreme heat, surprisingly fruity. Use with care.',
     'El Carolina Reaper es uno de los chiles más picantes del mundo, y aquí pasa directamente de nuestro cultivo a la botella. Picor extremo, sorprendentemente afrutado. Úsalo con cuidado.'],

  // ---------- Zutaten ----------
  'Chili (Habanero), Essig, Wasser, Salz': ['Chilli (habanero), vinegar, water, salt', 'Chile (habanero), vinagre, agua, sal'],
  'Fruchtfleisch scharfer Paprika/Chilis mit ihren Kernen, Öl, Wasser, Salz, Essig.':
    ['Flesh of hot peppers/chillies with their seeds, oil, water, salt, vinegar.',
     'Pulpa de pimientos picantes/chiles con sus semillas, aceite, agua, sal, vinagre.'],
  'Scharfe Paprika/Chili, Essig, Salz, Wasser.': ['Hot pepper/chilli, vinegar, salt, water.', 'Pimiento picante/chile, vinagre, sal, agua.'],
  'Paprika, Carolina Reaper, Essig, Salz, Wasser, Xanthan':
    ['Sweet pepper, Carolina Reaper, vinegar, salt, water, xanthan gum', 'Pimiento, Carolina Reaper, vinagre, sal, agua, goma xantana'],
  'Carolina Reaper, Tomate, roter Paprika, Zucker.': ['Carolina Reaper, tomato, red pepper, sugar.', 'Carolina Reaper, tomate, pimiento rojo, azúcar.'],
  'Chili, Zucker, Essig, Sulfite, Pektin. Frucht/Zucker-Anteil: 25% Fruchtanteil, 75% Zucker.':
    ['Chilli, sugar, vinegar, sulphites, pectin. Fruit/sugar content: 25% fruit, 75% sugar.',
     'Chile, azúcar, vinagre, sulfitos, pectina. Proporción fruta/azúcar: 25 % fruta, 75 % azúcar.'],
  'Sonnenblumenöl, Knoblauch, Wasser, Gewürze, Salz, Zitronensaft.':
    ['Sunflower oil, garlic, water, spices, salt, lemon juice.', 'Aceite de girasol, ajo, agua, especias, sal, zumo de limón.'],
  'Sonnenblumenöl, frischer Knoblauch, Salz, Zitrone. Hinweis: Ohne Konservierungsstoffe und ohne künstliche Farbstoffe.':
    ['Sunflower oil, fresh garlic, salt, lemon. Note: no preservatives and no artificial colourings.',
     'Aceite de girasol, ajo fresco, sal, limón. Nota: sin conservantes ni colorantes artificiales.'],
  'Jalapeño, Essig, Salz und Wasser. Ohne Farbstoffe und ohne Konservierungsstoffe.':
    ['Jalapeño, vinegar, salt and water. No colourings and no preservatives.',
     'Jalapeño, vinagre, sal y agua. Sin colorantes ni conservantes.'],
  'Salz, Paprika, Maismehl, Farbstoff E102, Knoblauch, schwarzer Pfeffer, Zwiebel, Petersilie, Thymian, Rosmarin, Trennmittel E551, pflanzliches Sonnenblumenöl, Farbstoff E129.':
    ['Salt, paprika, maize flour, colouring E102, garlic, black pepper, onion, parsley, thyme, rosemary, anti-caking agent E551, sunflower oil, colouring E129.',
     'Sal, pimentón, harina de maíz, colorante E102, ajo, pimienta negra, cebolla, perejil, tomillo, romero, antiaglomerante E551, aceite de girasol, colorante E129.'],
  'Mildes Olivenöl, scharfe Paprika/Chili.': ['Mild olive oil, hot pepper/chilli.', 'Aceite de oliva suave, pimiento picante/chile.'],
  'Würzöl auf Basis von mildem Olivenöl, scharfen „Fulla d’olivera“-Chilis und einer leichten Rosmarinnote.':
    ['Seasoning oil based on mild olive oil, hot “Fulla d’olivera” chillies and a light note of rosemary.',
     'Aceite aromatizado a base de aceite de oliva suave, chiles picantes «Fulla d’olivera» y un ligero toque de romero.'],
  '80 % Meersalz, 10 % Paprika, 10 % Rosmarinblätter, Basilikumblätter, zerkleinerte Chili.':
    ['80% sea salt, 10% paprika, 10% rosemary leaves, basil leaves, crushed chilli.',
     '80 % sal marina, 10 % pimentón, 10 % hojas de romero, hojas de albahaca, chile triturado.'],
  '80% Meersalz, 2% Safran, 10% Petersilie, 3% Kurkuma, 5% Knoblauch (zerkleinert).':
    ['80% sea salt, 2% saffron, 10% parsley, 3% turmeric, 5% garlic (crushed).',
     '80 % sal marina, 2 % azafrán, 10 % perejil, 3 % cúrcuma, 5 % ajo (triturado).'],
  '80% Meersalz (Sal Marina), 18% Hibiskusblüte (Flor de Hibiscus), 2% Basilikumblatt (Albahaca hoja).':
    ['80% sea salt, 18% hibiscus flower, 2% basil leaf.', '80 % sal marina, 18 % flor de hibisco, 2 % hoja de albahaca.'],
  '80% Meersalz, 15% Zitronenschale, 2% Basilikumblatt, 2% Rosmarinblatt, 1% gemahlener Rosmarin.':
    ['80% sea salt, 15% lemon zest, 2% basil leaf, 2% rosemary leaf, 1% ground rosemary.',
     '80 % sal marina, 15 % piel de limón, 2 % hoja de albahaca, 2 % hoja de romero, 1 % romero molido.'],
  'Meersalz, schwarze Olive.': ['Sea salt, black olive.', 'Sal marina, aceituna negra.'],
  'Saucen (1–6): Scharfe Paprika/Chili, Essig, Salz, Wasser. Aceite Picante (7): Olivenöl, scharfe Paprika/Chili.':
    ['Sauces (1–6): hot pepper/chilli, vinegar, salt, water. Aceite Picante (7): olive oil, hot pepper/chilli.',
     'Salsas (1–6): pimiento picante/chile, vinagre, sal, agua. Aceite Picante (7): aceite de oliva, pimiento picante/chile.'],
  'Meersalz mit Chili & Knoblauch; Meersalz mit Zitrone & Rosmarin; Meersalz mit Chili & Oregano':
    ['Sea salt with chilli & garlic; sea salt with lemon & rosemary; sea salt with chilli & oregano',
     'Sal marina con chile y ajo; sal marina con limón y romero; sal marina con chile y orégano'],
  'Gemahlene scharfe Paprika (Chili); Getrocknete Chilis; Salzflocken, scharfes Paprikapulver (Chili)':
    ['Ground hot pepper (chilli); dried chillies; salt flakes, hot paprika powder (chilli)',
     'Pimiento picante molido (chile); chiles secos; escamas de sal, pimentón picante (chile)'],
  'Meersalz + Hibiskus; Jalapeño-Paste; Meersalz mit Kurkuma & Safran':
    ['Sea salt + hibiscus; jalapeño paste; sea salt with turmeric & saffron',
     'Sal marina + hibisco; pasta de jalapeño; sal marina con cúrcuma y azafrán'],
  'Salzflocken, gewürzt (mit Sobrasada); Getrocknete Chilis; Salzflocken, gewürzt (mit schwarzer Olive)':
    ['Seasoned salt flakes (with sobrasada); dried chillies; seasoned salt flakes (with black olive)',
     'Escamas de sal aromatizadas (con sobrasada); chiles secos; escamas de sal aromatizadas (con aceituna negra)'],
  'Salztränen mit Sobrasada; Getrocknete Chilischoten / getrocknete Chili; Salztränen mit schwarzer Olive':
    ['Salt flakes with sobrasada; dried chilli peppers / dried chilli; salt flakes with black olive',
     'Lágrimas de sal con sobrasada; guindillas secas / chile seco; lágrimas de sal con aceituna negra'],

  // ---------- Allergene ----------
  'Keine kennzeichnungspflichtigen Allergene': ['No allergens requiring declaration', 'Sin alérgenos de declaración obligatoria'],
  'Enthält Sulfite. Antioxidationsmittel: E 220. (E220 = Schwefeldioxid; gehört zu den Sulfiten)':
    ['Contains sulphites. Antioxidant: E 220 (E220 = sulphur dioxide, one of the sulphites).',
     'Contiene sulfitos. Antioxidante: E 220 (E220 = dióxido de azufre, uno de los sulfitos).'],
  'Enthält Sulfite.': ['Contains sulphites.', 'Contiene sulfitos.'],
  'Hinweis: Enthält Sulfite.': ['Note: contains sulphites.', 'Nota: contiene sulfitos.'],
  'Keine kennzeichnungspflichtigen Allergene. Ohne Farbstoffe und ohne Konservierungsstoffe.':
    ['No allergens requiring declaration. No colourings and no preservatives.',
     'Sin alérgenos de declaración obligatoria. Sin colorantes ni conservantes.'],
  'Keine kennzeichnungspflichtigen Allergene erkennbar.': ['No allergens requiring declaration identified.', 'No se identifican alérgenos de declaración obligatoria.'],
  // ⚠️ Datenlücke im Original (Allergen nicht benannt) – steht auf der Nährwerte-Korrekturliste für Fabian
  'Kennzeichnungspflichtige Allergene (so auf der Website angegeben)':
    ['Contains allergens requiring declaration (as stated on the original website)',
     'Contiene alérgenos de declaración obligatoria (según la web original)'],

  // ---------- Aufbewahrung & Verwendung ----------
  'Aufbewahrung: Kühl und trocken lagern. Verwendung: Vor Gebrauch schütteln.':
    ['Storage: keep in a cool, dry place. Use: shake before use.', 'Conservación: en lugar fresco y seco. Uso: agitar antes de usar.'],
  'Verwendung: Vor dem Servieren schütteln. Aufbewahrung: Kühl und trocken lagern.':
    ['Use: shake before serving. Storage: keep in a cool, dry place.', 'Uso: agitar antes de servir. Conservación: en lugar fresco y seco.'],
  'Keine künstlichen Farbstoffe. VOR GEBRAUCH SCHÜTTELN. Kühl und trocken lagern.':
    ['No artificial colourings. SHAKE BEFORE USE. Keep in a cool, dry place.', 'Sin colorantes artificiales. AGITAR ANTES DE USAR. Conservar en lugar fresco y seco.'],
  'Nach dem Öffnen gut verschlossen im Kühlschrank aufbewahren.':
    ['Once opened, keep tightly closed in the fridge.', 'Una vez abierto, conservar bien cerrado en el frigorífico.'],
  'Nach dem Öffnen im Kühlschrank aufbewahren und innerhalb von 3 Wochen verbrauchen. Mindestens haltbar bis Ende: siehe Etikett.':
    ['Once opened, keep in the fridge and use within 3 weeks. Best before end: see label.',
     'Una vez abierto, conservar en el frigorífico y consumir en 3 semanas. Consumir preferentemente antes del fin de: ver etiqueta.'],
  'Nach dem Öffnen im Kühlschrank aufbewahren und innerhalb von 3 Wochen verbrauchen.':
    ['Once opened, keep in the fridge and use within 3 weeks.', 'Una vez abierto, conservar en el frigorífico y consumir en 3 semanas.'],
  'Kühl und trocken lagern. Nach dem Öffnen gut verschlossen im Kühlschrank aufbewahren und idealerweise in der Lake halten.':
    ['Keep in a cool, dry place. Once opened, keep tightly closed in the fridge, ideally covered in the brine.',
     'Conservar en lugar fresco y seco. Una vez abierto, guardar bien cerrado en el frigorífico, a ser posible cubierto por el líquido.'],
  'Aufbewahrung: Kühl und trocken lagern. Verwendung: Zum Würzen von Paella/Reisgerichten (nach Geschmack dosieren).':
    ['Storage: keep in a cool, dry place. Use: for seasoning paella and rice dishes (dose to taste).',
     'Conservación: en lugar fresco y seco. Uso: para condimentar paella y arroces (dosificar al gusto).'],
  'Kühl und trocken lagern': ['Keep in a cool, dry place', 'Conservar en lugar fresco y seco'],
  'Kühl und trocken lagern.': ['Keep in a cool, dry place.', 'Conservar en lugar fresco y seco.'],
  'Trocken und kühl lagern, vor Feuchtigkeit schützen.': ['Keep in a dry, cool place, away from moisture.', 'Conservar en lugar seco y fresco, protegido de la humedad.'],
  'Trocken, kühl und gut verschlossen lagern.': ['Keep dry, cool and tightly closed.', 'Conservar en lugar seco, fresco y bien cerrado.'],
  'Trocken und kühl lagern.': ['Keep in a dry, cool place.', 'Conservar en lugar seco y fresco.'],

  // ---------- Teilprodukte in Nährwerttabellen von Sets ----------
  'Fulla d’Olivera': ['Fulla d’Olivera', 'Fulla d’Olivera'],
  'Aceite Picante (Würzöl)': ['Aceite Picante (seasoning oil)', 'Aceite Picante (aceite aromatizado)'],
  'Meersalz mit Chili & Knoblauch': ['Sea salt with chilli & garlic', 'Sal marina con chile y ajo'],
  'Meersalz mit Zitrone & Rosmarin': ['Sea salt with lemon & rosemary', 'Sal marina con limón y romero'],
  'Meersalz mit Chili & Oregano': ['Sea salt with chilli & oregano', 'Sal marina con chile y orégano'],
  'Gemahlene scharfe Paprika': ['Ground hot pepper', 'Pimiento picante molido'],
  'Getrocknete Chilis': ['Dried chillies', 'Chiles secos'],
  'Salzflocken mit Chili': ['Salt flakes with chilli', 'Escamas de sal con chile'],
  'Meersalz + Hibiskus': ['Sea salt + hibiscus', 'Sal marina + hibisco'],
  'Jalapeño-Paste': ['Jalapeño paste', 'Pasta de jalapeño'],
  'Meersalz mit Kurkuma & Safran': ['Sea salt with turmeric & saffron', 'Sal marina con cúrcuma y azafrán'],
  'Salzflocken mit Sobrasada': ['Salt flakes with sobrasada', 'Escamas de sal con sobrasada'],
  'Salzflocken mit schwarzer Olive': ['Salt flakes with black olive', 'Escamas de sal con aceituna negra'],
  'Salztränen mit Sobrasada': ['Salt flakes with sobrasada', 'Lágrimas de sal con sobrasada'],
  'Getrocknete Chilischoten': ['Dried chilli peppers', 'Guindillas secas'],

  // ---------- Rezepte ----------
  'Piraten-Pasta „La Rabiosa Arrabbiata"': ['Pirate pasta “La Rabiosa Arrabbiata”', 'Pasta pirata «La Rabiosa Arrabbiata»'],
  'Süßkartoffel-Bowl mit Habanero-Orange-Limetten-Dressing': ['Sweet potato bowl with habanero-orange-lime dressing', 'Bowl de boniato con aliño de habanero, naranja y lima'],
  'Avocado-Toast „Hoja de Olivo"': ['Avocado toast “Hoja de Olivo”', 'Tostada de aguacate «Hoja de Olivo»'],
  'Schnelle Shakshuka „UEEP!" (mit Ei oder vegan)': ['Quick shakshuka “UEEP!” (with egg or vegan)', 'Shakshuka rápida «¡UEEP!» (con huevo o vegana)'],
  'Focaccia mit Aceite Picante & Salzflocken': ['Focaccia with Aceite Picante & salt flakes', 'Focaccia con Aceite Picante y escamas de sal'],
  '10-Minuten-Knoblauchbrot mit Butxi-Picante-Gewürz': ['10-minute garlic bread with Butxi picante spice', 'Pan de ajo en 10 minutos con especias Butxi Picante'],
  'Rauchige Blumenkohl-Wings mit Fantasma-Glaze': ['Smoky cauliflower wings with Fantasma glaze', 'Alitas de coliflor ahumadas con glaseado Fantasma'],
  'Mais-Limetten-Salat mit Jalapeño-Kick': ['Corn and lime salad with a jalapeño kick', 'Ensalada de maíz y lima con toque de jalapeño'],
  'Gegrillte Mango mit Aceite Sitrie & Ahorn-Limetten-Glasur': ['Grilled mango with Aceite Sitrie & maple-lime glaze', 'Mango a la parrilla con Aceite Sitrie y glaseado de arce y lima'],
  'Vegane Schoko-Mousse mit Confitura-Picante-Swirl': ['Vegan chocolate mousse with a Confitura Picante swirl', 'Mousse vegana de chocolate con remolino de Confitura Picante'],
  'Tomatenwärme, Knoblauchduft und ein Feuer, das langsam aufsteigt.':
    ['Warm tomato, the scent of garlic and a fire that slowly builds.', 'Tomate cálido, aroma de ajo y un fuego que sube poco a poco.'],
  'Geröstete Süßkartoffel, frisches Grün und ein Dressing mit Sonne und Schärfe.':
    ['Roasted sweet potato, fresh greens and a dressing full of sunshine and heat.', 'Boniato asado, verdura fresca y un aliño con sol y picante.'],
  'Cremige Avocado, knuspriges Brot und die mildeste Sauce im Sortiment.':
    ['Creamy avocado, crunchy bread and the mildest sauce in our range.', 'Aguacate cremoso, pan crujiente y la salsa más suave de la gama.'],
  'Die Pfanne, die alle weckt, mit einem Extra-Schlag Coenta-Feuer.':
    ['The pan that wakes everyone up, with an extra punch of Coenta fire.', 'La sartén que despierta a todos, con un golpe extra de fuego Coenta.'],
  'Luftige Focaccia, scharfes Olivenöl und Salzflocken als Finish.':
    ['Airy focaccia, spicy olive oil and salt flakes to finish.', 'Focaccia esponjosa, aceite de oliva picante y escamas de sal para terminar.'],
  'Der schnellste Weg zu gutem Brot: Knoblauch, Butter, Butxi.':
    ['The fastest way to good bread: garlic, butter, Butxi.', 'El camino más rápido hacia un buen pan: ajo, mantequilla, Butxi.'],
  'Knusprig gebacken, klebrig glasiert, mit geräucherter Ghost-Chili.':
    ['Baked until crispy, with a sticky glaze and smoked ghost pepper.', 'Crujientes al horno, con un glaseado pegajoso y chile fantasma ahumado.'],
  'Süßer Mais, saure Limette, grüne Schärfe, der Sommer in einer Schüssel.':
    ['Sweet corn, sour lime, green heat: summer in a bowl.', 'Maíz dulce, lima ácida, picor verde: el verano en un bol.'],
  'Karamellisierte Mango trifft Zitrus-Chili-Öl, Dessert mit Charakter.':
    ['Caramelised mango meets citrus chilli oil: a dessert with character.', 'Mango caramelizado con aceite cítrico de chile: un postre con carácter.'],
  'Dunkle Schokolade und ein Strudel scharfer Konfitüre. Süß. Dunkel. Gefährlich.':
    ['Dark chocolate and a swirl of spicy jam. Sweet. Dark. Dangerous.', 'Chocolate negro y un remolino de confitura picante. Dulce. Oscuro. Peligroso.'],
  'Hauptgänge': ['Mains', 'Platos principales'],
  'Frühstück & Brunch': ['Breakfast & brunch', 'Desayuno y brunch'],
  'Brot & Backen': ['Bread & baking', 'Pan y horneados'],
  'Salate & Beilagen': ['Salads & sides', 'Ensaladas y guarniciones'],
  'Süß & Vegan': ['Sweet & vegan', 'Dulce y vegano'],
};

const missing = new Set<string>();

/** Übersetzt einen deutschen Datentext. Deutsch oder unbekannt → Original.
 *  `keep`: Eigennamen (z. B. Produktnamen), die ohne Eintrag bewusst unverändert bleiben. */
export function tr(text: string | undefined, lang: Lang, keep = false): string {
  if (!text) return text ?? '';
  if (lang === 'de') return text;
  const hit = PHRASES[text];
  if (hit) return lang === 'en' ? hit[0] : hit[1];
  if (!keep && !missing.has(text)) {
    missing.add(text);
    console.warn(`[i18n] Keine ${lang}-Übersetzung für: ${text}`);
  }
  return text;
}

// ---------- Nährwerte: Fachbegriffe zeilenweise ersetzen (Zahlen bleiben unverändert) ----------
const NUTRI: Array<[RegExp, Pair]> = [
  [/Nährwertangaben – Energiewert pro/g, ['Nutrition information – energy per', 'Información nutricional – valor energético por']],
  [/Nährwertangaben/g, ['Nutrition information', 'Información nutricional']],
  [/Nährwerte pro/g, ['Nutrition information per', 'Valores nutricionales por']],
  [/Durchschnittswerte pro/g, ['Average values per', 'Valores medios por']],
  [/\(Angabe fehlt auf der Website\)/g, ['(not stated)', '(no indicado)']],
  [/davon gesättigte Fettsäuren/g, ['of which saturates', 'de las cuales saturadas']],
  [/davon gesättigt/g, ['of which saturates', 'de las cuales saturadas']],
  [/gesättigt/g, ['saturates', 'saturadas']],
  [/davon Zucker/g, ['of which sugars', 'de los cuales azúcares']],
  [/Fett gesamt/g, ['Fat', 'Grasas']],
  [/Energie/g, ['Energy', 'Valor energético']],
  [/Kohlenhydrate/g, ['Carbohydrate', 'Hidratos de carbono']],
  [/Eiweiß/g, ['Protein', 'Proteínas']],
  [/\bFett\b/g, ['Fat', 'Grasas']],
  [/\bZucker\b/g, ['Sugars', 'Azúcares']],
  [/\bSalz\b/g, ['Salt', 'Sal']],
  [/\bje\b/g, ['per', 'por']],
  [/\bpro\b/g, ['per', 'por']],
];

export function trNutrition(text: string | undefined, lang: Lang): string {
  if (!text || lang === 'de') return text ?? '';
  const i = lang === 'en' ? 0 : 1;
  return text.split('\n').map((line) => {
    // Set-Zeilen beginnen mit dem Namen des Teilprodukts: „Meersalz mit Chili & Knoblauch: …"
    let prefix = '';
    let rest = line;
    const m = line.match(/^([^:]+?)(\s*\(pro [^)]*\))?:\s(.*)$/);
    if (m && PHRASES[m[1]]) {
      prefix = PHRASES[m[1]][i] + (m[2] ? ' ' + m[2].trim() : '') + ': ';
      rest = m[3];
    }
    let out = prefix + rest;
    // Nur den Nicht-Namensteil ersetzen, damit Produktnamen unberührt bleiben
    let body = prefix ? out.slice(prefix.length) : out;
    let pre = prefix;
    for (const [re, pair] of NUTRI) {
      body = body.replace(re, pair[i]);
      pre = pre.replace(/\(pro /, lang === 'en' ? '(per ' : '(por ');
    }
    // Dezimalkomma → Punkt im Englischen
    if (lang === 'en') body = body.replace(/(\d),(\d)/g, '$1.$2');
    return pre + body;
  }).join('\n');
}

/** Rezept-Zeit „25 Min." → „25 min" */
export const trTime = (time: string, lang: Lang) => (lang === 'de' ? time : time.replace('Min.', 'min'));
