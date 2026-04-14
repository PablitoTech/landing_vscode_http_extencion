import { Pool } from 'pg';

let pool: Pool;

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 10,
    });
  }
  return pool;
}

export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const client = await getPool().connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
}

export interface Feedback {
  id: number;
  name: string;
  type: 'bug' | 'feature' | 'general' | 'praise';
  message: string;
  rating: number | null;
  is_private: boolean;
  created_at: string;
}

/** Returns only public feedbacks — private ones are admin-only (DB level) */
export async function getFeedbacks(): Promise<Feedback[]> {
  return query<Feedback>(
    `SELECT id, name, type, message, rating, created_at
     FROM vscode_http_extencion_feedbacks.feedbacks
     WHERE is_private = FALSE
     ORDER BY created_at DESC
     LIMIT 50`
  );
}

export async function insertFeedback(data: {
  name: string;
  type: string;
  message: string;
  rating: number | null;
  is_private: boolean;
}): Promise<Feedback> {
  const rows = await query<Feedback>(
    `INSERT INTO vscode_http_extencion_feedbacks.feedbacks
       (name, type, message, rating, is_private)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, type, message, rating, is_private, created_at`,
    [data.name, data.type, data.message, data.rating, data.is_private]
  );
  return rows[0];
}
