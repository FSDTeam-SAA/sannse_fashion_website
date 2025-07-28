import { create } from "zustand"

export interface FabricOption {
  id: string
  name: string
  material: string
  price: number
  image: string
  pattern?: string
}

export interface StyleOption {
  id: string
  name: string
  category: string
  icon: string
  price?: number
}

export interface AccentOption {
  id: string
  name: string
  category: string
  icon: string
  price?: number
}

export interface ConfigurationItem {
  id: string
  type: "fabric" | "style" | "accent"
  name: string
  category?: string
  image?: string
  icon?: string
  price?: number
}

interface CustomizationState {
  currentStage: "fabric" | "style" | "accents"
  currentCategory: string | null
  selectedFabric: FabricOption | null
  selectedStyles: StyleOption[]
  selectedAccents: AccentOption[]
  configuration: ConfigurationItem[]
  searchQuery: string
  setCurrentStage: (stage: "fabric" | "style" | "accents") => void
  setCurrentCategory: (category: string | null) => void
  setSelectedFabric: (fabric: FabricOption) => void
  addStyleOption: (style: StyleOption) => void
  addAccentOption: (accent: AccentOption) => void
  setSearchQuery: (query: string) => void
  getTotalPrice: () => number
}

export const useCustomizationStore = create<CustomizationState>((set, get) => ({
  currentStage: "fabric",
  currentCategory: null,
  selectedFabric: null,
  selectedStyles: [],
  selectedAccents: [],
  configuration: [],
  searchQuery: "",

  setCurrentStage: (stage) => set({ currentStage: stage, currentCategory: null }),

  setCurrentCategory: (category) => set({ currentCategory: category }),

  setSelectedFabric: (fabric) =>
    set((state) => {
      const newConfiguration = state.configuration.filter((item) => item.type !== "fabric")
      newConfiguration.push({
        id: fabric.id,
        type: "fabric",
        name: fabric.name,
        image: fabric.image,
        price: fabric.price,
      })
      return {
        selectedFabric: fabric,
        configuration: newConfiguration,
      }
    }),

  addStyleOption: (style) =>
    set((state) => {
      const existingIndex = state.selectedStyles.findIndex((s) => s.category === style.category)
      const newSelectedStyles = [...state.selectedStyles]

      if (existingIndex >= 0) {
        newSelectedStyles[existingIndex] = style
      } else {
        newSelectedStyles.push(style)
      }

      const newConfiguration = state.configuration.filter(
        (item) => !(item.type === "style" && item.category === style.category),
      )
      newConfiguration.push({
        id: style.id,
        type: "style",
        name: style.name,
        category: style.category,
        icon: style.icon,
        price: style.price,
      })

      return {
        selectedStyles: newSelectedStyles,
        configuration: newConfiguration,
      }
    }),

  addAccentOption: (accent) =>
    set((state) => {
      const existingIndex = state.selectedAccents.findIndex((a) => a.category === accent.category)
      const newSelectedAccents = [...state.selectedAccents]

      if (existingIndex >= 0) {
        newSelectedAccents[existingIndex] = accent
      } else {
        newSelectedAccents.push(accent)
      }

      const newConfiguration = state.configuration.filter(
        (item) => !(item.type === "accent" && item.category === accent.category),
      )
      newConfiguration.push({
        id: accent.id,
        type: "accent",
        name: accent.name,
        category: accent.category,
        icon: accent.icon,
        price: accent.price,
      })

      return {
        selectedAccents: newSelectedAccents,
        configuration: newConfiguration,
      }
    }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  getTotalPrice: () => {
    const state = get()
    return state.configuration.reduce((total, item) => total + (item.price || 0), 0)
  },
}))
