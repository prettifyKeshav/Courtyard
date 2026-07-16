'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useModalStore } from '../../../../store/modelStore';

const OpeningsPop = () => {
    const isOpen = useModalStore((state) => state.isOpeningsPop);
    const isOpenData = useModalStore((state) => state.isOpeningData);
    const isPositionName = useModalStore((state) => state.isPositionName);
    const closeOpenPop = useModalStore((state) => state.closeOpeningsPop);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        ApplyFor: "",
        AttachResume: null,
    });

    useEffect(() => {
        if (isPositionName) {
            setFormData((prev) => ({
                ...prev,
                ApplyFor: isPositionName,
            }));
        }
    }, [isPositionName]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            AttachResume: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        // API Call Here

        handleClose();
    };

    const handleClose = () => {
        closeOpenPop();

        setFormData({
            name: "",
            email: "",
            phone: "",
            ApplyFor: "",
            AttachResume: null,
        });
    };

    return (
        <div className={`model openings-pop ${isOpen ? "is-open" : ""}`}>
            <div className="model-body">
                <button
                    className="close-video"
                    onClick={handleClose}
                    type="button"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
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
                                <h2>
                                    Apply <span>Now</span>
                                </h2>
                            </div>

                            <form className="form" onSubmit={handleSubmit}>
                                <div className="custom-form-group">
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="custom-form-group">
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="custom-form-group">
                                    <label>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 99999 99999"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="custom-form-group">
                                    <label>Apply For</label>
                                    <input
                                        type="text"
                                        name="ApplyFor"
                                        className="disabled-btn"
                                        value={formData.ApplyFor}
                                        disabled
                                    />
                                </div>

                                <div className="custom-form-group full">
                                    <label>Attach Resume</label>

                                    <div className="file-input">
                                        <p>
                                            {formData.AttachResume
                                                ? formData.AttachResume.name
                                                : "Upload file"}
                                        </p>

                                        <Image
                                            src="/assets/icon/file-icon.svg"
                                            width={24}
                                            height={24}
                                            alt="icon"
                                        />

                                        <input
                                            type="file"
                                            name="AttachResume"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                <div className="submit-btn">
                                    <button
                                        type="submit"
                                        className="btn primary-btn"
                                    >
                                        <span>Apply Now</span>

                                        <Image
                                            src="/assets/icon/arrow-right.svg"
                                            width={7}
                                            height={13}
                                            alt="icon"
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OpeningsPop;