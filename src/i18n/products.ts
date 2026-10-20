// Produkte und Rezepte in der gewünschten Sprache.
// `category` bleibt der deutsche Schlüssel (für Filter und Logik), die Anzeige
// läuft über `categoryLabel`.

import type { Lang } from './config';
import { t } from './ui';
import { tr, trNutrition, trTime } from './content';
import { products, type Product } from '../data/products';
import { recipes, recipeCategories, type Recipe } from '../data/recipes';

export interface LocalProduct extends Product {
  categoryLabel: string;
}

export function localizeProduct(p: Product, lang: Lang): LocalProduct {
  const categoryLabel = t(lang).categories[p.category] ?? p.category;
  if (lang === 'de') return { ...p, categoryLabel };
  return {
    ...p,
    categoryLabel,
    name: tr(p.name, lang, true),
    desc: tr(p.desc, lang),
    longDesc: p.longDesc ? tr(p.longDesc, lang) : undefined,
    badge: p.badge ? tr(p.badge, lang) : undefined,
    tags: p.tags?.map((x) => tr(x, lang)),
    details: p.details && {
      zutaten: tr(p.details.zutaten, lang) || undefined,
      naehrwerte: trNutrition(p.details.naehrwerte, lang) || undefined,
      allergene: tr(p.details.allergene, lang) || undefined,
      aufbewahrung: tr(p.details.aufbewahrung, lang) || undefined,
    },
  };
}

export const localProducts = (lang: Lang) => products.map((p) => localizeProduct(p, lang));

export interface LocalRecipe extends Recipe {
  categoryLabel: string;
}

export function localizeRecipe(r: Recipe, lang: Lang): LocalRecipe {
  if (lang === 'de') return { ...r, categoryLabel: r.category };
  return {
    ...r,
    categoryLabel: tr(r.category, lang),
    title: tr(r.title, lang),
    desc: tr(r.desc, lang),
    time: trTime(r.time, lang),
    product: tr(r.product, lang, true),
  };
}

export const localRecipes = (lang: Lang) => recipes.map((r) => localizeRecipe(r, lang));

/** Rezept-Filter: [deutscher Schlüssel, Anzeige]. */
export const recipeFilters = (lang: Lang): Array<[string, string]> =>
  recipeCategories.map((c) => [c, c === 'Alle' ? t(lang).categories.Alle : tr(c, lang)]);
