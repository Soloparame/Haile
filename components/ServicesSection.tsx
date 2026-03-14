'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {t.servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/60 backdrop-blur-xl border border-surface-border hover:border-primary-green/50 rounded-[32px] p-8 md:p-10 hover:-translate-y-2 hover:bg-surface/90 transition-all duration-500 group flex flex-col items-start shadow-xl hover:shadow-2xl hover:shadow-primary-green/20"
            >
              <div className="w-16 h-16 rounded-[20px] bg-primary-green/10 mb-6 flex items-center justify-center border border-primary-green/20 group-hover:border-primary-green/50 group-hover:bg-primary-green/20 transition-colors">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-foreground text-xl font-black mb-4 group-hover:text-primary-green transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

