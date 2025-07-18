import React from 'react'
import OtherProductHeader from './_components/OtherProductHeader'
import SortingOtherProduct from './_components/SortingOtherProduct'

function page() {
  return (
    <div>
      <div>
        <OtherProductHeader />
      </div>
      <div className="lg:container mx-auto flex flex-col md:flex-row lg:gap-6 lg:my-[88px] md:my-[60px] my-[50px]">
        <div className="w-full">
          <SortingOtherProduct />
        </div>
      </div>
    </div>
  )
}

export default page