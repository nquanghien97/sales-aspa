import { create } from "zustand";

interface InsightData {
  age?: string;
  time?: string;
}

interface InsightStoreType {
  insightData: InsightData | null
  setInsightData: (insightData: InsightData | ((prev: InsightData | null) => InsightData) | null) => void
  isSubmited: boolean
  setIsSubmited: (isSubmited: boolean) => void
}

export const useInsightStore = create<InsightStoreType>()((set) => ({
  isSubmited: false,
  setIsSubmited: (isSubmited) => set(() => ({ isSubmited })),
  insightData: null,
  setInsightData: (item) =>
    set((state) => ({
      insightData: typeof item === 'function' ? item(state.insightData) : item,
    })),
}))