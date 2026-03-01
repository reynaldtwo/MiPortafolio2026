import { en } from '../src/data/i18n/en';
import { es } from '../src/data/i18n/es';
import { projects } from '../src/data/projects';
import { siteConfig } from '../src/data/site';
import { skillGroups } from '../src/data/skills';
import { dictionarySchema, projectsSchema, siteSchema, skillsSchema } from '../src/schemas/content-schema';

siteSchema.parse(siteConfig);
skillsSchema.parse(skillGroups);
projectsSchema.parse(projects);
dictionarySchema.parse(en);
dictionarySchema.parse(es);

console.log('[schemas] Content schema validation passed.');
