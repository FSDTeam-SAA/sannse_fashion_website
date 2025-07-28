"use client"

import { useCustomization } from "@/components/product-customization/customization-provider";

export function PricingSummary() {
  const { getTotalPrice } = useCustomization()
  const totalPrice = getTotalPrice()

  return (
    <div className="mt-auto">
      <h3 className="text-xl font-semibold mb-2">Custom Coat</h3>
      <p className="text-gray-600 mb-1">${totalPrice || 199} Taxes & fees incl.</p>
      <p className="text-sm text-gray-600 mb-4">Order today and receive it in 2 weeks.</p>
      <button className="w-full bg-red-500 text-white py-3 px-4 rounded-md font-medium hover:bg-red-600 transition-colors">
        Next
      </button>
    </div>
  )
}
