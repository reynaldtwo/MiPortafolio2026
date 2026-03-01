import type { SiteConfig } from '../types/content';

export const siteConfig: SiteConfig = {
  siteUrl: process.env.SITE_URL ?? 'https://example.com',
  brandName: 'Reynaldo Sanchez',
  brandTagline: 'Building production-grade systems.',
  timezoneLabel: 'GMT-6',
  defaultLocale: 'en',
  locales: ['en', 'es'],
  nav: [
    { key: 'systems', slug: 'systems' },
    { key: 'flutter', slug: 'flutter' },
    { key: 'projects', slug: 'projects' },
    { key: 'contact', slug: 'contact' },
  ],
  contact: {
    email: 'mailto:your-email@example.com',
    booking: 'https://calendly.com/',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    playStore: 'https://play.google.com/store',
  },
};
