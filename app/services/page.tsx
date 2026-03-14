'use client'

import ServicesSection from '@/components/ServicesSection'
import TechStackSection from '@/components/TechStackSection'
import PageHero from '@/components/PageHero'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions to help your business grow and succeed in the digital world."
      />
      <ServicesSection />
      <TechStackSection />

      {/* Process Section - WubSites style */}
      <section className="py-16 md:py-24 bg-surface transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="section-heading mb-4">Our Process</h2>
            <p className="section-subheading">
              A proven methodology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', desc: 'Creating beautiful and functional designs' },
              { step: '03', title: 'Development', desc: 'Building robust and scalable solutions' },
              { step: '04', title: 'Deployment', desc: 'Launching and maintaining your product' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-green/20 border border-primary-green/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-green text-xl md:text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
