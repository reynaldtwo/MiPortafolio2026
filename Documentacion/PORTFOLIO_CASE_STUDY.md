# NicaFinance

## Subtitulo

Plataforma web-first de educacion financiera aplicada para Nicaragua, construida con Flutter, arquitectura feature-first y backend edge con IA.

## Elevator Pitch

NicaFinance transforma calculos financieros cotidianos en decisiones mejor informadas. Combina herramientas practicas, educacion contextual, alertas de riesgo y un asistente conversacional con IA para ayudar a personas en Nicaragua a entender mejor su salario, sus prestamos, sus derechos laborales y el impacto real de sus decisiones economicas.

## Descripcion Principal

NicaFinance es un producto digital orientado a resolver un problema concreto: muchas personas necesitan calcular su salario neto, evaluar un prestamo o entender una liquidacion laboral, pero no siempre cuentan con informacion clara, contexto legal local ni herramientas que traduzcan numeros en decisiones comprensibles. En lugar de limitarse a ofrecer calculadoras, el proyecto propone una experiencia de apoyo a la decision que combina utilidades financieras, contenido educativo, alertas contextuales, recursos externos y un asistente con IA.

El producto fue concebido con un enfoque local, centrado en el contexto financiero y laboral de Nicaragua. Esa decision cambia por completo el valor del sistema: los calculos, el contenido y la orientacion no responden a una logica generica, sino a necesidades reales asociadas a deducciones salariales, prestamos, refinanciamiento, derechos laborales y practicas potencialmente abusivas. La plataforma acompana al usuario durante todo el recorrido, desde el calculo hasta la interpretacion del resultado.

A nivel tecnico, NicaFinance demuestra una ejecucion full stack solida. El frontend fue desarrollado con Flutter y Dart bajo una arquitectura feature-first, con design system reutilizable, navegacion centralizada, estado desacoplado y una experiencia responsive pensada para web, tablet y mobile. El asistente conversacional opera sobre una API independiente desplegada en Cloudflare Workers, construida con TypeScript, Hono, Zod y OpenAI Responses API, lo que permite validacion estricta, respuestas estructuradas, baja latencia y una integracion limpia entre cliente e IA.

Mas que una app de calculo, NicaFinance es una plataforma de educacion financiera aplicada con criterio de producto, sensibilidad social y una base tecnica mantenible.

## Que Problema Resuelve

Las herramientas financieras tradicionales suelen entregar resultados sin explicacion. Eso deja al usuario solo frente a decisiones que pueden tener consecuencias economicas serias: aceptar un prestamo con un costo total mal entendido, interpretar mal deducciones salariales, subestimar una refinanciacion o desconocer derechos laborales al momento de una liquidacion.

NicaFinance resuelve esa brecha entre calculo y comprension. El proyecto convierte operaciones financieras comunes en experiencias guiadas por contexto, contenido educativo y alertas practicas. En vez de responder unicamente "cuanto da", tambien responde "que significa", "que deberias revisar" y "que riesgos deberias considerar antes de avanzar".

## Por Que Aporta Valor a la Sociedad

El valor social de NicaFinance esta en democratizar comprension financiera aplicada. No parte de la idea de que todas las personas manejan conceptos como amortizacion, refinanciamiento, deducciones o liquidacion laboral; parte de la realidad opuesta y disena el producto para cerrar esa distancia.

Su aporte es relevante porque:

- acerca educacion financiera util a personas con poca experiencia tecnica o economica;
- reduce asimetrias de informacion en decisiones sensibles;
- ayuda a detectar senales de riesgo en deudas, contratos, comisiones y practicas abusivas;
- integra informacion sobre derechos laborales dentro de flujos concretos de uso;
- y adapta la experiencia al contexto de Nicaragua, donde la precision local es parte central del valor del producto.

Desde una mirada de producto, esto convierte a NicaFinance en una solucion con utilidad practica inmediata y con una capa de impacto humano poco comun en herramientas financieras livianas.

