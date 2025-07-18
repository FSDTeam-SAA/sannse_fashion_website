import React from "react";
import OtherProductHeader from "../../other-product/_components/OtherProductHeader";
import OtherProductDetailsImage from "./_components/OtherProductDetailsImage";
import OtherProductDetailsContent from "./_components/OtherProductDetailsContent";
import OtherCustomerReviews from "./_components/OtherCustomerReviews";

function page() {
  return (
    <div>
      <div>
        <OtherProductHeader/>
      </div>
      <div>
        <OtherProductDetailsImage />
      </div>
      <div>
        <OtherProductDetailsContent />
      </div>
      <div>
        <OtherCustomerReviews />
      </div>
    </div>
  );
}

export default page;