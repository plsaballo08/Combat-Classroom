import { create } from "zustand";

type Store = {
  isMenuOpen: boolean;
  setMenuState: () => void;
};

const useStore = create<Store>()((set) => ({
  isMenuOpen: false,
  setMenuState: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;
