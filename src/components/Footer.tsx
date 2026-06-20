import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/languageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto shrink-0 border-t border-border px-4 py-3 text-xs text-muted md:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year}. {t('footer.rights')}
        </span>
        <div className="flex gap-4">
          <Link to="/legal/privacy" className="hover:text-accent">
            {t('legal.privacy')}
          </Link>
          <Link to="/legal/terms" className="hover:text-accent">
            {t('legal.terms')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
