"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Motion from '../../../molecules/Animate'

const FeelTheLuxury = () => {

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
                <div className="project-detail-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="colA">
                                <Motion variant="fadeUp">
                                    <h2>Feel The Luxury</h2>
                                    <p>Feel a lifestyle defined by grandeur and refinement. From the meticulously crafted interiors to the premium finishes, every corner of your home reflects an unmatched level of sophistication. The thoughtful use of textures, materials, and design elements creates an environment where luxury becomes a part of everyday life.</p>

                                    <div className="wrap">
                                        <h5>RERA No</h5>
                                        <p>PR/GJ/VADODARA/VADODARA/Vadodara Urban Development Authority/MAA15320/090625/311230</p>
                                    </div>

                                    <div className="btn-flex">
                                        <Link href="/" className="btn primary-btn "><span>Download Brochure</span></Link>
                                        <Link href="/" className="btn black-border-btn "><span>View RERA Certificate</span></Link>
                                    </div>
                                </Motion>
                            </div>

                            <div className="colB">
                                <Motion variant="fadeUp">
                                    <div className="heading">
                                        <figure>
                                            <Image src="/assets/favicon.svg" width={56} height={60} alt="ico" ></Image>
                                        </figure>
                                        <h4>Connect With Our Property Experts</h4>
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

                                        <div className="form-group">
                                            <input
                                                type="data"
                                                className="form-control"
                                                value={formData.date}
                                            />
                                            <label>Date and time</label>
                                        </div>

                                        <button className="btn circle-btn circle-btn-white full">
                                            <span>Submit Now</span>
                                        </button>
                                    </div>
                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeelTheLuxury