'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import PageHero from '@/components/PageHero'

export default function BlogPage() {
  const { t } = useLanguage()

  const posts = [
    {
      id: 1,
      title: 'How a Website Can Grow Your Business',
      excerpt: "In today's digital age, having a strong online presence is crucial. Learn how a website attracts more customers.",
      date: 'Dec 8, 2024',
      author: 'Haile',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Why Design Matters',
      excerpt: 'First impressions count. Discover why good design builds trust and professionalism for your brand.',
      date: 'Dec 5, 2024',
      author: 'Team DevCore',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Top 5 Tech Trends in Ethiopia',
      excerpt: 'Exploring the rapidly growing technology landscape in Ethiopia and what it means for businesses.',
      date: 'Nov 28, 2024',
      author: 'Haile',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHero title={t.blog} subtitle={t.blogSubtitle} />

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface/60 backdrop-blur-xl border border-surface-border rounded-[32px] overflow-hidden hover:border-primary-green/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,255,136,0.15)] transition-all duration-500 group cursor-pointer flex flex-col h-full"
              >
                <div className="h-48 md:h-56 w-full relative overflow-hidden bg-surface-border/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-surface/20 to-transparent z-10" />
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary-green/20 text-primary-green border border-primary-green/30 rounded-full backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="relative p-6 md:p-8 flex-grow flex flex-col z-20 -mt-10 bg-gradient-to-b from-transparent to-surface rounded-b-[32px]">
                  <div className="flex justify-between items-center mb-3 text-sm text-text-muted mt-2">
                    <span className="text-text-muted text-xs font-semibold tracking-wide uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-foreground text-xl md:text-2xl font-bold mb-3 group-hover:text-primary-green transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center pt-4 border-t border-surface-border mt-auto">
                    <div className="w-8 h-8 rounded-full bg-primary-green/10 border border-primary-green/30 flex items-center justify-center mr-3">
                      <span className="text-primary-green text-xs font-black">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-foreground text-xs font-bold">{post.author}</h4>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
