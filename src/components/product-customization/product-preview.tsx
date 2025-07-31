"use client";

import Image from "next/image";
import previewImage from "@/Public/assets/product/coat.png";

export function ProductPreview() {
  return (
    <div className="w-full max-w-[350px] lg:max-w-[402px] h-[350px] lg:h-[501px] flex justify-center md:mt-0 mt-5">
      <div className="aspect-square bg-[#E6E6E6] rounded-lg overflow-hidden w-full h-full">
        <Image
          width={400}
          height={400}
          src={previewImage || "/placeholder.svg"}
          alt="Custom Garment Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
