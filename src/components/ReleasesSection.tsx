import Link from 'next/link';
import type { Lang, T } from '@/lib/i18n';

interface Props {
  t: T;
  lang: Lang;
}

export default function ReleasesSection({ t, lang }: Props) {
  const r = t.releases;

  return (
    <section id="releases">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back + Heading */}
        <div className="mb-10">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors mb-4"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z" />
            </svg>
            {r.backBtn}
          </Link>
          <h2 className="text-2xl font-bold text-fg">{r.heading}</h2>
          <p className="text-fg-muted mt-1 text-sm">{r.subheading}</p>
        </div>

        {/* Version list */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-6">
            {r.versions.map((v) => (
              <div key={v.version} className="sm:pl-8 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-[18px] w-[15px] h-[15px] rounded-full border-2 hidden sm:block ${
                    v.latest
                      ? 'bg-accent border-accent'
                      : 'bg-canvas border-border-muted'
                  }`}
                />

                <div className="rounded-xl border border-border bg-canvas-subtle overflow-hidden">
                  {/* Card header */}
                  <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-sm font-bold text-fg">
                        v{v.version}
                      </span>
                      {v.latest && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-accent-emphasis border border-accent/25">
                          {r.latestBadge}
                        </span>
                      )}
                      <span className="text-xs text-fg-subtle">{v.date}</span>
                    </div>

                    {v.downloadable ? (
                      <a
                        href={`/api/download?version=${v.version}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-emphasis text-white text-xs font-semibold transition-colors shrink-0"
                      >
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
                          <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.97a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.779a.749.749 0 1 1 1.06-1.06z" />
                        </svg>
                        {r.downloadBtn}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border text-fg-subtle text-xs font-semibold cursor-not-allowed shrink-0">
                        {r.unavailableBtn}
                      </span>
                    )}
                  </div>

                  {/* Changelog sections */}
                  <div className="px-5 py-4 flex flex-col gap-4">
                    {v.sections.map((section) => (
                      <div key={section.label}>
                        <p className="text-xs font-semibold text-fg-muted uppercase tracking-wide mb-2">
                          {section.emoji} {section.label}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-fg-muted">
                              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-fg-subtle" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
