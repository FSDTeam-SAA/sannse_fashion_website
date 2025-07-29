/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useCustomization } from "@/components/product-customization/customization-provider";

import accentImg from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141803 1.png";
import accentImg1 from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141813.png";
import accentImg2 from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141821.png";
import accentImg3 from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141803 1.png";
import accentImg4 from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141803 1.png";

import pocketImg from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141926.png";
import btnImg from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141950.png";
import btnWImg from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 141955.png";
import elbowImg from "@/Public/assets/product/accents/coat/Screenshot 2025-05-29 142046.png";

const accentCategories = [
  { id: "internal-lining", name: "Internal lining", image: accentImg },
  {
    id: "pocket-square",
    name: "Pocket Square",
    image: pocketImg,
  },
  {
    id: "buttons",
    name: "Buttons",
    image: btnImg,
  },
  {
    id: "button-holes",
    name: "Button Holes",
    image: btnWImg,
  },
  {
    id: "elbow-patch",
    name: "Elbow patch",
    image: elbowImg,
  },
];

const accentOptions: Record<string, any[]> = {
  "internal-lining": [
    {
      id: "default",
      name: "By default",
      image: accentImg1,
    },
    {
      id: "custom",
      name: "Custom color",
      image: accentImg2,
    },
    {
      id: "unlined",
      name: "Unlined",
      image: accentImg3,
    },
    {
      id: "quilted",
      name: "Quilted lining",
      image: accentImg4,
    },
  ],
  "pocket-square": [
    {
      id: "none",
      name: "No Pocket Square",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "white",
      name: "White Pocket Square",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "colored",
      name: "Colored Pocket Square",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  buttons: [
    {
      id: "standard",
      name: "Standard Buttons",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "horn",
      name: "Horn Buttons",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "metal",
      name: "Metal Buttons",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  "button-holes": [
    {
      id: "standard",
      name: "Standard Button Holes",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "contrasting",
      name: "Contrasting Thread",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "pick-stitch",
      name: "Pick Stitch",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  "elbow-patch": [
    {
      id: "none",
      name: "No Elbow Patch",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "leather",
      name: "Leather Patch",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "fabric",
      name: "Fabric Patch",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export function AccentsPanel() {
  const {
    currentCategory,
    setCurrentCategory,
    addToConfiguration,
    configuration,
  } = useCustomization();

  const handleAccentSelect = (option: any, category: string) => {
    addToConfiguration({
      id: option.id,
      type: "accents",
      category: category,
      name: option.name,
      image: option.image,
    });
  };

  const getCategoryDisplayName = (categoryId: string) => {
    const category = accentCategories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const isOptionSelected = (optionId: string, category: string) => {
    return configuration.some(
      (item) =>
        item.type === "accents" &&
        item.category === category &&
        item.id === optionId
    );
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - Categories */}
      <div className="w-[200px] bg-gray-50 border-r border-gray-200 overflow-y-auto">
        <div className="p-4 space-y-3">
          {accentCategories.map((category) => (
            <div
              key={category.id}
              className={`rounded-lg p-4 cursor-pointer transition-colors w-[164px] h-[144px] ${
                currentCategory === category.id
                  ? "bg-pink-50 border-2 border-pink-300"
                  : "  hover:bg-pink-50 border"
              }`}
              onClick={() => setCurrentCategory(category.id)}
            >
              <div className="flex items-center flex-col justify-center h-full">
                <div className="rounded-lg flex items-center justify-center mb-3">
                  <Image
                    width={60}
                    height={60}
                    src={
                      category.image ||
                      "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png"
                    }
                    alt={category.name}
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
                <div className="font-medium text-gray-800 text-center text-sm">
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Options */}
      <div className="flex-1 bg-white">
        {currentCategory ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getCategoryDisplayName(currentCategory)}
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {(accentOptions[currentCategory] || []).map((option) => (
                <div
                  key={option.id}
                  className="cursor-pointer group"
                  onClick={() => handleAccentSelect(option, currentCategory)}
                >
                  <div
                    className={`border rounded-lg p-6 transition-all duration-200 ${
                      isOptionSelected(option.id, currentCategory)
                        ? "border-pink-400 bg-pink-50 shadow-md"
                        : "border-gray-200 bg-white group-hover:border-gray-400 group-hover:shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src={
                          option.image ||
                          "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png"
                        }
                        alt={option.name}
                        className="w-[100px] h-[100px] object-contain mb-4"
                      />
                      <div className="text-sm font-medium text-center text-gray-800">
                        {option.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <h3 className="text-lg font-medium mb-2">
                Select an Accent Category
              </h3>
              <p>Choose a category from the left to see available options</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
