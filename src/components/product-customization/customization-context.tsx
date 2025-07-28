"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Stage = "fabric" | "style" | "accents";

interface Selection {
  id: string;
  name: string;
  type: "fabric" | "style" | "accent";
  image?: string;
  price?: number;
}

interface CustomizationContextType {
  currentStage: Stage;
  setCurrentStage: (stage: Stage) => void;
  currentCategory: string | null;
  setCurrentCategory: (category: string | null) => void;
  selections: Selection[];
  addSelection: (selection: Selection) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CustomizationContext = createContext<CustomizationContextType | null>(
  null
);

export function CustomizationProvider({ children }: { children: ReactNode }) {
  const [currentStage, setCurrentStage] = useState<Stage>("fabric");
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addSelection = (selection: Selection) => {
    setSelections((prev) => {
      const filtered = prev.filter(
        (s) =>
          s.type !== selection.type ||
          (s.type === selection.type && s.id !== selection.id)
      );
      return [...filtered, selection];
    });
  };

  return (
    <CustomizationContext.Provider
      value={{
        currentStage,
        setCurrentStage,
        currentCategory,
        setCurrentCategory,
        selections,
        addSelection,
        searchQuery,
        setSearchQuery,
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
