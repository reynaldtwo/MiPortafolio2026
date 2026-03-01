export const en = {
  localeCode: 'en',
  localeName: 'English',
  otherLocaleName: 'Espanol',
  skipToContent: 'Skip to content',
  nav: {
    systems: 'Systems',
    flutter: 'Flutter',
    projects: 'Projects',
    contact: 'Contact',
  },
  ctas: {
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
    demo: 'Demo',
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
    mobileMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  meta: {
    home: {
      title: 'Reynaldo Sanchez | Fullstack Developer (Flutter-first)',
      description:
        'Fullstack developer focused on Flutter-first products, reliable APIs, and business-ready integrations.',
    },
    systems: {
      title: 'Systems and Architecture | Reynaldo Sanchez',
      description:
        'How I design reliable systems: modular architecture, resilient integrations, and operational visibility.',
    },
    flutter: {
      title: 'Flutter Expertise | Reynaldo Sanchez',
      description:
        'Flutter specialist with production experience in architecture, performance, and integration-heavy apps.',
    },
    projects: {
      title: 'Selected Projects | Reynaldo Sanchez',
      description: 'Short case studies focused on architecture decisions, delivery execution, and business impact.',
    },
    contact: {
      title: 'Work With Me | Reynaldo Sanchez',
      description: 'Remote and international collaboration for Flutter-first, fullstack product delivery.',
    },
    notFound: {
      title: 'Page not found | Reynaldo Sanchez',
      description: 'The page you are looking for is not available.',
    },
  },
  home: {
    hero: {
      title: 'Fullstack developer for production-grade products: Flutter-first UX, reliable APIs, and real integrations.',
      subline: 'Business-minded engineering: architecture, execution, and outcomes.',
      paragraph:
        '15 years in IT across support, operations, QA, development, and system architecture. I build software that survives real-world operations.',
      proofChips: ['Flutter-first', 'Fullstack', 'ERP/POS Integrations', 'Offline-ready'],
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
        { value: '9 sites', label: 'Multi-branch rollouts' },
        { value: 'ERP/POS', label: 'Integrations in production' },
        { value: 'Remote', label: 'International collaboration' },
      ],
    },
    finalCta: {
      title: 'Need an engineer who can design and ship end-to-end?',
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
          title: 'Flutter app -> API -> DB -> integrations',
          decisions: [
            'Contract-first app/backend boundary.',
            'Severity-based operational alert routing.',
            'Idempotent retries for external integrations.',
            'Correlation IDs across the full flow.',
          ],
          anchor: 'retail-ops-command-center',
        },
        {
          title: 'Offline queue -> batch sync -> reconciliation',
          decisions: [
            'Durable local queue with deterministic replay.',
            'Batch acknowledgments to reduce network cost.',
            'Conflict tags visible for support teams.',
            'Sync SLA thresholds for escalation.',
          ],
          anchor: 'offline-route-sync-engine',
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
      title: 'Selected projects built for real operations.',
      subline: 'Concise case studies with architecture choices and measurable outcomes.',
    },
  },
  contact: {
    hero: {
      title: "Let's talk.",
      subline: 'Remote | International | Fullstack (Flutter-first)',
    },
    linksTitle: 'Direct channels',
    availability: {
      text: 'Open to full-time remote roles, contract work, and high-ownership consulting engagements.',
      chips: ['Fullstack', 'Flutter', 'Integrations', 'Automation'],
    },
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you requested is not available.',
    cta: 'Go to home',
  },
};
