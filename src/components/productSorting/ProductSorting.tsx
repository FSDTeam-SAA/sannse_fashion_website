"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider"; // Ensure shadcn/ui slider is installed

interface FilterProps {
  category?: string;
  size?: string;
  color?: string;
  priceRange: [number, number];
}

const ProductSorting = ({
  onFilterChange,
}: {
  onFilterChange: (filters: FilterProps) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const categories = ["Suit Outfits", "Shirt Outfits", "Jackets Outfits"];
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];
  const colors = [
    "red",
    "black",
    "green",
    "blue",
    "orange",
    "yellow",
    "brown",
    "darkblue",
    "darkgreen",
    "white",
    "maroon",
    "gray",
    "pink",
    "lightblue",
    "lightgreen",
    "violet", // new
    "gold", // new
    "teal",
  ];

  const handleFilter = () => {
    onFilterChange({
      category: selectedCategory || undefined,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
      priceRange,
    });
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSize("");
    setSelectedColor("");
    setPriceRange([0, 1000]);
    onFilterChange({
      category: undefined,
      size: undefined,
      color: undefined,
      priceRange: [0, 1000],
    });
  };

  return (
    <div className="p-4 bg-[#FDE8E9] rounded-[12px]">
      <div className="mb-4">
        <h3 className="lg:text-2xl md:text-xl text-[20px] text-[#212121] leading-[120%] mb-[16px] font-semibold">
          By Category
        </h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-4">
            <input
              type="checkbox"
              id={category}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mr-2 w-[15px] h-[15px]"
            />
            <label
              htmlFor={category}
              className="text-base font-medium leading-[120%] text-[#4E4E4E]"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="lg:text-2xl md:text-xl text-[20px] text-[#212121] leading-[120%] mb-[16px] font-semibold">
          By Size
        </h3>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-4">
            <input
              type="checkbox"
              id={size}
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="mr-2 w-[15px] h-[15px]"
            />
            <label
              htmlFor={size}
              className="text-base font-medium leading-[120%] text-[#4E4E4E]"
            >
              {size}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
  <h3 className="lg:text-2xl md:text-xl text-[20px] text-[#212121] leading-[120%] mb-[16px] font-semibold">
    By Color
  </h3>
  <div className="grid grid-cols-6 gap-2">
    {colors.map((color) => (
      <div key={color} className="flex items-center">
        <input
          type="radio"
          id={color}
          name="color"
          value={color}
          checked={selectedColor === color}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mr-2 hidden"
        />
        <label
          htmlFor={color}
          className={`w-[30px] h-[30px] rounded-[4px] cursor-pointer transition-all ${
            selectedColor === color
              ? "ring-2 ring-offset-2 ring-blue-500"
              : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        ></label>
      </div>
    ))}
  </div>
</div>

      <div className="mb-4">
        <h3 className="lg:text-2xl md:text-xl text-base text-[#212121] leading-[120%] font-semibold">
          Price
        </h3>
        <div className="flex items-center gap-4 bg-[#FDE8E9] py-3 rounded-[12px] h-[60px]">
          <Slider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
            className="w-full"
            style={
              {
                "--slider-thumb-size": "20px",
                "--slider-track-height": "12px",
                "--slider-track-bg": "#E0E0E0",
                "--slider-track-active-bg": "#FF0000",
                "--slider-thumb-bg": "#FF0000",
                "--slider-thumb-border": "none",
              } as React.CSSProperties
            }
          />
        </div>
        <div className="text-base font-medium text-[#4E4E4E] flex items-center justify-between gap-4">
          <div className="w-[60px] h-[40px] border border-black flex items-center justify-center rounded-md text-base leading-[120%] font-medium text-black">
            ${priceRange[0]}
          </div>
          <div className="w-[60px] h-[40px] border border-black flex items-center justify-center rounded-md text-base leading-[120%] font-medium text-black">
            ${priceRange[1]}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-10">
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductSorting;
