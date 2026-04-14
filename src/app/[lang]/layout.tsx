import type { Metadata } from 'next';
import { getLang, getT, LANGS } from '@/lib/i18n';

export async function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = getT(getLang(params.lang));
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: ['spring boot', 'vscode extension', 'http client', 'rest api', 'java'],
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = getLang(params.lang);
  return (
    <>
      {/* Set the lang attribute on <html> without hydration mismatch */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${lang}';`,
        }}
      />
      {children}
    </>
  );
}
