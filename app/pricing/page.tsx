'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function PricingPage() {
    const { t } = useLanguage()

    const plans = [
        {
            name: 'Starter',
            price: '$999',
            description: 'Perfect for small businesses just getting started.',
            features: ['5 Page Website', 'Mobile Responsive', 'Contact Form', '1 Month Support']
        },
        {
            name: 'Professional',
            price: '$2,499',
            description: 'Everything you need to grow your business.',
            features: ['10 Page Website', 'Blog Integration', 'SEO Optimization', '3 Months Support', 'Analytics']
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Advanced solutions for large organizations.',
            features: ['Custom Web App', 'Database Integration', 'User Authentication', 'Priority Support', 'Cloud Hosting']
        }
    ]

    return (
        <div className="pt-20 min-h-screen bg-primary-dark text-white">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.pricing}</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Simple and transparent pricing for your needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-green/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-24 h-24 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-primary-green mb-4">{plan.price}</div>
                            <p className="text-gray-400 mb-6">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 bg-white/10 hover:bg-primary-green hover:text-primary-dark rounded-lg font-semibold transition-all duration-300">
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
