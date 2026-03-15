'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section className="py-16 md:py-24 bg-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">
              {t.aboutDevCore}
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-6 leading-relaxed transition-colors duration-300">
              {t.aboutDescription1}
            </p>
            <p className="text-text-muted text-lg mb-8 leading-relaxed transition-colors duration-300">
              {t.aboutDescription2}
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-surface/60 backdrop-blur-md border border-primary-green/10 rounded-[20px] px-6 py-5 flex-1 min-w-[140px] shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-primary-green mb-1">10+</div>
                <div className="text-text-muted text-xs font-bold uppercase tracking-wider">{t.projectsCompleted}</div>
              </div>
              <div className="bg-surface/60 backdrop-blur-md border border-primary-green/10 rounded-[20px] px-6 py-5 flex-1 min-w-[140px] shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-primary-green mb-1">4+</div>
                <div className="text-text-muted text-xs font-bold uppercase tracking-wider">{t.happyClients}</div>
              </div>
              <div className="bg-surface/60 backdrop-blur-md border border-primary-green/10 rounded-[20px] px-6 py-5 flex-1 min-w-[140px] shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-primary-green mb-1">3+</div>
                <div className="text-text-muted text-xs font-bold uppercase tracking-wider">{t.yearsExperience}</div>
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
            <div className="bg-surface/60 backdrop-blur-xl border-none rounded-[32px] p-8 md:p-10 shadow-2xl hover:shadow-primary-green/10 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-[20px] border border-primary-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-black mb-2 transition-colors duration-300">{t.ourVision}</h3>
                    <p className="text-text-muted text-sm leading-relaxed transition-colors duration-300">
                      {t.visionDescription}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-[20px] border border-primary-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-black mb-2 transition-colors duration-300">{t.ourValues}</h3>
                    <p className="text-text-muted text-sm leading-relaxed transition-colors duration-300">
                      {t.valuesDescription}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-[20px] border border-primary-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-black mb-2 transition-colors duration-300">{t.ourApproach}</h3>
                    <p className="text-text-muted text-sm leading-relaxed transition-colors duration-300">
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

