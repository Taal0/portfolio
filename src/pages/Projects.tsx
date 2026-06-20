import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BentoCard } from '../components/BentoCard'
import { projects, type Project } from '../data/projects'
import { useLanguage } from '../i18n/languageContext'

export default function Projects() {
  const { lang, t } = useLanguage()
  const reduced = useReducedMotion()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div className="flex flex-1 flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold text-accent">{t('projects.title')}</h1>
        <p className="mt-1 text-sm text-muted">{t('projects.subtitle')}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <BentoCard key={project.id} project={project} onSelect={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-md border border-border bg-surface p-6"
              initial={reduced ? false : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-detail-title"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h2 id="project-detail-title" className="text-xl font-semibold text-accent">
                  {selected[lang].title}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-sm border border-border px-3 py-1 text-sm text-muted hover:text-text"
                >
                  {t('projects.close')}
                </button>
              </div>
              <div className="prose-crt">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selected.markdown[lang]}
                </ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
