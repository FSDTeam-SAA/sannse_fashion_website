"use client";

import { Search } from "lucide-react";
import { useCustomization } from "@/components/product-customization/customization-context";

const fabrics = [
  {
    id: "1",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4a5568",
  },
  {
    id: "2",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2d3748",
  },
  {
    id: "3",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2b6cb0",
  },
  {
    id: "4",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#718096",
  },
  {
    id: "5",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2d3748",
  },
  {
    id: "6",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#68d391",
  },
  {
    id: "7",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#8b4513",
  },
  {
    id: "8",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#654321",
  },
  {
    id: "9",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#a0aec0",
  },
  {
    id: "10",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#718096",
  },
  {
    id: "11",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#8b7355",
  },
  {
    id: "12",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#d2b48c",
  },
  {
    id: "13",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#f7fafc",
  },
  {
    id: "14",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#e2e8f0",
  },
  {
    id: "15",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#2b6cb0",
  },
  {
    id: "16",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#d69e2e",
  },
  {
    id: "17",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4a5568",
  },
  {
    id: "18",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#63b3ed",
  },
  {
    id: "19",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#4299e1",
  },
  {
    id: "20",
    name: "Navy Blue 100s",
    material: "Twill",
    price: 229,
    color: "#a78bfa",
  },
];

export function FabricSidebar() {
  const { searchQuery, setSearchQuery, addSelection } = useCustomization();

  return (
    <div className="p-4 h-full overflow-y-auto">
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

      <div className="grid grid-cols-4 gap-2">
        {fabrics.map((fabric) => (
          <div
            key={fabric.id}
            className="cursor-pointer group"
            onClick={() =>
              addSelection({
                id: fabric.id,
                name: fabric.name,
                type: "fabric",
                image: fabric.color,
                price: fabric.price,
              })
            }
          >
            <div
              className="w-full aspect-square rounded-md border border-gray-200 group-hover:border-gray-400 transition-colors"
              style={{ backgroundColor: fabric.color }}
            />
            <div className="mt-1 text-xs">
              <div className="font-medium">{fabric.material}</div>
              <div className="text-gray-600">{fabric.name}</div>
              <div className="font-semibold">${fabric.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
