"use client";

import type { StaticImageData } from "next/image";
import shirt1 from "@/public/images/jacketProduct.png";
import shirt2 from "@/public/images/jacketProduct.png";
import shirt3 from "@/public/images/jacketProduct.png";
import ProductCard from "@/components/productCard/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  image: StaticImageData;
  category: string;
  size: string;
  color: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    title: "Westwood Shirt Men's Black ",
    image: shirt1,
    category: "Shirt",
    size: "M",
    color: "Black",
    price: 99,
  },
  {
    id: 2,
    title: "Westwood Shirt Men's Navy Slim Fit Shirt",
    image: shirt2,
    category: "Shirt",
    size: "L",
    color: "Navy",
    price: 105,
  },
  {
    id: 3,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },

  {
    id: 4,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },
  {
    id: 5,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },
  {
    id: 6,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },
  {
    id: 7,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },
  {
    id: 8,
    title: "Formal Slim Fit Dress Shirt with Cufflinks",
    image: shirt3,
    category: "Shirt",
    size: "S",
    color: "White",
    price: 89,
  },
];

export default function OurProducts() {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-0 md:px-0">
      <h1 className="lg:text-[40px] md:text-[30px] text-[28px] font-semibold leading-[120%] text-[#000000] mb-[40px]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] place-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="p-4 flex justify-center items-center mt-5">
        <Link href="/products">
          <Button className="w-[202px] h-[51px] flex items-center gap-2">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
