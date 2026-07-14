"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ConnectSec = () => {
    // Start empty so the placeholder actually shows instead of a pre-filled "now"
    const [startDate, setStartDate] = useState(null);
    const [dateActive, setDateActive] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        dateTime: null, // date now lives in form state so it submits with everything else
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setFormData({
            ...formData,
            dateTime: date,
        });
        setDateActive(!!date); // keep label state in sync with actual value
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
        <>
            <section>
                <div className="project-detail-secG">
                    <div className="container">
                        <div className="heading">
                            <figure>
                                <Image src="/assets/vector/white-vector.svg" width={86} height={64} alt="ico"></Image>
                            </figure>
                            <h2>Connect With Our Property Experts</h2>
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
                                <label>Name *</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label>Email</label>
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

                            {/* Driven by React state, not DOM classList, since DatePicker is a controlled component */}
                            <div className={`form-group ${dateActive ? 'active' : ''}`}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    onFocus={() => setDateActive(true)}
                                    onBlur={() => setDateActive(!!startDate)}
                                    onCalendarOpen={() => setDateActive(true)}
                                    showTimeSelect
                                    timeIntervals={15}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    placeholderText="Select Date & Time"
                                    className={`form-control ${startDate ? 'valid' : ''}`}
                                    minDate={new Date()}
                                />
                            </div>

                            <button className="btn circle-btn circle-btn-border full">
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConnectSec