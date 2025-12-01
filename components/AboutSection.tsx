'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-20 bg-primary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About DevCore
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and engineers dedicated to transforming your ideas into reality. With years of experience in the industry, we combine creativity with technical expertise to deliver exceptional results.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Our mission is to help businesses thrive in the digital world by providing cutting-edge solutions that are both beautiful and functional. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering value that exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">500+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">200+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
              <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-primary-green mb-1">10+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-8 glow-green-soft">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Our Vision</h3>
                    <p className="text-white/60">
                      To be the leading digital solutions provider, recognized for innovation, quality, and client success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Our Values</h3>
                    <p className="text-white/60">
                      Integrity, innovation, and excellence guide everything we do. We are committed to delivering solutions that make a difference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-green text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Our Approach</h3>
                    <p className="text-white/60">
                      We work collaboratively with our clients, ensuring transparency, communication, and alignment throughout the entire process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

