'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'

export default function TechStackSection() {
  const { t } = useLanguage()
  const categories = Array.from(new Set(techStack.map(tech => tech.category)))

  return (
    <section className="py-16 md:py-24 bg-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="section-heading mb-4">{t.ourTechStack}</h2>
          <p className="section-subheading">
            {t.techStackSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((category, index) => {
            const categoryTechs = techStack.filter(tech => tech.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface/60 backdrop-blur-xl border-none rounded-[32px] p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-green/20 transition-all duration-500"
              >
                <h3 className="text-primary-green font-semibold mb-4 text-lg">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categoryTechs.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 bg-primary-green/10 border border-primary-green/20 rounded-full text-foreground/80 text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-primary-green/20 hover:text-primary-green"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

