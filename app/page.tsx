import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import OurProductsSection from '@/components/OurProductsSection'
import TechStackSection from '@/components/TechStackSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection showHeading={false} />
      <AboutSection />
      <ServicesSection />
      <OurProductsSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

