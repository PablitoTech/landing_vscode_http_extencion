'use client';

import Link from 'next/link';
import type { Lang } from '@/lib/i18n';

interface Props {
  lang: Lang;
}

export default function LanguageSwitcher({ lang }: Props) {
  return (
    <div className="flex items-center gap-0.5 bg-canvas border border-border rounded-lg p-0.5">
      <Link
        href="/en"
        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
          lang === 'en'
            ? 'bg-accent/15 text-accent-emphasis'
            : 'text-fg-muted hover:text-fg'
        }`}
      >
        EN
      </Link>
      <Link
        href="/es"
        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
          lang === 'es'
            ? 'bg-accent/15 text-accent-emphasis'
            : 'text-fg-muted hover:text-fg'
        }`}
      >
        ES
      </Link>
    </div>
  );
}
