import { create } from 'zustand';

type MobileMetabarSheet = {
    isOpen: boolean;
    toggleMeta: () => void;
    open: () => void;
    close: () => void;
}

export const useMobileMetabarSheet = create<MobileMetabarSheet>((set) => ({
    isOpen: false,
    toggleMeta: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

