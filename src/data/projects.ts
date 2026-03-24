import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'quantix-multi-company-core',
    featured: true,
    categories: ['backend'],
    title: {
      en: 'Quantix | Multi-Company Inventory and Billing Core',
      es: 'Quantix | Core Multiempresa para Inventario y Facturación',
    },
    oneLiner: {
      en: 'Centralized inventory and billing platform that lets multiple companies and branches operate from a single system, eliminating fragmented data and duplicated administration.',
      es: 'Plataforma centralizada de inventario y facturación que permite a múltiples empresas y sucursales operar desde un solo sistema, eliminando datos fragmentados y administración duplicada.',
    },
    problem: {
      en: 'Organizations with multiple companies and branches needed inventory, billing, reporting, and configuration under one operational core without fragmenting data or setup.',
      es: 'Empresas con varias razones sociales y sucursales necesitaban inventario, facturación, reportería y configuración dentro de un mismo núcleo operativo, sin fragmentar datos ni administración.',
    },
    roles: [
      { en: 'Solution architecture', es: 'Arquitectura de solución' },
      { en: 'C# / .NET implementation', es: 'Implementación C# / .NET' },
      { en: 'Multi-company model', es: 'Modelo multiempresa' },
    ],
    stack: ['C#', '.NET', 'Azure SQL Database'],
    architecture: [
      {
        en: 'Clean Architecture core for inventory, billing, reporting, catalogs, and configuration.',
        es: 'Núcleo en Clean Architecture para inventario, facturación, reportería, catálogos y configuración.',
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
        es: 'Una sola instalación puede administrar desde una hasta N empresas y sus sucursales.',
      },
      {
        en: 'Inventory, billing, and reporting now run through a clearer shared daily workflow.',
        es: 'Inventario, facturación y reportería ahora conviven en un flujo diario mucho más claro.',
      },
      {
        en: 'Operational support becomes simpler by sharing catalogs, configuration, and company-aware rules.',
        es: 'El soporte operativo se simplifica al compartir catálogos, configuración y reglas por empresa.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Quantix was built as a production system for businesses that need inventory and billing control across multiple companies and branches without duplicating platforms.',
        es: 'Quantix se construyó como un sistema productivo para empresas que necesitan controlar inventario y facturación en múltiples compañías y sucursales sin duplicar plataforma.',
      },
      constraints: [
        {
          en: 'Each company had to coexist in the same system with its own rules, catalogs, and configuration.',
          es: 'Cada empresa debía convivir en el mismo sistema con sus propias reglas, catálogos y configuración.',
        },
        {
          en: 'Inventory and billing required consistent data and reliable responsiveness in daily operations.',
          es: 'Inventario y facturación exigían consistencia de datos y respuesta confiable en la operación diaria.',
        },
        {
          en: 'The platform had to grow by modules without turning the user experience into a fragmented system.',
          es: 'La plataforma debía crecer por módulos sin convertir la experiencia en un sistema fragmentado.',
        },
      ],
      solution: [
        {
          en: 'The platform was organized into inventory, billing, reporting, catalog, and configuration modules on top of a .NET backend.',
          es: 'La plataforma se organizó en módulos de inventario, facturación, reportería, catálogos y configuración sobre un backend .NET.',
        },
        {
          en: 'The C# client was shaped around company and branch context so teams could navigate the same core without duplicated flows.',
          es: 'La interfaz en C# se diseñó alrededor del contexto por empresa y sucursal para recorrer el mismo núcleo sin duplicar flujos.',
        },
        {
          en: 'The data layer was centralized on Azure SQL Database to preserve traceability, consistency, and consolidated reporting.',
          es: 'La capa de datos se centralizó en Azure SQL Database para preservar trazabilidad, consistencia y reportería consolidada.',
        },
      ],
      decisions: [
        {
          en: 'A shared multi-company core was prioritized over isolated customer-specific deployments.',
          es: 'Se priorizó un núcleo compartido multiempresa sobre despliegues aislados por cliente.',
        },
        {
          en: 'Company separation lived in the data and configuration model, not in separate application instances.',
          es: 'La separación por empresa se resolvió en el modelo de datos y configuración, no en instancias separadas del sistema.',
        },
        {
          en: 'Azure SQL Database was chosen to support transactional consistency and cloud-based operational scale.',
          es: 'Se eligió Azure SQL Database para sostener consistencia transaccional y escalabilidad operativa en la nube.',
        },
      ],
      outcomes: [
        {
          en: 'Multiple companies now operate on one platform with branch-level control.',
          es: 'Múltiples empresas operan hoy sobre una misma plataforma con control por sucursal.',
        },
        {
          en: 'Critical modules share one source of data for inventory, billing, and lookup workflows.',
          es: 'Los módulos críticos comparten una sola fuente de datos para inventario, facturación y consulta.',
        },
        {
          en: 'The system can expand with new catalogs, reports, and settings without breaking the operational core.',
          es: 'El sistema puede crecer con nuevos catálogos, reportes y configuraciones sin romper el núcleo operativo.',
        },
      ],
      lessons: [
        {
          en: 'In multi-company systems, getting context and configuration right matters more than piling on screens.',
          es: 'En sistemas multiempresa, modelar bien el contexto y la configuración vale más que acumular pantallas.',
        },
      ],
    },
    video: {
      title: {
        en: 'Quantix in production',
        es: 'Quantix en producción',
      },
      caption: {
        en: 'A real walkthrough of the system showing the multi-company operational core, billing flows, and daily management context.',
        es: 'Recorrido real del sistema mostrando el núcleo operativo multiempresa, los flujos de facturación y el contexto de gestión diaria.',
      },
      embedUrl: 'https://www.youtube-nocookie.com/embed/FL7aUb48rls?start=10&rel=0&modestbranding=1',
    },
    links: {
      caseStudyAnchor: 'quantix-multi-company-core',
    },
  },
  {
    id: 'ls-central-statement-insufficiency-control',
    featured: true,
    categories: ['backend'],
    title: {
      en: 'LS Central Statement Insufficiency Control',
      es: 'Control de Insuficiencias para Open Statement en LS Central',
    },
    oneLiner: {
      en: 'Custom insufficiency-control module built in AL on Business Central to identify statement shortages and stop Post Statement until inventory is corrected.',
      es: 'Módulo custom de control de insuficiencias, desarrollado en AL sobre Business Central, para identificar faltantes del statement y detener el Post Statement hasta corregir el inventario.',
    },
    problem: {
      en: 'LS only stopped Post Statement with a generic negative-inventory alert, leaving operations without the exact items and quantities needed to correct the statement before posting.',
      es: 'LS solo detenía el Post Statement con una alerta genérica de inventario negativo, dejando a operación sin el detalle de items y cantidades necesario para corregir el statement antes de postear.',
    },
    roles: [
      { en: 'Functional analysis', es: 'Análisis funcional' },
      { en: 'AL architecture', es: 'Arquitectura AL' },
      { en: 'Page extensions + post guard', es: 'Page extensions + guard de posteo' },
    ],
    stack: ['AL'],
    architecture: [
      {
        en: 'Two page extensions: one on Open Statement for the operational entry point, another on setup to control insufficiency behavior and feature flags.',
        es: 'Dos page extensions: una sobre Open Statement para el punto de entrada operativo y otra sobre setup para controlar el comportamiento de insuficiencias y los feature flags.',
      },
      {
        en: 'Dedicated calculation and guard codeunits separate UI, business rules, and posting protection inside the LS flow.',
        es: 'Codeunits dedicadas de cálculo y guard separan UI, reglas de negocio y protección del posteo dentro del flujo de LS.',
      },
      {
        en: 'Statement-aware list, drilldown trace, and export actions turn a blocking event into actionable inventory work.',
        es: 'Lista contextual por statement, drilldown de trace y acciones de exportación convierten un bloqueo en trabajo operativo accionable.',
      },
    ],
    impact: [
      {
        en: 'Operations moved from a generic stop message to an exact insufficiency list for the selected statement and date.',
        es: 'Operación pasó de un mensaje genérico de bloqueo a una lista exacta de insuficiencias para el statement y fecha seleccionados.',
      },
      {
        en: 'Teams can adjust inventory or execute corrective movements before posting, keeping statements and inventory cleaner.',
        es: 'Los equipos pueden ajustar inventario o ejecutar movimientos correctivos antes de postear, manteniendo más limpios los statements y el inventario.',
      },
      {
        en: 'Posting control became configurable and safer through setup flags and pre-post validation.',
        es: 'El control de posteo se volvió configurable y más seguro mediante setup y validación antes del posteo.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Built for a Nicaraguan company running Dynamics 365 Business Central with LS Central BackOffice and POS, where nightly statement closure needed more than a blocking alert.',
        es: 'Diseñado para una empresa en Nicaragua que operaba Dynamics 365 Business Central con LS Central BackOffice y POS, donde el cierre nocturno de statements necesitaba mucho más que una alerta de bloqueo.',
      },
      constraints: [
        {
          en: 'The feature had to live inside Open Statement so the nightly operation would not depend on external screens or manual workarounds.',
          es: 'La funcionalidad debía vivir dentro de Open Statement para que la operación nocturna no dependiera de pantallas externas ni de workarounds manuales.',
        },
        {
          en: 'The solution had to explain the exact insufficiencies for that specific statement and date, not just signal that something was wrong.',
          es: 'La solución tenía que explicar las insuficiencias exactas para ese statement y fecha concretos, no solo indicar que algo estaba mal.',
        },
        {
          en: 'Business rules had to remain configurable through setup, including posting block behavior and deeper calculation logic.',
          es: 'Las reglas de negocio debían seguir siendo configurables desde setup, incluyendo el bloqueo del posteo y la lógica de cálculo más profunda.',
        },
      ],
      solution: [
        {
          en: 'Added an Insufficiencies action through a page extension on Open Statement to open a statement-scoped list of insufficient items.',
          es: 'Se agregó una acción Insufficiencies mediante una page extension sobre Open Statement para abrir una lista acotada al statement con todos los items insuficientes.',
        },
        {
          en: 'Built a second page extension on the existing setup so the company could enable or disable posting block and complementary insufficiency logic.',
          es: 'Se construyó una segunda page extension sobre el setup existente para que la empresa pudiera activar o desactivar el bloqueo de posteo y la lógica complementaria de insuficiencias.',
        },
        {
          en: 'Implemented dedicated AL codeunits for calculation and post guard, including the validation that stops Post Statement when insufficiencies still exist.',
          es: 'Se implementaron codeunits dedicadas en AL para cálculo y guard de posteo, incluyendo la validación que detiene Post Statement cuando las insuficiencias siguen existiendo.',
        },
        {
          en: 'Added operational trace and export capabilities so users could move from alert to correction with concrete evidence per item.',
          es: 'Se añadieron capacidades de trace y exportación operativa para que el usuario pasara de la alerta a la corrección con evidencia concreta por item.',
        },
      ],
      decisions: [
        {
          en: 'The feature was embedded in the LS BackOffice page instead of a detached process, maximizing adoption in the real nightly workflow.',
          es: 'La funcionalidad se incrustó en la página de LS BackOffice en vez de crear un proceso aislado, maximizando adopción dentro del flujo nocturno real.',
        },
        {
          en: 'Setup, UI entry point, calculation engine, and posting guard were separated to keep business rules maintainable and auditable.',
          es: 'Setup, punto de entrada UI, motor de cálculo y guard de posteo se separaron para mantener las reglas de negocio mantenibles y auditables.',
        },
        {
          en: 'Actionable evidence per statement was prioritized over the generic native message because operations needed to fix inventory before closing.',
          es: 'Se priorizó evidencia accionable por statement sobre el mensaje genérico nativo, porque operación necesitaba corregir inventario antes del cierre.',
        },
      ],
      outcomes: [
        {
          en: 'Users can now see every insufficient product tied to the current statement before attempting posting.',
          es: 'Ahora los usuarios pueden ver cada producto insuficiente asociado al statement actual antes de intentar el posteo.',
        },
        {
          en: 'Inventory adjustments and corrective movements happen with real statement-level evidence instead of guesswork.',
          es: 'Los ajustes de inventario y movimientos correctivos se realizan con evidencia real a nivel de statement en lugar de suposiciones.',
        },
        {
          en: 'Nightly closing became cleaner because posting is stopped only after presenting actionable insufficiency detail.',
          es: 'El cierre nocturno se volvió más limpio porque el posteo se detiene solo después de presentar detalle accionable de insuficiencias.',
        },
      ],
      lessons: [
        {
          en: 'In retail backoffice flows, blocking alone is not enough; the system must explain the problem exactly where the user can resolve it.',
          es: 'En flujos de backoffice retail, bloquear no basta; el sistema debe explicar el problema exactamente donde el usuario puede resolverlo.',
        },
      ],
    },
    video: {
      title: {
        en: 'Operational walkthrough',
        es: 'Recorrido operativo',
      },
      caption: {
        en: 'Visual walkthrough of the operational flow used to review statement shortages before posting.',
        es: 'Recorrido visual del flujo operativo utilizado para revisar insuficiencias del statement antes del posteo.',
      },
      embedUrl: 'https://www.youtube-nocookie.com/embed/FL7aUb48rls?start=10&rel=0&modestbranding=1',
    },
    links: {
      caseStudyAnchor: 'ls-central-statement-insufficiency-control',
    },
  },
  {
    id: 'nicafinanzas',
    featured: true,
    categories: ['flutter', 'backend', 'integrations'],
    title: {
      en: 'NicaFinance | Web-first Financial Education Platform',
      es: 'NicaFinance | Plataforma Web-first de Educación Financiera',
    },
    oneLiner: {
      en: 'Applied financial education platform helping people in Nicaragua understand their salaries, loans, and labor rights through practical tools and AI assistance.',
      es: 'Plataforma de educación financiera aplicada que ayuda a personas en Nicaragua a entender su salario, préstamos y derechos laborales mediante herramientas prácticas y asistencia con IA.',
    },
    problem: {
      en: 'Traditional financial tools often deliver results without explanation, leaving users alone to make decisions that can have serious economic consequences.',
      es: 'Las herramientas financieras tradicionales suelen entregar resultados sin explicación, dejando al usuario solo frente a decisiones que pueden tener consecuencias económicas serias.',
    },
    roles: [],
    stack: ['Flutter', 'Dart', 'Hono', 'Cloudflare Workers', 'OpenAI'],
    architecture: [
      {
        en: 'Feature-first Flutter frontend with a reusable design system and responsive shell.',
        es: 'Frontend en Flutter feature-first con sistema de diseño reutilizable y shell responsive.',
      },
      {
        en: 'Decoupled edge backend running on Cloudflare Workers (TypeScript + Hono).',
        es: 'Backend desacoplado en el edge ejecutándose en Cloudflare Workers (TypeScript + Hono).',
      },
      {
        en: 'Structured JSON AI integration using OpenAI Responses API for safe contextual advice.',
        es: 'Integración estructurada de IA mediante OpenAI API para consejos contextuales.',
      },
    ],
    impact: [
      {
        en: 'Democratizes practical financial education for users with limited economic expertise.',
        es: 'Democratiza la educación financiera práctica para usuarios con poca experiencia económica.',
      },
      {
        en: 'Reduces information asymmetry in sensitive decisions like loans or severances.',
        es: 'Reduce asimetrías de información en decisiones sensibles como préstamos o liquidaciones.',
      },
      {
        en: 'Proactively detects warning signs in debts and potentially abusive contracts.',
        es: 'Detecta proactivamente banderas rojas en deudas y contratos potencialmente abusivos.',
      },
    ],
    caseStudy: {
      context: {
        en: 'A digital product built specifically for Nicaragua to close the gap between numbers and understanding on loans, salaries, and severances.',
        es: 'Producto digital diseñado específicamente para Nicaragua con el objetivo de cerrar la brecha entre números y entendimiento en préstamos, salarios y liquidaciones.',
      },
      constraints: [
        {
          en: 'Users often lacked the technical or financial background to interpret raw calculation results safely.',
          es: 'Los usuarios usualmente no tienen la experiencia técnica o económica para interpretar resultados financieros crudos.',
        },
        {
          en: 'Needed a robust local context specific to Nicaraguan payroll, labor rights, and banking practices.',
          es: 'Se requería un contexto local robusto y específico sobre nómina, derechos laborales y sector bancario en Nicaragua.',
        },
      ],
      solution: [
        {
          en: 'Built contextual calculators that guide the user explaining risks and key points alongside the numbers.',
          es: 'Se construyeron calculadoras contextuales que guían al usuario explicando riesgos y puntos clave junto a los números.',
        },
        {
          en: 'Integrated an AI assistant to clarify specific doubts and steer the user toward specific internal tools.',
          es: 'Se integró un asistente con IA para resolver dudas específicas y orientar al usuario hacia herramientas puntuales internas.',
        },
      ],
      decisions: [
        {
          en: 'A serverless Edge architecture was chosen for the backend to ensure low latency and scalable OpenAI integration.',
          es: 'Se eligió una arquitectura Edge (Serverless) para el backend garantizando latencia ultrabaja y la escalabilidad con OpenAI.',
        },
        {
          en: 'Offline-first principles and local persistence were favored to keep session data out of external databases.',
          es: 'Se favoreció principios offline-first y persistencia local para mantener fuera el estado de bases de datos externas.',
        },
      ],
      outcomes: [
        {
          en: 'The platform is fully live, transforming complex calculations into actionable, safe advice.',
          es: 'La plataforma operando en vivo ha logrado traducir cálculos complejos en consejos asimilables y aplicables.',
        },
        {
          en: 'Demonstrates robust end-to-end execution, spanning from the UI design to AI and Edge computing.',
          es: 'Se demostró un despliegue sólido end-to-end; abarcando desde UI hasta integraciones complejas en el Edge.',
        },
      ],
      lessons: [
        {
          en: 'Developing products with real social utility proves stronger engineering judgment than merely tracking latest hypes.',
          es: 'Desarrollar productos con impacto social genuino comprueba una disciplina mayor que seguir modas tecnológicas.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'nicafinanzas',
      demo: 'https://nicafinanzas.com/',
    },
  },

];
