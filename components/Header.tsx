'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary-green/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center border border-primary-green/30 group-hover:border-primary-green/50 transition-colors">
              <span className="text-primary-green font-bold text-xl">D</span>
            </div>
            <span className="text-white text-xl font-semibold">DevCore</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-white/80 hover:text-primary-green transition-colors">
              {t.product}
            </Link>
            <Link href="/pricing" className="text-white/80 hover:text-primary-green transition-colors">
              {t.pricing}
            </Link>
            <Link href="/company" className="text-white/80 hover:text-primary-green transition-colors">
              {t.company}
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-primary-green transition-colors">
              {t.blog}
            </Link>
            <Link href="/faq" className="text-white/80 hover:text-primary-green transition-colors">
              {t.faq}
            </Link>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              {language === 'en' ? '🇪🇹 Amharic' : '🇺🇸 English'}
            </button>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary-green text-primary-dark font-medium rounded-lg glow-green hover:bg-primary-green/90 transition-all"
            >
              {t.contactUs}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4 border-t border-primary-green/10"
          >
            <Link href="/product" className="block text-white/80 hover:text-primary-green transition-colors">
              {t.product}
            </Link>
            <Link href="/pricing" className="block text-white/80 hover:text-primary-green transition-colors">
              {t.pricing}
            </Link>
            <Link href="/company" className="block text-white/80 hover:text-primary-green transition-colors">
              {t.company}
            </Link>
            <Link href="/blog" className="block text-white/80 hover:text-primary-green transition-colors">
              {t.blog}
            </Link>
            <Link href="/faq" className="block text-white/80 hover:text-primary-green transition-colors">
              {t.faq}
            </Link>

            <button
              onClick={toggleLanguage}
              className="w-full text-left px-3 py-1 text-white hover:text-primary-green transition-colors"
            >
              {language === 'en' ? '🇪🇹 Switch to Amharic' : '🇺🇸 Switch to English'}
            </button>

            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 bg-primary-green text-primary-dark font-medium rounded-lg glow-green"
            >
              {t.contactUs}
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

