'use client';

import { useState } from 'react';
import type { Feedback } from '@/lib/db';
import type { T } from '@/lib/i18n';

function timeAgo(dateStr: string, t: T): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return t.feedback.form.successMsg.includes('¡') ? 'justo ahora' : 'just now';
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d`;
  return new Date(dateStr).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

interface Props {
  t: T;
  initialFeedbacks: Feedback[];
}

export default function FeedbackList({ t, initialFeedbacks }: Props) {
  const [filter, setFilter] = useState<string>('all');
  const fb = t.feedback;
  const feedbacks = initialFeedbacks;

  const TYPE_STYLES: Record<string, { label: string; emoji: string; color: string }> = {
    praise:  { label: fb.types.praise,  emoji: '⭐', color: 'text-warning border-warning/20 bg-warning/10' },
    feature: { label: fb.types.feature, emoji: '💡', color: 'text-accent-emphasis border-accent/20 bg-accent/10' },
    bug:     { label: fb.types.bug,     emoji: '🐛', color: 'text-danger border-danger/20 bg-danger/10' },
    general: { label: fb.types.general, emoji: '💬', color: 'text-fg-muted border-border bg-canvas-subtle' },
  };

  const filtered = filter === 'all' ? feedbacks : feedbacks.filter(f => f.type === filter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-1.5 mb-5 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-accent/15 text-accent-emphasis border border-accent/20'
              : 'bg-canvas border border-border text-fg-muted hover:text-fg hover:border-border-muted'
          }`}
        >
          {fb.filterAll} ({feedbacks.length})
        </button>
        {(['praise', 'feature', 'bug', 'general'] as const).map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === type
                ? 'bg-accent/15 text-accent-emphasis border border-accent/20'
                : 'bg-canvas border border-border text-fg-muted hover:text-fg hover:border-border-muted'
            }`}
          >
            {TYPE_STYLES[type].emoji} {TYPE_STYLES[type].label}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-fg-muted text-sm">
          <p className="text-3xl mb-3">💬</p>
          <p>{fb.empty}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => {
            const style = TYPE_STYLES[item.type] ?? TYPE_STYLES.general;
            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-canvas-subtle border border-border hover:border-border-muted transition-colors animate-fade-in"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-accent-emphasis text-xs font-bold shrink-0">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-fg text-sm truncate">{item.name}</span>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${style.color}`}>
                      {style.emoji} {style.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.rating && (
                      <span className="text-xs text-warning font-mono">
                        {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                      </span>
                    )}
                    <span className="text-xs text-fg-subtle whitespace-nowrap">
                      {timeAgo(item.created_at, t)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-fg-muted leading-relaxed pl-9 break-words">
                  {item.message}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
