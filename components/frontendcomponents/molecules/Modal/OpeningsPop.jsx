'use client';

import { useModalStore } from '../../../../store/modelStore';

const OpeningsPop = () => {
    const isOpen = useModalStore((state) => state.isOpeningsPop);
    const closeOpenPop = useModalStore((state) => state.closeOpeningsPop);

    const handleClose = () => {
        closeOpenPop();
    };

    return (
        <div className={`model openings-pop ${isOpen ? 'is-open' : ''}`}>
            <div className="model-body">
                <button
                    className="close-video"
                    onClick={handleClose}
                    type="button"
                >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <>
                        
                    </>
                )}
            </div>
        </div>
    );
};

export default OpeningsPop;