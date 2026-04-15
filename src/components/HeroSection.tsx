import Link from 'next/link';
import type { Lang, T } from '@/lib/i18n';

interface Props {
  lang: Lang;
  t: T;
}

export default function HeroSection({ lang, t }: Props) {
  const h = t.hero;

  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Icon */}
          <div className="shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-canvas-subtle border border-border flex items-center justify-center glow-blue">
              <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-label="Extension icon">
                <rect width="64" height="64" rx="12" fill="#1f6feb" opacity="0.15" />
                <path d="M12 32L24 20V44L12 32Z" fill="#388bfd" />
                <rect x="28" y="20" width="20" height="4" rx="2" fill="#388bfd" />
                <rect x="28" y="30" width="20" height="4" rx="2" fill="#58a6ff" />
                <rect x="28" y="40" width="14" height="4" rx="2" fill="#79c0ff" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                {h.status}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-canvas-subtle border border-border text-fg-muted font-mono">
                {h.versionBadge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-canvas-subtle border border-border text-fg-muted">
                {h.extensionBadge}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gradient">{h.title}</span>
            </h1>

            <p className="text-lg md:text-xl text-fg-muted max-w-2xl mb-3 leading-relaxed">
              {h.subtitle}
            </p>
            <p className="text-sm text-fg-subtle mb-8">{h.tagline}</p>

            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <a
                href="/api/download"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-emphasis text-white font-semibold text-sm transition-colors glow-blue"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
                  <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.97a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.779a.749.749 0 1 1 1.06-1.06z" />
                </svg>
                {h.downloadBtn}
              </a>

              <Link
                href={`/${lang}#feedback`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-accent/50 bg-canvas-subtle hover:bg-canvas text-fg font-semibold text-sm transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                </svg>
                {h.feedbackBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {h.stats.map((stat) => (
            <div key={stat.label} className="bg-canvas-subtle px-6 py-5 text-center">
              <p className="text-2xl font-bold text-accent-emphasis">{stat.value}</p>
              <p className="text-sm font-medium text-fg mt-1">{stat.label}</p>
              <p className="text-xs text-fg-subtle mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
