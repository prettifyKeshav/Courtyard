"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const floorPlansData = [
    {
        id: 1,
        image: "/assets/images/Project/floor-plan.png",
        title: "4BHK - 2369 sqft",
        price: "1.85 Cr* Onwards",
        downloadLink: "/",
    },
    {
        id: 2,
        image: "/assets/images/Project/floor-plan.png",
        title: "3BHK - 1895 sqft",
        price: "1.45 Cr* Onwards",
        downloadLink: "/",
    },
    {
        id: 3,
        image: "/assets/images/Project/floor-plan.png",
        title: "2BHK - 1420 sqft",
        price: "98 Lac* Onwards",
        downloadLink: "/",
    },
    {
        id: 4,
        image: "/assets/images/Project/floor-plan.png",
        title: "4BHK - 2510 sqft",
        price: "2.10 Cr* Onwards",
        downloadLink: "/",
    },
    {
        id: 5,
        image: "/assets/images/Project/floor-plan.png",
        title: "3BHK - 1750 sqft",
        price: "1.30 Cr* Onwards",
        downloadLink: "/",
    },
];

const FloorPlans = () => {
    return (
        <section>
            <div className="project-detail-secE">
                <div className="container">
                    <div className="heading" data-animate="fade-up">
                        <p>floor plans</p>
                        <h2>Smart Layouts, Elegant Living</h2>

                        <div className="swiper-nav">
                            <button className="floor-plans-prev">
                                <Image src="/assets/icon/left-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                            </button>
                            <button className="floor-plans-next">
                                <Image src="/assets/icon/right-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        className="floor-plans-swiper"
                        navigation={{
                            prevEl: ".floor-plans-prev",
                            nextEl: ".floor-plans-next",
                        }}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        speed={800}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {floorPlansData.map((plan) => (
                            <SwiperSlide key={plan.id}>
                                <Link href={plan.downloadLink} className="floor-card">
                                    <figure>
                                        <Image
                                            src={plan.image}
                                            width={311}
                                            height={189}
                                            alt={plan.title}
                                        />
                                        <div className="info">
                                            <p>{plan.title}</p>
                                        </div>
                                    </figure>

                                    <figcaption>
                                        <p>{plan.price}</p>
                                        <button className="btn white-btn">
                                            <span>Download</span>
                                        </button>
                                    </figcaption>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;