'use client'

import PortfolioSection from '@/components/PortfolioSection'
import PageHero from '@/components/PageHero'
import { motion } from 'framer-motion'
import { portfolioItems } from '@/constants/data'

export default function PortfolioPage() {
  return (
    <div>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore some of our recent projects and see how we've helped businesses succeed."
      />
      <PortfolioSection />

      {/* More Projects - WubSites style */}
      <section className="py-16 md:py-24 bg-surface transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="section-heading mb-4">More Projects</h2>
            <p className="section-subheading">A showcase of our diverse range of successful projects.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-surface-border rounded-2xl p-6 md:p-8 hover:border-primary-green/40 transition-all group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-green/20 mb-5 flex items-center justify-center border border-primary-green/30 group-hover:border-primary-green/50 transition-colors">
                  <span className="text-primary-green text-2xl md:text-3xl font-bold">
                    {item.icon ?? item.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-foreground font-semibold mb-3 text-lg">{item.title}</h3>
                <p className="text-text-muted text-sm md:text-base mb-4">{item.description}</p>
                <div className="flex items-center text-primary-green text-sm font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.supporters} {item.type}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
