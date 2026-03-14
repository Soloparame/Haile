'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 bg-background">
      {/* Circle gradients - WubSites style */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-primary-green/25 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-primary-green/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-green/10 rounded-full blur-[80px] pointer-events-none" />



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-6xl flex flex-col items-center">


          {/* Line-by-line headline - WubSites style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 md:mb-8"
          >
            <span className="hero-headline-line text-foreground">{t.heroLine1}</span>
            <span className="hero-headline-line text-foreground">{t.heroLine2}</span>
            <span className="hero-headline-line text-foreground">{t.heroLine3}</span>
            <span className="hero-headline-line bg-clip-text text-transparent bg-gradient-to-r from-primary-green via-emerald-400 to-teal-500">
              {t.heroLine4}
            </span>
          </motion.h1>



          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-green text-gray-950 font-bold rounded-full text-sm uppercase tracking-wide hover:bg-primary-green/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] hover:-translate-y-1"
            >
              {t.getQuoteNow}
              <span aria-hidden className="group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 rounded-full border border-surface-border bg-surface/30 backdrop-blur-md text-foreground font-medium hover:border-primary-green/50 hover:text-primary-green hover:bg-surface/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
            >
              {t.learnMore}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
