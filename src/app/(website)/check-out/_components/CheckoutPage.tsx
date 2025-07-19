"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CartItem {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorImages, setErrorImages] = useState<Record<string | number, boolean>>({});

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
        window.dispatchEvent(new CustomEvent("cartUpdated"));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [cartItems, isLoading]);

  const handleImageError = (id: string | number) => {
    setErrorImages((prev) => ({ ...prev, [id]: true }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const salesTax = 50.0;
  const shippingCosts = 50;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal + salesTax + shippingCosts;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
          <div className="h-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5.5M7 13h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500 mb-6">
            Add some items to your cart to get started.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:my-[83px] md:py-[70px] py-[65px]">
      <div className="w-[70%] mx-auto bg-white min-h-screen">
        <div className="p-4">
          <h1 className="lg:text-[32px] md:text-[28px] text-[20px] text-[#212121] leading-[120%] font-semibold mb-4">Review your cart</h1>
        </div>

        <div className="p-4 space-y-4">
  {cartItems.map((item) => (
    <div key={item.id} className="bg-pink-50 rounded-lg p-4">
      <div className="flex items-center gap-6">
        {/* Product Image */}
        <div className="w-16 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={
              errorImages[item.id]
                ? "https://via.placeholder.com/64x80?text=No+Image"
                : item.image
            }
            alt={item.title}
            width={64}
            height={80}
            className="w-full h-full object-cover"
            onError={() => handleImageError(item.id)}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-1">
          <h3 className="text-[20px] font-semibold leading-[120%] text-[#212121]">
            {item.title}
          </h3>
          <p className="text-xs text-gray-600">
            {item.size ? `Size: ${item.size}` : "No size selected"}
          </p>
          <div className="text-lg font-semibold text-gray-900">
            ${item.price}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="bg-[#FDE8E9] rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                Subtotal
              </span>
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                Sales Tax
              </span>
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                ${salesTax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                Total Items
              </span>
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                {totalItems.toString().padStart(2, "0")}
              </span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between text-lg">
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                Total
              </span>
              <span className="text-[20px] font-semibold leading-[120%] text-[#212121]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

        <div className="p-4 space-y-3">
          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-gray-900 font-medium">Pay With Stripe</span>
            </div>
            <div className="text-blue-600 font-bold text-lg">stripe</div>
          </button>

          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={cartItems.length === 0}
            onClick={() => alert("Proceeding to checkout...")}
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}
