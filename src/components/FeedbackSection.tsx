'use client';

import { useState } from 'react';
import type { Feedback } from '@/lib/db';
import type { Lang, T } from '@/lib/i18n';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

interface Props {
  lang: Lang;
  t: T;
  initialFeedbacks: Feedback[];
}

export default function FeedbackSection({ lang, t, initialFeedbacks }: Props) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);
  const fb = t.feedback;

  function handleNewFeedback(feedback: Feedback) {
    if (!feedback.is_private) {
      setFeedbacks(prev => [feedback, ...prev]);
    }
  }

  return (
    <section id="feedback" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{fb.heading}</h2>
          <p className="text-fg-muted max-w-lg mx-auto">{fb.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="p-6 rounded-2xl bg-canvas-subtle border border-border">
            <h3 className="font-semibold text-fg mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
                <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
              </svg>
              {fb.formHeading}
            </h3>
            <FeedbackForm lang={lang} t={t} onSubmitted={handleNewFeedback} />
          </div>

          {/* List */}
          <div>
            <h3 className="font-semibold text-fg mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
                <path d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 5A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75ZM2.75 12h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Z" />
              </svg>
              {fb.listHeading}
              <span className="ml-auto text-xs text-fg-subtle font-normal">
                {feedbacks.length} {fb.total}
              </span>
            </h3>
            <div className="max-h-[600px] overflow-y-auto pr-1">
              <FeedbackList t={t} initialFeedbacks={feedbacks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
