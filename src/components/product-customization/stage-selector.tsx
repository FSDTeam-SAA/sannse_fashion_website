"use client";

import {
  useCustomization,
  type Stage,
} from "@/components/product-customization/customization-provider";
import Image from "next/image";
import fabricImg from "@/Public/assets/product/Fabric.svg";
import styleImg from "@/Public/assets/product/Seaser.svg";
import accentImg from "@/Public/assets/product/Bursh.svg";

export function StageSelector() {
  const { currentStage, setCurrentStage, setCurrentCategory } =
    useCustomization();

  const handleStageChange = (stage: Stage) => {
    setCurrentStage(stage);
    setCurrentCategory(null); // Reset category when changing stages
  };

  const stages = [
    {
      id: "fabric" as Stage,
      name: "Fabric",
      icon: fabricImg,
    },
    { id: "style" as Stage, name: "Style", icon: styleImg },
    { id: "accents" as Stage, name: "Accents", icon: accentImg },
  ];

  return (
    <div className="w-full">
      <div className="flex lg:flex-col gap-1 lg:gap-4 justify-center lg:justify-start">
        {stages.map((stage, index) => {
          const isActive = currentStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => handleStageChange(stage.id)}
              className={`flex-1 lg:flex-none py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium transition-colors h-[80px] lg:h-[116px] gap-1 lg:gap-4 min-w-[100px] lg:min-w-0 lg:w-full ${
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-pink-100 text-gray-700 hover:bg-pink-200"
              } ${index === 0 ? "rounded-l-lg lg:rounded-lg" : ""} ${
                index === stages.length - 1 ? "rounded-r-lg lg:rounded-lg" : ""
              } ${index !== 0 ? "border-l lg:border-l-0 border-gray-200" : ""}`}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={stage.icon || "/placeholder.svg"}
                  alt={stage.name}
                  width={32}
                  height={32}
                  className="h-8 lg:h-14 w-8 lg:w-14"
                />
                <span className="mt-1 lg:mt-2 leading-tight">{stage.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
