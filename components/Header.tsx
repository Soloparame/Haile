'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <Link href="/" className="text-white/80 hover:text-primary-green transition-colors">
              Product
            </Link>
            <Link href="/services" className="text-white/80 hover:text-primary-green transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-white/80 hover:text-primary-green transition-colors">
              Company
            </Link>
            <Link href="/portfolio" className="text-white/80 hover:text-primary-green transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-primary-green transition-colors">
              Faq&apos;s
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary-green text-primary-dark font-medium rounded-lg glow-green hover:bg-primary-green/90 transition-all"
            >
              Contact Us
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
            <Link href="/" className="block text-white/80 hover:text-primary-green transition-colors">
              Product
            </Link>
            <Link href="/services" className="block text-white/80 hover:text-primary-green transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="block text-white/80 hover:text-primary-green transition-colors">
              Company
            </Link>
            <Link href="/portfolio" className="block text-white/80 hover:text-primary-green transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block text-white/80 hover:text-primary-green transition-colors">
              Faq&apos;s
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 bg-primary-green text-primary-dark font-medium rounded-lg glow-green"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

