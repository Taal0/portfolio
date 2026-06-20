import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import privacyEn from '../content/legal/privacy.en.md?raw'
import privacyTr from '../content/legal/privacy.tr.md?raw'
import termsEn from '../content/legal/terms.en.md?raw'
import termsTr from '../content/legal/terms.tr.md?raw'
import { useLanguage } from '../i18n/languageContext'

const docs: Record<string, { tr: string; en: string }> = {
  privacy: { tr: privacyTr, en: privacyEn },
  terms: { tr: termsTr, en: termsEn },
}

export default function Legal() {
  const { doc } = useParams<{ doc: string }>()
  const { lang, t } = useLanguage()

  const content = doc ? docs[doc]?.[lang] : undefined

  if (!content) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-xl text-accent">{t('notFound.title')}</h1>
        <p className="text-muted">{t('notFound.body')}</p>
      </div>
    )
  }

  return (
    <article className="prose-crt mx-auto max-w-2xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
