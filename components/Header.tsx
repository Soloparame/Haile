'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en')
  }

  const navLinks = [
    { href: '/services', label: t.services },
    { href: '/projects', label: 'Portfolio' },
    { href: '/pricing', label: t.pricing },
    { href: '/blog', label: t.blog },
    { href: '/faq', label: t.faq },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      {/* Floating nav bar - WubSites style */}
      <nav
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ${scrolled
            ? 'bg-[var(--header-bg)] backdrop-blur-xl border border-surface-border shadow-lg shadow-black/5'
            : 'bg-[var(--header-bg)]/90 backdrop-blur-md border border-surface-border'
          }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary-green/20 rounded-lg flex items-center justify-center border border-primary-green/30 group-hover:border-primary-green/50 transition-colors">
              <span className="text-primary-green font-bold text-lg md:text-xl">D</span>
            </div>
            <span className="text-foreground text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300">
              DevCore
            </span>
          </Link>

          {/* Desktop Navigation - center links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-bold tracking-wide text-foreground/80 hover:text-primary-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Language, Theme, CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full text-[13px] font-bold border border-surface-border text-foreground/80 hover:text-foreground hover:bg-surface-border/50 transition-colors"
            >
              {language === 'en' ? '🇪🇹 Am' : '🇺🇸 En'}
            </button>
            <ThemeToggle />
            <Link
              href="/contact"
              className="ml-3 px-6 py-2.5 bg-primary-green text-gray-950 font-black rounded-full text-[13px] hover:bg-primary-green/90 transition-all shadow-lg shadow-primary-green/20"
            >
              {t.contactUs}
            </Link>
          </div>

          {/* Mobile: theme + menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-foreground hover:bg-surface-border/50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - full width below floating bar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-auto max-w-6xl rounded-2xl bg-[var(--header-bg)] backdrop-blur-xl border border-surface-border shadow-xl overflow-hidden"
          >
            <div className="py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-foreground/90 hover:text-primary-green hover:bg-primary-green/10 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-4 py-3 rounded-xl text-foreground/90 hover:text-primary-green hover:bg-primary-green/10 font-medium transition-colors"
              >
                {language === 'en' ? '🇪🇹 Switch to Amharic' : '🇺🇸 Switch to English'}
              </button>
              <div className="pt-3 px-4 border-t border-surface-border">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3.5 bg-primary-green text-gray-900 font-semibold rounded-xl hover:bg-primary-green/90 transition-all"
                >
                  {t.contactUs}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
