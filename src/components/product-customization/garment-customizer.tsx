"use client";

import { useState } from "react";
import { CustomizationPanel } from "./customization-panel";
import { MainViewport } from "./main-viewport";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function GarmentCustomizer() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="min-h-screen container mx-auto flex flex-col">
      <div className="flex h-full">
        {/* Desktop: Side panel */}
        <div className="hidden lg:block">
          <CustomizationPanel />
        </div>

        {/* Mobile: Sheet for customization panel */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <div className="flex-1">
            <MainViewport>
              {/* Mobile customization trigger button */}
              <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <SheetTrigger asChild>
                  <Button
                    size="lg"
                    className="rounded-full shadow-lg bg-red-500 hover:bg-red-600"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    Customize
                  </Button>
                </SheetTrigger>
              </div>
            </MainViewport>
          </div>

          <SheetContent side="bottom" className="h-[80vh] p-0">
            <CustomizationPanel onClose={() => setIsSheetOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
