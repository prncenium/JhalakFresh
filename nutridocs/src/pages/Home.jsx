// src/pages/Home.jsx

import Hero from '../Sections/Hero'
import Philosophy from '../Sections/Philosophy'
import Testimonials from '../Sections/Testimonials'
import ScienceSimplified from '../Sections/Science' // Matches your actual file name
import HowItWorks from '../Sections/HowItWorks'
import CallToAction from '../Sections/CallToAction'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* This stacks all your homepage sections in the correct order. 
        The Router in App.jsx will load this entire stack when someone visits your main URL (/).
      */}
      <Hero />
      <Philosophy />
      <Testimonials />
      <ScienceSimplified />
      <HowItWorks />
      <CallToAction />
    </div>
  )
}