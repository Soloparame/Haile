'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.whatOurClientsSay}</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 hover:border-primary-green/40 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-green/20 border border-primary-green/30 flex items-center justify-center mr-4">
                  <span className="text-primary-green text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

