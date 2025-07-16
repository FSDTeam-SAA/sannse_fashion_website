import React from 'react'
import Homehero from './_components/Homehero'
import BespokeSection from './_components/Bespoke'
import OurProducts from './_components/OurProducts'

export default function page() {
  return (
    <div className=''>
        <Homehero />
        <BespokeSection />
        <OurProducts />
    </div>
  )
}
