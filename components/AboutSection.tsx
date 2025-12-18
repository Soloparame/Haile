'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-primary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.aboutDevCore}
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              {t.aboutDescription1}
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {t.aboutDescription2}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">500+</div>
                <div className="text-white/60 text-sm">{t.projectsCompleted}</div>
              </div>
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">200+</div>
                <div className="text-white/60 text-sm">{t.happyClients}</div>
              </div>
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">10+</div>
                <div className="text-white/60 text-sm">{t.yearsExperience}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 glow-green-soft">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t.ourVision}</h3>
                    <p className="text-white/60">
                      {t.visionDescription}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t.ourValues}</h3>
                    <p className="text-white/60">
                      {t.valuesDescription}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t.ourApproach}</h3>
                    <p className="text-white/60">
                      {t.approachDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

