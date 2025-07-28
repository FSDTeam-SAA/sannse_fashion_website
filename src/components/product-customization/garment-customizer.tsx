"use client";

import { CustomizationPanel } from "./customization-panel";
import { MainViewport } from "./main-viewport";

export function GarmentCustomizer() {
  return (
    <div className="h-screen container mx-auto flex flex-col">
      <div className="flex ">
        <CustomizationPanel />
        <MainViewport />
      </div>
    </div>
  );
}
