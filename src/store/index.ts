import { create } from "zustand";

interface MainStore {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useStore = create<MainStore>((set) => ({
  loading: false,
  setLoading: (isLoading) => set(() => ({ loading: isLoading })),
}));
