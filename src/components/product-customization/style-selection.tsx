"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import type { StyleOption } from "@/lib/customization-store";
import { cn } from "@/lib/utils";
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

const styleOptions: Record<string, StyleOption[]> = {
  style: [
    {
      id: "sb1",
      name: "Single-breasted 1 button",
      category: "style",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb2",
      name: "Single-breasted 2 button",
      category: "style",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb3",
      name: "Single-breasted 3 button",
      category: "style",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "sb6",
      name: "Single-breasted 6 button",
      category: "style",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  fit: [
    {
      id: "normal",
      name: "Normal Fit",
      category: "fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "slim",
      name: "Slim Fit",
      category: "fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export function StyleSelection() {
  const {
    currentCategory,
    setCurrentCategory,
    addToConfiguration,
    configuration,
  } = useCustomization();

  if (!currentCategory) {
    return (
      <div className="grid grid-cols-1 gap-3">
        {styleCategories.map((category) => (
          <div
            key={category.id}
            className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setCurrentCategory(category.id)}
          >
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
              <Image
                width={60}
                height={60}
                src={category.icon || "/placeholder.svg"}
                alt={category.name}
                className="w-10 h-10"
              />
            </div>
            <span className="font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    );
  }

  const options = styleOptions[currentCategory] || [];
  const selectedOption = configuration.find(
    (item) => item.type === "style" && item.category === currentCategory
  );

  const handleStyleSelect = (option: StyleOption) => {
    addToConfiguration({
      id: option.id,
      type: "style",
      category: option.category,
      name: option.name,
      icon: option.icon,
      price: option.price,
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold capitalize">
        {currentCategory.replace("-", " ")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={cn(
              "cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:shadow-md",
              selectedOption?.id === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => handleStyleSelect(option)}
          >
            <div className="mb-3">
              <Image
                width={80}
                height={80}
                src={option.icon || "/placeholder.svg"}
                alt={option.name}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="text-sm font-medium">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
