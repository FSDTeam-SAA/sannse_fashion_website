"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { StylePanel } from "@/components/product-customization/panel/style-panel";
import { AccentsPanel } from "@/components/product-customization/panel/accents-panel";
import { ArrowLeft } from "lucide-react";
import { FabricPanel } from "@/components/product-customization/panel/fabric-panel";

export function CustomizationPanel() {
  const { currentStage, currentCategory, setCurrentCategory } =
    useCustomization();

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
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Panel Header */}
      {currentCategory && (
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={() => setCurrentCategory(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <h2 className="text-lg font-semibold capitalize">
            {currentCategory.replace("-", " ")}
          </h2>
        </div>
      )}

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto">{renderPanel()}</div>
    </div>
  );
}
