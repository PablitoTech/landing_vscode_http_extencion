import Link from 'next/link';
import type { Lang, T } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  lang: Lang;
  t: T;
}

export default function Navbar({ lang, t }: Props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="font-semibold text-sm text-fg flex items-center gap-2 shrink-0 hover:text-accent-emphasis transition-colors">
          <svg width="16" height="16" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M12 32L24 20V44L12 32Z" fill="#388bfd" />
            <rect x="28" y="20" width="20" height="4" rx="2" fill="#388bfd" />
            <rect x="28" y="30" width="20" height="4" rx="2" fill="#58a6ff" />
            <rect x="28" y="40" width="14" height="4" rx="2" fill="#79c0ff" />
          </svg>
          Spring HTTP Generator
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />

          <Link
            href={`/${lang}/releases`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-border hover:border-accent/50 text-fg-muted hover:text-fg transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.025 5.025a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
            {t.nav.releases}
          </Link>

          <Link
            href={`/${lang}#feedback`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-border hover:border-accent/50 text-fg-muted hover:text-fg transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
            </svg>
            {t.nav.feedback}
          </Link>

          <a
            href="/api/download"
            className="text-sm px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-emphasis text-white font-semibold transition-colors"
          >
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  );
}
