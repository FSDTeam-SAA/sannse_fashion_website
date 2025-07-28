"use client";

import { Footer } from "react-day-picker";
import { CustomizationPanel } from "./customization-panel";
import { Header } from "./header";
import { MainViewport } from "./main-viewport";

export function GarmentCustomizer() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <CustomizationPanel />
        <MainViewport />
      </div>
      <Footer />
    </div>
  );
}
