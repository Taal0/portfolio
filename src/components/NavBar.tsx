import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/languageContext'

const navItems = [
  { key: 'nav.home' as const, path: '/' },
  { key: 'nav.projects' as const, path: '/projeler' },
  { key: 'nav.cv' as const, path: '/cv' },
]

export function NavBar() {
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-20 shrink-0 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-2 py-2.5 md:px-1">
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map(({ key, path }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`rounded-sm px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'bg-surface text-accent phosphor-text phosphor-border'
                    : 'text-muted hover:text-text'
                }`}
              >
                [{t(key)}]
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-1 text-sm">
          <button
            type="button"
            onClick={() => setLang('tr')}
            className={`rounded-sm px-2 py-1 transition-colors ${
              lang === 'tr' ? 'text-accent' : 'text-muted hover:text-text'
            }`}
            aria-pressed={lang === 'tr'}
          >
            {t('nav.lang.tr')}
          </button>
          <span className="text-border">|</span>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`rounded-sm px-2 py-1 transition-colors ${
              lang === 'en' ? 'text-accent' : 'text-muted hover:text-text'
            }`}
            aria-pressed={lang === 'en'}
          >
            {t('nav.lang.en')}
          </button>
        </div>
      </nav>
    </header>
  )
}
