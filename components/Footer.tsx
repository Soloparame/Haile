'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { href: '/', label: t.home },
    { href: '/services', label: t.services },
    { href: '/projects', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: t.blog },
    { href: '/contact', label: t.contactUs },
  ]

  return (
    <footer className="bg-surface border-t border-surface-border transition-colors duration-300">
      {/* "We handle everything" strip - WubSites style */}
      <div className="border-b border-surface-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="max-w-3xl">
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl mb-4">
              We handle everything so you don&apos;t have to
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
              A website needs loads of tasks to win the internet. It needs a good logo, a catchy domain name,
              clear copy, strong SEO, secured hosting, and a support team. We handle all of this so your
              website wins the hearts of your customers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-gray-950 font-black rounded-full text-[15px] uppercase tracking-wide hover:bg-primary-green/90 transition-all shadow-xl shadow-primary-green/20"
            >
              Get a free consultation
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">➔</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center border border-primary-green/30">
                <span className="text-primary-green font-bold text-xl">D</span>
              </div>
              <span className="text-foreground text-xl font-semibold tracking-tight">DevCore</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-primary-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Company */}
          <div>
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-muted text-sm hover:text-primary-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-muted text-sm hover:text-primary-green transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              {t.contact}
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href="mailto:rebeccayihenew@gmail.com" className="hover:text-primary-green transition-colors">
                  rebeccayihenew@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251989991524" className="hover:text-primary-green transition-colors">
                  +251 98 999 1524
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} DevCore. {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
