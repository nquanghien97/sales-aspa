import { create } from "zustand";
import { Gender } from "@/utils/heightCalculator";

interface InsightData {
  currentHeight: string;
  currentWeight: string;
  currentAge: string;
  gender: Gender | undefined;
  puberty: "infant" | "pre-puberty" | "puberty" | "post-puberty" | undefined
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