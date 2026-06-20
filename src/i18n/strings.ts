export type Language = 'tr' | 'en'

export type StringKey =
  | 'nav.home'
  | 'nav.projects'
  | 'nav.cv'
  | 'nav.lang.tr'
  | 'nav.lang.en'
  | 'home.hero.title'
  | 'home.hero.subtitle'
  | 'home.hero.body'
  | 'home.hero.cta.projects'
  | 'home.hero.cta.cv'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.close'
  | 'cv.title'
  | 'cv.subtitle'
  | 'cv.download'
  | 'cv.experience'
  | 'cv.education'
  | 'cv.skills'
  | 'legal.privacy'
  | 'legal.terms'
  | 'footer.rights'
  | 'notFound.title'
  | 'notFound.body'
  | 'notFound.back'

const strings: Record<Language, Record<StringKey, string>> = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.cv': 'CV',
    'nav.lang.tr': 'TR',
    'nav.lang.en': 'EN',
    'home.hero.title': 'Yazılım Mühendisliği & Bilgisayar Bilimleri',
    'home.hero.subtitle': 'Sistemler, algoritmalar ve üretken mühendislik',
    'home.hero.body':
      'Ölçeklenebilir sistemler tasarlıyor, performans ve güvenilirliği önceliklendiriyorum. Açık kaynak, temiz mimari ve ölçülebilir sonuçlar odaklı çalışıyorum.',
    'home.hero.cta.projects': 'Projeleri Gör',
    'home.hero.cta.cv': 'CV İndir',
    'projects.title': 'Projeler',
    'projects.subtitle': 'Seçili çalışmalar ve teknik detaylar',
    'projects.close': 'Kapat',
    'cv.title': 'Özgeçmiş',
    'cv.subtitle': 'Deneyim, eğitim ve yetkinlikler',
    'cv.download': 'PDF İndir',
    'cv.experience': 'Deneyim',
    'cv.education': 'Eğitim',
    'cv.skills': 'Yetkinlikler',
    'legal.privacy': 'Gizlilik Politikası',
    'legal.terms': 'Kullanım Koşulları',
    'footer.rights': 'Tüm hakları saklıdır.',
    'notFound.title': '404 — Sayfa Bulunamadı',
    'notFound.body': 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    'notFound.back': 'Ana Sayfaya Dön',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.cv': 'CV',
    'nav.lang.tr': 'TR',
    'nav.lang.en': 'EN',
    'home.hero.title': 'Software Engineering & Computer Science',
    'home.hero.subtitle': 'Systems, algorithms, and productive engineering',
    'home.hero.body':
      'I design scalable systems with a focus on performance and reliability. I work with open source, clean architecture, and measurable outcomes.',
    'home.hero.cta.projects': 'View Projects',
    'home.hero.cta.cv': 'Download CV',
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected work and technical details',
    'projects.close': 'Close',
    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Experience, education, and skills',
    'cv.download': 'Download PDF',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.skills': 'Skills',
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.',
    'notFound.title': '404 — Page Not Found',
    'notFound.body': 'The page you are looking for does not exist or may have been moved.',
    'notFound.back': 'Back to Home',
  },
}

export function getString(lang: Language, key: StringKey): string {
  return strings[lang][key]
}
