"use client";

import type { StaticImageData } from "next/image";
import ProductCard from "@/components/productCard/ProductCard";

interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  category: string;
  size: string;
  color: string;
}

interface ShowAllProductsProps {
  products: Product[];
}

export default function ShowAllProducts({ products }: ShowAllProductsProps) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-[30px] place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image} // Ensure image is StaticImageData
            title={product.title}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
