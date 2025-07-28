"use client";

import Image from "next/image";
import previewImage from "@/Public/assets/product/coat.png";

export function ProductPreview() {
  return (
    <div className="mb-6 w-[402px] h-[501px] flex flex-end">
      <div className="aspect-square bg-[#E6E6E6] rounded-lg overflow-hidden">
        <Image
          width={400}
          height={400}
          src={previewImage}
          alt="Custom Garment Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
