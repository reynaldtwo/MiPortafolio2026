export type Locale = 'en' | 'es';

export type ProjectCategory = 'all' | 'flutter' | 'backend' | 'automation' | 'integrations';

export interface LocalizedText {
  en: string;
  es: string;
}

export interface SiteMeta {
  title: string;
  description: string;
}

export interface NavLink {
  key: 'systems' | 'flutter' | 'projects' | 'contact';
  slug: string;
}

export interface ContactLinks {
  email: string;
  booking: string;
  github: string;
  linkedin: string;
  playStore: string;
}

export interface SiteConfig {
  siteUrl: string;
  brandName: string;
  brandTagline: string;
  timezoneLabel: string;
  defaultLocale: Locale;
  locales: Locale[];
  nav: NavLink[];
  contact: ContactLinks;
}

export interface SkillGroup {
  id: string;
  label: LocalizedText;
  items: string[];
}

export interface CaseStudy {
  context: LocalizedText;
  constraints: LocalizedText[];
  solution: LocalizedText[];
  decisions: LocalizedText[];
  outcomes: LocalizedText[];
  lessons: LocalizedText[];
}

export interface ProjectLinks {
  demo?: string;
  repo?: string;
  caseStudyAnchor: string;
}

export interface Project {
  id: string;
  featured: boolean;
  categories: ProjectCategory[];
  title: LocalizedText;
  oneLiner: LocalizedText;
  problem: LocalizedText;
  roles: LocalizedText[];
  stack: string[];
  architecture: LocalizedText[];
  impact: LocalizedText[];
  caseStudy: CaseStudy;
  links: ProjectLinks;
}

export interface DictionaryMeta {
  home: SiteMeta;
  systems: SiteMeta;
  flutter: SiteMeta;
  projects: SiteMeta;
  contact: SiteMeta;
  notFound: SiteMeta;
}
