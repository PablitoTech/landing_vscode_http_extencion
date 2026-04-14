import type { T } from '@/lib/i18n';
import InstallCommands from './InstallCommands';

// SVG icons indexed by position (same order as translation items)
const ICONS = [
  <svg key="0" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 14.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.5 2.75v7.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h5.25a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" />
  </svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v1h1.25c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 13.25 15H4.75A1.75 1.75 0 0 1 3 13.25V12H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.5 10.25c0 .138.112.25.25.25H3v-7h8.5v-1a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Z" />
  </svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Z" />
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z" />
  </svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z" />
  </svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM5.78 4.28a.75.75 0 0 0-1.06 1.06L6.94 7.56 4.72 9.78a.75.75 0 0 0 1.06 1.06L8 8.62l2.22 2.22a.75.75 0 0 0 1.06-1.06L9.06 7.56l2.22-2.22a.75.75 0 0 0-1.06-1.06L8 6.5 5.78 4.28Z" />
  </svg>,
];

interface Props {
  t: T;
}

export default function FeaturesSection({ t }: Props) {
  const f = t.features;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{f.heading}</h2>
        <p className="text-fg-muted max-w-xl mx-auto">{f.subheading}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {f.items.map((item, i) => (
          <div
            key={item.title}
            className="relative group p-5 rounded-xl bg-canvas-subtle border border-border card-hover"
          >
            {item.badge && (
              <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent-emphasis border border-accent/20">
                {item.badge}
              </span>
            )}
            <div className="w-9 h-9 rounded-lg bg-canvas border border-border flex items-center justify-center text-accent mb-4">
              {ICONS[i]}
            </div>
            <h3 className="font-semibold text-fg mb-2">{item.title}</h3>
            <p className="text-sm text-fg-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* How to install */}
      <div className="mt-12 p-6 rounded-xl bg-canvas-subtle border border-border">
        <h3 className="font-semibold text-fg mb-4 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
            <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Z" />
          </svg>
          {f.installHeading}
        </h3>
        <ol className="space-y-2 text-sm text-fg-muted">
          {f.installSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent-emphasis text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <InstallCommands t={t} />
      </div>
    </section>
  );
}
