'use client'

import { motion } from 'framer-motion'
import { services } from '@/constants/data'

export default function ServicesSection() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 hover:border-primary-green/40 transition-all group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-primary-green transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

