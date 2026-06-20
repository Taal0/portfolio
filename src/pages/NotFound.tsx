import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/languageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-semibold text-accent">{t('notFound.title')}</h1>
      <p className="max-w-md text-muted">{t('notFound.body')}</p>
      <Link
        to="/"
        className="rounded-sm border border-accent px-4 py-2 text-sm text-accent hover:bg-accent/10"
      >
        {t('notFound.back')}
      </Link>
    </div>
  )
}
