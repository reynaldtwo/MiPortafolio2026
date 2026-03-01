import { describe, expect, it } from 'vitest';
import {
  getAlternateLinks,
  getLocaleFromPath,
  isLocale,
  stripLocalePrefix,
  switchLocalePath,
  toLocalizedPath,
} from '../../src/utils/i18n';

describe('i18n utils', () => {
  it('detects locale from pathname', () => {
    expect(getLocaleFromPath('/en/projects')).toBe('en');
    expect(getLocaleFromPath('/es/contact')).toBe('es');
    expect(getLocaleFromPath('/unknown')).toBe('en');
  });

  it('switches locale preserving route suffix', () => {
    expect(switchLocalePath('/en/projects', 'es')).toBe('/es/projects');
    expect(switchLocalePath('/es', 'en')).toBe('/en');
    expect(switchLocalePath('/projects', 'es')).toBe('/es/projects');
  });

  it('creates localized routes', () => {
    expect(toLocalizedPath('en')).toBe('/en');
    expect(toLocalizedPath('es', 'projects')).toBe('/es/projects');
  });

  it('strips locale prefixes safely', () => {
    expect(stripLocalePrefix('/en/systems')).toBe('/systems');
    expect(stripLocalePrefix('/es')).toBe('/');
    expect(stripLocalePrefix('/contact')).toBe('/contact');
  });

  it('checks locale guards and alternate links', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('es')).toBe(true);
    expect(isLocale('pt')).toBe(false);
    expect(getAlternateLinks('/en/projects')).toEqual({
      en: '/en/projects',
      es: '/es/projects',
    });
  });
});
