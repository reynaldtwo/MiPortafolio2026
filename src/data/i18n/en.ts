export const en = {
  localeCode: 'en',
  localeName: 'English',
  otherLocaleName: 'Español',
  skipToContent: 'Skip to content',
  nav: {
    overview: 'Overview',
    systems: 'Systems',
    flutter: 'Flutter',
    projects: 'Projects',
    contact: 'Contact',
  },
  ctas: {
    resumePdf: 'CV PDF',
    schedule: 'Schedule a call',
    email: 'Email me',
    viewWork: 'View selected work',
    systemsArchitecture: 'See architecture approach',
    seeAllProjects: 'See all projects',
  },
  footer: {
    line: 'Building reliable products for real operations.',
    timezone: 'GMT-6 | Managua',
  },
  filters: {
    all: 'All',
    flutter: 'Flutter',
    backend: 'Backend',
    automation: 'Automation',
    integrations: 'Integrations',
  },
  links: {
    relatedProject: 'Related project',
    readCaseStudy: 'Read case study',
    watchVideo: 'Watch video',
    demo: 'Visit website',
    repo: 'Repo',
  },
  labels: {
    stack: 'Stack',
    architecture: 'Architecture snapshot',
    impact: 'Impact',
    role: 'Role',
    problem: 'Problem',
    keyDecisions: 'Key decisions',
    context: 'Context',
    constraints: 'Constraints',
    solutionOverview: 'Solution overview',
    outcomes: 'Outcomes',
    lessons: 'Lessons learned',
    availability: 'Availability',
    languageSwitch: 'Switch language',
    themeToggle: 'Switch theme',
    resumePdfSoon: 'PDF available soon',
    mobileMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  meta: {
    home: {
      title: 'Reynaldo Sánchez | Fullstack Developer (Flutter-first)',
      description:
        'Fullstack developer focused on Flutter-first products, reliable APIs, and business-ready integrations.',
    },
    systems: {
      title: 'Systems and Architecture | Reynaldo Sánchez',
      description:
        'How I design reliable systems: modular architecture, resilient integrations, and operational visibility.',
    },
    flutter: {
      title: 'Flutter Expertise | Reynaldo Sánchez',
      description:
        'Flutter specialist with production experience in architecture, performance, and integration-heavy apps.',
    },
    projects: {
      title: 'Selected Projects | Reynaldo Sánchez',
      description: 'Short case studies focused on architecture decisions, delivery execution, and business impact.',
    },
    contact: {
      title: 'Work With Me | Reynaldo Sánchez',
      description: 'Remote and international collaboration for Flutter-first, fullstack product delivery.',
    },
    notFound: {
      title: 'Page not found | Reynaldo Sánchez',
      description: 'The page you are looking for is not available.',
    },
  },
  home: {
    hero: {
      title: 'I design and build complete enterprise systems connecting operations, data, and real integrations',
      subline: 'Business-minded engineering: architecture, execution, and outcomes.',
      constellationTitle: 'My stack',
      paragraph:
        '15 years in IT across support, operations, QA, development, and system architecture. I build software that survives real-world operations.',
      proofChips: ['Fullstack', 'ERP/POS Integrations', 'Offline-First'],
    },
    pillars: {
      title: 'What you get working with me',
      items: [
        {
          title: 'Fast execution with discipline',
          points: ['From requirement to production with clear ownership.', 'Short cycles without sacrificing reliability.'],
        },
        {
          title: 'Architecture that scales',
          points: ['Modular boundaries, explicit contracts, traceable flows.', 'Designed for operations, not only demos.'],
        },
        {
          title: 'Business-aligned delivery',
          points: ['Lower operational friction for teams.', 'Systems that improve decisions and autonomy.'],
        },
      ],
    },
    strengths: {
      title: 'Signature strengths',
      paragraph:
        'Strong blend of product perspective, systems thinking, and hands-on execution across app, backend, data, and integrations.',
      chips: ['Flutter', '.NET APIs', 'SQL Server', 'Azure', 'Automation', 'n8n Bots', 'OpenAI Workflows'],
    },
    featured: {
      title: 'Selected work',
    },
    credibility: {
      title: 'At a glance',
      metrics: [
        { value: '15+', label: 'Years in IT' },
        { value: '10+', label: 'Systems delivered to real operations' },
        { value: 'ERP/POS', label: 'Integrations in production' },
        { value: 'Remote', label: 'International collaboration' },
      ],
    },
    finalCta: {
      title: 'Need help shipping a product end to end?',
    },
  },
  systems: {
    hero: {
      title: 'Systems thinking that ships.',
      subline: 'Reliable architecture where UX, data, and operations stay aligned.',
      cta: 'See proof in projects',
    },
    playbook: {
      title: 'Architecture playbook',
      cards: [
        {
          title: 'Modular design',
          points: ['Clear feature boundaries and ownership.', 'Faster change with lower regression risk.'],
          chips: ['Flutter', 'Modularity', 'Maintainability'],
        },
        {
          title: 'Integration contracts',
          points: ['Contract-first APIs with versioning strategy.', 'Safe retries and predictable behavior.'],
          chips: ['REST', 'Versioning', 'Idempotency'],
        },
        {
          title: 'Operational resilience',
          points: ['Structured logs, trace IDs, and health checks.', 'Failure handling as first-class design.'],
          chips: ['Observability', 'SLA', 'Reliability'],
        },
        {
          title: 'Automation loops',
          points: ['Alerts, workflows, and recurring controls.', 'Reduced manual overhead for support teams.'],
          chips: ['n8n', 'PowerShell', 'Teams'],
        },
      ],
    },
    snapshots: {
      title: 'System snapshots',
      items: [
        {
          title: 'Quantix -> C# client -> .NET -> Azure SQL',
          decisions: [
            'Multi-company and multi-branch model inside one shared platform.',
            'Core modules for inventory, billing, reporting, and catalogs.',
            'Azure SQL Database as the central cloud data layer.',
            'Company-level configuration without duplicating the system.',
          ],
          anchor: 'quantix-multi-company-core',
        },
        {
          title: 'Open Statement -> insufficiencies -> post guard',
          decisions: [
            'Insufficiencies action inside Open Statement.',
            'Setup to enable posting block and module rules.',
            'Guard codeunit before Post Statement.',
            'Statement-level detail to correct inventory cleanly.',
          ],
          anchor: 'ls-central-statement-insufficiency-control',
        },
      ],
    },
    stackFramework: {
      title: 'Stack framework by responsibility',
      columns: [
        {
          title: 'Frontend',
          why: 'Flutter for fast product iteration with strong UX consistency.',
          chips: ['Flutter', 'Design System', 'Responsive'],
          tradeoff: 'Balance custom UI depth with maintainable component boundaries.',
        },
        {
          title: 'Backend',
          why: '.NET APIs and integrations with explicit contracts and predictable behavior.',
          chips: ['ASP.NET Core', 'REST', 'Integrations'],
          tradeoff: 'Prefer explicit contracts over shortcut implementations.',
        },
        {
          title: 'Data and cloud',
          why: 'SQL and Azure setup optimized for uptime, traceability, and supportability.',
          chips: ['SQL Server', 'Azure', 'Ops Ready'],
          tradeoff: 'Operational safety first, complexity second.',
        },
      ],
    },
    finalCta: {
      title: 'Want implementation proof? Explore the project cases.',
    },
  },
  flutter: {
    hero: {
      title: 'Flutter specialist. Product-first execution.',
      subline: 'Architecture, performance, and integration patterns tested in production.',
      cta: 'See Flutter projects',
    },
    modules: {
      title: 'Flutter delivery model',
      items: [
        {
          title: 'App architecture',
          points: ['Feature-based structure with clean boundaries.', 'Scalable ownership for evolving products.'],
        },
        {
          title: 'State management',
          points: ['Predictable data flow and maintainable logic.', 'Bloc or Riverpod selected by project constraints.'],
        },
        {
          title: 'Performance and UX',
          points: ['Profiling-driven optimizations.', 'Smooth interaction on mobile devices.'],
        },
        {
          title: 'Integration patterns',
          points: ['Auth, secure storage, and backend orchestration.', 'Offline queues and resilient sync where needed.'],
        },
      ],
    },
    quality: {
      title: 'Quality mindset in Flutter',
      paragraph: 'Reusable UI systems with accessibility, theming, responsive behavior, and testability built in.',
      chips: ['Tokens', 'Theming', 'Accessibility', 'Responsive', 'Testing'],
    },
    highlights: {
      title: 'Flutter highlights',
    },
  },
  projects: {
    hero: {
      title: 'A selection of projects in production.',
      subline: 'Real-world cases reflecting the experience built in systems development and integration.',
    },
  },
  contact: {
    hero: {
      title: "Let's talk.",
      subline: 'Remote | International | Fullstack',
    },
    linksTitle: 'Direct channels',
    availability: {
      text: 'Open to full-time remote roles, contract work, and high-ownership consulting engagements.',
      chips: ['Fullstack', 'Integrations', 'Automation'],
    },
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you requested is not available.',
    cta: 'Go to home',
  },
};
