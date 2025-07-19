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
  price: number;
}

interface ShowJacketsProducts {
  products: Product[];
}

export default function ShowJacketsProducts({ products }: ShowJacketsProducts) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-[30px] place-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}