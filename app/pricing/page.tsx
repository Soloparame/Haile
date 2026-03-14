'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export default function PricingPage() {
  const { t } = useLanguage()

  const plans = [
    {
      name: 'Starter',
      price: '35,000 ETB',
      description: 'Perfect for small businesses and personal brands just getting started.',
      features: ['Up to 5 Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO', '1 Month Support'],
    },
    {
      name: 'Professional',
      price: '75,000 ETB',
      description: 'Ideal for growing businesses that need more features and flexibility.',
      features: ['Up to 12 Pages', 'Blog or News Section', 'Advanced SEO Setup', 'Analytics Integration', '3 Months Support'],
    },
    {
      name: 'Enterprise',
      price: 'Custom (ETB)',
      description: 'Advanced, fully custom solutions for larger organizations and complex systems.',
      features: ['Custom Web or Mobile App', 'Database & API Integration', 'User Authentication', 'Cloud Infrastructure', 'Priority Support'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={t.pricing}
        subtitle="Simple and transparent pricing for your needs."
      />

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface border border-surface-border rounded-2xl p-6 md:p-8 hover:border-primary-green/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                  </svg>
                </div>

                <h3 className="text-foreground text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-4">{plan.price}</div>
                <p className="text-text-muted text-sm md:text-base mb-6">{plan.description}</p>

                <ul className="space-y-3 md:space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground/90 text-sm md:text-base">
                      <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 text-center bg-primary-green text-gray-900 font-semibold rounded-full hover:bg-primary-green/90 transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
