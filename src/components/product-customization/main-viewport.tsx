"use client"

import { ProductPreview } from "@/components/product-customization/product-preview"
import { StageSelector } from "@/components/product-customization/stage-selector";
import { ConfigurationSummary } from "@/components/product-customization/configuration-summary";
import { PricingSummary } from "@/components/product-customization/pricing-summary";

export function MainViewport() {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex h-full">
        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* This area can show stage-specific content or remain empty */}
          <div className="h-full flex items-center justify-center text-gray-500">
            {/* Content area - can be used for additional information or remain minimal */}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-6 flex-1 flex flex-col">
            {/* Product Preview - Static Image */}
            <ProductPreview />

            {/* Stage Selector Tabs */}
            <StageSelector />

            {/* Configuration Summary - Visual Build Sheet */}
            <ConfigurationSummary />

            {/* Pricing Summary */}
            <PricingSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
