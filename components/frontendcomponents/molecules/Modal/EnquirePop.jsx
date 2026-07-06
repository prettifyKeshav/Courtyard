"use client"

import { useEffect, useState } from "react";
import { useModalStore } from '../../../../store/modelStore';

export default function EnquirePop() {
    const isOpen = useModalStore((state) => state.isEnquireOpen);
    const closeEnquire = useModalStore((state) => state.closeEnquire);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleClose = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        document.querySelectorAll(".form-group").forEach((group) => {
            group.classList.remove("active");
        });

        document.querySelectorAll(".form-control").forEach((input) => {
            input.classList.remove("valid");
        });

        closeEnquire();
    };

    useEffect(() => {
        const inputBoxes = document.querySelectorAll('.form-control');

        const handleFocus = function () {
            this.closest('.form-group')?.classList.add('active');
            this.classList.add('valid');
        };

        const handleBlur = function () {
            const hasValue = this.value.trim() !== '';
            if (!hasValue) {
                this.closest('.form-group')?.classList.remove('active');
                this.classList.remove('valid');
            }
        };

        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', handleFocus);
            inputBox.addEventListener('blur', handleBlur);
        });

        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', handleFocus);
                inputBox.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div className={`model enquire-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={handleClose}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="model-body">
                <div className="title">
                    <h4>Enquire Now</h4>
                </div>

                <div className="form form-grid">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label>Full Name*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Email Address*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Trading Code/UCC*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label>Phone</label>
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <label>Summary</label>
                    </div>

                    <button className="btn primary-btn">
                        Submit Now
                    </button>
                </div>
            </div>
        </div>
    );
}