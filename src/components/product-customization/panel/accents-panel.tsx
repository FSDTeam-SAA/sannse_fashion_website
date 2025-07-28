/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useCustomization } from "@/components/product-customization/customization-provider"
import Image from "next/image"


const accentCategories = [
  { id: "internal-lining", name: "Internal lining", icon: "/placeholder.svg?height=60&width=60" },
  { id: "pocket-square", name: "Pocket Square", icon: "/placeholder.svg?height=60&width=60" },
  { id: "buttons", name: "Buttons", icon: "/placeholder.svg?height=60&width=60" },
  { id: "button-holes", name: "Button Holes", icon: "/placeholder.svg?height=60&width=60" },
  { id: "elbow-patch", name: "Elbow patch", icon: "/placeholder.svg?height=60&width=60" },
]

const accentOptions: Record<string, any[]> = {
  "internal-lining": [
    { id: "default", name: "By default", icon: "/placeholder.svg?height=80&width=80" },
    { id: "custom", name: "Custom color", icon: "/placeholder.svg?height=80&width=80" },
    { id: "unlined", name: "Unlined", icon: "/placeholder.svg?height=80&width=80" },
    { id: "quilted", name: "Quilted lining", icon: "/placeholder.svg?height=80&width=80" },
  ],
  "pocket-square": [
    { id: "none", name: "No Pocket Square", icon: "/placeholder.svg?height=80&width=80" },
    { id: "white", name: "White Pocket Square", icon: "/placeholder.svg?height=80&width=80" },
    { id: "colored", name: "Colored Pocket Square", icon: "/placeholder.svg?height=80&width=80" },
  ],
}

export function AccentsPanel() {
  const { currentCategory, setCurrentCategory, addToConfiguration } = useCustomization()

  const handleAccentSelect = (option: any, category: string) => {
    addToConfiguration({
      id: option.id,
      type: "accents",
      category: category,
      name: option.name,
      icon: option.icon,
    })
  }

  // Show categories
  if (!currentCategory) {
    return (
      <div className="p-4 space-y-3">
        {accentCategories.map((category) => (
          <div
            key={category.id}
            className="bg-pink-100 rounded-lg p-4 cursor-pointer hover:bg-pink-200 transition-colors"
            onClick={() => setCurrentCategory(category.id)}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <Image fill src={category.icon || "/placeholder.svg"} alt={category.name} className="w-8 h-8" />
              </div>
              <div className="font-medium text-gray-800">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Show options for selected category
  const options = accentOptions[currentCategory] || []

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="cursor-pointer group"
            onClick={() => handleAccentSelect(option, currentCategory)}
          >
            <div className="bg-white border border-gray-200 rounded-lg p-4 group-hover:border-gray-400 transition-colors">
              <Image
              width={80}
                height={80}
                src={option.icon || "/placeholder.svg"}
                alt={option.name}
                className="w-full h-20 object-contain mb-2"
              />
              <div className="text-sm font-medium text-center">{option.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
