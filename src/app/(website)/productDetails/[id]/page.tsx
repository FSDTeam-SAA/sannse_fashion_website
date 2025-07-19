import React from "react";
import ProductDetailsHeader from "./_components/ProductDetailsHeader";
import ProductDetailsImage from "./_components/ProductDetailsImage";
import ProductDetailsContent from "./_components/ProductDetailsContent";
import CustomerReviews from "./_components/CustomerReviews";

function page() {
  return (
    <div>
      <div>
        <ProductDetailsHeader />
      </div>
      <div>
        <ProductDetailsImage />
      </div>
      <div>
        <ProductDetailsContent />
      </div>
      <div>
        <CustomerReviews />
      </div>
    </div>
  );
}

export default page;
