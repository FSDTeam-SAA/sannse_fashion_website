/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import Image from "next/image";

const styleCategories = [
  { id: "style", name: "Style", icon: "/placeholder.svg?height=60&width=60" },
  { id: "fit", name: "Fit", icon: "/placeholder.svg?height=60&width=60" },
  { id: "length", name: "Length", icon: "/placeholder.svg?height=60&width=60" },
  {
    id: "sleeve-buttons",
    name: "Sleeve Buttons",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "back-style",
    name: "Back Style",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "breast-pocket",
    name: "Breast Pocket",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "pocket-style",
    name: "Pocket Style",
    icon: "/placeholder.svg?height=60&width=60",
  },
];

const styleOptions: Record<string, any[]> = {
  style: [
    {
      id: "sb1",
      name: "Single-breasted 1 button",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb6",
      name: "Single-breasted 6 button",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb3",
      name: "Single-breasted 3 button",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb2",
      name: "Single-breasted 2 button",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  fit: [
    {
      id: "normal",
      name: "Normal Fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "slim",
      name: "Slim Fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  length: [
    {
      id: "regular",
      name: "Regular Length",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "long",
      name: "Long Length",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export function StylePanel() {
  const { currentCategory, setCurrentCategory, addToConfiguration } =
    useCustomization();

  const handleStyleSelect = (option: any, category: string) => {
    addToConfiguration({
      id: option.id,
      type: "style",
      category: category,
      name: option.name,
      icon: option.icon,
    });
  };

  // Show categories
  if (!currentCategory) {
    return (
      <div className="p-4 space-y-3">
        {styleCategories.map((category) => (
          <div
            key={category.id}
            className="bg-pink-100 rounded-lg p-4 cursor-pointer hover:bg-pink-200 transition-colors"
            onClick={() => setCurrentCategory(category.id)}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <Image
                  width={60}
                  height={60}
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  className="w-8 h-8"
                />
              </div>
              <div className="font-medium text-gray-800">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Show options for selected category
  const options = styleOptions[currentCategory] || [];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="cursor-pointer group"
            onClick={() => handleStyleSelect(option, currentCategory)}
          >
            <div className="bg-white border border-gray-200 rounded-lg p-4 group-hover:border-gray-400 transition-colors">
              <Image
                width={80}
                height={80}
                src={option.icon || "/placeholder.svg"}
                alt={option.name}
                className="w-full h-20 object-contain mb-2"
              />
              <div className="text-sm font-medium text-center">
                {option.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
