'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 glow-green-soft" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 glow-green-soft" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 lg:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
              <span className="text-primary-green text-sm font-medium">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-white/80 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-green text-primary-dark font-semibold rounded-lg glow-green hover:bg-primary-green/90 transition-all text-lg w-full sm:w-auto text-center"
              >
                {t.contactUs}
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-primary-green text-primary-green font-semibold rounded-lg hover:bg-primary-green/10 transition-all text-lg w-full sm:w-auto text-center"
              >
                {t.learnMore}
              </Link>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xs lg:max-w-sm mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-blue-500/20 rounded-2xl blur-xl" />
              <img
                src="/hero-image.png"
                alt="Digital Solutions"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl hidden md:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">100% Success</div>
                    <div className="text-xs text-gray-400">Project Completion</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

