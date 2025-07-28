"use client"

import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { FabricSelection } from "@/components/product-customization/fabric-selection"
import { AccentSelection } from "@/components/product-customization/accent-selection";
import { useCustomization } from "@/components/product-customization/customization-provider";
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StyleSelection } from "@/components/product-customization/style-selection";

export function CustomizationSidebar() {
  const { currentStage, currentCategory, setCurrentCategory } = useCustomization()

  const renderContent = () => {
    if (currentStage === "fabric") {
      return <FabricSelection />
    }

    if (currentStage === "style") {
      return <StyleSelection />
    }

    if (currentStage === "accents") {
      return <AccentSelection />
    }

    return null
  }

  return (
    <Sidebar className="w-80 border-r">
      <SidebarHeader className="p-4 border-b">
        {currentCategory && (
          <Button variant="ghost" size="sm" onClick={() => setCurrentCategory(null)} className="mb-2 justify-start">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        <h2 className="text-lg font-semibold capitalize">{currentCategory || currentStage}</h2>
      </SidebarHeader>
      <SidebarContent className="p-4">{renderContent()}</SidebarContent>
    </Sidebar>
  )
}
