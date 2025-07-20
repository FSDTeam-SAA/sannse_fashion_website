import React from 'react'
import JacketsPageHeader from './_components/JacketsPageHeader'
import SortingJacketsProducts from './_components/SortingJacketsProducts'
function page() {
  return (
    <div>
      <div>
        <JacketsPageHeader />
      </div>
      <div className="lg:container mx-auto flex flex-col md:flex-row lg:gap-6 lg:my-[88px] md:my-[60px] my-[50px]">
        <div className="w-full">
          <SortingJacketsProducts />
        </div>
      </div>
    </div>
  )
}

export default page