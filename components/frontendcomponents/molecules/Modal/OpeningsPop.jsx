'use client';
import Image from 'next/image';
import { useModalStore } from '../../../../store/modelStore';

const OpeningsPop = () => {
    const isOpen = useModalStore((state) => state.isOpeningsPop);
    const isOpenData = useModalStore((state) => state.isOpeningData);
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
                        <div className="openings-flex-box">
                            <div className="left">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: isOpenData || "",
                                    }}
                                />
                            </div>

                            <div className="right">
                                <div className="heading">
                                    <h2>Apply <span>Now</span></h2>
                                </div>

                                <form action="" className='form'>
                                    <div className="custom-form-group">
                                        <label htmlFor="">Name *</label>
                                        <input type="text" placeholder='Your Name' />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="">Email Address *</label>
                                        <input type="email" placeholder='email@example.com' />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="">Phone  *</label>
                                        <input type="tel" placeholder='+91 99999 99999' />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="">Apply For</label>
                                        <input type="text" placeholder='Digital Designer' />
                                    </div>
                                    <div className="custom-form-group full">
                                        <label htmlFor="">Apply For</label>
                                        <input type="file" placeholder='Upload file' />
                                    </div>

                                    <div className="submit-btn">
                                        <button className='btn primary-btn'>
                                            <span>Apply Now</span>
                                            <Image src="/assets/icon/arrow-right.svg" width={7} height={13} alt="ico" ></Image>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default OpeningsPop;