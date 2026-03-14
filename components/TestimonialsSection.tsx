'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()
  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="section-heading mb-4">{t.whatOurClientsSay}</h2>
          <p className="section-subheading">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/60 backdrop-blur-xl border border-surface-border hover:border-primary-green/50 rounded-[32px] p-8 md:p-10 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-primary-green/15 transition-all duration-500 flex flex-col justify-between group"
            >
              <p className="text-foreground text-[15px] leading-relaxed italic mb-8 flex-grow">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center mt-auto border-t border-surface-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-green/10 border border-primary-green/30 flex items-center justify-center mr-4">
                  <span className="text-primary-green text-xl font-black">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-black transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-wider transition-colors duration-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

