'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { portfolioItems } from '@/constants/data'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

export default function OurProductsSection() {
    // We repurpose the "Products" string to say "Projects" or you can update LanguageContext later
    const { t } = useLanguage()

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14 md:mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-surface/50 border border-surface-border rounded-full px-4 py-1.5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                        <span className="text-text-muted text-sm font-medium uppercase tracking-wider">Our Showcase</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.slice(0, 6).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-surface/60 backdrop-blur-xl border border-surface-border hover:border-primary-green/50 rounded-[32px] overflow-hidden transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,255,136,0.15)] flex flex-col h-full"
                        >
                            {/* Image Container with Hover Zoom */}
                            <div className="relative h-56 md:h-64 w-full overflow-hidden bg-surface-border/20">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-surface/20 to-transparent z-10" />
                                <div className="absolute top-4 right-4 z-20 flex space-x-2">
                                    <span className="px-3 py-1 text-xs font-semibold bg-primary-green/20 text-primary-green border border-primary-green/30 rounded-full backdrop-blur-md">
                                        {project.type}
                                    </span>
                                </div>

                                {/* Fallback inner content if image fails or before loading, combined with icon */}
                                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-10 transition-opacity">
                                    {project.icon}
                                </div>

                                {/* Assuming images exist in public folder */}
                                <div className="absolute inset-0 w-full h-full bg-surface/50 transition-transform duration-700 group-hover:scale-110">
                                    {/* Added relative positioned div to hold image or a gradient fallback */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary-green/20 to-teal-800/20" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex-grow flex flex-col z-20 -mt-10 bg-gradient-to-b from-transparent to-surface rounded-b-[32px]">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-surface border border-surface-border flex items-center justify-center shadow-sm">
                                        <span className="text-xl">{project.icon}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary-green transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-text-muted mb-6 line-clamp-3 leading-relaxed flex-grow text-sm md:text-base">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                                    <div className="flex items-center text-xs font-medium text-text-muted">
                                        <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mr-2" />
                                        {project.supporters}
                                    </div>
                                    <a
                                        href={'#'}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-border text-foreground group-hover:bg-primary-green group-hover:text-gray-900 transition-all duration-300 transform group-hover:rotate-45"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <a href="/projects" className="px-8 py-4 rounded-full border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-gray-900 font-bold transition-all duration-300 flex items-center gap-2 group">
                        View All Projects
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

