"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCustomization } from "@/components/product-customization/customization-provider";
import type { FabricOption } from "@/lib/customization-store";
import { cn } from "@/lib/utils";
import Image from "next/image";

const fabricOptions: FabricOption[] = [
  {
    id: "1",
    name: "Navy Blue",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "2",
    name: "Charcoal",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "3",
    name: "Light Gray",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "4",
    name: "Dark Navy",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "5",
    name: "Forest Green",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "6",
    name: "Brown Corduroy",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "corduroy",
  },
  {
    id: "7",
    name: "Black Check",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "check",
  },
  {
    id: "8",
    name: "Brown Leather",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "leather",
  },
  {
    id: "9",
    name: "Herringbone Gray",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "herringbone",
  },
  {
    id: "10",
    name: "Pinstripe Navy",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "pinstripe",
  },
  {
    id: "11",
    name: "Burgundy",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
  {
    id: "12",
    name: "Beige",
    material: "Twill",
    price: 229,
    image: "/placeholder.svg?height=120&width=120",
    pattern: "solid",
  },
];

export function FabricSelection() {
  const { searchQuery, setSearchQuery, addToConfiguration, configuration } =
    useCustomization();

  const filteredFabrics = fabricOptions.filter(
    (fabric) =>
      fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedFabric = configuration.find((item) => item.type === "fabric");

  const handleFabricSelect = (fabric: FabricOption) => {
    addToConfiguration({
      id: fabric.id,
      type: "fabric",
      name: fabric.name,
      image: fabric.image,
      price: fabric.price,
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search Fabrics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filteredFabrics.map((fabric) => (
          <div
            key={fabric.id}
            className={cn(
              "cursor-pointer rounded-lg border-2 transition-all hover:shadow-md",
              selectedFabric?.id === fabric.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => handleFabricSelect(fabric)}
          >
            <div className="aspect-square rounded-t-lg overflow-hidden">
              <Image
                src={fabric.image || "/placeholder.svg"}
                alt={fabric.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <div className="font-medium text-sm">{fabric.material}</div>
              <div className="text-xs text-gray-600">{fabric.name}</div>
              <div className="text-sm font-semibold mt-1">${fabric.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
