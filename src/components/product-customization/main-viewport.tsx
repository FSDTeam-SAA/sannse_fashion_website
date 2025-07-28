"use client";

import { ProductPreview } from "@/components/product-customization/product-preview";
import { StageSelector } from "@/components/product-customization/stage-selector";
import { ConfigurationSummary } from "@/components/product-customization/configuration-summary";
import { PricingSummary } from "@/components/product-customization/pricing-summary";

export function MainViewport() {
  return (
    <div className="flex-1 w-[780px] h-screen ">
      {/* Right Panel */}
      <div className="w-full bg-[#E6E6E6] border-l h-full border-gray-200 flex flex-col">
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-evenly gap-8 mb-2">
            <StageSelector />
            <ProductPreview />
          </div>

          {/* This will push to bottom */}
          <div className="mt-auto ">
            <ConfigurationSummary />
            <PricingSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
