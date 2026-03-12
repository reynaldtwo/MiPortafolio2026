import { z } from 'zod';

export const localeSchema = z.enum(['en', 'es']);

export const localizedTextSchema = z.object({
  en: z.string().min(1),
  es: z.string().min(1),
});

export const siteSchema = z.object({
  siteUrl: z.string().url(),
  brandName: z.string().min(1),
  brandTagline: z.string().min(1),
  timezoneLabel: z.string().min(1),
  defaultLocale: localeSchema,
  locales: z.array(localeSchema).min(2),
  nav: z
    .array(
      z.object({
        key: z.enum(['systems', 'flutter', 'projects', 'contact']),
        slug: z.string().min(1),
      }),
    )
    .min(4),
  contact: z.object({
    email: z.string().min(1),
    booking: z.string().url(),
    github: z.string().url(),
    linkedin: z.string().url(),
    whatsapp: z.string().url(),
  }),
});

export const skillGroupSchema = z.object({
  id: z.string().min(1),
  label: localizedTextSchema,
  items: z.array(z.string().min(1)).min(1),
});

export const skillsSchema = z.array(skillGroupSchema).min(1);

const caseStudySchema = z.object({
  context: localizedTextSchema,
  constraints: z.array(localizedTextSchema).min(1),
  solution: z.array(localizedTextSchema).min(1),
  decisions: z.array(localizedTextSchema).min(1),
  outcomes: z.array(localizedTextSchema).min(1),
  lessons: z.array(localizedTextSchema).min(1),
});

const projectLinksSchema = z.object({
  demo: z.string().url().optional(),
  repo: z.string().url().optional(),
  caseStudyAnchor: z.string().min(1),
});

export const projectSchema = z.object({
  id: z.string().min(1),
  featured: z.boolean(),
  categories: z.array(z.enum(['all', 'flutter', 'backend', 'automation', 'integrations'])).min(1),
  title: localizedTextSchema,
  oneLiner: localizedTextSchema,
  problem: localizedTextSchema,
  roles: z.array(localizedTextSchema).min(1),
  stack: z.array(z.string().min(1)).min(1),
  architecture: z.array(localizedTextSchema).min(1),
  impact: z.array(localizedTextSchema).min(1),
  caseStudy: caseStudySchema,
  links: projectLinksSchema,
});

export const projectsSchema = z.array(projectSchema).length(4);

const stringArraySchema = z.array(z.string().min(1));

export const dictionarySchema = z.object({
  localeCode: localeSchema,
  localeName: z.string().min(1),
  otherLocaleName: z.string().min(1),
  skipToContent: z.string().min(1),
  nav: z.object({
    systems: z.string().min(1),
    flutter: z.string().min(1),
    projects: z.string().min(1),
    contact: z.string().min(1),
  }),
  ctas: z.object({
    schedule: z.string().min(1),
    email: z.string().min(1),
    viewWork: z.string().min(1),
    systemsArchitecture: z.string().min(1),
    seeAllProjects: z.string().min(1),
  }),
  footer: z.object({
    line: z.string().min(1),
    timezone: z.string().min(1),
  }),
  filters: z.object({
    all: z.string().min(1),
    flutter: z.string().min(1),
    backend: z.string().min(1),
    automation: z.string().min(1),
    integrations: z.string().min(1),
  }),
  links: z.object({
    relatedProject: z.string().min(1),
    readCaseStudy: z.string().min(1),
    demo: z.string().min(1),
    repo: z.string().min(1),
  }),
  labels: z.object({
    stack: z.string().min(1),
    architecture: z.string().min(1),
    impact: z.string().min(1),
    role: z.string().min(1),
    problem: z.string().min(1),
    keyDecisions: z.string().min(1),
    context: z.string().min(1),
    constraints: z.string().min(1),
    solutionOverview: z.string().min(1),
    outcomes: z.string().min(1),
    lessons: z.string().min(1),
    availability: z.string().min(1),
    languageSwitch: z.string().min(1),
    themeToggle: z.string().min(1),
    mobileMenu: z.string().min(1),
    closeMenu: z.string().min(1),
  }),
  meta: z.object({
    home: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    systems: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    flutter: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    projects: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    contact: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    notFound: z.object({ title: z.string().min(1), description: z.string().min(1) }),
  }),
  home: z.object({
    hero: z.object({
      title: z.string().min(1),
      subline: z.string().min(1),
      paragraph: z.string().min(1),
      proofChips: stringArraySchema,
    }),
    pillars: z.object({
      title: z.string().min(1),
      items: z.array(
        z.object({
          title: z.string().min(1),
          points: stringArraySchema,
        }),
      ),
    }),
    strengths: z.object({
      title: z.string().min(1),
      paragraph: z.string().min(1),
      chips: stringArraySchema,
    }),
    featured: z.object({ title: z.string().min(1) }),
    credibility: z.object({
      title: z.string().min(1),
      metrics: z.array(z.object({ value: z.string().min(1), label: z.string().min(1) })),
    }),
    finalCta: z.object({ title: z.string().min(1) }),
  }),
  systems: z.object({
    hero: z.object({
      title: z.string().min(1),
      subline: z.string().min(1),
      cta: z.string().min(1),
    }),
    playbook: z.object({
      title: z.string().min(1),
      cards: z.array(
        z.object({
          title: z.string().min(1),
          points: stringArraySchema,
          chips: stringArraySchema,
        }),
      ),
    }),
    snapshots: z.object({
      title: z.string().min(1),
      items: z.array(
        z.object({
          title: z.string().min(1),
          decisions: stringArraySchema,
          anchor: z.string().min(1),
        }),
      ),
    }),
    stackFramework: z.object({
      title: z.string().min(1),
      columns: z.array(
        z.object({
          title: z.string().min(1),
          why: z.string().min(1),
          chips: stringArraySchema,
          tradeoff: z.string().min(1),
        }),
      ),
    }),
    finalCta: z.object({ title: z.string().min(1) }),
  }),
  flutter: z.object({
    hero: z.object({
      title: z.string().min(1),
      subline: z.string().min(1),
      cta: z.string().min(1),
    }),
    modules: z.object({
      title: z.string().min(1),
      items: z.array(
        z.object({
          title: z.string().min(1),
          points: stringArraySchema,
        }),
      ),
    }),
    quality: z.object({
      title: z.string().min(1),
      paragraph: z.string().min(1),
      chips: stringArraySchema,
    }),
    highlights: z.object({ title: z.string().min(1) }),
  }),
  projects: z.object({
    hero: z.object({
      title: z.string().min(1),
      subline: z.string().min(1),
    }),
  }),
  contact: z.object({
    hero: z.object({
      title: z.string().min(1),
      subline: z.string().min(1),
    }),
    linksTitle: z.string().min(1),
    availability: z.object({
      text: z.string().min(1),
      chips: stringArraySchema,
    }),
  }),
  notFound: z.object({
    title: z.string().min(1),
    body: z.string().min(1),
    cta: z.string().min(1),
  }),
});
