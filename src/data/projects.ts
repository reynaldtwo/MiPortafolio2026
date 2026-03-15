import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'quantix-multi-company-core',
    featured: true,
    categories: ['backend'],
    title: {
      en: 'Quantix | Multi-Company Inventory and Billing Core',
      es: 'Quantix | Core Multiempresa para Inventario y Facturacion',
    },
    oneLiner: {
      en: 'C# and .NET system on Azure SQL for operating multiple companies and branches from one shared platform.',
      es: 'Sistema en C# y .NET sobre Azure SQL para operar multiples empresas y sucursales desde una sola plataforma.',
    },
    problem: {
      en: 'Organizations with multiple companies and branches needed inventory, billing, reporting, and configuration under one operational core without fragmenting data or setup.',
      es: 'Empresas con varias razones sociales y sucursales necesitaban inventario, facturacion, reporteria y configuracion dentro de un mismo nucleo operativo, sin fragmentar datos ni administracion.',
    },
    roles: [
      { en: 'Solution architecture', es: 'Arquitectura de solucion' },
      { en: 'C# / .NET implementation', es: 'Implementacion C# / .NET' },
      { en: 'Multi-company model', es: 'Modelo multiempresa' },
    ],
    stack: ['C#', '.NET', 'Azure SQL Database'],
    architecture: [
      {
        en: 'Clean Architecture core for inventory, billing, reporting, catalogs, and configuration.',
        es: 'Nucleo en Clean Architecture para inventario, facturacion, reporteria, catalogos y configuracion.',
      },
      {
        en: 'Multi-company and multi-branch model with isolated operational context inside one shared platform.',
        es: 'Modelo multiempresa y multisucursal con contexto operativo aislado dentro de una sola plataforma.',
      },
      {
        en: 'Centralized persistence on Azure SQL Database for transactional consistency and consolidated visibility.',
        es: 'Persistencia centralizada en Azure SQL Database para consistencia transaccional y visibilidad consolidada.',
      },
    ],
    impact: [
      {
        en: 'One installation can manage from one to many companies and their branches.',
        es: 'Una sola instalacion puede administrar desde una hasta N empresas y sus sucursales.',
      },
      {
        en: 'Inventory, billing, and reporting now run through a clearer shared daily workflow.',
        es: 'Inventario, facturacion y reporteria ahora conviven en un flujo diario mucho mas claro.',
      },
      {
        en: 'Operational support becomes simpler by sharing catalogs, configuration, and company-aware rules.',
        es: 'El soporte operativo se simplifica al compartir catalogos, configuracion y reglas por empresa.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Quantix was built as a production system for businesses that need inventory and billing control across multiple companies and branches without duplicating platforms.',
        es: 'Quantix se construyo como un sistema productivo para empresas que necesitan controlar inventario y facturacion en multiples companias y sucursales sin duplicar plataforma.',
      },
      constraints: [
        {
          en: 'Each company had to coexist in the same system with its own rules, catalogs, and configuration.',
          es: 'Cada empresa debia convivir en el mismo sistema con sus propias reglas, catalogos y configuracion.',
        },
        {
          en: 'Inventory and billing required consistent data and reliable responsiveness in daily operations.',
          es: 'Inventario y facturacion exigian consistencia de datos y respuesta confiable en la operacion diaria.',
        },
        {
          en: 'The platform had to grow by modules without turning the user experience into a fragmented system.',
          es: 'La plataforma debia crecer por modulos sin convertir la experiencia en un sistema fragmentado.',
        },
      ],
      solution: [
        {
          en: 'The platform was organized into inventory, billing, reporting, catalog, and configuration modules on top of a .NET backend.',
          es: 'La plataforma se organizo en modulos de inventario, facturacion, reporteria, catalogos y configuracion sobre un backend .NET.',
        },
        {
          en: 'The C# client was shaped around company and branch context so teams could navigate the same core without duplicated flows.',
          es: 'La interfaz en C# se diseno alrededor del contexto por empresa y sucursal para recorrer el mismo nucleo sin duplicar flujos.',
        },
        {
          en: 'The data layer was centralized on Azure SQL Database to preserve traceability, consistency, and consolidated reporting.',
          es: 'La capa de datos se centralizo en Azure SQL Database para preservar trazabilidad, consistencia y reporteria consolidada.',
        },
      ],
      decisions: [
        {
          en: 'A shared multi-company core was prioritized over isolated customer-specific deployments.',
          es: 'Se priorizo un nucleo compartido multiempresa sobre despliegues aislados por cliente.',
        },
        {
          en: 'Company separation lived in the data and configuration model, not in separate application instances.',
          es: 'La separacion por empresa se resolvio en el modelo de datos y configuracion, no en instancias separadas del sistema.',
        },
        {
          en: 'Azure SQL Database was chosen to support transactional consistency and cloud-based operational scale.',
          es: 'Se eligio Azure SQL Database para sostener consistencia transaccional y escalabilidad operativa en la nube.',
        },
      ],
      outcomes: [
        {
          en: 'Multiple companies now operate on one platform with branch-level control.',
          es: 'Multiples empresas operan hoy sobre una misma plataforma con control por sucursal.',
        },
        {
          en: 'Critical modules share one source of data for inventory, billing, and lookup workflows.',
          es: 'Los modulos criticos comparten una sola fuente de datos para inventario, facturacion y consulta.',
        },
        {
          en: 'The system can expand with new catalogs, reports, and settings without breaking the operational core.',
          es: 'El sistema puede crecer con nuevos catalogos, reportes y configuraciones sin romper el nucleo operativo.',
        },
      ],
      lessons: [
        {
          en: 'In multi-company systems, getting context and configuration right matters more than piling on screens.',
          es: 'En sistemas multiempresa, modelar bien el contexto y la configuracion vale mas que acumular pantallas.',
        },
      ],
    },
    video: {
      title: {
        en: 'Quantix in production',
        es: 'Quantix en produccion',
      },
      caption: {
        en: 'A real walkthrough of the system showing the multi-company operational core, billing flows, and daily management context.',
        es: 'Recorrido real del sistema mostrando el nucleo operativo multiempresa, los flujos de facturacion y el contexto de gestion diaria.',
      },
      embedUrl: 'https://www.youtube-nocookie.com/embed/FL7aUb48rls?start=10&rel=0&modestbranding=1',
    },
    links: {
      caseStudyAnchor: 'quantix-multi-company-core',
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
