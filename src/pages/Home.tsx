import { Link } from 'react-router-dom'
import { TerminalSim } from '../components/TerminalSim'
import { useLanguage } from '../i18n/languageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="grid flex-1 gap-8 md:grid-cols-2 md:gap-10">
        <TerminalSim />

        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="mb-2 text-sm text-accent-secondary">{t('home.hero.subtitle')}</p>
            <h1 className="text-2xl font-semibold leading-tight text-text md:text-3xl">
              {t('home.hero.title')}
            </h1>
          </div>

          <p className="leading-relaxed text-muted">{t('home.hero.body')}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/projeler"
              className="phosphor-border rounded-sm border border-accent bg-accent/10 px-4 py-2 text-sm text-accent phosphor-text transition-colors hover:bg-accent/20"
            >
              {t('home.hero.cta.projects')}
            </Link>
            <Link
              to="/cv"
              className="rounded-sm border border-border px-4 py-2 text-sm text-text transition-colors hover:border-accent/40 hover:text-accent"
            >
              {t('home.hero.cta.cv')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
