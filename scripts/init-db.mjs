import pg from 'pg';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { Pool } = pg;

// Load .env.local manually
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env.local');

try {
  const envContent = readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) {
      process.env[key.trim()] = rest.join('=').trim().replace(/^"|"$/g, '');
    }
  }
} catch {
  console.error('Could not read .env.local — make sure DATABASE_URL is set');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function init() {
  const client = await pool.connect();
  try {
    console.log('Connecting to database...');

    await client.query(`CREATE SCHEMA IF NOT EXISTS vscode_http_extencion_feedbacks`);
    console.log('Schema ready.');

    await client.query(`
      CREATE TABLE IF NOT EXISTS vscode_http_extencion_feedbacks.feedbacks (
        id         SERIAL PRIMARY KEY,
        name       VARCHAR(100) NOT NULL,
        type       VARCHAR(50)  NOT NULL CHECK (type IN ('bug', 'feature', 'general', 'praise')),
        message    TEXT         NOT NULL,
        rating     INTEGER      CHECK (rating BETWEEN 1 AND 5),
        created_at TIMESTAMPTZ  DEFAULT NOW()
      )
    `);
    console.log('Table feedbacks ready.');

    console.log('\nDatabase initialized successfully.');
  } finally {
    client.release();
    await pool.end();
  }
}

init().catch(err => {
  console.error('Initialization failed:', err.message);
  process.exit(1);
});
