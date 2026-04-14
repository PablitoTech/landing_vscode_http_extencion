import { getFeedbacks } from '@/lib/db';
import { getLang, getT, type Lang } from '@/lib/i18n';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FeedbackSection from '@/components/FeedbackSection';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: { lang: string } }) {
  const lang: Lang = getLang(params.lang);
  const t = getT(lang);

  let initialFeedbacks: Awaited<ReturnType<typeof getFeedbacks>> = [];
  try {
    initialFeedbacks = await getFeedbacks();
  } catch {
    // DB might not be initialized yet; page still renders
  }

  return (
    <div className="min-h-screen bg-canvas text-fg">
      <Navbar lang={lang} t={t} />

      <main>
        <HeroSection lang={lang} t={t} />
        <FeaturesSection t={t} />
        <FeedbackSection lang={lang} t={t} initialFeedbacks={initialFeedbacks} />
      </main>

      <footer className="border-t border-border mt-20">
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
