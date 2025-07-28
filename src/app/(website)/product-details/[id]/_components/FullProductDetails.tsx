// "use client"
// import React from "react";
// import ProductDetailsHeader from "./ProductDetailsHeader";
// import ProductDetailsImage from "./ProductDetailsImage";
// import ProductDetailsContent from "./ProductDetailsContent";
// import CustomerReviews from "./CustomerReviews";
// import { useParams } from "next/navigation";

// function FullProductDetails() {
// const {id} = useParams();
//     console.log(id)
//   return (
//     <div>
//       <div>
//         <ProductDetailsHeader />
//       </div>
//       <div>
//         <ProductDetailsImage/>
//       </div>
//       <div>
//         <ProductDetailsContent />
//       </div>
//       <div>
//         <CustomerReviews />
//       </div>
//     </div>
//   );
// }

// export default FullProductDetails;

"use client";
import React from "react";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsContent from "./ProductDetailsContent";
import CustomerReviews from "./CustomerReviews";
import { useParams } from "next/navigation";

function FullProductDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div>
        <ProductDetailsHeader />
      </div>
      <div>
        <ProductDetailsImage productId={id} />
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

export default FullProductDetails;
