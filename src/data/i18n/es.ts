import type { en } from './en';

type Dictionary = typeof en;

export const es: Dictionary = {
  localeCode: 'es',
  localeName: 'Español',
  otherLocaleName: 'English',
  skipToContent: 'Saltar al contenido',
  nav: {
    overview: 'Resumen',
    systems: 'Sistemas',
    flutter: 'Flutter',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  ctas: {
    resumePdf: 'CV PDF',
    schedule: 'Agendar llamada',
    email: 'Escríbeme',
    viewWork: 'Ver proyectos destacados',
    systemsArchitecture: 'Ver enfoque de arquitectura',
    seeAllProjects: 'Ver todos los proyectos',
  },
  footer: {
    line: 'Construyendo productos confiables para operaciones reales.',
    timezone: 'GMT-6 | Managua',
  },
  filters: {
    all: 'Todos',
    flutter: 'Flutter',
    backend: 'Backend',
    automation: 'Automatización',
    integrations: 'Integraciones',
  },
  links: {
    relatedProject: 'Proyecto relacionado',
    readCaseStudy: 'Leer caso',
    watchVideo: 'Ver video',
    demo: 'Ir a la página',
    repo: 'Repo',
  },
  labels: {
    stack: 'Stack',
    architecture: 'Resumen de arquitectura',
    impact: 'Impacto',
    role: 'Rol',
    problem: 'Problema',
    keyDecisions: 'Decisiones clave',
    context: 'Contexto',
    constraints: 'Restricciones',
    solutionOverview: 'Enfoque de solución',
    outcomes: 'Resultados',
    lessons: 'Lecciones aprendidas',
    availability: 'Disponibilidad',
    languageSwitch: 'Cambiar idioma',
    themeToggle: 'Cambiar tema',
    resumePdfSoon: 'PDF disponible pronto',
    mobileMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  meta: {
    home: {
      title: 'Reynaldo Sánchez | Fullstack Developer (Flutter-first)',
      description:
        'Desarrollador fullstack enfocado en productos Flutter-first, APIs confiables e integraciones listas para negocio.',
    },
    systems: {
      title: 'Sistemas y Arquitectura | Reynaldo Sánchez',
      description:
        'Cómo diseño sistemas confiables: arquitectura modular, integraciones resilientes y visibilidad operativa.',
    },
    flutter: {
      title: 'Especialidad Flutter | Reynaldo Sánchez',
      description:
        'Especialista Flutter con experiencia real en producción: arquitectura, rendimiento e integraciones.',
    },
    projects: {
      title: 'Proyectos Seleccionados | Reynaldo Sánchez',
      description: 'Casos cortos enfocados en decisiones de arquitectura, ejecución e impacto operativo.',
    },
    contact: {
      title: 'Trabajemos Juntos | Reynaldo Sánchez',
      description: 'Colaboración remota e internacional para entrega fullstack con enfoque Flutter-first.',
    },
    notFound: {
      title: 'Página no encontrada | Reynaldo Sánchez',
      description: 'La página que buscas no está disponible.',
    },
  },
  home: {
    hero: {
      title: 'Diseño y construyo sistemas empresariales completos que conectan operación, datos e integraciones reales',
      subline: 'Ingeniería orientada a negocio: arquitectura, ejecución y resultados.',
      constellationTitle: 'Mi stack',
      paragraph:
        '15 años en TI entre soporte, operaciones, QA, desarrollo y arquitectura de sistemas. Construyo software que funciona bajo presión operativa.',
      proofChips: ['Fullstack', 'Integraciones ERP/POS', 'Offline-First'],
    },
    pillars: {
      title: 'Lo que recibes al trabajar conmigo',
      items: [
        {
          title: 'Ejecución rápida con disciplina',
          points: ['De requerimiento a producción con ownership claro.', 'Ciclos cortos sin sacrificar confiabilidad.'],
        },
        {
          title: 'Arquitectura que escala',
          points: ['Límites modulares, contratos explícitos y trazabilidad.', 'Pensado para operación real, no solo demos.'],
        },
        {
          title: 'Entrega alineada a negocio',
          points: ['Menor fricción operativa para equipos.', 'Sistemas que mejoran decisión y autonomía.'],
        },
      ],
    },
    strengths: {
      title: 'Fortalezas diferenciales',
      paragraph:
        'Combinación sólida de visión de producto, pensamiento de sistemas y ejecución hands-on en app, backend, data e integraciones.',
      chips: ['Flutter', '.NET APIs', 'SQL Server', 'Azure', 'Automatización', 'Bots n8n', 'Flujos OpenAI'],
    },
    featured: {
      title: 'Trabajo seleccionado',
    },
    credibility: {
      title: 'Resumen rápido',
      metrics: [
        { value: '15+', label: 'Años en TI' },
        { value: '10+', label: 'Sistemas entregados a operación real' },
        { value: 'ERP/POS', label: 'Integraciones en producción' },
        { value: 'Remoto', label: 'Colaboración internacional' },
      ],
    },
    finalCta: {
      title: '¿Necesitas ayuda para llevar un producto de principio a fin?',
    },
  },
  systems: {
    hero: {
      title: 'Pensamiento de sistemas que se entrega.',
      subline: 'Arquitectura confiable donde UX, datos y operación permanecen alineados.',
      cta: 'Ver evidencia en proyectos',
    },
    playbook: {
      title: 'Playbook de arquitectura',
      cards: [
        {
          title: 'Diseño modular',
          points: ['Límites de feature y ownership claro.', 'Cambios más rápidos con menos riesgo de regresión.'],
          chips: ['Flutter', 'Modularidad', 'Mantenibilidad'],
        },
        {
          title: 'Contratos de integración',
          points: ['APIs contract-first con estrategia de versionado.', 'Reintentos seguros y comportamiento predecible.'],
          chips: ['REST', 'Versionado', 'Idempotencia'],
        },
        {
          title: 'Resiliencia operativa',
          points: ['Logs estructurados, trace IDs y health checks.', 'Manejo de fallos como parte central del diseño.'],
          chips: ['Observabilidad', 'SLA', 'Confiabilidad'],
        },
        {
          title: 'Bucles de automatización',
          points: ['Alertas, workflows y controles recurrentes.', 'Menos carga manual para soporte y operaciones.'],
          chips: ['n8n', 'PowerShell', 'Teams'],
        },
      ],
    },
    snapshots: {
      title: 'Snapshots de sistema',
      items: [
        {
          title: 'Quantix -> cliente C# -> .NET -> Azure SQL',
          decisions: [
            'Modelo multiempresa y multisucursal en una sola plataforma.',
            'Módulos core para inventario, facturación, reportería y catálogos.',
            'Azure SQL Database como base central en la nube.',
            'Configuración por empresa sin duplicar el sistema.',
          ],
          anchor: 'quantix-multi-company-core',
        },
        {
          title: 'Open Statement -> insuficiencias -> post guard',
          decisions: [
            'Acción Insufficiencies dentro de Open Statement.',
            'Setup para activar bloqueo y reglas del módulo.',
            'Codeunit guard antes de Post Statement.',
            'Lista detallada por statement para corregir inventario.',
          ],
          anchor: 'ls-central-statement-insufficiency-control',
        },
      ],
    },
    stackFramework: {
      title: 'Framework de stack por responsabilidad',
      columns: [
        {
          title: 'Frontend',
          why: 'Flutter para iteración rápida de producto y UX consistente.',
          chips: ['Flutter', 'Design System', 'Responsive'],
          tradeoff: 'Equilibrio entre detalle visual y límites mantenibles.',
        },
        {
          title: 'Backend',
          why: 'APIs .NET e integraciones con contratos explícitos y comportamiento predecible.',
          chips: ['ASP.NET Core', 'REST', 'Integraciones'],
          tradeoff: 'Preferir contratos claros sobre implementaciones de atajo.',
        },
        {
          title: 'Data y cloud',
          why: 'Base SQL y Azure optimizada para uptime, trazabilidad y soporte.',
          chips: ['SQL Server', 'Azure', 'Ops Ready'],
          tradeoff: 'Primero seguridad operativa, luego complejidad.',
        },
      ],
    },
    finalCta: {
      title: '¿Quieres evidencia de implementación? Revisa los casos.',
    },
  },
  flutter: {
    hero: {
      title: 'Especialista Flutter. Ejecución orientada a producto.',
      subline: 'Arquitectura, rendimiento y patrones de integración probados en producción.',
      cta: 'Ver proyectos Flutter',
    },
    modules: {
      title: 'Modelo de entrega en Flutter',
      items: [
        {
          title: 'Arquitectura de app',
          points: ['Estructura por features con límites limpios.', 'Ownership escalable para productos vivos.'],
        },
        {
          title: 'Manejo de estado',
          points: ['Flujo de datos predecible y mantenible.', 'Bloc o Riverpod según restricciones del caso.'],
        },
        {
          title: 'Performance y UX',
          points: ['Optimizaciones guiadas por profiling.', 'Interacción fluida en dispositivos móviles.'],
        },
        {
          title: 'Patrones de integración',
          points: ['Auth, secure storage y orquestacion backend.', 'Colas offline y sync resiliente cuando aplica.'],
        },
      ],
    },
    quality: {
      title: 'Mentalidad de calidad en Flutter',
      paragraph: 'Sistemas UI reutilizables con accesibilidad, theming, responsive y testing desde el inicio.',
      chips: ['Tokens', 'Theming', 'Accesibilidad', 'Responsive', 'Testing'],
    },
    highlights: {
      title: 'Highlights Flutter',
    },
  },
  projects: {
    hero: {
      title: 'Una muestra de proyectos en producción.',
      subline: 'Casos reales que reflejan parte de la experiencia que he construido en desarrollo e integración de sistemas.',
    },
  },
  contact: {
    hero: {
      title: 'Hablemos.',
      subline: 'Remoto | Internacional | Fullstack',
    },
    linksTitle: 'Canales directos',
    availability: {
      text: 'Disponible para roles remotos full-time, contratos y consultoría de alta responsabilidad.',
      chips: ['Fullstack', 'Integraciones', 'Automatización'],
    },
  },
  notFound: {
    title: 'Página no encontrada',
    body: 'La página solicitada no está disponible.',
    cta: 'Ir al inicio',
  },
};
