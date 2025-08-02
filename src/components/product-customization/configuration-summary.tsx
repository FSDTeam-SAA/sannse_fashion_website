"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export function ConfigurationSummary() {
  const { configuration } = useCustomization();

  if (configuration.length === 0) {
    return (
      <div className="mb-4 lg:mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          Configuration Summary
        </h3>
        <div className="text-sm text-gray-400 text-center py-4 lg:py-8">
          Start customizing to see your selections here
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        Configuration Summary
      </h3>
      <ScrollArea className="h-24 lg:h-36">
        <div className="flex gap-1 lg:gap-2 pb-2">
          {configuration.map((item) => (
            <div
              key={`${item.type}-${item.id}`}
              className="bg-white rounded-lg p-1 lg:p-2 border text-center min-w-16 lg:min-w-20 flex-shrink-0"
            >
              {/* Visual representation */}
              {/* Fabric  */}
              {item.color &&
                (item.image ? (
                  <Image
                    src={
                      item.image ||
                      "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={item.name}
                    width={40}
                    height={40}
                    className="mx-auto mb-1 rounded-md w-6 lg:w-8 h-6 lg:h-8"
                  />
                ) : (
                  <div
                    className="w-6 lg:w-8 h-6 lg:h-8 mx-auto mb-1 rounded border border-gray-200"
                    style={{ backgroundColor: item.color }}
                  />
                ))}

              {/* styles */}
              {item.icon && !item.color && (
                <div className="w-10 lg:w-16 h-10 lg:h-16 mx-auto mb-1">
                  <Image
                    width={20}
                    height={20}
                    src={
                      item.icon ||
                      item.image ||
                      "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Accents  */}
              {!item.icon && !item.color && (
                <div className="w-10 lg:w-16 h-10 lg:h-16 mx-auto mb-1">
                  <Image
                    width={40}
                    height={40}
                    src={
                      item.image ||
                      "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={item.name}
                    className="w-full px-1 lg:px-2 h-full object-contain"
                  />
                </div>
              )}

              {/* Label */}
              <div className="flex justify-between items-center text-[9px] lg:text-xs font-medium">
                <h3 className="text-[9px] lg:text-xs font-medium text-gray-500 truncate">
                  {item.material}
                </h3>
                {item.price && (
                  <h3 className="text-[9px] lg:text-xs font-medium text-gray-500">
                    ${item.price.toFixed(0)}
                  </h3>
                )}
              </div>
              <div className="text-[9px] lg:text-xs font-medium text-gray-800 truncate leading-tight">
                {item.name}
              </div>
              {/* Category label for style and accents */}
              {item.category && (
                <div className="text-[8px] lg:text-xs text-gray-500 mt-1 capitalize leading-tight">
                  {item.category.replace("-", " ")}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
