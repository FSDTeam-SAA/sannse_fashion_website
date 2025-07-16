"use client";

import type { StaticImageData } from "next/image";
import shirt1 from "@/public/images/productImage.png";
import shirt2 from "@/public/images/productImage.png";
import shirt3 from "@/public/images/productImage.png";
import shirt4 from "@/public/images/productImage.png";
import shirt5 from "@/public/images/productImage.png";
import shirt6 from "@/public/images/productImage.png";
import shirt7 from "@/public/images/productImage.png";
import shirt8 from "@/public/images/productImage.png";
import ProductCard from "@/components/productCard/ProductCard";

interface Product {
  id: number;
  title: string;
  image: StaticImageData;
}

const products: Product[] = [
  { id: 1, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt1 },
  { id: 2, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt2 },
  { id: 3, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt3 },
  { id: 4, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt4 },
  { id: 5, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt5 },
  { id: 6, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt6 },
  { id: 7, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt7 },
  { id: 8, title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit", image: shirt8 },
];

export default function OurProducts() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-start text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}
