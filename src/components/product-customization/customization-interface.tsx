"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomizationSidebar } from "@/components/product-customization/customization-sidebar";
import { MainViewport } from "@/components/product-customization/main-viewport";
import { useIsMobile } from "@/hooks/use-mobile";

export function CustomizationInterface() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="flex min-h-screen w-full">
        <CustomizationSidebar />
        <MainViewport />
      </div>
    </SidebarProvider>
  );
}
