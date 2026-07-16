"use client";

import { useEffect, useState } from "react";
import { useModalStore } from "../../../../store/modelStore";

export default function EnquirePop() {
    const isOpen = useModalStore((state) => state.isEnquireOpen);
    const closeEnquire = useModalStore((state) => state.closeEnquire);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClose = () => {
        setFormData({
            firstName: "",
            lastName: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        // API Call Here

        handleClose();
    };

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");

        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };

        const handleBlur = function () {
            if (this.value.trim() === "") {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };

        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });

        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    return (
        <div className={`model enquire-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={handleClose}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path
                        d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <div className="model-body">
                <div className="title">
                    <h4>Enquire Now</h4>
                </div>

                <form className="form form-grid" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <label>First Name*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <label>Last Name*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Email*</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label>Phone*</label>
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <label>Message</label>
                    </div>

                    <button type="submit" className="btn primary-btn">
                        <span>Submit Now</span>
                    </button>
                </form>
            </div>
        </div>
    );
}