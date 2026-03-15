'use client'

import { motion } from 'framer-motion'

interface PortfolioSectionProps {
  showHeading?: boolean
}

// Replaced portfolio with partners to act as a marquee
const partners = [
  "Madeg Foundation",
  "Wos Caffe",
  "Tech sisters",
]

export default function PortfolioSection({ showHeading = true }: PortfolioSectionProps) {
  // Duplicating the array so we can infinitely loop it
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="py-12 md:py-16 bg-surface overflow-hidden border-t border-b border-surface-border transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-text-muted text-sm font-bold uppercase tracking-widest">Trusted by industry leaders and our global partners</h3>
      </div>

      <div className="relative flex w-full overflow-hidden whitespace-nowrap mask-image-gradient">
        {/* We use an arbitrary mask image gradient to fade out edges if tailwind allows, else standard */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-12 md:gap-24 items-center min-w-full px-6"
        >
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="px-6 py-4 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                {partner}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

