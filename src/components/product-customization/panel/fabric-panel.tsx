"use client";

import { Search } from "lucide-react";
import { useCustomization } from "@/components/product-customization/customization-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image, { type StaticImageData } from "next/image";
import fabricImg from "@/Public/assets/product/fabrics/2284_huge_c300.png";
import fabricImg1 from "@/Public/assets/product/fabrics/2790_huge_c300.png";

type FabricOption = {
  id: string;
  name: string;
  material: string;
  price: number;
  color: string;
  image?: StaticImageData | string;
};

const fabricOptions: FabricOption[] = [
  {
    id: "f1",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4a5568",
    image: fabricImg,
  },
  {
    id: "f2",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2d3748",
    image: fabricImg1,
  },
  {
    id: "f3",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2b6cb0",
  },
  {
    id: "f4",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#718096",
  },
  {
    id: "f5",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2d3748",
  },
  {
    id: "f6",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#68d391",
  },
  {
    id: "f7",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#8b4513",
  },
  {
    id: "f8",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#654321",
  },
  {
    id: "f9",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#a0aec0",
  },
  {
    id: "f10",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#718096",
  },
  {
    id: "f11",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#8b7355",
  },
  {
    id: "f12",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#d2b48c",
  },
  {
    id: "f13",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#f7fafc",
  },
  {
    id: "f14",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#e2e8f0",
  },
  {
    id: "f15",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2b6cb0",
  },
  {
    id: "f16",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#d69e2e",
  },
  {
    id: "f17",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4a5568",
  },
  {
    id: "f18",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#63b3ed",
  },
  {
    id: "f19",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4299e1",
  },
  {
    id: "f20",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#a78bfa",
  },
  {
    id: "f21",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#e53e3e",
  },
  {
    id: "f22",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#38a169",
  },
  {
    id: "f23",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2d3748",
  },
  {
    id: "f24",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#1a202c",
  },
];

export function FabricPanel() {
  const { searchQuery, setSearchQuery, addToConfiguration } =
    useCustomization();

  const filteredFabrics = fabricOptions.filter(
    (fabric) =>
      fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFabricSelect = (fabric: (typeof fabricOptions)[0]) => {
    addToConfiguration({
      id: fabric.id,
      type: "fabric",
      name: fabric.name,
      color: typeof fabric.color === "string" ? fabric.color : undefined,
      price: fabric.price,
      image: fabric.image
        ? typeof fabric.image === "string"
          ? fabric.image
          : fabric.image.src
        : undefined,
      material: fabric.material,
    });
  };

  return (
    <div className="p-2 sm:p-4">
      <ScrollArea className="h-[calc(100vh-300px)] lg:h-[90vh] *:no-scrollbar">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Fabrics"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fabric Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2">
          {filteredFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="cursor-pointer group"
              onClick={() => handleFabricSelect(fabric)}
            >
              <div
                className="w-full aspect-square rounded-md border border-gray-200 group-hover:border-gray-400 transition-colors"
                style={
                  typeof fabric.color === "string"
                    ? { backgroundColor: fabric.color }
                    : undefined
                }
              >
                <Image
                  src={
                    fabric.image ||
                    "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt={fabric.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="mt-1 text-[10px] sm:text-xs">
                <div className="font-medium truncate">{fabric.material}</div>
                <div className="text-gray-600 truncate text-[9px] sm:text-[10px]">
                  {fabric.name}
                </div>
                <div className="font-semibold">${fabric.price}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
