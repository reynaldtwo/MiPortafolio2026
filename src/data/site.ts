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
    email: 'mailto:reynaldv12@gmail.com',
    booking: 'https://calendly.com/',
    github: 'https://github.com/reynaldtwo',
    linkedin: 'https://www.linkedin.com/in/reynaldo-s%C3%A1nchez-hern%C3%A1ndez/',
    whatsapp: 'https://wa.me/50585213462',
  },
};
