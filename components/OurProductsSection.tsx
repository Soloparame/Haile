'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ourProducts } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'

export default function OurProductsSection() {
    const { t } = useLanguage()

    return (
        <section className="py-20 bg-primary-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-green/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-blue-500 mb-4">
                        {t.ourProducts}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.ourProductsSubtitle}
                    </p>
                    <div className="w-20 h-1 bg-primary-green mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ourProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary-green/50 transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gray-800 relative">
                                {/* Placeholder for product image - using a colored div for now since we don't have real images yet */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/20 text-4xl font-bold">
                                    {product.title[0]}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-green transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {product.description}
                                </p>

                                <a
                                    href={product.link}
                                    className="inline-flex items-center text-primary-green hover:text-white transition-colors"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
