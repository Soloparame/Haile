import ServicesSection from '@/components/ServicesSection'
import TechStackSection from '@/components/TechStackSection'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Comprehensive solutions to help your business grow and succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </section>
      <ServicesSection />
      <TechStackSection />

      {/* Process Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', desc: 'Creating beautiful and functional designs' },
              { step: '03', title: 'Development', desc: 'Building robust and scalable solutions' },
              { step: '04', title: 'Deployment', desc: 'Launching and maintaining your product' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-green/20 border border-primary-green/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-green text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

