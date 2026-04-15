export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];

export function isValidLang(lang: string): lang is Lang {
  return LANGS.includes(lang as Lang);
}

export function getLang(lang: string): Lang {
  return isValidLang(lang) ? lang : 'en';
}

export function getT(lang: Lang) {
  return translations[lang];
}

// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
  en: {
    meta: {
      title: 'Spring HTTP · VS Code',
      description:
        'Generate .http files automatically from your Spring Boot controllers. Test your REST API instantly with one click.',
    },
    nav: {
      releases: 'Releases',
      feedback: 'Feedback',
      download: 'Download',
    },
    hero: {
      status: 'Active',
      versionBadge: 'v0.0.3',
      extensionBadge: 'VS Code Extension',
      title: 'Spring HTTP Generator',
      subtitle:
        'Auto-generate \u200b.http\u200b files from your Spring Boot controllers. Test your entire REST API instantly — no Postman needed.',
      tagline:
        'Right-click any controller or folder → Generate .http requests in seconds.',
      downloadBtn: 'Download .vsix',
      feedbackBtn: 'Leave Feedback',
      stats: [
        { label: 'HTTP Methods', value: '5', sub: 'GET, POST, PUT, DELETE, PATCH' },
        { label: 'Spring Annotations', value: '10+', sub: 'Full mapping support' },
        { label: 'Schema Support', value: '@Schema', sub: 'Swagger / OpenAPI' },
      ],
    },
    features: {
      heading: 'Everything you need to test your API',
      subheading:
        'Stop writing HTTP requests by hand. The extension reads your controllers and generates everything automatically.',
      installHeading: 'How to install',
      installSteps: [
        'Download the .vsix file using the button above',
        'Open your editor and go to Extensions (Ctrl+Shift+X)',
        'Click the ··· menu → "Install from VSIX…"',
        'Select the downloaded file and reload the editor',
        'Right-click any Spring Boot controller → Generate HTTP file',
      ],
      installCli: {
        heading: 'Or install via terminal',
        subheading: 'Run this command after downloading the .vsix file',
        tabs: ['Windows', 'Mac', 'Linux'],
        copy: 'Copy',
        copied: 'Copied!',
        editors: ['VS Code', 'Cursor', 'Antigravity', 'Kiro'],
      },
      items: [
        {
          title: 'Folder Batch Mode',
          description:
            'Point to any folder and the extension finds all controllers recursively, generating one .http file per controller automatically.',
          badge: 'New',
        },
        {
          title: 'HTTP File Variables',
          description:
            'Every generated file now starts with @baseUrl and @token variable declarations. All requests reference {{baseUrl}} and {{token}} — change them once at the top and every request updates instantly.',
          badge: 'New',
        },
        {
          title: '@Parameter Query Values',
          description:
            'Reads @Parameter(example = "...") annotations from your controller method params to build query strings with real example values instead of generic placeholders.',
          badge: 'New',
        },
        {
          title: 'Right-Click Generation',
          description:
            'Right-click any Java controller or folder in the VS Code explorer and generate .http files instantly — no configuration needed.',
          badge: null,
        },
        {
          title: '@Schema Example Values',
          description:
            'Reads Swagger/OpenAPI @Schema annotations from your DTOs to populate request bodies with real example values — not just empty fields.',
          badge: null,
        },
        {
          title: 'Full Mapping Support',
          description:
            'Handles @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping, @RequestMapping — including path variables, query params, and auth headers.',
          badge: null,
        },
      ],
    },
    releases: {
      heading: 'Version History',
      subheading: 'Download any previous release — each comes with its full changelog.',
      backBtn: 'Back to home',
      latestBadge: 'Latest',
      downloadBtn: 'Download .vsix',
      unavailableBtn: 'Not available',
      versions: [
        {
          version: '0.0.3',
          date: 'April 14, 2026',
          latest: true,
          downloadable: true,
          sections: [
            {
              label: 'New Features',
              emoji: '🚀',
              items: [
                'Folder batch mode — generate .http files from all controllers inside a selected folder recursively.',
                'HTTP file variables — generated files now include @baseUrl and @token declarations at the top; all requests reference {{baseUrl}} and {{token}}.',
                '@Parameter(example) support — reads example values from method parameter annotations to build realistic query strings.',
              ],
            },
            {
              label: 'Bug Fixes',
              emoji: '🐛',
              items: [
                'Fixed method signature parsing when annotations contain nested parentheses.',
                'Fixed annotation context leaking from previous fields into the current one.',
              ],
            },
            {
              label: 'Improvements',
              emoji: '🔧',
              items: [
                '@RequestParam now uses exampleValue or defaultValue when available instead of a generic placeholder.',
                'Authorization header logic simplified — included whenever includeAuthHeader is active.',
              ],
            },
          ],
        },
        {
          version: '0.0.2',
          date: 'January 19, 2026',
          latest: false,
          downloadable: true,
          sections: [
            {
              label: 'New Features',
              emoji: '🚀',
              items: [
                'Swagger/OpenAPI support — reads @Schema(example = "...") annotations from DTOs to generate real JSON values.',
                'Description detection — extracts field descriptions from @Schema(description = "...").',
                'Improved DTO parser — more robust handling of multiline fields and complex annotations.',
              ],
            },
          ],
        },
        {
          version: '0.0.1-beta',
          date: 'January 17, 2026',
          latest: false,
          downloadable: false,
          sections: [
            {
              label: 'Initial Release',
              emoji: '✨',
              items: [
                'Regex-based parser to detect Spring Boot controllers and methods with high precision.',
                'Smart JSON generation — supports flat DTOs with common Java types (String, Integer, LocalDateTime, UUID, etc.).',
                'Security detection — automatic support for @PreAuthorize, @Secured, and @SecurityRequirement.',
                'VS Code integration — context menus in the file explorer and editor, plus dedicated Command Palette commands.',
                'Diagnostic mode — built-in tool to verify permissions and extension status.',
                'Official launch under the PablitoTech brand.',
              ],
            },
          ],
        },
      ],
    },
    feedback: {
      heading: 'Help us improve',
      subheading:
        "Used the extension? We'd love to hear what worked, what broke, or what you wish it could do.",
      formHeading: 'Submit Feedback',
      listHeading: 'Recent Feedback',
      total: 'total',
      filterAll: 'All',
      empty: 'No feedbacks yet — be the first!',
      types: {
        praise: 'Praise',
        feature: 'Feature Request',
        bug: 'Bug Report',
        general: 'General',
      },
      form: {
        nameLabel: 'Your name',
        namePlaceholder: 'Anonymous Dev',
        typeLabel: 'Type',
        ratingLabel: 'Rating',
        ratingOptional: '(optional)',
        messageLabel: 'Message',
        messagePlaceholder:
          'Share your experience, suggest a feature, or report a bug...',
        submitBtn: 'Submit Feedback',
        submitting: 'Submitting…',
        successMsg: 'Feedback submitted — thank you!',
        errorName: 'Please enter your name.',
        errorMessage: 'Please write your feedback.',
        privateLabel: 'Keep private',
        privateHint: 'Your feedback will only be visible to the admin, not publicly.',
      },
    },
    footer: {
      builtBy: 'Built by',
      versionLine: 'Spring HTTP Generator v0.0.3 · VS Code Extension',
    },
  },

  // ── Español ───────────────────────────────────────────────────────────────
  es: {
    meta: {
      title: 'Spring HTTP · VS Code',
      description:
        'Genera archivos .http automáticamente desde tus controladores de Spring Boot. Prueba tu API REST al instante con un clic.',
    },
    nav: {
      releases: 'Versiones',
      feedback: 'Comentarios',
      download: 'Descargar',
    },
    hero: {
      status: 'Activo',
      versionBadge: 'v0.0.3',
      extensionBadge: 'Extensión VS Code',
      title: 'Spring HTTP Generator',
      subtitle:
        'Genera automáticamente archivos \u200b.http\u200b desde tus controladores de Spring Boot. Prueba tu API REST al instante — sin Postman.',
      tagline:
        'Clic derecho en cualquier controlador o carpeta → Genera archivos .http en segundos.',
      downloadBtn: 'Descargar .vsix',
      feedbackBtn: 'Dejar comentario',
      stats: [
        { label: 'Métodos HTTP', value: '5', sub: 'GET, POST, PUT, DELETE, PATCH' },
        { label: 'Anotaciones Spring', value: '10+', sub: 'Soporte completo' },
        { label: 'Soporte Schema', value: '@Schema', sub: 'Swagger / OpenAPI' },
      ],
    },
    features: {
      heading: 'Todo lo que necesitas para probar tu API',
      subheading:
        'Deja de escribir peticiones HTTP a mano. La extensión lee tus controladores y genera todo automáticamente.',
      installHeading: 'Cómo instalar',
      installSteps: [
        'Descarga el archivo .vsix usando el botón de arriba',
        'Abre tu editor y ve a Extensiones (Ctrl+Shift+X)',
        'Haz clic en el menú ··· → "Instalar desde VSIX…"',
        'Selecciona el archivo descargado y recarga el editor',
        'Clic derecho en cualquier controlador Spring Boot → Generar archivo .http',
      ],
      installCli: {
        heading: 'O instala desde la terminal',
        subheading: 'Ejecuta este comando después de descargar el .vsix',
        tabs: ['Windows', 'Mac', 'Linux'],
        copy: 'Copiar',
        copied: '¡Copiado!',
        editors: ['VS Code', 'Cursor', 'Antigravity', 'Kiro'],
      },
      items: [
        {
          title: 'Modo Lote por Carpeta',
          description:
            'Apunta a cualquier carpeta y la extensión encuentra todos los controladores de forma recursiva, generando un archivo .http por controlador.',
          badge: 'Nuevo',
        },
        {
          title: 'Variables en el Archivo HTTP',
          description:
            'Cada archivo generado ahora incluye las declaraciones @baseUrl y @token al inicio. Todas las peticiones usan {{baseUrl}} y {{token}} — cámbialas una vez arriba y se actualizan en todos los requests.',
          badge: 'Nuevo',
        },
        {
          title: 'Valores de Ejemplo @Parameter',
          description:
            'Lee las anotaciones @Parameter(example = "...") en los parámetros de tus métodos para construir query strings con valores reales en lugar de placeholders genéricos.',
          badge: 'Nuevo',
        },
        {
          title: 'Generación con Clic Derecho',
          description:
            'Haz clic derecho en cualquier controlador Java o carpeta en el explorador de VS Code y genera archivos .http al instante — sin configuración.',
          badge: null,
        },
        {
          title: 'Valores de Ejemplo @Schema',
          description:
            'Lee las anotaciones @Schema de Swagger/OpenAPI en tus DTOs para rellenar los cuerpos de las peticiones con valores de ejemplo reales.',
          badge: null,
        },
        {
          title: 'Soporte Completo de Mappings',
          description:
            'Soporta @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping, @RequestMapping — incluyendo variables de ruta, query params y cabecera de autorización.',
          badge: null,
        },
      ],
    },
    releases: {
      heading: 'Historial de Versiones',
      subheading: 'Descarga cualquier versión anterior — cada una incluye su changelog completo.',
      backBtn: 'Volver al inicio',
      latestBadge: 'Última',
      downloadBtn: 'Descargar .vsix',
      unavailableBtn: 'No disponible',
      versions: [
        {
          version: '0.0.3',
          date: '14 de abril de 2026',
          latest: true,
          downloadable: true,
          sections: [
            {
              label: 'Nuevas Funcionalidades',
              emoji: '🚀',
              items: [
                'Modo lote por carpeta — genera archivos .http desde todos los controladores dentro de una carpeta seleccionada (recursivamente).',
                'Variables en el archivo HTTP — los archivos generados incluyen @baseUrl y @token al inicio; todos los requests usan {{baseUrl}} y {{token}}.',
                'Soporte para @Parameter(example) — lee los valores de ejemplo en las anotaciones de parámetros del método para construir query strings realistas.',
              ],
            },
            {
              label: 'Correcciones',
              emoji: '🐛',
              items: [
                'Corregido el parser de firmas de método cuando las anotaciones tienen paréntesis anidados.',
                'Corregida la contaminación de contexto de anotaciones entre campos consecutivos.',
              ],
            },
            {
              label: 'Mejoras',
              emoji: '🔧',
              items: [
                '@RequestParam ahora usa exampleValue o defaultValue cuando están disponibles en lugar de un placeholder genérico.',
                'Lógica de cabecera de autorización simplificada — se incluye siempre que includeAuthHeader esté activo.',
              ],
            },
          ],
        },
        {
          version: '0.0.2',
          date: '19 de enero de 2026',
          latest: false,
          downloadable: true,
          sections: [
            {
              label: 'Nuevas Funcionalidades',
              emoji: '🚀',
              items: [
                'Soporte Swagger/OpenAPI — lee anotaciones @Schema(example = "...") en los DTOs para generar valores JSON reales.',
                'Detección de descripciones — extrae las descripciones de campos desde @Schema(description = "...").',
                'Parser de DTOs mejorado — análisis más robusto de campos multilínea y anotaciones complejas.',
              ],
            },
          ],
        },
        {
          version: '0.0.1-beta',
          date: '17 de enero de 2026',
          latest: false,
          downloadable: false,
          sections: [
            {
              label: 'Lanzamiento Inicial',
              emoji: '✨',
              items: [
                'Motor de parsado con Regex para detectar controladores y métodos Spring Boot con alta precisión.',
                'Generación de JSON inteligente — soporte para DTOs planos con tipos Java comunes (String, Integer, LocalDateTime, UUID, etc.).',
                'Detección de seguridad — soporte automático para @PreAuthorize, @Secured y @SecurityRequirement.',
                'Integración con VS Code — menús contextuales en el explorador y el editor, más comandos en la Paleta de Comandos.',
                'Modo diagnóstico — herramienta integrada para verificar permisos y estado de la extensión.',
                'Lanzamiento oficial bajo el sello de PablitoTech.',
              ],
            },
          ],
        },
      ],
    },
    feedback: {
      heading: 'Ayúdanos a mejorar',
      subheading:
        '¿Ya usaste la extensión? Queremos saber qué funcionó, qué falló o qué te gustaría que tuviera.',
      formHeading: 'Enviar comentario',
      listHeading: 'Comentarios recientes',
      total: 'total',
      filterAll: 'Todos',
      empty: 'Aún no hay comentarios — ¡sé el primero!',
      types: {
        praise: 'Elogio',
        feature: 'Sugerencia',
        bug: 'Error',
        general: 'General',
      },
      form: {
        nameLabel: 'Tu nombre',
        namePlaceholder: 'Dev Anónimo',
        typeLabel: 'Tipo',
        ratingLabel: 'Valoración',
        ratingOptional: '(opcional)',
        messageLabel: 'Mensaje',
        messagePlaceholder:
          'Comparte tu experiencia, sugiere una función o reporta un error...',
        submitBtn: 'Enviar comentario',
        submitting: 'Enviando…',
        successMsg: '¡Comentario enviado — gracias!',
        errorName: 'Por favor escribe tu nombre.',
        errorMessage: 'Por favor escribe tu comentario.',
        privateLabel: 'Mantener privado',
        privateHint: 'Tu comentario solo será visible para el administrador, no públicamente.',
      },
    },
    footer: {
      builtBy: 'Creado por',
      versionLine: 'Spring HTTP Generator v0.0.3 · Extensión VS Code',
    },
  },
};

export type T = typeof translations.en;
