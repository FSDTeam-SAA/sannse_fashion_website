"use client";

import { useState, useEffect } from "react";
import ProductSorting from "@/components/productSorting/ProductSorting";
import productImage from "@/public/images/jacketProduct.png";
import { StaticImageData } from "next/image";
import ShowJacketsProducts from "./ShowJacketsProducts";

// Product type
interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  category: string;
  size: string;
  color: string;
  price: number;
}

// Filter type
interface FilterProps {
  category?: string;
  size?: string;
  color?: string;
  priceRange: [number, number];
}

const SortingJacketsProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Dummy product data with random prices
  const dummyProducts: Product[] = [
    {
      id: 1,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Suit Outfits",
      size: "Medium",
      color: "black",
      price: 250,
    },
    {
      id: 2,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Shirt Outfits",
      size: "Large",
      color: "white",
      price: 150,
    },
    {
      id: 3,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Jackets Outfits",
      size: "X-Large",
      color: "darkblue",
      price: 300,
    },
    {
      id: 4,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Shirt Outfits",
      size: "Small",
      color: "lightblue",
      price: 120,
    },
    {
      id: 5,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Suit Outfits",
      size: "XX-Large",
      color: "gray",
      price: 280,
    },
    {
      id: 6,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Shirt Outfits",
      size: "Medium",
      color: "maroon",
      price: 160,
    },
    {
      id: 7,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Jackets Outfits",
      size: "Large",
      color: "green",
      price: 320,
    },
    {
      id: 8,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Suit Outfits",
      size: "X-Large",
      color: "yellow",
      price: 270,
    },
    {
      id: 9,
      title: "Westwood Shirt Men's Black Glitter Tuxedo Formal Suit",
      image: productImage,
      category: "Suit Outfits",
      size: "X-Large",
      color: "yellow",
      price: 290,
    },
  ];

  // Load initial data
  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    setProducts(dummyProducts);
  }, []);

  // Handle filters
  const handleFilterChange = (newFilters: FilterProps) => {
    let filtered = [...dummyProducts];

    if (newFilters.category) {
      filtered = filtered.filter((p) => p.category === newFilters.category);
    }
    if (newFilters.size) {
      filtered = filtered.filter((p) => p.size === newFilters.size);
    }
    if (newFilters.color) {
      filtered = filtered.filter((p) => p.color === newFilters.color);
    }
    if (newFilters.priceRange) {
      filtered = filtered.filter((p) => p.price >= newFilters.priceRange[0] && p.price <= newFilters.priceRange[1]);
    }

    setProducts(filtered);
  };

  return (
    <div className="lg:container lg:mx-auto p-4 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full lg:w-[400px]">
          <ProductSorting onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full">
          <ShowJacketsProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default SortingJacketsProducts;
