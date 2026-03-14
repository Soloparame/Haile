'use client'

import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { useLanguage } from '@/context/LanguageContext'
import PageHero from '@/components/PageHero'

export default function CompanyPage() {
  const { t } = useLanguage()

  return (
    <div>
      <PageHero title={t.company} subtitle={t.aboutDevCoreSubtitle} />
      <AboutSection />
      <TestimonialsSection />
    </div>
  )
}
