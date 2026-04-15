'use client';

import { useState } from 'react';
import type { T } from '@/lib/i18n';

const VSIX = 'spring-http-generator-0.0.3.vsix';

const EDITORS: { label: string; cli: string; color: string }[] = [
  { label: 'VS Code',     cli: 'code',        color: 'text-[#007acc]' },
  { label: 'Cursor',      cli: 'cursor',      color: 'text-[#8b5cf6]' },
  { label: 'Antigravity', cli: 'antigravity', color: 'text-[#f97316]' },
  { label: 'Kiro',        cli: 'kiro',        color: 'text-[#ec4899]' },
];

function getCommand(cli: string, os: string): string {
  const path = os === 'Windows'
    ? `".\\${VSIX}"`
    : `./${VSIX}`;
  return `${cli} --install-extension ${path}`;
}

interface Props {
  t: T;
}

export default function InstallCommands({ t }: Props) {
  const cli = t.features.installCli;
  const [os, setOs] = useState<string>('Mac');
  const [copied, setCopied] = useState<string | null>(null);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <div className="mt-10 rounded-xl border border-border bg-canvas-subtle overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <p className="font-semibold text-fg text-sm">{cli.heading}</p>
          <p className="text-xs text-fg-muted mt-0.5">{cli.subheading}</p>
        </div>

        {/* OS tabs */}
        <div className="flex items-center gap-0.5 bg-canvas border border-border rounded-lg p-0.5 self-start sm:self-auto">
          {cli.tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setOs(tab)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                os === tab
                  ? 'bg-accent/15 text-accent-emphasis'
                  : 'text-fg-muted hover:text-fg'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Commands list */}
      <div className="divide-y divide-border">
        {EDITORS.map(editor => {
          const cmd = getCommand(editor.cli, os);
          const key = `${editor.cli}-${os}`;
          const isCopied = copied === key;

          return (
            <div key={editor.label} className="px-5 py-3.5 flex items-center gap-3 group">
              {/* Editor label */}
              <span className={`shrink-0 w-24 text-xs font-semibold ${editor.color}`}>
                {editor.label}
              </span>

              {/* Command */}
              <code className="flex-1 font-mono text-xs text-fg-muted bg-canvas px-3 py-2 rounded-lg border border-border truncate select-all">
                <span className="text-success mr-1.5">$</span>
                {cmd}
              </code>

              {/* Copy button */}
              <button
                onClick={() => copy(cmd, key)}
                title={isCopied ? cli.copied : cli.copy}
                className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                  isCopied
                    ? 'border-success/30 bg-success/10 text-success'
                    : 'border-border bg-canvas text-fg-muted hover:text-fg hover:border-border-muted opacity-0 group-hover:opacity-100'
                }`}
              >
                {isCopied ? (
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                  </svg>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
