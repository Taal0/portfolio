import projectAlphaMd from '../content/projects/alpha.md?raw'
import projectBetaMd from '../content/projects/beta.md?raw'
import projectGammaMd from '../content/projects/gamma.md?raw'
import type { Language } from '../i18n/strings'

export interface ProjectContent {
  title: string
  tags: string[]
  problem: string
}

export interface Project {
  id: string
  logo: string
  span: string
  markdown: Record<Language, string>
  tr: ProjectContent
  en: ProjectContent
}

export const projects: Project[] = [
  {
    id: 'alpha',
    logo: '/logos/alpha.svg',
    span: 'md:col-span-2',
    markdown: {
      tr: projectAlphaMd,
      en: projectAlphaMd,
    },
    tr: {
      title: 'Dağıtık Görev Kuyruğu',
      tags: ['Rust', 'Redis', 'Systems'],
      problem:
        'Yüksek hacimli arka plan işlerini düşük gecikmeyle işleyen, yatay ölçeklenebilir bir kuyruk sistemi.',
    },
    en: {
      title: 'Distributed Task Queue',
      tags: ['Rust', 'Redis', 'Systems'],
      problem:
        'Horizontally scalable queue system processing high-volume background jobs with low latency.',
    },
  },
  {
    id: 'beta',
    logo: '/logos/beta.svg',
    span: 'md:col-span-1',
    markdown: {
      tr: projectBetaMd,
      en: projectBetaMd,
    },
    tr: {
      title: 'Analitik Panel',
      tags: ['React', 'TypeScript', 'D3'],
      problem:
        'Gerçek zamanlı metrikleri görselleştiren, özelleştirilebilir dashboard arayüzü.',
    },
    en: {
      title: 'Analytics Dashboard',
      tags: ['React', 'TypeScript', 'D3'],
      problem: 'Customizable dashboard UI visualizing real-time metrics.',
    },
  },
  {
    id: 'gamma',
    logo: '/logos/gamma.svg',
    span: 'md:col-span-1',
    markdown: {
      tr: projectGammaMd,
      en: projectGammaMd,
    },
    tr: {
      title: 'CLI Araç Seti',
      tags: ['Go', 'CLI', 'DevOps'],
      problem:
        "CI/CD pipeline'larında kullanılan, modüler komut satırı araçları paketi.",
    },
    en: {
      title: 'CLI Toolkit',
      tags: ['Go', 'CLI', 'DevOps'],
      problem: 'Modular command-line tools package used in CI/CD pipelines.',
    },
  },
]
