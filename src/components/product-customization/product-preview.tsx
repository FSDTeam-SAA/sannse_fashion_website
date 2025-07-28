"use client";

import Image from "next/image";

export function ProductPreview() {
  return (
    <div className="mb-6">
      <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
        <Image
          width={400}
          height={400}
          src="/placeholder.svg?height=400&width=400&text=Navy+Suit+Jacket"
          alt="Custom Garment Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
