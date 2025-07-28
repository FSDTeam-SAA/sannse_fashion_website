"use client";

import { useCustomization } from "@/components/product-customization//customization-context";
import Image from "next/image";

export function MainContent() {
  const { currentStage, setCurrentStage, currentCategory, selections } =
    useCustomization();

  const renderMainContent = () => {
    if (currentStage === "accents" && currentCategory === "internal-lining") {
      return (
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Accents</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="By default"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium">By default</div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Custom color"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Custom color
              </div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Unlined"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Unlined
              </div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Quilted lining"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Quilted lining
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentStage === "style" && currentCategory === "style") {
      return (
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Style</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Single-breasted 1 button"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium">
                Single-breasted
                <br />1 button
              </div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Single-breasted 6 button"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Single-breasted
                <br />6 button
              </div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Single-breasted 3 button"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Single-breasted
                <br />3 button
              </div>
            </div>
            <div className="cursor-pointer group">
              <Image
                width={120}
                height={120}
                src="/placeholder.svg?height=120&width=120"
                alt="Single-breasted 2 button"
                className="w-full h-32 object-contain mb-2"
              />
              <div className="text-center font-medium text-gray-400">
                Single-breasted
                <br />2 button
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="p-8"></div>;
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex h-full">
        <div className="flex-1">{renderMainContent()}</div>

        <div className="w-96 bg-white p-6 flex flex-col">
          {/* Product Image */}
          <div className="mb-6">
            <Image
              width={400}
              height={400}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Customize_Accents%20%282%29-NsJ6EBVjLlPGCaDCqu8mdYliVQa7I0.png"
              alt="Navy Suit Jacket"
              className="w-full h-80 object-contain"
            />
          </div>

          {/* Stage Selector */}
          <div className="flex mb-6">
            <button
              onClick={() => setCurrentStage("fabric")}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-l-md border ${
                currentStage === "fabric"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-pink-100 text-gray-700 border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="text-lg mb-1">⬜</div>
                <div>Fabric</div>
              </div>
            </button>
            <button
              onClick={() => setCurrentStage("style")}
              className={`flex-1 py-3 px-4 text-sm font-medium border-t border-b ${
                currentStage === "style"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-pink-100 text-gray-700 border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="text-lg mb-1">✂️</div>
                <div>Style</div>
              </div>
            </button>
            <button
              onClick={() => setCurrentStage("accents")}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-r-md border ${
                currentStage === "accents"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-pink-100 text-gray-700 border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="text-lg mb-1">✏️</div>
                <div>Accents</div>
              </div>
            </button>
          </div>

          {/* Configuration Summary */}
          <div className="flex gap-2 mb-6">
            {selections.map((selection) => (
              <div
                key={selection.id}
                className="bg-pink-100 rounded-lg p-3 text-center min-w-0 flex-1"
              >
                {selection.image && (
                  <div
                    className="w-8 h-8 mx-auto mb-1 rounded"
                    style={{ backgroundColor: selection.image }}
                  />
                )}
                <div className="text-xs font-medium truncate">
                  {selection.name}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-auto">
            <h3 className="text-xl font-semibold mb-2">Custom Coat</h3>
            <p className="text-gray-600 mb-1">$199 Taxes & fees incl.</p>
            <p className="text-sm text-gray-600 mb-4">
              Order today and receive it in 2 weeks.
            </p>
            <button className="w-full bg-red-500 text-white py-3 px-4 rounded-md font-medium hover:bg-red-600 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
