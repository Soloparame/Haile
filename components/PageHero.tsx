'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-28 sm:pt-32 pb-14 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            {title}
          </h1>
          <p className="section-subheading text-base md:text-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
