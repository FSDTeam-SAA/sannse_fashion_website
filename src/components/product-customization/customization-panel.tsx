"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { StylePanel } from "@/components/product-customization/panel/style-panel";
import { AccentsPanel } from "@/components/product-customization/panel/accents-panel";
import { FabricPanel } from "@/components/product-customization/panel/fabric-panel";
import { StageSelector } from "@/components/product-customization/stage-selector";

interface CustomizationPanelProps {
  onClose?: () => void;
}

export function CustomizationPanel({ onClose }: CustomizationPanelProps) {
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
    <div className="w-full lg:w-[550px] h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Mobile header with close button */}
      {onClose && (
        <div className="flex items-center justify-between p-3 border-b border-gray-200 lg:hidden">
          <h2 className="text-base font-semibold">Customize Your Garment</h2>
        </div>
      )}

      {/* Stage Selector - Now inside customization panel */}
      <div className="p-4 border-b border-gray-200 md:hidden block">
        <StageSelector />
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto md:py-6">{renderPanel()}</div>
    </div>
  );
}
