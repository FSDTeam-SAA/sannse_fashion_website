import React from 'react'
import ShirtsPageHeader from './_components/ShirtsPageHeader'
import SortingShirtsProducts from './_components/SortingShirtsProducts'
function page() {
  return (
    <div>
      <div>
        <ShirtsPageHeader />
      </div>
      <div className="lg:container mx-auto flex flex-col md:flex-row lg:gap-6 lg:my-[88px] md:my-[60px] my-[50px]">
        <div className="w-full">
          <SortingShirtsProducts />
        </div>
      </div>
    </div>
  )
}

export default page