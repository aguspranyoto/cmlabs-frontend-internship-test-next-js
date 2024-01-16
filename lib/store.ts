import { create } from "zustand";

interface useStore {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const useStore = create<useStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
