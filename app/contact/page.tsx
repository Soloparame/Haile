'use client'

import ContactSection from '@/components/ContactSection'
import PageHero from '@/components/PageHero'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive web development, mobile app development, UI/UX design, cloud deployment, API development, and DevOps services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during the initial consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer maintenance and support packages to ensure your project continues to run smoothly after launch. This includes updates, bug fixes, and technical support.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Next.js, TypeScript, Node.js, Python, Docker, AWS, and many others. We choose the best stack for each project.',
    },
  ]

  return (
    <div>
      <PageHero
        title={t.contactUs}
        subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      <ContactSection />

      {/* FAQ Section - WubSites style */}
      <section className="py-16 md:py-24 bg-surface transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="section-heading mb-4">{t.frequentlyAskedQuestions}</h2>
            <p className="section-subheading">{t.faqSubtitle}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background border border-surface-border rounded-2xl p-6 hover:border-primary-green/30 transition-colors"
              >
                <h3 className="text-foreground font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
