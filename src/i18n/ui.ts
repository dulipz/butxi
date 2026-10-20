// Gemeinsame Oberflächentexte (Header, Footer, Warenkorb, Produktkarten …).
// Seitenspezifische Texte stehen direkt in der jeweiligen View unter src/views/.
// Ton: DE „du", EN locker, ES „tú".

import type { Lang } from './config';

const ui = {
  de: {
    nav: { home: 'Home', shop: 'Shop', about: 'Über uns', production: 'Produktion', recipes: 'Rezepte', contact: 'Kontakt' },
    header: {
      menuOpen: 'Menü öffnen', homeAria: 'BUTXI Gourmet · Startseite', mainNav: 'Hauptnavigation',
      mobileNav: 'Mobile Navigation', cartAria: 'Warenkorb ansehen', lang: 'Sprache wählen',
    },
    promo: {
      aria: 'Newsletter-Angebot', close: 'Banner schließen', title: '10 % Rabatt sichern',
      text: 'Kostenloser Versand ab 39 €, und 10 % auf deine erste Lieferung mit dem Newsletter.',
      emailLabel: 'E-Mail-Adresse', placeholder: 'deine@email.com', submit: 'Anmelden',
      success: 'Fast geschafft, bitte bestätige deine Anmeldung in deinem Postfach.',
    },
    footer: {
      tagline: 'Hot Sauces, Salze & Gewürze aus Eigenanbau, handgemacht auf Mallorca.',
      shop: 'Shop', allProducts: 'Alle Produkte', legal: 'Rechtliches', imprint: 'Impressum',
      privacy: 'Datenschutz', terms: 'AGB', withdrawal: 'Widerruf', shipping: 'Versand & Lieferung',
      cookies: 'Cookie-Einstellungen', contact: 'Kontakt', rights: 'Alle Rechte vorbehalten.',
      developedBy: 'Entwickelt von',
    },
    toast: { added: 'wurde in den Warenkorb gelegt.', viewCart: 'Warenkorb ansehen' },
    product: {
      addToCart: 'In den Warenkorb', inclVat: 'inkl. MwSt.', basePrice: 'Grundpreis',
      shipnote: 'Versand 4,19 € · Kostenlos ab 39 €', ingredients: 'Zutaten', nutrition: 'Nährwerte',
      allergens: 'Allergene', storage: 'Aufbewahrung & Verwendung', shippingReturns: 'Versand & Rückgabe',
      shippingReturnsText: 'Versand aus Deutschland in 2–4 Werktagen. Versandkosten: 4,19 €, kostenlos ab 39 € Bestellwert. 14 Tage Widerrufsrecht.',
      shippingMore: 'Mehr zu Versand & Lieferung', qtyDec: 'Menge verringern', qtyInc: 'Menge erhöhen',
      relatedEyebrow: 'Passt dazu', relatedTitle: (cat: string) => `Mehr aus ${cat}`, crumbs: 'Brotkrumen',
    },
    heat: ['Ohne Schärfe', 'Mild', 'Mittel', 'Scharf', 'Sehr scharf', 'Extrem'],
    heatAria: (lv: number, label: string) => `Schärfegrad ${lv} von 5: ${label}`,
    categories: {
      Alle: 'Alle', Saucen: 'Saucen', 'Gewürze': 'Gewürze', 'Olivenöl': 'Olivenöl', Salz: 'Salz',
      Bundles: 'Bundles', Startersets: 'Startersets',
    } as Record<string, string>,
    recipe: { with: 'mit', zoom: (t: string) => `${t} in groß ansehen`, heat: { mild: 'mild', mittel: 'mittel', scharf: 'scharf' } },
    newsletter: {
      eyebrow: 'Newsletter', title: '10 % auf deine erste Lieferung',
      text: 'Neue Sorten, Rezepte und Aktionen, direkt aus der Manufaktur. Kein Spam, versprochen.',
      emailLabel: 'E-Mail-Adresse', placeholder: 'deine@email.com', submit: 'Anmelden',
      success: 'Fast geschafft, bitte bestätige deine Anmeldung in deinem Postfach.',
    },
    cookie: {
      aria: 'Cookie-Hinweis', title: 'Cookies? Nur eine Prise.',
      tracking: 'Wir verwenden technisch notwendige Cookies für Warenkorb und Kasse. Mit „Alle akzeptieren“ erlaubst du zusätzlich Statistik- und Marketing-Cookies, mit denen wir unseren Shop verbessern. Details in unserer',
      noTracking: 'Wir verwenden technisch notwendige Cookies für Warenkorb und Kasse. Mit „Alle akzeptieren“ erlaubst du zusätzlich Komfort-Funktionen wie gemerkte Einstellungen. Details in unserer',
      privacyLink: 'Datenschutzerklärung', acceptAll: 'Alle akzeptieren', necessary: 'Nur notwendige',
    },
    legalNote: '',
    // Texte für das Warenkorb-Skript im Browser
    cart: {
      freeDone: 'Kostenloser Versand, geschafft!',
      freeRemaining: 'Noch {x} bis zum kostenlosen Versand',
      empty: 'Dein Warenkorb ist noch leer. Zeit für ein bisschen Gefahr.',
      toShop: 'Zum Shop',
      giftName: 'TopGear Fußball', giftMeta: 'Geschenk ab 100 € Bestellwert', giftBadge: 'Geschenk', free: 'Gratis',
      donation: 'Spende an KKAD',
      noKey: 'Checkout folgt: Snipcart-API-Key in .env hinterlegen (PUBLIC_SNIPCART_API_KEY).',
      backToShop: 'Zurück zum Shop',
    },
  },

  en: {
    nav: { home: 'Home', shop: 'Shop', about: 'About us', production: 'Production', recipes: 'Recipes', contact: 'Contact' },
    header: {
      menuOpen: 'Open menu', homeAria: 'BUTXI Gourmet · Home', mainNav: 'Main navigation',
      mobileNav: 'Mobile navigation', cartAria: 'View cart', lang: 'Choose language',
    },
    promo: {
      aria: 'Newsletter offer', close: 'Close banner', title: 'Get 10% off',
      text: 'Free shipping from €39, plus 10% off your first order when you join the newsletter.',
      emailLabel: 'Email address', placeholder: 'you@email.com', submit: 'Sign up',
      success: 'Almost there, please confirm your sign-up in your inbox.',
    },
    footer: {
      tagline: 'Hot sauces, salts & spices from our own fields, handmade in Mallorca.',
      shop: 'Shop', allProducts: 'All products', legal: 'Legal', imprint: 'Legal notice',
      privacy: 'Privacy policy', terms: 'Terms & conditions', withdrawal: 'Right of withdrawal',
      shipping: 'Shipping & delivery', cookies: 'Cookie settings', contact: 'Contact',
      rights: 'All rights reserved.', developedBy: 'Developed by',
    },
    toast: { added: 'has been added to your cart.', viewCart: 'View cart' },
    product: {
      addToCart: 'Add to cart', inclVat: 'incl. VAT', basePrice: 'Unit price',
      shipnote: 'Shipping €4.19 · Free from €39', ingredients: 'Ingredients', nutrition: 'Nutrition information',
      allergens: 'Allergens', storage: 'Storage & use', shippingReturns: 'Shipping & returns',
      shippingReturnsText: 'Ships from Germany within 2–4 working days. Shipping: €4.19, free for orders from €39. 14-day right of withdrawal.',
      shippingMore: 'More about shipping & delivery', qtyDec: 'Decrease quantity', qtyInc: 'Increase quantity',
      relatedEyebrow: 'Goes well with', relatedTitle: (cat: string) => `More ${cat}`, crumbs: 'Breadcrumb',
    },
    heat: ['No heat', 'Mild', 'Medium', 'Hot', 'Very hot', 'Extreme'],
    heatAria: (lv: number, label: string) => `Heat level ${lv} of 5: ${label}`,
    categories: {
      Alle: 'All', Saucen: 'Sauces', 'Gewürze': 'Spices', 'Olivenöl': 'Olive oil', Salz: 'Salt',
      Bundles: 'Bundles', Startersets: 'Starter sets',
    } as Record<string, string>,
    recipe: { with: 'with', zoom: (t: string) => `View ${t} larger`, heat: { mild: 'mild', mittel: 'medium', scharf: 'hot' } },
    newsletter: {
      eyebrow: 'Newsletter', title: '10% off your first order',
      text: 'New flavours, recipes and offers, straight from our kitchen. No spam, promise.',
      emailLabel: 'Email address', placeholder: 'you@email.com', submit: 'Sign up',
      success: 'Almost there, please confirm your sign-up in your inbox.',
    },
    cookie: {
      aria: 'Cookie notice', title: 'Cookies? Just a pinch.',
      tracking: 'We use technically necessary cookies for the cart and checkout. By clicking “Accept all” you also allow statistics and marketing cookies that help us improve our shop. Details in our',
      noTracking: 'We use technically necessary cookies for the cart and checkout. By clicking “Accept all” you also allow convenience features such as remembered settings. Details in our',
      privacyLink: 'privacy policy', acceptAll: 'Accept all', necessary: 'Necessary only',
    },
    legalNote: 'This page is shown in German. Only the German version is legally binding.',
    cart: {
      freeDone: 'Free shipping unlocked!',
      freeRemaining: '{x} more for free shipping',
      empty: 'Your cart is still empty. Time for a little danger.',
      toShop: 'Go to shop',
      giftName: 'TopGear football', giftMeta: 'Free gift with orders of €100 or more', giftBadge: 'Gift', free: 'Free',
      donation: 'Donation to KKAD',
      noKey: 'Checkout coming soon: add the Snipcart API key in .env (PUBLIC_SNIPCART_API_KEY).',
      backToShop: 'Back to shop',
    },
  },

  es: {
    nav: { home: 'Inicio', shop: 'Tienda', about: 'Sobre nosotros', production: 'Producción', recipes: 'Recetas', contact: 'Contacto' },
    header: {
      menuOpen: 'Abrir menú', homeAria: 'BUTXI Gourmet · Inicio', mainNav: 'Navegación principal',
      mobileNav: 'Navegación móvil', cartAria: 'Ver carrito', lang: 'Elegir idioma',
    },
    promo: {
      aria: 'Oferta del newsletter', close: 'Cerrar aviso', title: 'Consigue un 10 % de descuento',
      text: 'Envío gratis a partir de 39 € y un 10 % de descuento en tu primer pedido si te suscribes a la newsletter.',
      emailLabel: 'Correo electrónico', placeholder: 'tu@email.com', submit: 'Suscribirme',
      success: 'Ya casi está: confirma tu suscripción en tu bandeja de entrada.',
    },
    footer: {
      tagline: 'Salsas picantes, sales y especias de cultivo propio, hechas a mano en Mallorca.',
      shop: 'Tienda', allProducts: 'Todos los productos', legal: 'Legal', imprint: 'Aviso legal',
      privacy: 'Privacidad', terms: 'Condiciones generales', withdrawal: 'Derecho de desistimiento',
      shipping: 'Envío y entrega', cookies: 'Ajustes de cookies', contact: 'Contacto',
      rights: 'Todos los derechos reservados.', developedBy: 'Desarrollado por',
    },
    toast: { added: 'se ha añadido al carrito.', viewCart: 'Ver carrito' },
    product: {
      addToCart: 'Añadir al carrito', inclVat: 'IVA incluido', basePrice: 'Precio por unidad de medida',
      shipnote: 'Envío 4,19 € · Gratis a partir de 39 €', ingredients: 'Ingredientes', nutrition: 'Información nutricional',
      allergens: 'Alérgenos', storage: 'Conservación y uso', shippingReturns: 'Envío y devoluciones',
      shippingReturnsText: 'Envío desde Alemania en 2–4 días laborables. Gastos de envío: 4,19 €, gratis a partir de 39 €. 14 días de derecho de desistimiento.',
      shippingMore: 'Más sobre envío y entrega', qtyDec: 'Reducir cantidad', qtyInc: 'Aumentar cantidad',
      relatedEyebrow: 'Combina con', relatedTitle: (cat: string) => `Más ${cat.toLowerCase()}`, crumbs: 'Ruta de navegación',
    },
    heat: ['Sin picante', 'Suave', 'Medio', 'Picante', 'Muy picante', 'Extremo'],
    heatAria: (lv: number, label: string) => `Nivel de picante ${lv} de 5: ${label}`,
    categories: {
      Alle: 'Todos', Saucen: 'Salsas', 'Gewürze': 'Especias', 'Olivenöl': 'Aceite de oliva', Salz: 'Sal',
      Bundles: 'Packs', Startersets: 'Sets de inicio',
    } as Record<string, string>,
    recipe: { with: 'con', zoom: (t: string) => `Ver ${t} en grande`, heat: { mild: 'suave', mittel: 'medio', scharf: 'picante' } },
    newsletter: {
      eyebrow: 'Newsletter', title: '10 % de descuento en tu primer pedido',
      text: 'Nuevos sabores, recetas y ofertas, directamente desde nuestro obrador. Sin spam, prometido.',
      emailLabel: 'Correo electrónico', placeholder: 'tu@email.com', submit: 'Suscribirme',
      success: 'Ya casi está: confirma tu suscripción en tu bandeja de entrada.',
    },
    cookie: {
      aria: 'Aviso de cookies', title: '¿Cookies? Solo una pizca.',
      tracking: 'Usamos cookies técnicamente necesarias para el carrito y el pago. Con «Aceptar todas» permites además cookies de estadística y marketing que nos ayudan a mejorar la tienda. Más detalles en nuestra',
      noTracking: 'Usamos cookies técnicamente necesarias para el carrito y el pago. Con «Aceptar todas» permites además funciones prácticas, como recordar tus ajustes. Más detalles en nuestra',
      privacyLink: 'política de privacidad', acceptAll: 'Aceptar todas', necessary: 'Solo necesarias',
    },
    legalNote: 'Esta página se muestra en alemán. Solo la versión alemana es jurídicamente vinculante.',
    cart: {
      freeDone: '¡Envío gratis conseguido!',
      freeRemaining: 'Te faltan {x} para el envío gratis',
      empty: 'Tu carrito todavía está vacío. ¿Qué tal un poco de peligro?',
      toShop: 'Ir a la tienda',
      giftName: 'Balón TopGear', giftMeta: 'Regalo en pedidos a partir de 100 €', giftBadge: 'Regalo', free: 'Gratis',
      donation: 'Donación a KKAD',
      noKey: 'Pago próximamente: añade la clave de API de Snipcart en .env (PUBLIC_SNIPCART_API_KEY).',
      backToShop: 'Volver a la tienda',
    },
  },
};

export type UI = (typeof ui)['de'];
export const t = (lang: Lang): UI => ui[lang] as UI;

/** Alle Spendennamen (Snipcart-Feinschliff muss die Zeile in jeder Sprache erkennen). */
export const DONATION_NAMES = [ui.de.cart.donation, ui.en.cart.donation, ui.es.cart.donation];
