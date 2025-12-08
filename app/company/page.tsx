'use client'

import React from 'react'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { useLanguage } from '@/context/LanguageContext'

export default function CompanyPage() {
    const { t } = useLanguage()
    return (
        <div className="pt-20">
            <div className="bg-primary-dark py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.company}</h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Learn more about who we are and what we do.
                </p>
            </div>
            <AboutSection />
            <TestimonialsSection />
        </div>
    )
}
