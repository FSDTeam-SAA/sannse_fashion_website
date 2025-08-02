"use client";

import { ProductPreview } from "@/components/product-customization/product-preview";
import { ConfigurationSummary } from "@/components/product-customization/configuration-summary";
import { PricingSummary } from "@/components/product-customization/pricing-summary";
import type { ReactNode } from "react";
import { StageSelector } from "./stage-selector";

interface MainViewportProps {
  children?: ReactNode;
}

export function MainViewport({ children }: MainViewportProps) {
  return (
    <div className="flex-1 w-full lg:w-[780px] min-h-screen relative">
      {/* Main Content */}
      <div className="w-full bg-[#E6E6E6] h-full flex flex-col">
        <div className="p-4 lg:p-6 flex-1 flex flex-col justify-between">
          {/* Top Section - Product Preview centered */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="p-4 border-b border-gray-200 md:block hidden">
              <StageSelector />
            </div>
            <ProductPreview />
          </div>

          {/* Bottom Section */}
          <div className="mt-auto space-y-4">
            <ConfigurationSummary />
            <PricingSummary />
          </div>
        </div>
      </div>

      {/* Children (like the floating button) */}
      {children}
    </div>
  );
}
