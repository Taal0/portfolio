import type { Language } from '../i18n/strings'

export interface TimelineEntry {
  period: string
  title: Record<Language, string>
  org: Record<Language, string>
  description: Record<Language, string>
}

export interface CVData {
  skills: Record<Language, string[]>
  experience: TimelineEntry[]
  education: TimelineEntry[]
}

export const cvData: CVData = {
  skills: {
    tr: [
      'TypeScript / JavaScript',
      'Rust / Go',
      'React / Node.js',
      'PostgreSQL / Redis',
      'Docker / Kubernetes',
      'System Design',
    ],
    en: [
      'TypeScript / JavaScript',
      'Rust / Go',
      'React / Node.js',
      'PostgreSQL / Redis',
      'Docker / Kubernetes',
      'System Design',
    ],
  },
  experience: [
    {
      period: '2023 — Present',
      title: { tr: 'Kıdemli Yazılım Mühendisi', en: 'Senior Software Engineer' },
      org: { tr: 'Tech Corp', en: 'Tech Corp' },
      description: {
        tr: 'Mikroservis mimarisi, performans optimizasyonu ve ekip liderliği.',
        en: 'Microservices architecture, performance optimization, and team leadership.',
      },
    },
    {
      period: '2020 — 2023',
      title: { tr: 'Yazılım Mühendisi', en: 'Software Engineer' },
      org: { tr: 'Startup Inc', en: 'Startup Inc' },
      description: {
        tr: 'Full-stack geliştirme, API tasarımı ve DevOps otomasyonu.',
        en: 'Full-stack development, API design, and DevOps automation.',
      },
    },
    {
      period: '2018 — 2020',
      title: { tr: 'Stajyer Mühendis', en: 'Engineering Intern' },
      org: { tr: 'Research Lab', en: 'Research Lab' },
      description: {
        tr: 'Algoritma araştırması ve prototip geliştirme.',
        en: 'Algorithm research and prototype development.',
      },
    },
  ],
  education: [
    {
      period: '2014 — 2018',
      title: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' },
      org: { tr: 'Üniversite', en: 'University' },
      description: {
        tr: 'Veri yapıları, algoritmalar, işletim sistemleri.',
        en: 'Data structures, algorithms, operating systems.',
      },
    },
  ],
}
