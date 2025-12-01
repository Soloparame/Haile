'use client'

import { motion } from 'framer-motion'
import { portfolioItems } from '@/constants/data'

interface PortfolioSectionProps {
  showHeading?: boolean
}

export default function PortfolioSection({ showHeading = true }: PortfolioSectionProps) {
  return (
    <section className={`${showHeading ? 'py-20' : 'pb-20 pt-12'} bg-primary-dark`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Explore some of our recent projects and see how we&apos;ve helped businesses succeed.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-6 hover:border-primary-green/40 transition-all group"
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-primary-green/20 mb-4 flex items-center justify-center border border-primary-green/30 group-hover:border-primary-green/50 transition-colors">
                <span className="text-primary-green text-2xl font-bold">
                  {item.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-white font-semibold mb-2 text-sm leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-xs mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center text-primary-green text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>{item.supporters} {item.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

