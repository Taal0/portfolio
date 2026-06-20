import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/languageContext'
import { Tag } from './Tag'

interface BentoCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function BentoCard({ project, onSelect }: BentoCardProps) {
  const { lang } = useLanguage()
  const reduced = useReducedMotion()
  const content = project[lang]

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      className={`group relative flex flex-col gap-3 rounded-sm border border-border bg-bg p-4 text-left transition-colors hover:border-accent/50 hover:phosphor-border ${project.span}`}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              boxShadow: '0 0 16px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(0, 0, 0, 0.3)',
            }
      }
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3">
        <img
          src={project.logo}
          alt=""
          className="h-10 w-10 rounded-sm border border-border bg-surface p-1"
          width={40}
          height={40}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-text group-hover:text-accent group-hover:phosphor-text">
            {content.title}
          </h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {content.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted">{content.problem}</p>
    </motion.button>
  )
}