## Funcionalidades Clave

- Calculadora de salario neto con desglose de nomina, deducciones y componentes complementarios como aguinaldo y proyecciones.
- Calculadora de prestamos con resultados claros, analisis de cuotas, costo total y visualizacion de amortizacion.
- Tablas y graficos financieros para facilitar lectura y comparacion de escenarios.
- Comparador de prestamos para evaluar alternativas antes de tomar una decision.
- Simulador de refinanciamiento para analizar si una reestructuracion mejora o empeora el escenario financiero.
- Simuladores especializados para casos como prestamos hipotecarios o vehiculares.
- Calculadora de liquidacion laboral orientada a brindar contexto sobre derechos y montos estimados.
- Paneles educativos contextuales integrados dentro de las calculadoras para explicar riesgos, conceptos y criterios de lectura.
- Hub educativo con lecciones y guias en formato Markdown, organizado por categorias y preparado para multiples idiomas.
- Alertas sobre banderas rojas vinculadas a deuda, contratos, comisiones y patrones abusivos.
- Recursos y referencias externas para ampliar la investigacion del usuario con fuentes concretas.
- Casos anonimizados que muestran errores frecuentes y alternativas mas seguras.
- Asistente conversacional con IA para resolver dudas financieras en lenguaje simple y orientar hacia herramientas especificas.
- Continuidad de conversacion en chat mediante persistencia local de `conversation_id`.
- Historial local de calculos para salario y prestamos.
- Exportacion de resultados en PDF y CSV, junto con capacidades de comparticion.
- Visualizacion de documentos PDF dentro de la propia app.
- Soporte responsive con shell compartido para desktop, tablet y mobile.
- Preparacion bilingue para espanol e ingles, con localizacion modular.

## Arquitectura y Decisiones Tecnicas

NicaFinance esta construido con una arquitectura pensada para evolucionar sin degradar consistencia ni mantenibilidad.

- El frontend sigue una estructura feature-first, separando presentation, domain y data por modulo funcional.
- La base visual se apoya en un design system reutilizable con tokens de color, tipografia, layout, espaciado, motion y componentes compartidos como cards, botones, texto y layouts responsivos.
- La navegacion esta centralizada con GoRouter y se integra con una shell persistente que unifica experiencia, jerarquia y recorridos entre secciones publicas.
- El estado se gestiona con Bloc y Cubit, mientras que la inyeccion de dependencias utiliza GetIt e Injectable para desacoplar implementaciones y facilitar escalabilidad.
- La persistencia local combina HydratedBloc y SharedPreferences para conservar configuracion, historial y continuidad conversacional.
- El contenido educativo usa un modelo hibrido: metadata tipada en Dart para estructura y assets Markdown para cuerpos extensos en espanol e ingles.
- La experiencia web incorpora SEO por ruta publica mediante MetaSEO y estrategias de URL limpias.
- El backend de chat esta desacoplado del cliente y corre sobre Cloudflare Workers, lo que aporta baja latencia y simplicidad operativa en edge.
- La API fue construida con TypeScript y Hono, con validacion estricta de entrada y salida usando Zod.
- La integracion con OpenAI Responses API utiliza salida estructurada en JSON, no solo texto libre, para devolver consejo util y flags que conectan la conversacion con calculadoras concretas.
- El servicio implementa CORS allowlist, manejo estandarizado de errores, request IDs y logs estructurados, reforzando observabilidad y confiabilidad de integracion.

## Tecnologias Utilizadas

