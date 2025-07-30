"use client"
import OtherProductHeader from "@/app/(website)/other-product/_components/OtherProductHeader";
import React from "react";
import OtherProductDetailsImage from "./OtherProductDetailsImage";
import OtherProductDetailsContent from "./OtherProductDetailsContent";
import OtherCustomerReviews from "./OtherCustomerReviews";
import { useParams } from "next/navigation";

function TotalOtherProduct() {
    const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div>
        <OtherProductHeader/>
      </div>
      <div>
        <OtherProductDetailsImage productId={id} />
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

export default TotalOtherProduct;