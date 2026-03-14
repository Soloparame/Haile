'use client'

import React from 'react'
import OurProductsSection from '@/components/OurProductsSection'
import PageHero from '@/components/PageHero'
import { useLanguage } from '@/context/LanguageContext'

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="Explore our featured work. We build scalable, beautiful, and performant digital solutions tailored to client needs."
      />
      <OurProductsSection />
    </div>
  )
}
