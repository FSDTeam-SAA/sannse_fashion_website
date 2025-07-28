"use client";

import { CustomizationProvider } from "@/components/product-customization/customization-provider";
import { GarmentCustomizer } from "@/components/product-customization/garment-customizer";

export default function Home() {
  return (
    <CustomizationProvider>
      <GarmentCustomizer />
    </CustomizationProvider>
  );
}
