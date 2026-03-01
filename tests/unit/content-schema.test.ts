import { describe, expect, it } from 'vitest';
import { en } from '../../src/data/i18n/en';
import { es } from '../../src/data/i18n/es';
import { projects } from '../../src/data/projects';
import { siteConfig } from '../../src/data/site';
import { skillGroups } from '../../src/data/skills';
import {
  dictionarySchema,
  projectsSchema,
  siteSchema,
  skillsSchema,
} from '../../src/schemas/content-schema';

describe('content schemas', () => {
  it('validates site config', () => {
    expect(() => siteSchema.parse(siteConfig)).not.toThrow();
  });

  it('validates skills', () => {
    expect(() => skillsSchema.parse(skillGroups)).not.toThrow();
  });

  it('validates projects', () => {
    expect(() => projectsSchema.parse(projects)).not.toThrow();
  });

  it('validates dictionaries', () => {
    expect(() => dictionarySchema.parse(en)).not.toThrow();
    expect(() => dictionarySchema.parse(es)).not.toThrow();
  });
});
