'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'

export default function TechStackSection() {
  const { t } = useLanguage()
  const categories = Array.from(new Set(techStack.map(tech => tech.category)))

  return (
    <section className="py-20 bg-primary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.ourTechStack}</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t.techStackSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const categoryTechs = techStack.filter(tech => tech.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-6"
              >
                <h3 className="text-primary-green font-semibold mb-4 text-lg">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categoryTechs.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 bg-primary-green/10 border border-primary-green/20 rounded text-white/80 text-sm"
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

