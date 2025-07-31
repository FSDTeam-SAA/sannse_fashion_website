"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { Button } from "@/components/ui/button";

export function PricingSummary() {
  const { configuration } = useCustomization();

  const basePrice = 299;
  const totalCustomizationPrice = configuration.reduce(
    (total, item) => total + (item.price || 0),
    0
  );
  const finalPrice = basePrice + totalCustomizationPrice;

  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Base Price:</span>
          <span>${basePrice}</span>
        </div>
        {totalCustomizationPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span>Customizations:</span>
            <span>${totalCustomizationPrice}</span>
          </div>
        )}
        <div className="border-t pt-3">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${finalPrice}</span>
          </div>
        </div>
        <Button className="w-full mt-4 bg-red-500 hover:bg-red-600">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
