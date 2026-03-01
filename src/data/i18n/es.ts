import type { en } from './en';

type Dictionary = typeof en;

export const es: Dictionary = {
  localeCode: 'es',
  localeName: 'Espanol',
  otherLocaleName: 'English',
  skipToContent: 'Saltar al contenido',
  nav: {
    systems: 'Sistemas',
    flutter: 'Flutter',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  ctas: {
    schedule: 'Agendar llamada',
    email: 'Escribeme',
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
    automation: 'Automatizacion',
    integrations: 'Integraciones',
  },
  links: {
    relatedProject: 'Proyecto relacionado',
    readCaseStudy: 'Leer caso',
    demo: 'Demo',
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
    solutionOverview: 'Enfoque de solucion',
    outcomes: 'Resultados',
    lessons: 'Lecciones aprendidas',
    availability: 'Disponibilidad',
    languageSwitch: 'Cambiar idioma',
    themeToggle: 'Cambiar tema',
    mobileMenu: 'Abrir menu',
    closeMenu: 'Cerrar menu',
  },
  meta: {
    home: {
      title: 'Reynaldo Sanchez | Fullstack Developer (Flutter-first)',
      description:
        'Desarrollador fullstack enfocado en productos Flutter-first, APIs confiables e integraciones listas para negocio.',
    },
    systems: {
      title: 'Sistemas y Arquitectura | Reynaldo Sanchez',
      description:
        'Como diseno sistemas confiables: arquitectura modular, integraciones resilientes y visibilidad operativa.',
    },
    flutter: {
      title: 'Especialidad Flutter | Reynaldo Sanchez',
      description:
        'Especialista Flutter con experiencia real en produccion: arquitectura, rendimiento e integraciones.',
    },
    projects: {
      title: 'Proyectos Seleccionados | Reynaldo Sanchez',
      description: 'Casos cortos enfocados en decisiones de arquitectura, ejecucion e impacto operativo.',
    },
    contact: {
      title: 'Trabajemos Juntos | Reynaldo Sanchez',
      description: 'Colaboracion remota e internacional para entrega fullstack con enfoque Flutter-first.',
    },
    notFound: {
      title: 'Pagina no encontrada | Reynaldo Sanchez',
      description: 'La pagina que buscas no esta disponible.',
    },
  },
  home: {
    hero: {
      title: 'Desarrollador fullstack para productos listos para produccion: UX Flutter-first, APIs confiables e integraciones reales.',
      subline: 'Ingenieria orientada a negocio: arquitectura, ejecucion y resultados.',
      paragraph:
        '15 anos en TI entre soporte, operaciones, QA, desarrollo y arquitectura de sistemas. Construyo software que funciona bajo presion operativa.',
      proofChips: ['Flutter-first', 'Fullstack', 'Integraciones ERP/POS', 'Offline-ready'],
    },
    pillars: {
      title: 'Lo que recibes al trabajar conmigo',
      items: [
        {
          title: 'Ejecucion rapida con disciplina',
          points: ['De requerimiento a produccion con ownership claro.', 'Ciclos cortos sin sacrificar confiabilidad.'],
        },
        {
          title: 'Arquitectura que escala',
          points: ['Limites modulares, contratos explicitos y trazabilidad.', 'Pensado para operacion real, no solo demos.'],
        },
        {
          title: 'Entrega alineada a negocio',
          points: ['Menor friccion operativa para equipos.', 'Sistemas que mejoran decision y autonomia.'],
        },
      ],
    },
    strengths: {
      title: 'Fortalezas diferenciales',
      paragraph:
        'Combinacion solida de vision de producto, pensamiento de sistemas y ejecucion hands-on en app, backend, data e integraciones.',
      chips: ['Flutter', '.NET APIs', 'SQL Server', 'Azure', 'Automatizacion', 'Bots n8n', 'Flujos OpenAI'],
    },
    featured: {
      title: 'Trabajo seleccionado',
    },
    credibility: {
      title: 'Resumen rapido',
      metrics: [
        { value: '15+', label: 'Anos en TI' },
        { value: '9 sedes', label: 'Rollouts multi-sucursal' },
        { value: 'ERP/POS', label: 'Integraciones en produccion' },
        { value: 'Remoto', label: 'Colaboracion internacional' },
      ],
    },
    finalCta: {
      title: 'Buscas un ingeniero que disene y entregue end-to-end?',
    },
  },
  systems: {
    hero: {
      title: 'Pensamiento de sistemas que se entrega.',
      subline: 'Arquitectura confiable donde UX, datos y operacion permanecen alineados.',
      cta: 'Ver evidencia en proyectos',
    },
    playbook: {
      title: 'Playbook de arquitectura',
      cards: [
        {
          title: 'Diseno modular',
          points: ['Limites de feature y ownership claro.', 'Cambios mas rapidos con menos riesgo de regresion.'],
          chips: ['Flutter', 'Modularidad', 'Mantenibilidad'],
        },
        {
          title: 'Contratos de integracion',
          points: ['APIs contract-first con estrategia de versionado.', 'Reintentos seguros y comportamiento predecible.'],
          chips: ['REST', 'Versionado', 'Idempotencia'],
        },
        {
          title: 'Resiliencia operativa',
          points: ['Logs estructurados, trace IDs y health checks.', 'Manejo de fallos como parte central del diseno.'],
          chips: ['Observabilidad', 'SLA', 'Confiabilidad'],
        },
        {
          title: 'Bucles de automatizacion',
          points: ['Alertas, workflows y controles recurrentes.', 'Menos carga manual para soporte y operaciones.'],
          chips: ['n8n', 'PowerShell', 'Teams'],
        },
      ],
    },
    snapshots: {
      title: 'Snapshots de sistema',
      items: [
        {
          title: 'Flutter app -> API -> DB -> integraciones',
          decisions: [
            'Limite contract-first entre app y backend.',
            'Alertas operativas por severidad.',
            'Reintentos idempotentes en integraciones externas.',
            'Correlation IDs en todo el flujo.',
          ],
          anchor: 'retail-ops-command-center',
        },
        {
          title: 'Cola offline -> sync por lotes -> reconciliacion',
          decisions: [
            'Cola local durable con replay determinista.',
            'Acks por lote para bajar costo de red.',
            'Etiquetas de conflicto visibles para soporte.',
            'Umbrales SLA de sincronizacion para escalamiento.',
          ],
          anchor: 'offline-route-sync-engine',
        },
      ],
    },
    stackFramework: {
      title: 'Framework de stack por responsabilidad',
      columns: [
        {
          title: 'Frontend',
          why: 'Flutter para iteracion rapida de producto y UX consistente.',
          chips: ['Flutter', 'Design System', 'Responsive'],
          tradeoff: 'Equilibrio entre detalle visual y limites mantenibles.',
        },
        {
          title: 'Backend',
          why: 'APIs .NET e integraciones con contratos explicitos y comportamiento predecible.',
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
      title: 'Quieres evidencia de implementacion? Revisa los casos.',
    },
  },
  flutter: {
    hero: {
      title: 'Especialista Flutter. Ejecucion orientada a producto.',
      subline: 'Arquitectura, rendimiento y patrones de integracion probados en produccion.',
      cta: 'Ver proyectos Flutter',
    },
    modules: {
      title: 'Modelo de entrega en Flutter',
      items: [
        {
          title: 'Arquitectura de app',
          points: ['Estructura por features con limites limpios.', 'Ownership escalable para productos vivos.'],
        },
        {
          title: 'Manejo de estado',
          points: ['Flujo de datos predecible y mantenible.', 'Bloc o Riverpod segun restricciones del caso.'],
        },
        {
          title: 'Performance y UX',
          points: ['Optimizaciones guiadas por profiling.', 'Interaccion fluida en dispositivos moviles.'],
        },
        {
          title: 'Patrones de integracion',
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
      title: 'Proyectos seleccionados para operacion real.',
      subline: 'Casos concretos con decisiones de arquitectura y resultados medibles.',
    },
  },
  contact: {
    hero: {
      title: 'Hablemos.',
      subline: 'Remoto | Internacional | Fullstack (Flutter-first)',
    },
    linksTitle: 'Canales directos',
    availability: {
      text: 'Disponible para roles remotos full-time, contratos y consultoria de alta responsabilidad.',
      chips: ['Fullstack', 'Flutter', 'Integraciones', 'Automatizacion'],
    },
  },
  notFound: {
    title: 'Pagina no encontrada',
    body: 'La pagina solicitada no esta disponible.',
    cta: 'Ir al inicio',
  },
};
