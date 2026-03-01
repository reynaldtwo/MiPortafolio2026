import { en } from './en';
import { es } from './es';
import type { Locale } from '../../types/content';

export type I18nDictionary = typeof en;

const dictionaries: Record<Locale, I18nDictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): I18nDictionary {
  return dictionaries[locale];
}

export const dictionaryEntries = Object.entries(dictionaries) as [Locale, I18nDictionary][];
