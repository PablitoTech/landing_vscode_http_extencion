import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const VSIX_FILENAME = 'spring-http-generator-0.0.2.vsix';

export async function GET() {
  const filePath = path.resolve(process.cwd(), VSIX_FILENAME);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: 'Extension file not found. Run "vsce package" from the root first.' },
      { status: 404 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);
  const fileSize = fs.statSync(filePath).size;

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${VSIX_FILENAME}"`,
      'Content-Length': String(fileSize),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
