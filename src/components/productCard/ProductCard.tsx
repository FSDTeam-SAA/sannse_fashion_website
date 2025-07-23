// "use client";
// import { Card, CardContent } from "@/components/ui/card";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

// interface Product {
//   id: number;
//   title: string;
//   image: StaticImageData;
//   category: string;
//   size: string;
//   color: string;
//   price: number;
// }

// type ProductCardProps = {
//   product: Product;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   // Validate product prop
//   if (!product || !product.id || !product.title || !product.image) {
//     console.error("Invalid product data:", product);
//     return null; // Prevent rendering if product is invalid
//   }

//   // const handleAddToCart = () => {
//   //   try {
//   //     const cartItem = {
//   //       id: product.id,
//   //       title: product.title,
//   //       category: product.category,
//   //       size: product.size,
//   //       color: product.color,
//   //       price: product.price,
//   //       image: product.image.src, // Get the image source string
//   //     };

//   //     // Retrieve existing cart items from localStorage
//   //     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//   //     // Add new item to the cart
//   //     const updatedCart = [...existingCart, cartItem];
//   //     // Save updated cart to localStorage
//   //     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   //     console.log("Added to cart:", cartItem);
//   //   } catch (error) {
//   //     console.error("Error saving to localStorage:", error);
//   //   }
//   // };

//   return (
//     <Card className="w-full container overflow-hidden relative group transition-transform duration-300 transform hover:scale-105">
//       <CardContent className="p-0">
//         <Link href={`/productDetails/${product.id}`}>
//           <Image
//             src={product.image}
//             alt={product.title}
//             className="w-full h-80 object-cover rounded-[8px]"
//             width={320}
//             height={320}
//           />
//         </Link>
//         <div className="py-4 text-start">
//           <p className="text-lg font-semibold">{product.title}</p>
//         </div>
//         {/* <button
//           className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg font-medium"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button> */}
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;



"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  category: string;
  size: string;
  color: string;
  price: number;
}

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Validate product prop
  if (!product || !product.id || !product.title || !product.image) {
    console.error("Invalid product data:", product);
    return null;
  }

  // const handleAddToCart = () => {
  //   try {
  //     const cartItem = {
  //       id: product.id.toString(), // Ensure ID is string for consistency with ProductDetailsImage
  //       title: product.title,
  //       size: product.size,
  //       color: product.color,
  //       price: product.price,
  //       image: product.image.src,
  //       quantity: 1, // Initialize quantity
  //     };

  //     // Retrieve existing cart items from localStorage
  //     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  //     // Check if the product with the same id and size exists
  //     const existingItemIndex = existingCart.findIndex(
  //       (item: typeof cartItem) => item.id === cartItem.id && item.size === cartItem.size
  //     );

  //     let updatedCart;
  //     if (existingItemIndex !== -1) {
  //       // Increment quantity if item exists
  //       updatedCart = [...existingCart];
  //       updatedCart[existingItemIndex].quantity += 1;
  //     } else {
  //       // Add new item to cart
  //       updatedCart = [...existingCart, cartItem];
  //     }

  //     // Save updated cart to localStorage
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     console.log("Updated cart:", updatedCart);

  //     // Trigger storage event to update Navbar
  //     window.dispatchEvent(new Event("storage"));
  //   } catch (error) {
  //     console.error("Error saving to localStorage:", error);
  //   }
  // };

  return (
    <Card className="w-full container overflow-hidden relative group transition-transform duration-300 transform hover:scale-105">
      <CardContent className="p-0">
        <Link href={`/productDetails/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-[8px]"
            width={320}
            height={320}
          />
        </Link>
        <div className="py-4 text-start">
          <p className="text-lg font-semibold">{product.title}</p>
        </div>
        {/* <button
          className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg font-medium"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;