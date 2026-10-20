// BUTXI – Mehrsprachigkeit (DE / EN / ES)
// Deutsch bleibt ohne Präfix im Root (bestehende URLs, Rankings und 301-Redirects
// bleiben unangetastet). Englisch unter /en/, Spanisch unter /es/ – mit übersetzten
// Seiten-Slugs. Produkt-Slugs sind in allen Sprachen gleich.

export const LANGS = ['de', 'en', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'de';

export const LANG_META: Record<Lang, { label: string; name: string; htmlLang: string; ogLocale: string }> = {
  de: { label: 'DE', name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
  es: { label: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
};

/** Seiten-Schlüssel → URL je Sprache. */
export const ROUTES = {
  home:        { de: '/',               en: '/en/',               es: '/es/' },
  shop:        { de: '/shop/',          en: '/en/shop/',          es: '/es/tienda/' },
  about:       { de: '/ueber-uns/',     en: '/en/about-us/',      es: '/es/sobre-nosotros/' },
  production:  { de: '/produktion/',    en: '/en/production/',    es: '/es/produccion/' },
  recipes:     { de: '/rezepte/',       en: '/en/recipes/',       es: '/es/recetas/' },
  contact:     { de: '/kontakt/',       en: '/en/contact/',       es: '/es/contacto/' },
  cart:        { de: '/warenkorb/',     en: '/en/cart/',          es: '/es/carrito/' },
  shipping:    { de: '/versand/',       en: '/en/shipping/',      es: '/es/envio/' },
  imprint:     { de: '/impressum/',     en: '/en/imprint/',       es: '/es/aviso-legal/' },
  privacy:     { de: '/datenschutz/',   en: '/en/privacy/',       es: '/es/privacidad/' },
  terms:       { de: '/agb/',           en: '/en/terms/',         es: '/es/condiciones/' },
  withdrawal:  { de: '/widerruf/',      en: '/en/withdrawal/',    es: '/es/desistimiento/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

const PRODUCT_BASE: Record<Lang, string> = { de: '/product/', en: '/en/product/', es: '/es/producto/' };

export const path = (key: RouteKey, lang: Lang): string => ROUTES[key][lang];
export const productPath = (slug: string, lang: Lang): string => `${PRODUCT_BASE[lang]}${slug}/`;

/** Sprache aus einem Pfad ablesen. */
export function langFromPath(pathname: string): Lang {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'de';
}

const norm = (p: string) => (p.endsWith('/') ? p : p + '/');

/** Dieselbe Seite in allen Sprachen (für Sprachumschalter + hreflang).
 *  Unbekannte Seiten fallen auf die jeweilige Startseite zurück. */
export function alternates(pathname: string): Record<Lang, string> {
  const p = norm(pathname);
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    const r = ROUTES[key];
    if (LANGS.some((l) => r[l] === p)) return { ...r };
  }
  for (const l of LANGS) {
    if (p.startsWith(PRODUCT_BASE[l])) {
      const slug = p.slice(PRODUCT_BASE[l].length).replace(/\/$/, '');
      if (slug) return { de: productPath(slug, 'de'), en: productPath(slug, 'en'), es: productPath(slug, 'es') };
    }
  }
  return { ...ROUTES.home };
}

/** Rechtstexte existieren nur auf Deutsch (EN/ES zeigen das Original) → keine hreflang-Paare. */
const LEGAL_KEYS: RouteKey[] = ['imprint', 'privacy', 'terms', 'withdrawal'];
export function isLegalPath(pathname: string): boolean {
  const p = norm(pathname);
  return LEGAL_KEYS.some((k) => LANGS.some((l) => ROUTES[k][l] === p));
}

/** Geldbeträge: DE/ES „3,99 €", EN „€3.99". */
export function formatMoney(value: number, lang: Lang): string {
  return lang === 'en' ? '€' + value.toFixed(2) : value.toFixed(2).replace('.', ',') + ' €';
}
