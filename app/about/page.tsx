'use client'

import React from 'react'
import AboutSection from '@/components/AboutSection'
// import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About DevCore
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We are a team of passionate developers, designers, and engineers dedicated to transforming your ideas into reality.
            </p>
          </div>
        </div>
      </section>
      <AboutSection />

      {/* Team Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Meet the talented individuals who make DevCore great.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary-green/20 border border-primary-green/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-green text-4xl font-bold">
                    {String.fromCharCode(64 + item)}
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Team Member {item}</h3>
                <p className="text-primary-green mb-4">Role Title</p>
                <p className="text-white/60">
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
