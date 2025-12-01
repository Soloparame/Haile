import ContactSection from '@/components/ContactSection'
import { motion } from 'framer-motion'

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We offer comprehensive web development, mobile app development, UI/UX design, cloud deployment, API development, and DevOps services.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during the initial consultation.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer maintenance and support packages to ensure your project continues to run smoothly after launch. This includes updates, bug fixes, and technical support.',
              },
              {
                question: 'What technologies do you work with?',
                answer: 'We work with modern technologies including React, Next.js, TypeScript, Node.js, Python, Docker, AWS, and many others. We choose the best stack for each project.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-gray-light border border-primary-green/20 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-white/60">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

