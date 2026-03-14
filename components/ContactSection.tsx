'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="quote" className="py-16 md:py-24 bg-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">
              {t.getInTouch}
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-8 leading-relaxed transition-colors duration-300">
              {t.contactSubtitle}
            </p>
            <div className="space-y-8 mt-10">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 bg-primary-green/10 rounded-[20px] flex items-center justify-center flex-shrink-0 border border-primary-green/20">
                  <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-300">{t.email}</h3>
                  <a href="mailto:rebeccayihenew@gmail.com" className="text-foreground font-bold text-lg hover:text-primary-green transition-colors">
                    rebeccayihenew@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 bg-primary-green/10 rounded-[20px] flex items-center justify-center flex-shrink-0 border border-primary-green/20">
                  <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-300">{t.phone}</h3>
                  <a href="tel:+251989991524" className="text-foreground font-bold text-lg hover:text-primary-green transition-colors">
                    +251 98 999 1524
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-surface/60 backdrop-blur-xl shadow-2xl border border-surface-border hover:border-primary-green/50 rounded-[32px] p-8 md:p-10 transition-all duration-500">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2 ml-2 transition-colors duration-300">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-surface/50 border border-surface-border rounded-full text-foreground text-sm placeholder-text-muted/60 focus:outline-none focus:border-primary-green transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2 ml-2 transition-colors duration-300">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-surface/50 border border-surface-border rounded-full text-foreground text-sm placeholder-text-muted/60 focus:outline-none focus:border-primary-green transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2 ml-2 transition-colors duration-300">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-surface/50 border border-surface-border rounded-[24px] text-foreground text-sm placeholder-text-muted/60 focus:outline-none focus:border-primary-green transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 mt-4 bg-primary-green text-gray-950 font-black rounded-full shadow-lg shadow-primary-green/20 hover:bg-primary-green/90 transition-all text-sm uppercase tracking-wider"
                >
                  {t.sendMessage}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

