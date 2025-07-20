"use client";

import React, { useState, useEffect } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  // Load cart from localStorage
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

  // Save to localStorage and dispatch event
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

  const updateQuantity = (id: string | number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string | number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  //   const clearCart = () => {
  //     setCartItems([]);
  //   };

  const handleImageError = (id: string | number) => {
    setErrorImages((prev) => ({ ...prev, [id]: true }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const salesTax = 50;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal + salesTax;

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="text-center py-12">
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
          <p className="text-gray-500">
            Add some items to your cart to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen lg:my-[83px] md:py-[70px] py-[65px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="lg:text-[32px] md:text-[28px] text-[20px] text-[#212121] leading-[120%] font-semibold mb-5">
              Cart Items
            </h2>
            {/* <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear Cart
            </button> */}
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FDE8E9] rounded-lg p-4 flex gap-4"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={
                      errorImages[item.id]
                        ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
                        : item.image
                    }
                    alt={item.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(item.id)}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-[120%] text-[#212121]">
                    {item.title}
                  </h3>
                  {/* {item.size && (
                    <p className="text-xs text-gray-600 mb-2">
                      Size: <span className="font-medium">{item.size}</span>
                    </p>
                  )} */}
                  <div className="text-[20px] font-semibold leading-[120%] text-[#212121] my-4">
                    ${item.price}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="p-1 hover:bg-gray-100 rounded-l"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 min-w-[40px] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded-r"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    {/* <div className="text-sm text-gray-600">
                      Total:{" "}
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div> */}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 p-1 h-fit"
                  title="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="">
          <h2 className="lg:text-[32px] md:text-[28px] text-[20px] text-[#212121] leading-[120%] font-semibold mb-5">
            Cart Total
          </h2>
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
            <div className="pt-10">
              <Link href="/check-out">
                <button
                  className="w-full bg-[#EF1A26] hover:bg-[#da4b52] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
