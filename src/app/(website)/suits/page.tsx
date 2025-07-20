import React from 'react'
import SortingSuitsProducts from './_components/SortingSuitsProducts'
import SuitsPageHeader from './_components/SuitsPageHeader'
function page() {
  return (
    <div>
      <div>
        <SuitsPageHeader />
      </div>
      <div className="lg:container mx-auto flex flex-col md:flex-row lg:gap-6 lg:my-[88px] md:my-[60px] my-[50px]">
        <div className="w-full">
          <SortingSuitsProducts />
        </div>
      </div>
    </div>
  )
}

export default page