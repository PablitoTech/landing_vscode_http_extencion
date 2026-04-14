'use client';

import { useState } from 'react';
import type { Feedback } from '@/lib/db';
import type { Lang, T } from '@/lib/i18n';

interface Props {
  lang: Lang;
  t: T;
  onSubmitted: (feedback: Feedback) => void;
}

export default function FeedbackForm({ t, onSubmitted }: Props) {
  const fb = t.feedback;
  const form = fb.form;

  const TYPE_OPTIONS = [
    { value: 'praise',  label: fb.types.praise,  emoji: '⭐' },
    { value: 'feature', label: fb.types.feature, emoji: '💡' },
    { value: 'bug',     label: fb.types.bug,     emoji: '🐛' },
    { value: 'general', label: fb.types.general, emoji: '💬' },
  ];

  const [name, setName] = useState('');
  const [type, setType] = useState('general');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) { setError(form.errorName); return; }
    if (!message.trim()) { setError(form.errorMessage); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/feedbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), type, message: message.trim(), rating }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }

      const feedback: Feedback = await res.json();
      onSubmitted(feedback);
      setSuccess(true);
      setName('');
      setMessage('');
      setRating(null);
      setType('general');
      setTimeout(() => setSuccess(false), 4000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-fg mb-1.5" htmlFor="fb-name">
          {form.nameLabel}
        </label>
        <input
          id="fb-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={form.namePlaceholder}
          maxLength={100}
          className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-border text-fg placeholder-fg-subtle text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-fg mb-1.5">{form.typeLabel}</label>
        <div className="grid grid-cols-2 gap-2">
          {TYPE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setType(opt.value)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                type === opt.value
                  ? 'border-accent bg-accent/10 text-accent-emphasis'
                  : 'border-border bg-canvas text-fg-muted hover:border-border-muted hover:text-fg'
              }`}
            >
              <span>{opt.emoji}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-fg mb-1.5">
          {form.ratingLabel}{' '}
          <span className="text-fg-subtle font-normal">{form.ratingOptional}</span>
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(rating === star ? null : star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              className="text-2xl transition-transform hover:scale-110 focus:outline-none"
              aria-label={`${star} star`}
            >
              <span className={star <= (hoveredStar ?? rating ?? 0) ? 'text-warning' : 'text-border'}>
                ★
              </span>
            </button>
          ))}
          {rating && (
            <span className="ml-2 text-sm text-fg-muted self-center">{rating}/5</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-fg mb-1.5" htmlFor="fb-message">
          {form.messageLabel}
        </label>
        <textarea
          id="fb-message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={form.messagePlaceholder}
          rows={4}
          className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-border text-fg placeholder-fg-subtle text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-danger/10 border border-danger/20 text-danger text-sm">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="mt-0.5 shrink-0">
            <path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
          {error}
        </div>
      )}

      {/* Success */}
      {success && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/20 text-success text-sm animate-fade-in">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          {form.successMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-emphasis disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
            </svg>
            {form.submitting}
          </>
        ) : (
          form.submitBtn
        )}
      </button>
    </form>
  );
}
