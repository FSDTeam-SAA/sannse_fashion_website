"use client"

import {
  useCustomization,
  type Stage,
} from "@/components/product-customization/customization-provider";
import { Palette, Scissors, Sparkles } from "lucide-react"

export function StageSelector() {
  const { currentStage, setCurrentStage, setCurrentCategory } = useCustomization()

  const handleStageChange = (stage: Stage) => {
    setCurrentStage(stage)
    setCurrentCategory(null) // Reset category when changing stages
  }

  const stages = [
    { id: "fabric" as Stage, name: "Fabric", icon: Palette },
    { id: "style" as Stage, name: "Style", icon: Scissors },
    { id: "accents" as Stage, name: "Accents", icon: Sparkles },
  ]

  return (
    <div className="mb-6">
      <div className="flex rounded-lg overflow-hidden border border-gray-200">
        {stages.map((stage, index) => {
          const Icon = stage.icon
          const isActive = currentStage === stage.id

          return (
            <button
              key={stage.id}
              onClick={() => handleStageChange(stage.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                isActive ? "bg-red-500 text-white" : "bg-pink-100 text-gray-700 hover:bg-pink-200"
              } ${index === 0 ? "" : "border-l border-gray-200"}`}
            >
              <div className="flex flex-col items-center">
                <Icon className="w-4 h-4 mb-1" />
                <span>{stage.name}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
