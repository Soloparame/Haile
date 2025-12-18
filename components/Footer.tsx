'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-primary-gray border-t border-primary-green/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center border border-primary-green/30">
                <span className="text-primary-green font-bold text-xl">D</span>
              </div>
              <span className="text-white text-xl font-semibold">DevCore</span>
            </div>
            <p className="text-white/60 text-sm max-w-md">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary-green transition-colors text-sm">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary-green transition-colors text-sm">
                  {t.aboutDevCore}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-primary-green transition-colors text-sm">
                  {t.services}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary-green transition-colors text-sm">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <a href="mailto:info@devcore.com" className="text-white/60 hover:text-primary-green transition-colors text-sm">
                  info@devcore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-green/10 mt-8 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} DevCore. {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}

