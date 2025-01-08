import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreType {
  navAbout: boolean;
  handleNavAbout: () => void;
}

const useStore = create<StoreType>()(
  persist(
    (set) => ({
      navAbout: false,
      handleNavAbout: () =>
        set((state) => ({ navAbout: !state.navAbout })),
    }),
    {
      name: 'nav-store',
    }
  )
);

export default useStore;
