import { create } from 'zustand';

type ZenMode = {
    isZen: boolean;
    toggle: () => void;
    zenOn: () => void;
    zenOff: () => void;
}

export const useZenMode = create<ZenMode>((set) => ({
    isZen: false,
    toggle: () => set((state) => ({ isZen: !state.isZen })),
    zenOn: () => set({ isZen: true }),
    zenOff: () => set({ isZen: false })
}));

