import { useState } from 'react'

import './App.css'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Philosophy from './Sections/Philosophy'
import Testimonials from './Sections/Testimonials'
import HowItWorks from './Sections/HowItWorks'
import CallToAction from './Sections/CallToAction'
import Footer from './Sections/Footer'

function App() {
 

  return (
    <main className='w-full'>
      <Navbar/>
      <Hero />
      <Philosophy />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App
