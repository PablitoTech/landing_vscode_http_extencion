import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const RELEASES_DIR = 'releases';
const LATEST_VERSION = '0.0.3';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const version = searchParams.get('version') ?? LATEST_VERSION;

  const filename = `spring-http-generator-${version}.vsix`;
  const filePath = path.resolve(process.cwd(), RELEASES_DIR, filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: `Version ${version} not found. Available versions are in the releases/ folder.` },
      { status: 404 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);
  const fileSize = fs.statSync(filePath).size;

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': String(fileSize),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
