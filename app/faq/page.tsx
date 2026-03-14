'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import PageHero from '@/components/PageHero'

export default function FAQPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'The cost depends on what you need. A simple website is cheaper than a complex one with many features. We have clear pricing packages starting from $999.',
    },
    {
      question: 'How long does it take to build?',
      answer: 'Typically, a standard website takes about 2-4 weeks. Larger projects might take longer. We will give you a schedule before we start.',
    },
    {
      question: 'Can I update the website myself?',
      answer: 'Yes! We can set up a system so you can easily change text and pictures without needing to know how to code.',
    },
    {
      question: 'Do you provide support after the website is finished?',
      answer: 'Absolutely. We offer maintenance packages to keep your website safe and updated. We are always here to help.',
    },
    {
      question: 'Do you make mobile apps too?',
      answer: 'Yes, we build apps for both iPhones and Android phones.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHero title={t.faq} subtitle={t.faqSubtitle} />

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-surface-border rounded-2xl overflow-hidden bg-surface hover:border-primary-green/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-primary-green/5 transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-foreground pr-4">{faq.question}</span>
        <span className={`flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-text-muted border-t border-surface-border text-sm md:text-base leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
