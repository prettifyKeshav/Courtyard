import { create } from 'zustand';

export const useModalStore = create((set) => {
    const closeAll = () =>
        set({
            isHamOpen: false,
            isEnquireOpen: false,
            isVideoOpen: false,
            isOpeningsPop: false,
            isOpeningData: null,
            isPositionName: null,
            isAddressOpen: false,
            isPassChangeOpen: false,
            isEnquireOpen: false,
        });

    return {
        isHamOpen: false,
        isEnquireOpen: false,
        isVideoOpen: false,
        isOpeningsPop: false,
        isOpeningData: null,
        isPositionName: null,
        isAddressOpen: false,
        isPassChangeOpen: false,
        isEnquireOpen: false,

        openHam: () => {
            closeAll();
            set({ isHamOpen: true });
        },
        closeHam: () => set({ isHamOpen: false }),

        openEnquire: () => {
            closeAll();
            set({ isEnquireOpen: true });
        },
        closeEnquire: () => set({ isEnquireOpen: false }),

        openVideo: () => {
            closeAll();
            set({ isVideoOpen: true });
        },
        closeVideo: () => set({ isVideoOpen: false }),

        openingsPop: (data, positionName) => {
            closeAll();
            set({ isOpeningsPop: true, isOpeningData: data, isPositionName: positionName });

        },
        closeOpeningsPop: () => set({ isOpeningsPop: false }),

        openAddress: () => {
            closeAll();
            set({ isAddressOpen: true });
        },
        closeAddress: () => set({ isAddressOpen: false }),

        openPassChange: () => {
            closeAll();
            set({ isPassChangeOpen: true });
        },
        closePassChange: () => set({ isPassChangeOpen: false }),

        closeAll,
    };
});