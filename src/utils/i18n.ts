import { siteConfig } from '../data/site';
import type { Locale } from '../types/content';

const localeSet = new Set(siteConfig.locales);

export function isLocale(value: string): value is Locale {
  return localeSet.has(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');
  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }
  return siteConfig.defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return '/';
  }
  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

export function toLocalizedPath(locale: Locale, slug = ''): string {
  if (!slug || slug === '/') {
    return `/${locale}`;
  }
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return `/${locale}/${clean}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const suffix = stripLocalePrefix(normalized);
  return toLocalizedPath(targetLocale, suffix);
}

export function getAlternateLinks(pathname: string): Record<Locale, string> {
  return {
    en: switchLocalePath(pathname, 'en'),
    es: switchLocalePath(pathname, 'es'),
  };
}
