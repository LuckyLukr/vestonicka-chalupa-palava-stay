import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import Capacity from './components/Capacity'
import Pricing from './components/Pricing'
import Included from './components/Included'
import Inquiry from './components/Inquiry'
import Contact from './components/Contact'
import Location from './components/Location'
import Surroundings from './components/Surroundings'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Capacity />
        <Pricing />
        <Included />
        <Inquiry />
        <Contact />
        <Location />
        <Surroundings />
      </main>
      <Footer />
    </>
  )
}
