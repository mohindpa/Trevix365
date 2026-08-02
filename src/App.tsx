import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Answers } from '@/components/Answers'
import {
  Contact, Faq, Features, Footer, HowItWorks, Marquee, Plans, Stores, Technology, Testimonials, Warranty, Why,
} from '@/components/Sections'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-card focus:px-5 focus:py-3 focus:font-display focus:font-bold focus:text-head focus:shadow-brand"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Features />
        <Technology />
        <HowItWorks />
        <Plans />
        <Warranty />
        <Answers />
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
