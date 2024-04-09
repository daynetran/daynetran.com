import { create } from 'zustand';

type MobileSidebarSheet = {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export const useMobileSidebarSheet = create<MobileSidebarSheet>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

