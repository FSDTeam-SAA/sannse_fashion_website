// components/ProductCard.tsx
"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  price: string
  image?: string
}

export default function OrderdProductCard ({ product }: { product: Product }) {
  return (
    <Card className=" bg-[#FDDDDE] border-none rounded-lg flex items-center p-4">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={120}
        height={120}
        className="rounded-md object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm mt-1 line-clamp-2">{product.description}</p>
        <p className="font-bold  mt-2">{product.price}</p>
      </div>
    </Card>
  )
}
