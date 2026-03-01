import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'retail-ops-command-center',
    featured: true,
    categories: ['flutter', 'backend', 'integrations'],
    title: {
      en: 'Retail Operations Command Center',
      es: 'Centro de Control para Operaciones Retail',
    },
    oneLiner: {
      en: 'Flutter operations platform connected to ERP, POS, and support flows.',
      es: 'Plataforma operativa en Flutter conectada con ERP, POS y flujos de soporte.',
    },
    problem: {
      en: 'Multi-branch teams worked with fragmented views, delayed updates, and manual escalations.',
      es: 'Equipos multi-sucursal operaban con vistas fragmentadas, actualizaciones tardias y escalamiento manual.',
    },
    roles: [
      { en: 'System architecture', es: 'Arquitectura de sistema' },
      { en: 'Flutter lead', es: 'Lider Flutter' },
      { en: '.NET integration design', es: 'Diseno de integraciones .NET' },
    ],
    stack: ['Flutter', '.NET 8', 'SQL Server', 'Azure', 'Business Central', 'LS Central'],
    architecture: [
      {
        en: 'Feature-based Flutter architecture with strict boundaries between UI, domain, and infrastructure.',
        es: 'Arquitectura Flutter por features con limites claros entre UI, dominio e infraestructura.',
      },
      {
        en: 'Contract-first APIs for inventory, order status, and alerts consumed by store operations.',
        es: 'APIs contract-first para inventario, estado de pedidos y alertas para operacion en tienda.',
      },
      {
        en: 'Traceable operational flow with structured logs and correlation IDs.',
        es: 'Flujo operativo trazable con logs estructurados y correlation IDs.',
      },
    ],
    impact: [
      {
        en: 'Reduced incident triage time by consolidating operational visibility in one interface.',
        es: 'Reduccion del tiempo de triage al consolidar visibilidad operativa en una sola interfaz.',
      },
      {
        en: 'Improved store autonomy with near real-time process status.',
        es: 'Mejora de autonomia en sucursales con estado de procesos casi en tiempo real.',
      },
      {
        en: 'Safer releases through explicit integration contracts and staged rollout.',
        es: 'Releases mas seguros mediante contratos explicitos y rollout por etapas.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Designed for a retail environment where downtime quickly impacts sales and operations.',
        es: 'Disenado para un entorno retail donde cualquier interrupcion impacta ventas y operacion.',
      },
      constraints: [
        {
          en: 'Legacy POS dependencies with mixed data quality across branches.',
          es: 'Dependencias de POS legado con calidad de datos desigual entre sucursales.',
        },
        {
          en: 'Need for progressive adoption without operational disruption.',
          es: 'Necesidad de adopcion progresiva sin interrupcion operativa.',
        },
      ],
      solution: [
        {
          en: 'Introduced modular app boundaries and consistent error-handling across critical workflows.',
          es: 'Se introdujeron limites modulares y manejo consistente de errores en flujos criticos.',
        },
        {
          en: 'Created an integration orchestration layer with safe retries and contract validation.',
          es: 'Se creo una capa de orquestacion con reintentos seguros y validacion de contratos.',
        },
      ],
      decisions: [
        {
          en: 'Prioritized observability and idempotency over fast but fragile shortcuts.',
          es: 'Se priorizo observabilidad e idempotencia sobre atajos rapidos pero fragiles.',
        },
        {
          en: 'Used branch-aware telemetry to speed up root cause analysis.',
          es: 'Se uso telemetria por sucursal para acelerar analisis de causa raiz.',
        },
      ],
      outcomes: [
        {
          en: 'Operations gained a single source of truth for daily execution.',
          es: 'Operaciones obtuvo una unica fuente de verdad para ejecucion diaria.',
        },
        {
          en: 'Support teams resolved incidents faster with clear event traces.',
          es: 'Soporte resolvio incidentes mas rapido con trazas de eventos claras.',
        },
      ],
      lessons: [
        {
          en: 'Reliability is a product feature, not an afterthought.',
          es: 'La confiabilidad es una funcionalidad del producto, no un extra.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'retail-ops-command-center',
      demo: 'https://github.com/',
    },
  },
  {
    id: 'offline-route-sync-engine',
    featured: true,
    categories: ['flutter', 'automation', 'integrations'],
    title: {
      en: 'Offline Field Sync Engine',
      es: 'Motor de Sincronizacion Offline para Campo',
    },
    oneLiner: {
      en: 'Offline-first transaction flow for field operations with resilient sync and conflict handling.',
      es: 'Flujo transaccional offline-first para operacion en campo con sincronizacion resiliente.',
    },
    problem: {
      en: 'Field teams needed reliable transactions even with unstable or absent connectivity.',
      es: 'Equipos de campo necesitaban transacciones confiables incluso sin conectividad estable.',
    },
    roles: [
      { en: 'Offline architecture', es: 'Arquitectura offline' },
      { en: 'Sync orchestration', es: 'Orquestacion de sincronizacion' },
      { en: 'Operational diagnostics', es: 'Diagnostico operativo' },
    ],
    stack: ['Flutter', 'SQLite', '.NET API', 'SQL Server', 'PowerShell'],
    architecture: [
      {
        en: 'Local queue with retry/backoff and deterministic replay sequence.',
        es: 'Cola local con retry/backoff y secuencia determinista de reprocesamiento.',
      },
      {
        en: 'Batch sync endpoint with idempotency keys and duplicate protection.',
        es: 'Endpoint de sincronizacion por lotes con idempotencia y proteccion de duplicados.',
      },
      {
        en: 'Conflict policy tied to business rules and support visibility.',
        es: 'Politica de conflicto ligada a reglas de negocio y visibilidad de soporte.',
      },
    ],
    impact: [
      {
        en: 'Reduced data-loss risk in low-connectivity routes.',
        es: 'Reduccion del riesgo de perdida de datos en rutas con baja conectividad.',
      },
      {
        en: 'Enabled dependable field execution across distributed locations.',
        es: 'Habilito ejecucion confiable en campo en ubicaciones distribuidas.',
      },
      {
        en: 'Support teams gained clear diagnostics for pending and failed batches.',
        es: 'Soporte obtuvo diagnostico claro para lotes pendientes o fallidos.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Built for route-based operations where network assumptions are unrealistic.',
        es: 'Construido para operaciones por ruta donde asumir red estable no es realista.',
      },
      constraints: [
        {
          en: 'Eventual consistency accepted, but duplicate side effects were not.',
          es: 'Se acepto consistencia eventual, pero no efectos duplicados.',
        },
        {
          en: 'Support needed transparent sync diagnostics.',
          es: 'Soporte necesitaba diagnostico transparente de sincronizacion.',
        },
      ],
      solution: [
        {
          en: 'Implemented durable queue + local snapshots + conflict tags.',
          es: 'Se implemento cola durable + snapshots locales + etiquetas de conflicto.',
        },
        {
          en: 'Added reconciliation dashboard for pending and failed payloads.',
          es: 'Se agrego dashboard de reconciliacion para payloads pendientes y fallidos.',
        },
      ],
      decisions: [
        {
          en: 'Prioritized integrity over optimistic UI in risky transactional steps.',
          es: 'Se priorizo integridad sobre UI optimista en pasos transaccionales de riesgo.',
        },
        {
          en: 'Connected sync alerts to SLA thresholds for escalations.',
          es: 'Se conectaron alertas de sincronizacion a umbrales SLA para escalamiento.',
        },
      ],
      outcomes: [
        {
          en: 'Transaction replay became predictable and auditable.',
          es: 'El reprocesamiento transaccional se volvio predecible y auditable.',
        },
        {
          en: 'Teams maintained productivity during long offline windows.',
          es: 'Los equipos mantuvieron productividad durante ventanas largas sin red.',
        },
      ],
      lessons: [
        {
          en: 'Offline-first only works when support tooling is included from day one.',
          es: 'Offline-first solo funciona cuando el tooling de soporte existe desde el dia uno.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'offline-route-sync-engine',
      demo: 'https://github.com/',
    },
  },
  {
    id: 'qa-release-control-plane',
    featured: true,
    categories: ['backend', 'automation'],
    title: {
      en: 'QA and Release Control Plane',
      es: 'Plano de Control para QA y Releases',
    },
    oneLiner: {
      en: 'Operational quality workflow that connects evidence, approvals, and release readiness.',
      es: 'Flujo de calidad que conecta evidencia, aprobaciones y readiness de release.',
    },
    problem: {
      en: 'Quality signals were scattered across manual notes, chats, and disconnected reports.',
      es: 'Las senales de calidad estaban dispersas entre notas manuales, chats y reportes desconectados.',
    },
    roles: [
      { en: 'QA process design', es: 'Diseno de proceso QA' },
      { en: 'Automation workflows', es: 'Flujos de automatizacion' },
      { en: 'Release governance', es: 'Gobernanza de release' },
    ],
    stack: ['ASP.NET Core', 'SQL Server', 'n8n', 'Power BI', 'Teams'],
    architecture: [
      {
        en: 'Unified release checklist and evidence capture by environment.',
        es: 'Checklist unificado de release y captura de evidencia por ambiente.',
      },
      {
        en: 'Automated alerts for pending approvals, blocked defects, and retests.',
        es: 'Alertas automaticas para aprobaciones pendientes, defectos y re-pruebas.',
      },
      {
        en: 'Audit trail for defects, fixes, and go-live decisions.',
        es: 'Traza auditable para defectos, correcciones y decisiones de salida.',
      },
    ],
    impact: [
      {
        en: 'Higher release confidence with clearer go/no-go visibility.',
        es: 'Mayor confianza en releases con visibilidad clara para go/no-go.',
      },
      {
        en: 'Faster coordination between QA, development, and operations.',
        es: 'Coordinacion mas rapida entre QA, desarrollo y operaciones.',
      },
      {
        en: 'Reduced avoidable regressions through explicit quality gates.',
        es: 'Reduccion de regresiones evitables mediante gates explicitos de calidad.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Created for teams delivering frequent changes with strict continuity expectations.',
        es: 'Creado para equipos con cambios frecuentes y exigencia alta de continuidad.',
      },
      constraints: [
        {
          en: 'Needed immediate adoption without forcing heavy enterprise tooling.',
          es: 'Se requeria adopcion inmediata sin imponer tooling enterprise pesado.',
        },
        {
          en: 'Mixed technical profiles across stakeholders.',
          es: 'Perfiles tecnicos mixtos entre stakeholders.',
        },
      ],
      solution: [
        {
          en: 'Built lightweight governance with automation-first reminders and escalations.',
          es: 'Se construyo gobernanza ligera con recordatorios y escalaciones automatizadas.',
        },
        {
          en: 'Standardized release evidence and linked it to approval checkpoints.',
          es: 'Se estandarizo evidencia de release y se vinculo a checkpoints de aprobacion.',
        },
      ],
      decisions: [
        {
          en: 'Enforced quality by sensible defaults, not process bureaucracy.',
          es: 'Se reforzo calidad con defaults utiles, no con burocracia.',
        },
        {
          en: 'Made release status visible for both technical and business teams.',
          es: 'Se hizo visible el estado de release para negocio y equipo tecnico.',
        },
      ],
      outcomes: [
        {
          en: 'Release readiness became measurable before production deployment.',
          es: 'La readiness de release se volvio medible antes de produccion.',
        },
      ],
      lessons: [
        {
          en: 'Simple and clear workflows outperform complex ones under delivery pressure.',
          es: 'Flujos simples y claros superan a los complejos bajo presion de entrega.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'qa-release-control-plane',
      demo: 'https://github.com/',
    },
  },
  {
    id: 'enterprise-integration-hub',
    featured: false,
    categories: ['backend', 'integrations', 'automation'],
    title: {
      en: 'Enterprise Integration Hub',
      es: 'Hub Empresarial de Integraciones',
    },
    oneLiner: {
      en: 'Integration layer connecting ERP, POS, messaging channels, and automation bots.',
      es: 'Capa de integracion que conecta ERP, POS, canales de mensajeria y bots de automatizacion.',
    },
    problem: {
      en: 'Transactional and operational signals lived in isolated systems with manual coordination.',
      es: 'Senales transaccionales y operativas vivian en sistemas aislados con coordinacion manual.',
    },
    roles: [
      { en: 'Integration architecture', es: 'Arquitectura de integraciones' },
      { en: 'Automation design', es: 'Diseno de automatizacion' },
      { en: 'Operational support model', es: 'Modelo de soporte operativo' },
    ],
    stack: ['ASP.NET Core', 'Business Central', 'LS Central', 'n8n', 'OpenAI API', 'Teams'],
    architecture: [
      {
        en: 'Event-driven integration flows with safe retries and delivery tracking.',
        es: 'Flujos orientados a eventos con reintentos seguros y trazabilidad de entrega.',
      },
      {
        en: 'Notification routing by severity and business context.',
        es: 'Enrutamiento de notificaciones por severidad y contexto de negocio.',
      },
      {
        en: 'Automation bots for repetitive triage and escalations.',
        es: 'Bots de automatizacion para triage repetitivo y escalaciones.',
      },
    ],
    impact: [
      {
        en: 'Lower manual coordination load across technical and business teams.',
        es: 'Menor carga de coordinacion manual entre equipos tecnicos y de negocio.',
      },
      {
        en: 'Faster reaction time to operational incidents.',
        es: 'Menor tiempo de reaccion ante incidentes operativos.',
      },
      {
        en: 'Clearer traceability from event origin to final action.',
        es: 'Trazabilidad mas clara desde origen del evento hasta accion final.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Designed for operations where speed and traceability are both critical.',
        es: 'Disenado para operaciones donde velocidad y trazabilidad son criticas.',
      },
      constraints: [
        {
          en: 'Different vendors and protocols with uneven reliability assumptions.',
          es: 'Proveedores y protocolos distintos con supuestos desiguales de confiabilidad.',
        },
        {
          en: 'Needed low-friction adoption by non-technical users as well.',
          es: 'Se necesitaba adopcion de baja friccion incluso para usuarios no tecnicos.',
        },
      ],
      solution: [
        {
          en: 'Created normalization and validation layer before cross-system dispatch.',
          es: 'Se creo una capa de normalizacion y validacion antes del despacho cross-system.',
        },
        {
          en: 'Linked bot actions with trace IDs for operational auditing.',
          es: 'Se enlazaron acciones de bots con trace IDs para auditoria operativa.',
        },
      ],
      decisions: [
        {
          en: 'Mandatory idempotency and traceability from first release.',
          es: 'Idempotencia y trazabilidad obligatorias desde la primera version.',
        },
      ],
      outcomes: [
        {
          en: 'Cross-system visibility enabled faster and safer daily decisions.',
          es: 'La visibilidad cross-system permitio decisiones diarias mas rapidas y seguras.',
        },
      ],
      lessons: [
        {
          en: 'Integration quality is defined by failure handling, not only happy paths.',
          es: 'La calidad de integracion se define por el manejo de fallos, no solo por happy paths.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'enterprise-integration-hub',
      demo: 'https://github.com/',
      repo: 'https://github.com/',
    },
  },
];
