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
    <ScrollArea className="h-[calc(100vh-300px)] lg:h-[90vh] *:no-scrollbar flex">
      <div className="flex flex-col lg:flex-row h-full w-full">
        {/* Left Panel - Categories */}
        <div className="w-full lg:w-[200px] bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200 overflow-y-auto">
          <div className="p-2 lg:p-4">
            {/* Mobile: Horizontal scroll, Desktop: Vertical stack */}
            <div className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {styleCategories.map((category) => (
                <div
                  key={category.id}
                  className={`rounded-lg p-2 cursor-pointer transition-colors min-w-[80px] lg:min-w-0 lg:w-[164px] h-[80px] lg:h-[144px] border flex-shrink-0 ${
                    currentCategory === category.id
                      ? "bg-gray-200 border-1 border-red-300"
                      : " hover:bg-gray-200"
                  }`}
                  onClick={() => setCurrentCategory(category.id)}
                >
                  <div className="flex items-center flex-col justify-center h-full">
                    <div className="rounded-lg flex items-center justify-center mr-3">
                      <Image
                        width={30}
                        height={60}
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        className="w-[30px] lg:w-[60px] h-[60px] lg:h-[87px]"
                      />
                    </div>
                    <div className="font-medium text-gray-800 text-center text-[10px] lg:text-sm leading-tight">
                      {category.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Options */}
        <div className="flex-1 bg-white">
          {currentCategory ? (
            <div className="p-3 lg:p-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                {getCategoryDisplayName(currentCategory)}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {(styleOptions[currentCategory] || []).map((option) => (
                  <div
                    key={option.id}
                    className="cursor-pointer group"
                    onClick={() => handleStyleSelect(option, currentCategory)}
                  >
                    <div
                      className={`border rounded-lg p-2 transition-all duration-200 ${
                        isOptionSelected(option.id, currentCategory)
                          ? "border-red-400 bg-gray-100 shadow-md"
                          : "border-gray-200 bg-white group-hover:border-gray-400 group-hover:shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <Image
                          width={60}
                          height={60}
                          src={
                            option.icon ||
                            "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={option.name}
                          className="w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] object-contain mb-2 lg:mb-4"
                        />
                        <div className="text-xs lg:text-sm font-medium text-center text-gray-800 leading-tight">
                          {option.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <h3 className="text-base lg:text-lg font-medium mb-2">
                  Select a Style Category
                </h3>
                <p className="text-sm">
                  Choose a category from the left to see available options
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
