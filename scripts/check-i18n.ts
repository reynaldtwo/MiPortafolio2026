import { dictionaryEntries } from '../src/data/i18n';

function flattenKeys(input: unknown, prefix = ''): string[] {
  if (Array.isArray(input)) {
    return input.flatMap((item, index) => flattenKeys(item, `${prefix}[${index}]`));
  }
  if (input && typeof input === 'object') {
    return Object.entries(input as Record<string, unknown>).flatMap(([key, value]) => {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      return flattenKeys(value, nextPrefix);
    });
  }
  return [prefix];
}

const [baseLocale, baseDictionary] = dictionaryEntries[0];
const baseSet = new Set(flattenKeys(baseDictionary));
let hasError = false;

for (const [locale, dictionary] of dictionaryEntries.slice(1)) {
  const currentSet = new Set(flattenKeys(dictionary));
  const missing = [...baseSet].filter((key) => !currentSet.has(key));
  const extra = [...currentSet].filter((key) => !baseSet.has(key));

  if (missing.length || extra.length) {
    hasError = true;
    console.error(`\n[i18n] Parity mismatch between "${baseLocale}" and "${locale}"`);
    if (missing.length) {
      console.error('Missing keys:');
      missing.forEach((key) => console.error(`  - ${key}`));
    }
    if (extra.length) {
      console.error('Extra keys:');
      extra.forEach((key) => console.error(`  - ${key}`));
    }
  }
}

if (hasError) {
  process.exit(1);
}

console.log('[i18n] Key parity check passed.');
