'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n';

interface Props {
  lang: Lang;
}

const LABELS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageSwitcher({ lang }: Props) {
  const pathname = usePathname();

  function hrefFor(target: Lang): string {
    // Replace the leading /{lang} segment with /{target}
    return pathname.replace(/^\/[a-z]{2}/, `/${target}`);
  }

  return (
    <div className="flex items-center gap-0.5 bg-canvas border border-border rounded-lg p-0.5">
      {LABELS.map(({ code, label }) => (
        <Link
          key={code}
          href={hrefFor(code)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            lang === code
              ? 'bg-accent/15 text-accent-emphasis'
              : 'text-fg-muted hover:text-fg'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
