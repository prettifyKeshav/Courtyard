'use client';

import { useEffect } from 'react';
import { useModalStore } from '../../../store/modelStore';

export default function Overlay() {
    const isSearchOpen = useModalStore((state) => state.isSearchOpen);
    const isHamOpen = useModalStore((state) => state.isHamOpen);
    const isEnquireOpen = useModalStore((state) => state.isEnquireOpen);
    const isVideoOpen = useModalStore((state) => state.isVideoOpen);
    const isAddressOpen = useModalStore((state) => state.isAddressOpen)
    const isPassChangeOpen = useModalStore((state) => state.isPassChangeOpen)
    const isOpeningsPop = useModalStore((state) => state.isOpeningsPop)
    const closeAll = useModalStore((state) => state.closeAll);

    const isAnyOpen = isSearchOpen || isHamOpen || isEnquireOpen || isVideoOpen || isAddressOpen || isPassChangeOpen || isOpeningsPop;

    useEffect(() => {
        if (isAnyOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isAnyOpen]);

    return (
        <div
            className={`overlay ${isAnyOpen ? 'is-open' : ''}`}
            onClick={closeAll}
        />
    );
}