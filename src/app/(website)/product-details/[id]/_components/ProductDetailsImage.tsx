// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent } from "@/components/ui/card";
// import productImage1 from "@/public/images/productImage.png";
// import productImage2 from "@/public/images/productimge2.png";

// interface ProductDetailsImageProps {
//   productId: string | string[];
// }

// const ProductDetailsImage: React.FC<ProductDetailsImageProps> = ({
//   productId,
// }) => {
//   const [selectedImage, setSelectedImage] = useState<number>(0);
//   const [selectedSize, setSelectedSize] = useState<string>("");

//   // Dummy product data
//   const productData = {
//     id: Array.isArray(productId) ? productId[0] : productId, // Handle string or string[]
//     title: "Lorem ipsum dolor sit amet, consectetur efficitur.",
//     price: 254,
//     images: [
//       {
//         id: 0,
//         src: productImage1,
//         alt: "Navy Blue Suit - Main View",
//       },
//       {
//         id: 1,
//         src: productImage2,
//         alt: "Navy Blue Suit - Side View",
//       },
//       {
//         id: 2,
//         src: productImage1,
//         alt: "Navy Blue Suit - Back View",
//       },
//       {
//         id: 3,
//         src: productImage1,
//         alt: "Navy Blue Suit - Detail View",
//       },
//       {
//         id: 4,
//         src: productImage2,
//         alt: "Navy Blue Suit - Full View",
//       },
//     ],
//     features: [
//       "Slim-fit 100% Wool Super 140's",
//       "Color: Black",
//       "Pattern: Plain Weave",
//       "Closure: 2 Button",
//       "Range: Westwood Hart",
//       "SKU: WH-56-7B",
//     ],
//   };

//   const handleAddToCart = () => {
//     try {
//       const cartItem = {
//         id: productData.id,
//         title: productData.title,
//         size: selectedSize || "Not selected",
//         price: productData.price,
//         image: productData.images[selectedImage].src.src, // Get the image source string
//       };

//       // Retrieve existing cart items from localStorage
//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       // Add new item to the cart
//       const updatedCart = [...existingCart, cartItem];
//       // Save updated cart to localStorage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       console.log("Added to cart:", cartItem);
//     } catch (error) {
//       console.error("Error saving to localStorage:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white lg:mt-[83px] md:mt-[60px] mt-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]">
//       <div className="flex flex-col lg:flex-row justify-between items-start gap-[100px]">
//         {/* Image Gallery Section */}
//         <div className="flex gap-4 max-w-[600px]">
//           {/* Thumbnail Column */}
//           <div className="flex flex-col gap-3">
//             {productData.images.map((image) => (
//               <Card
//                 key={image.id}
//                 className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
//                   selectedImage === image.id ? "ring-2 ring-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedImage(image.id)}
//               >
//                 <CardContent className="p-0">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={100}
//                     height={100}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1 min-w-[360px] max-w-[500px]">
//             <Card className="overflow-hidden w-full h-full transition-transform duration-300 transform hover:scale-105">
//               <CardContent className="p-0">
//                 <Image
//                   src={productData.images[selectedImage].src}
//                   alt={productData.images[selectedImage].alt}
//                   width={500}
//                   height={500}
//                   className="w-full h-[650px] object-cover"
//                   priority
//                 />
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="space-y-6 flex-1">
//           {/* Product Title */}
//           <div>
//             <h1 className="lg:text-[40px] md:text-[30px] text-[22px] font-semibold text-[#212121] leading-[120%]">
//               {productData.title}
//             </h1>
//             <p className="text-[20px] leading-[150%] font-normal text-[#4E4E4E] mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               tincidunt porta laoreet. Praesent a leo at leo ornare mollis eget
//               sit amet lorem. Integer dignissim laoreet justo ut sagittis.
//             </p>
//           </div>

//           {/* Product Features */}
//           <div className="space-y-2">
//             {productData.features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                 <span className="text-[20px] leading-[150%] font-normal text-[#4E4E4E]">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Size Selection */}
//           <div className="space-y-2 flex items-center gap-6">
//             <label className="text-2xl text-[#4E4E4E] font-semibold mt-2">
//               Size:
//             </label>
//             <Select value={selectedSize} onValueChange={setSelectedSize}>
//               <SelectTrigger className="w-40">
//                 <SelectValue placeholder="Medium" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="xs">Extra Small</SelectItem>
//                 <SelectItem value="s">Small</SelectItem>
//                 <SelectItem value="m">Medium</SelectItem>
//                 <SelectItem value="l">Large</SelectItem>
//                 <SelectItem value="xl">Extra Large</SelectItem>
//                 <SelectItem value="xxl">XXL</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Price */}
//           <div className="py-4">
//             <span className="text-4xl font-bold text-gray-900">
//               ${productData.price}
//             </span>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4">
//             <Button
//               className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
//               size="lg"
//             >
//               Customize
//             </Button>
//             <Button
//               variant="outline"
//               onClick={handleAddToCart}
//               className="flex-1 border-red-700 text-red-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-md transition-colors duration-200"
//               size="lg"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsImage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import productImage1 from "@/Public/images/productImage.png";
import productImage2 from "@/Public/images/productimge2.png";
import Link from "next/link";

