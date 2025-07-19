import React from 'react'
import Homehero from './_components/Homehero'
import BespokeSection from './_components/Bespoke'
import OurProducts from './_components/OurProducts'
import OthersProducts from './_components/OthersProducts'
import KnowMore from './_components/KnowMore'
import ClientReview from './_components/ClientReview'

export default function page() {
  return (
    <div className=''>
        <Homehero />
        <BespokeSection />
        <OurProducts />
        <KnowMore />
        <OthersProducts />
        <ClientReview />
    </div>
  )
}
