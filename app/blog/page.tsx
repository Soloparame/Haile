'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function BlogPage() {
    const { t } = useLanguage()

    const posts = [
        {
            id: 1,
            title: 'How a Website Can Grow Your Business',
            excerpt: 'In today\'s digital age, having a strong online presence is crucial. Learn how a website attracts more customers.',
            date: 'Dec 8, 2024',
            author: 'Haile',
            category: 'Business'
        },
        {
            id: 2,
            title: 'Why Design Matters',
            excerpt: 'First impressions count. Discover why good design builds trust and professionalism for your brand.',
            date: 'Dec 5, 2024',
            author: 'Team DevCore',
            category: 'Design'
        },
        {
            id: 3,
            title: 'Top 5 Tech Trends in Ethiopia',
            excerpt: 'Exploring the rapidly growing technology landscape in Ethiopia and what it means for businesses.',
            date: 'Nov 28, 2024',
            author: 'Haile',
            category: 'Technology'
        }
    ]

    return (
        <div className="pt-20 min-h-screen bg-primary-dark text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.blog}</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Insights, updates, and news from our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary-green/50 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="h-48 bg-gray-800 relative group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for blog image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-bold bg-gradient-to-tr from-gray-700 to-gray-900">
                                    Blog Image
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                                    <span className="text-primary-green">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-green transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="text-sm text-gray-500">
                                    By {post.author}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
