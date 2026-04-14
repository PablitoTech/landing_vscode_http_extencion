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
      feedback: 'Feedback',
      download: 'Download',
    },
    hero: {
      status: 'Active',
      versionBadge: 'v0.0.2 Beta',
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
          title: 'Right-Click Generation',
          description:
            'Right-click any Java controller or folder in the VS Code explorer and generate .http files instantly — no configuration needed.',
          badge: null,
        },
        {
          title: 'Folder Batch Mode',
          description:
            'Point to any folder and the extension finds all controllers recursively, generating one .http file per controller automatically.',
          badge: 'New',
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
            'Handles @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping, @RequestMapping — including path variables and query params.',
          badge: null,
        },
        {
          title: 'Auth Header Auto-inject',
          description:
            'Automatically includes Authorization: Bearer {{token}} headers in every request so you can drop in your JWT and start testing right away.',
          badge: null,
        },
        {
          title: 'Configurable Base URL',
          description:
            'Set your base URL once in VS Code settings (default: localhost:8080) and all generated requests use it — no manual editing needed.',
          badge: null,
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
      versionLine: 'Spring HTTP Generator v0.0.2 Beta · VS Code Extension',
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
      feedback: 'Comentarios',
      download: 'Descargar',
    },
    hero: {
      status: 'Activo',
      versionBadge: 'v0.0.2 Beta',
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
          title: 'Generación con Clic Derecho',
          description:
            'Haz clic derecho en cualquier controlador Java o carpeta en el explorador de VS Code y genera archivos .http al instante — sin configuración.',
          badge: null,
        },
        {
          title: 'Modo Lote por Carpeta',
          description:
            'Apunta a cualquier carpeta y la extensión encuentra todos los controladores de forma recursiva, generando un archivo .http por controlador.',
          badge: 'Nuevo',
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
            'Soporta @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping, @RequestMapping — incluyendo variables de ruta y query params.',
          badge: null,
        },
        {
          title: 'Cabecera Auth Auto-inyectada',
          description:
            'Incluye automáticamente Authorization: Bearer {{token}} en cada petición, para que puedas pegar tu JWT y empezar a probar de inmediato.',
          badge: null,
        },
        {
          title: 'URL Base Configurable',
          description:
            'Configura tu URL base una sola vez en los ajustes de VS Code (por defecto: localhost:8080) y todas las peticiones generadas la usarán.',
          badge: null,
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
      versionLine: 'Spring HTTP Generator v0.0.2 Beta · Extensión VS Code',
    },
  },
};

export type T = typeof translations.en;
