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
  created_at: string;
}

export async function getFeedbacks(): Promise<Feedback[]> {
  return query<Feedback>(
    `SELECT id, name, type, message, rating, created_at
     FROM vscode_http_extencion_feedbacks.feedbacks
     ORDER BY created_at DESC
     LIMIT 50`
  );
}

export async function insertFeedback(data: {
  name: string;
  type: string;
  message: string;
  rating: number | null;
}): Promise<Feedback> {
  const rows = await query<Feedback>(
    `INSERT INTO vscode_http_extencion_feedbacks.feedbacks (name, type, message, rating)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [data.name, data.type, data.message, data.rating]
  );
  return rows[0];
}
