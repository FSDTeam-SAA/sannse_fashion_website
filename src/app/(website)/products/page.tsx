import React from "react";
import SortingProduct from "./_components/SortingProduct";
import ProductPageHeader from "./_components/ProductPageHeader";

function page() {
  return (
    <div>
      <div>
        <ProductPageHeader />
      </div>
      <div className="lg:container mx-auto flex flex-col md:flex-row lg:gap-6 lg:my-[88px] md:my-[60px] my-[50px]">
        <div className="w-full">
          <SortingProduct />
        </div>
      </div>
    </div>
  );
}

export default page;