- Frontend: Flutter, Dart, Material Design, flutter_bloc, Bloc, Cubit, hydrated_bloc, GoRouter, GetIt, Injectable, Dio, MetaSEO, flutter_markdown, fl_chart, flutter_svg, Google Fonts, shared_preferences, path_provider, pdf, printing, share_plus, pdfrx, flutter_localizations, intl, flutter_animate_plus y url_strategy.
- Backend e IA: TypeScript, Cloudflare Workers, Hono, OpenAI Responses API, OpenAI SDK, Zod y Wrangler.
- Arquitectura y contenido: design system propio, estructura feature-first, metadata tipada, Markdown para contenido educativo, SEO para rutas web y shell responsive reutilizable.
- Calidad: Flutter test, unit tests, widget tests, golden tests, pruebas de responsive y navegacion, Vitest, @cloudflare/vitest-pool-workers, typecheck y architecture guards.

## Calidad, Robustez y Disciplina de Ingenieria

Este proyecto no se sostiene solo por amplitud funcional; tambien muestra una disciplina de implementacion poco comun en proyectos personales o de portfolio.

- Hay cobertura en unit tests para servicios y logica de dominio.
- Existen widget tests y pruebas de navegacion para validar comportamiento de UI.
- Se usan golden tests para resguardar consistencia visual en pantallas clave.
- Hay pruebas de responsive UI para reducir regresiones entre desktop y mobile.
- El backend edge cuenta con tests en Vitest, incluyendo escenarios de integracion del worker.
- Se aplican guardas de arquitectura y reglas de design system para evitar deriva tecnica.
- La centralizacion de tokens, componentes y rutas facilita mantenimiento y crecimiento sin multiplicar deuda visual ni estructural.

## Por Que Este Proyecto Destaca en un Portfolio

NicaFinance destaca porque combina tres dimensiones que rara vez aparecen bien resueltas en un mismo proyecto: utilidad real, criterio de producto y profundidad tecnica. No se queda en una demo visual ni en una integracion superficial con IA. Resuelve una necesidad concreta, con enfoque local, una arquitectura limpia y una experiencia pensada para personas reales.

Tambien sobresale porque evidencia un perfil capaz de construir producto completo: interfaz, sistema de diseno, logica de negocio, contenido, experiencia web, backend edge, integracion con OpenAI, persistencia local y testing. Desde portfolio, eso lo convierte en una prueba fuerte de ejecucion end-to-end y de pensamiento de producto con sensibilidad social.

## Como lo Veria un Recruiter Senior

Un recruiter senior veria en NicaFinance una senal clara de seniority practico. El proyecto demuestra capacidad para identificar un problema real, estructurarlo como producto, construir una solucion full stack mantenible y cuidar tanto la UX como la robustez tecnica. Tambien deja ver criterio de arquitectura, manejo de estado, consistencia visual, desacople entre cliente y backend, integracion responsable con IA y una base de calidad que va mas alla del prototipo.

## Como lo Veria un CEO o Head of Product

Desde una mirada ejecutiva, NicaFinance muestra foco, criterio y direccion. Hay una tesis de producto clara: ayudar a las personas a tomar decisiones financieras mas seguras mediante herramientas utiles, educacion y acompanamiento. El proyecto tambien comunica una ventaja importante: no compite solo por feature parity, sino por contexto, comprension y confianza. Eso sugiere capacidad para construir productos con identidad, proposito y potencial de evolucion.

## Version Corta Para Card o Preview

NicaFinance es una plataforma web-first de educacion financiera aplicada para Nicaragua. Combina calculadoras de salario, prestamos y liquidacion laboral con contenido educativo, alertas contextuales, recursos y un asistente con IA. Fue construida con Flutter y un backend edge en Cloudflare Workers, bajo una arquitectura feature-first, design system reutilizable, SEO web, persistencia local y una base seria de testing y validacion.

## Version Ultra Corta

NicaFinance convierte calculos financieros en decisiones mejor informadas mediante educacion contextual, UX clara y una arquitectura full stack pensada para escalar.

## Keywords / Tags

- Flutter
- Dart
- Fintech
- Financial Education
- Cloudflare Workers
- OpenAI
- Full Stack
- Product Design
- Responsive Web App
- UX Architecture
