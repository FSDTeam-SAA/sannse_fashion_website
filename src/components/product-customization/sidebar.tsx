"use client"

import { useCustomization } from "@/components/product-customization/customization-context";
import { FabricSidebar } from "@/components/product-customization/fabric-sidebar";
import { StyleSidebar } from "@/components/product-customization/style-sidebar";
import { AccentsSidebar } from "@/components/product-customization/accents-sidebar";

export function Sidebar() {
  const { currentStage } = useCustomization()

  const renderSidebar = () => {
    switch (currentStage) {
      case "fabric":
        return <FabricSidebar />
      case "style":
        return <StyleSidebar />
      case "accents":
        return <AccentsSidebar />
      default:
        return <FabricSidebar />
    }
  }

  return <div className="w-80 bg-gray-50 border-r border-gray-200">{renderSidebar()}</div>
}
