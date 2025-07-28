"use client";

import {
  useCustomization,
  type Stage,
} from "@/components/product-customization/customization-provider";
import Image from "next/image";
// import { Palette, Scissors, Sparkles } from "lucide-react";
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
    <div className="mb-6 w-[146px]">
      <div className="flex flex-col gap-4 overflow-hidden justify-center">
        {stages.map((stage, index) => {
          const isActive = currentStage === stage.id;

          return (
            <button
              key={stage.id}
              onClick={() => handleStageChange(stage.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors h-[116px] gap-4 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-pink-100 text-gray-700 hover:bg-pink-200"
              } ${index === 0 ? "" : "border-l border-gray-200"}`}
            >
              <div className="flex flex-col items-center ">
                <Image
                  src={stage.icon}
                  alt={stage.name}
                  width={53}
                  height={50}
                  className="h-14 w-14"
                />
                <span>{stage.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
