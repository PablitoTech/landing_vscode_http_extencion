import { NextRequest, NextResponse } from 'next/server';
import { LANGS, type Lang } from '@/lib/i18n';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only handle the root path
  if (pathname !== '/') return NextResponse.next();

  // Detect preferred language from Accept-Language header
  const acceptLang = req.headers.get('accept-language') ?? '';
  const preferred = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase();
  const lang: Lang = LANGS.includes(preferred as Lang) ? (preferred as Lang) : 'en';

  return NextResponse.redirect(new URL(`/${lang}`, req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
