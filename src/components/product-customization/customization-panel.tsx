"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { StylePanel } from "@/components/product-customization/panel/style-panel";
import { AccentsPanel } from "@/components/product-customization/panel/accents-panel";
import { FabricPanel } from "@/components/product-customization/panel/fabric-panel";

export function CustomizationPanel() {
  const { currentStage } = useCustomization();

  const renderPanel = () => {
    switch (currentStage) {
      case "fabric":
        return <FabricPanel />;
      case "style":
        return <StylePanel />;
      case "accents":
        return <AccentsPanel />;
      default:
        return <FabricPanel />;
    }
  };

  return (
    <div className="w-[550px] pt-10 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto">{renderPanel()}</div>
    </div>
  );
}
