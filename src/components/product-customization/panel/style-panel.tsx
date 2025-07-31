/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useCustomization } from "@/components/product-customization/customization-provider";
import styleImg from "@/Public/assets/product/style/group/Group_1000001780-removebg-preview.svg";
import fitImg from "@/Public/assets/product/style/group/858-removebg-preview.svg";
import lengthImg from "@/Public/assets/product/style/group/88-removebg-preview.svg";
import sleeveBtnImg from "@/Public/assets/product/style/group/548-removebg-preview 1.svg";
import backStyleImg from "@/Public/assets/product/style/group/55888-removebg-preview.svg";
import bPocketImg from "@/Public/assets/product/style/group/g5-removebg-preview.svg";
import pocketImg from "@/Public/assets/product/style/group/54578-removebg-preview.svg";
import buttonImg1 from "@/Public/assets/product/style/group/Screenshot 2025-05-29 123446.svg";
import buttonImg2 from "@/Public/assets/product/style/group/Screenshot 2025-05-29 122752.svg";
import buttonImg3 from "@/Public/assets/product/style/group/Screenshot 2025-05-29 123451.svg";
import buttonImg4 from "@/Public/assets/product/style/group/Screenshot 2025-05-29 123543.svg";
import { ScrollArea } from "@/components/ui/scroll-area";

const styleCategories = [
  {
    id: "style",
    name: "Style",
    icon: styleImg,
  },
  { id: "fit", name: "Fit", icon: fitImg },
  { id: "length", name: "Length", icon: lengthImg },
  {
    id: "sleeve-buttons",
    name: "Sleeve Buttons",
    icon: sleeveBtnImg,
  },
  {
    id: "back-style",
    name: "Back Style",
    icon: backStyleImg,
  },
  {
    id: "breast-pocket",
    name: "Breast Pocket",
    icon: bPocketImg,
  },
  {
    id: "pocket-style",
    name: "Pocket Style",
    icon: pocketImg,
  },
];

const styleOptions: Record<string, any[]> = {
  style: [
    {
      id: "sb1",
      name: "Single-breasted 1 button",
      icon: buttonImg1,
    },
    {
      id: "sb6",
      name: "Single-breasted 6 button",
      icon: buttonImg4,
    },
    {
      id: "sb3",
      name: "Single-breasted 3 button",
      icon: buttonImg3,
    },
    {
      id: "sb2",
      name: "Single-breasted 2 button",
      icon: buttonImg2,
    },
  ],
  fit: [
    {
      id: "normal",
      name: "Normal Fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "slim",
      name: "Slim Fit",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  length: [
    {
      id: "regular",
      name: "Regular Length",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "long",
      name: "Long Length",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  "sleeve-buttons": [
    {
      id: "no-buttons",
      name: "No Buttons",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "functional-buttons",
      name: "Functional Buttons",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  "back-style": [
    {
      id: "no-vent",
      name: "No Vent",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "center-vent",
      name: "Center Vent",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "side-vents",
      name: "Side Vents",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  "breast-pocket": [
    {
      id: "no-pocket",
      name: "No Pocket",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "patch-pocket",
      name: "Patch Pocket",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "welt-pocket",
      name: "Welt Pocket",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
  "pocket-style": [
    {
      id: "flap-pockets",
      name: "Flap Pockets",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "welt-pockets",
      name: "Welt Pockets",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "patch-pockets",
      name: "Patch Pockets",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export function StylePanel() {
  const {
    currentCategory,
    setCurrentCategory,
    addToConfiguration,
    configuration,
  } = useCustomization();

  const handleStyleSelect = (option: any, category: string) => {
    addToConfiguration({
      id: option.id,
      type: "style",
      category: category,
      name: option.name,
      icon: option.icon,
    });
  };

  const getCategoryDisplayName = (categoryId: string) => {
    const category = styleCategories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const isOptionSelected = (optionId: string, category: string) => {
    return configuration.some(
      (item) =>
        item.type === "style" &&
        item.category === category &&
        item.id === optionId
    );
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Mobile: Categories at top, Desktop: Categories on left */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Categories Panel */}
        <div className="w-full md:w-[200px] lg:w-[220px] bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0">
          <div className="p-2 md:p-4">
            {/* Mobile: Horizontal scroll with better spacing */}
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {styleCategories.map((category) => (
                <div
                  key={category.id}
                  className={`rounded-lg p-2 md:p-3 cursor-pointer transition-all duration-200 min-w-[70px] sm:min-w-[80px] md:min-w-0 md:w-full h-[70px] sm:h-[80px] md:h-[120px] lg:h-[144px] border flex-shrink-0 ${
                    currentCategory === category.id
                      ? "bg-white border-2 border-red-400 shadow-md"
                      : "bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setCurrentCategory(category.id)}
                >
                  <div className="flex items-center flex-col justify-center h-full">
                    <div className="rounded-lg flex items-center justify-center mb-1 md:mb-2">
                      <Image
                        width={24}
                        height={24}
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] object-contain"
                      />
                    </div>
                    <div className="font-medium text-gray-800 text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-tight px-1">
                      {category.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Options Panel */}
        <div className="flex-1 bg-white min-h-0">
          <ScrollArea className="h-full">
            {currentCategory ? (
              <div className="p-3 sm:p-4 md:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  {getCategoryDisplayName(currentCategory)}
                </h2>

                {/* Responsive grid: 2 columns on mobile, 2-3 on tablet, 2-4 on desktop */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {(styleOptions[currentCategory] || []).map((option) => (
                    <div
                      key={option.id}
                      className="cursor-pointer group"
                      onClick={() => handleStyleSelect(option, currentCategory)}
                    >
                      <div
                        className={`border rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-200 ${
                          isOptionSelected(option.id, currentCategory)
                            ? "border-red-400 bg-red-50 shadow-md"
                            : "border-gray-200 bg-white group-hover:border-gray-400 group-hover:shadow-sm"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-full flex justify-center mb-2 sm:mb-3 md:mb-4">
                            <Image
                              width={60}
                              height={60}
                              src={
                                option.icon ||
                                "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png"
                              }
                              alt={option.name}
                              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
                            />
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm font-medium text-center text-gray-800 leading-tight px-1">
                            {option.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[200px] p-4">
                <div className="text-center text-gray-500">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium mb-2">
                    Select a Style Category
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Choose a category from{" "}
                    {window.innerWidth < 768 ? "above" : "the left"} to see
                    available options
                  </p>
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
