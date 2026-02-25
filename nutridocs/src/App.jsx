import { useState } from 'react'

import './App.css'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Philosophy from './Sections/Philosophy'
import Testimonials from './Sections/Testimonials'

function App() {
 

  return (
    <main className='w-full'>
      <Navbar/>
      <Hero />
      <Philosophy />
      <Testimonials />
    </main>
  )
}

export default App
