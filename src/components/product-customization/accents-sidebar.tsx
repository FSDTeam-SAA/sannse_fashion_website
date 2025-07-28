"use client";

import { useCustomization } from "@/components/product-customization/customization-context";
import Image from "next/image";

const accentCategories = [
  { id: "internal-lining", name: "Internal lining", icon: "🧥" },
  { id: "pocket-square", name: "Pocket Square", icon: "🔺" },
  { id: "buttons", name: "Buttons", icon: "⚫" },
  { id: "button-holes", name: "Button Holes", icon: "⭕" },
  { id: "elbow-patch", name: "Elbow patch", icon: "🔧" },
];

const accentOptions = {
  "internal-lining": [
    {
      id: "default",
      name: "By default",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "custom",
      name: "Custom color",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "unlined",
      name: "Unlined",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "quilted",
      name: "Quilted lining",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
};

export function AccentsSidebar() {
  const { currentCategory, setCurrentCategory, addSelection } =
    useCustomization();

  if (!currentCategory) {
    return (
      <div className="p-4 space-y-3">
        {accentCategories.map((category) => (
          <div
            key={category.id}
            className="bg-pink-100 rounded-lg p-4 cursor-pointer hover:bg-pink-200 transition-colors"
            onClick={() => setCurrentCategory(category.id)}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium text-gray-800">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const options =
    accentOptions[currentCategory as keyof typeof accentOptions] || [];

  return (
    <div className="p-4">
      <button
        onClick={() => setCurrentCategory(null)}
        className="mb-4 text-blue-600 hover:text-blue-800"
      >
        ← Back
      </button>
      <h3 className="text-xl font-semibold mb-4 capitalize">
        {currentCategory.replace("-", " ")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="cursor-pointer group"
            onClick={() =>
              addSelection({
                id: option.id,
                name: option.name,
                type: "accent",
                image: option.image,
              })
            }
          >
            <div className="bg-white border border-gray-200 rounded-lg p-4 group-hover:border-gray-400 transition-colors">
              <Image
                width={80}
                height={80}
                src={option.image || "/placeholder.svg"}
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
