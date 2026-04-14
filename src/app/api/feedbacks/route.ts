import { NextRequest, NextResponse } from 'next/server';
import { getFeedbacks, insertFeedback } from '@/lib/db';

export async function GET() {
  try {
    const feedbacks = await getFeedbacks();
    return NextResponse.json(feedbacks);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, type, message, rating } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!['bug', 'feature', 'general', 'praise'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (rating !== null && (typeof rating !== 'number' || rating < 1 || rating > 5)) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
    }

    const feedback = await insertFeedback({
      name: name.trim().slice(0, 100),
      type,
      message: message.trim(),
      rating: rating ?? null,
    });

    return NextResponse.json(feedback, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
