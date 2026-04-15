import { getLang, getT, type Lang } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import ReleasesSection from '@/components/ReleasesSection';

export const dynamic = 'force-dynamic';

export default function ReleasesPage({ params }: { params: { lang: string } }) {
  const lang: Lang = getLang(params.lang);
  const t = getT(lang);

  return (
    <div className="min-h-screen text-fg">
      <Navbar lang={lang} t={t} />

      <main>
        <ReleasesSection t={t} lang={lang} />
      </main>

      <footer className="mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-fg-subtle">
          <p>
            {t.footer.builtBy}{' '}
            <span className="text-fg-muted font-medium">PablitoTech</span>
          </p>
          <p>{t.footer.versionLine}</p>
        </div>
      </footer>
    </div>
  );
}
