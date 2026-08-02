import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {
  Contact, Faq, Features, Footer, HowItWorks, Marquee, Plans, Stores, Technology, Testimonials, Warranty, Why,
} from '@/components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Technology />
        <HowItWorks />
        <Plans />
        <Warranty />
        <Why />
        <Stores />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
