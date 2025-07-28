"use client";

import { useCustomization } from "@/components/product-customization/customization-provider";
import { Button } from "../ui/button";

export function PricingSummary() {
  const { getTotalPrice } = useCustomization();
  const totalPrice = getTotalPrice();

  return (
    <div className="mt-auto flex items-center justify-between p-4 border-t border-gray-50">
      <div>
        {" "}
        <h3 className="text-xl font-semibold mb-2">Custom Coat</h3>
        <p className="text-gray-600 mb-1">
          ${totalPrice || 199} Taxes & fees incl.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Order today and receive it in 2 weeks.
        </p>
      </div>
      <Button className=" bg-[#EF1A26] text-white py-4 px-[52px] rounded-md font-medium hover:bg-red-600 transition-colors">
        Next
      </Button>
    </div>
  );
}
