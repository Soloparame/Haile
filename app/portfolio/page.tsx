 'use client'

import PortfolioSection from '@/components/PortfolioSection'
import { motion } from 'framer-motion'
import { portfolioItems } from '@/constants/data'

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Explore some of our recent projects and see how we&apos;ve helped businesses succeed.
            </p>
          </motion.div>
        </div>
      </section>
      <PortfolioSection />

      {/* Additional Portfolio Items */}
      <section className="py-20 bg-primary-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">More Projects</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A showcase of our diverse range of successful projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 hover:border-primary-green/40 transition-all group"
              >
                <div className="w-20 h-20 rounded-full bg-primary-green/20 mb-6 flex items-center justify-center border border-primary-green/30 group-hover:border-primary-green/50 transition-colors">
                  <span className="text-primary-green text-3xl font-bold">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg">{item.title}</h3>
                <p className="text-white/60 mb-4">{item.description}</p>
                <div className="flex items-center text-primary-green">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>{item.supporters} {item.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