// interface ProductImage {
//   id: number;
//   src: StaticImageData;
//   alt: string;
// }

interface ProductDetailsImageProps {
  productId: string | string[];
}

const ProductDetailsImage: React.FC<ProductDetailsImageProps> = ({
  productId,
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Dummy product data
  const productData = {
    id: Array.isArray(productId) ? productId[0] : productId,
    title: "Lorem ipsum dolor sit amet, consectetur efficitur.",
    price: 254,
    images: [
      {
        id: 0,
        src: productImage1,
        alt: "Navy Blue Suit - Main View",
      },
      {
        id: 1,
        src: productImage2,
        alt: "Navy Blue Suit - Side View",
      },
      {
        id: 2,
        src: productImage1,
        alt: "Navy Blue Suit - Back View",
      },
      {
        id: 3,
        src: productImage1,
        alt: "Navy Blue Suit - Detail View",
      },
      {
        id: 4,
        src: productImage2,
        alt: "Navy Blue Suit - Full View",
      },
    ],
    features: [
      "Slim-fit 100% Wool Super 140's",
      "Color: Black",
      "Pattern: Plain Weave",
      "Closure: 2 Button",
      "Range: Westwood Hart",
      "SKU: WH-56-7B",
    ],
  };

  const handleAddToCart = () => {
    try {
      const cartItem = {
        id: productData.id,
        title: productData.title,
        size: selectedSize || "Not selected",
        price: productData.price,
        image: productData.images[selectedImage].src.src,
        quantity: 1, // Initialize quantity
      };

      // Retrieve existing cart items from localStorage
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if the product with the same id and size exists
      const existingItemIndex = existingCart.findIndex(
        (item: typeof cartItem) =>
          item.id === cartItem.id && item.size === cartItem.size
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        // Increment quantity if item exists
        updatedCart = [...existingCart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        updatedCart = [...existingCart, cartItem];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Updated cart:", updatedCart);

      // Trigger storage event to update Navbar
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white lg:mt-[83px] md:mt-[60px] mt-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-[100px]">
        {/* Image Gallery Section */}
        <div className="flex gap-4 max-w-[600px]">
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-3">
            {productData.images.map((image) => (
              <Card
                key={image.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedImage === image.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <CardContent className="p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 min-w-[360px] max-w-[500px]">
            <Card className="overflow-hidden w-full h-full transition-transform duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src={productData.images[selectedImage].src}
                  alt={productData.images[selectedImage].alt}
                  width={500}
                  height={500}
                  className="w-full h-[650px] object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6 flex-1">
          {/* Product Title */}
          <div>
            <h1 className="lg:text-[40px] md:text-[30px] text-[22px] font-semibold text-[#212121] leading-[120%]">
              {productData.title}
            </h1>
            <p className="text-[20px] leading-[150%] font-normal text-[#4E4E4E] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tincidunt porta laoreet. Praesent a leo at leo ornare mollis eget
              sit amet lorem. Integer dignissim laoreet justo ut sagittis.
            </p>
          </div>

          {/* Product Features */}
          <div className="space-y-2">
            {productData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-[20px] leading-[150%] font-normal text-[#4E4E4E]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Size Selection */}
          <div className="space-y-2 flex items-center gap-6">
            <label className="text-2xl text-[#4E4E4E] font-semibold mt-2">
              Size:
            </label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Medium" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">Extra Small</SelectItem>
                <SelectItem value="s">Small</SelectItem>
                <SelectItem value="m">Medium</SelectItem>
                <SelectItem value="l">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
                <SelectItem value="xxl">XXL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="py-4">
            <span className="text-4xl font-bold text-gray-900">
              ${productData.price}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href={`/customize-product/panel/${productData.id}`}
              className="flex-1 w-full"
            >
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
                size="lg"
              >
                Customize
              </Button>
            </Link>
            <Button
              className="flex-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              size="lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsImage;
