"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import type { AccentOption } from "@/lib/customization-store";
import { cn } from "@/lib/utils";
import Image from "next/image";

const accentCategories = [
  {
    id: "internal-lining",
    name: "Internal lining",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "pocket-square",
    name: "Pocket Square",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "buttons",
    name: "Buttons",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "button-holes",
    name: "Button Holes",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "elbow-patch",
    name: "Elbow patch",
    icon: "/placeholder.svg?height=60&width=60",
  },
];

const accentOptions: Record<string, AccentOption[]> = {
  "internal-lining": [
    {
      id: "default",
      name: "By default",
      category: "internal-lining",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "custom-color",
      name: "Custom color",
      category: "internal-lining",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "unlined",
      name: "Unlined",
      category: "internal-lining",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "quilted",
      name: "Quilted lining",
      category: "internal-lining",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export function AccentSelection() {
  const {
    currentCategory,
    setCurrentCategory,
    addToConfiguration,
    configuration,
  } = useCustomization();

  if (!currentCategory) {
    return (
      <div className="grid grid-cols-1 gap-3">
        {accentCategories.map((category) => (
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

  const options = accentOptions[currentCategory] || [];
  const selectedOption = configuration.find(
    (item) => item.type === "accents" && item.category === currentCategory
  );

  const handleAccentSelect = (option: AccentOption) => {
    addToConfiguration({
      id: option.id,
      type: "accents",
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
            onClick={() => handleAccentSelect(option)}
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
