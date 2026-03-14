'use client'

import AboutSection from '@/components/AboutSection'
import PageHero from '@/components/PageHero'

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About DevCore"
        subtitle="We are a team of passionate developers, designers, and engineers dedicated to transforming your ideas into reality."
      />
      <AboutSection />

      {/* Team Section - WubSites style */}
      <section className="py-16 md:py-24 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="section-heading mb-4">Our Team</h2>
            <p className="section-subheading">
              Meet the talented individuals who make DevCore great.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-surface border border-surface-border rounded-2xl p-6 md:p-8 text-center hover:border-primary-green/30 transition-colors"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary-green/20 border border-primary-green/30 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary-green text-3xl md:text-4xl font-bold">
                    {String.fromCharCode(64 + item)}
                  </span>
                </div>
                <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2">Team Member {item}</h3>
                <p className="text-primary-green text-sm font-medium mb-3">Role Title</p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Experienced professional with expertise in modern web technologies and design principles.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
