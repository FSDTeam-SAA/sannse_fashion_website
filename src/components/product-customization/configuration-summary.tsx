"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export function ConfigurationSummary() {
  const { configuration } = useCustomization();

  if (configuration.length === 0) {
    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          Configuration Summary
        </h3>
        <div className="text-sm text-gray-400 text-center py-8">
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
      <ScrollArea className="h-32">
        <div className="flex gap-2 pb-2">
          {configuration.map((item) => (
            <div
              key={`${item.type}-${item.id}`}
              className="bg-pink-100 rounded-lg p-3 text-center min-w-20 flex-shrink-0"
            >
              {/* Visual representation */}
              {item.color && (
                <div
                  className="w-8 h-8 mx-auto mb-2 rounded border border-gray-200"
                  style={{ backgroundColor: item.color }}
                />
              )}
              {item.icon && !item.color && (
                <div className="w-8 h-8 mx-auto mb-2">
                  <Image
                    width={32}
                    height={32}
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Label */}
              <div className="text-xs font-medium text-gray-800 truncate">
                {item.name}
              </div>

              {/* Category label for style and accents */}
              {item.category && (
                <div className="text-xs text-gray-500 mt-1 capitalize">
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
