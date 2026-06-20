import { cvData } from '../data/cv'
import { useLanguage } from '../i18n/languageContext'

function TimelineSection({
  title,
  entries,
}: {
  title: string
  entries: typeof cvData.experience
}) {
  const { lang } = useLanguage()

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-accent-secondary">{title}</h2>
      <div className="space-y-6 border-l border-border pl-4">
        {entries.map((entry) => (
          <div key={entry.period + entry.title[lang]} className="relative">
            <div className="absolute -left-[calc(1rem+5px)] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <time className="text-xs text-muted">{entry.period}</time>
            <h3 className="mt-1 font-medium text-text">{entry.title[lang]}</h3>
            <p className="text-sm text-accent">{entry.org[lang]}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {entry.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function CV() {
  const { lang, t } = useLanguage()

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-accent">{t('cv.title')}</h1>
          <p className="mt-1 text-sm text-muted">{t('cv.subtitle')}</p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="inline-flex shrink-0 items-center justify-center rounded-sm border border-accent bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/20"
        >
          {t('cv.download')}
        </a>
      </header>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-accent-secondary">
          {t('cv.skills')}
        </h2>
        <div className="flex flex-wrap gap-2">
          {cvData.skills[lang].map((skill) => (
            <span
              key={skill}
              className="rounded-sm border border-border bg-bg px-3 py-1 text-sm text-text"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <TimelineSection title={t('cv.experience')} entries={cvData.experience} />
      <TimelineSection title={t('cv.education')} entries={cvData.education} />
    </div>
  )
}
