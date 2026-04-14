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
        <span className="font-semibold text-sm text-fg flex items-center gap-2 shrink-0">
          <svg width="16" height="16" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M12 32L24 20V44L12 32Z" fill="#388bfd" />
            <rect x="28" y="20" width="20" height="4" rx="2" fill="#388bfd" />
            <rect x="28" y="30" width="20" height="4" rx="2" fill="#58a6ff" />
            <rect x="28" y="40" width="14" height="4" rx="2" fill="#79c0ff" />
          </svg>
          Spring HTTP Generator
        </span>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />

          <Link
            href={`/${lang}#feedback`}
            className="hidden sm:block text-sm text-fg-muted hover:text-fg transition-colors"
          >
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
