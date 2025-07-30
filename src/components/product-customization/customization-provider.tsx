"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Stage = "fabric" | "style" | "accents";

export interface ConfigurationItem {
  id: string;
  type: "fabric" | "style" | "accents";
  category?: string;
  name: string;
  image?: string;
  icon?: string;
  price?: number;
  color?: string;
  material?: string;
}

interface CustomizationState {
  currentStage: Stage;
  currentCategory: string | null;
  configuration: ConfigurationItem[];
  searchQuery: string;
  setCurrentStage: (stage: Stage) => void;
  setCurrentCategory: (category: string | null) => void;
  addToConfiguration: (item: ConfigurationItem) => void;
  setSearchQuery: (query: string) => void;
  getTotalPrice: () => number;
}

const CustomizationContext = createContext<CustomizationState | null>(null);

export function CustomizationProvider({ children }: { children: ReactNode }) {
  const [currentStage, setCurrentStage] = useState<Stage>("fabric");
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [configuration, setConfiguration] = useState<ConfigurationItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToConfiguration = (item: ConfigurationItem) => {
    setConfiguration((prev) => {
      // Remove existing item of same type and category (if applicable)
      const filtered = prev.filter((existing) => {
        if (item.category) {
          return !(
            existing.type === item.type && existing.category === item.category
          );
        }
        return existing.type !== item.type;
      });
      return [...filtered, item];
    });
  };

  const getTotalPrice = () => {
    return configuration.reduce((total, item) => total + (item.price || 0), 0);
  };

  return (
    <CustomizationContext.Provider
      value={{
        currentStage,
        currentCategory,
        configuration,
        searchQuery,
        setCurrentStage,
        setCurrentCategory,
        addToConfiguration,
        setSearchQuery,
        getTotalPrice,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error(
      "useCustomization must be used within CustomizationProvider"
    );
  }
  return context;
}
