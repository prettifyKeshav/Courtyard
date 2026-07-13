"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryData = [
    {
        id: 1,
        image: "/assets/video/amenities/1.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 2,
        image: "/assets/video/amenities/2.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 3,
        image: "/assets/video/amenities/3.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 4,
        image: "/assets/video/amenities/4.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 5,
        image: "/assets/video/amenities/1.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 6,
        image: "/assets/video/amenities/2.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 7,
        image: "/assets/video/amenities/3.jpg",
        title: "Open Air Theatre",
    },
    {
        id: 8,
        image: "/assets/video/amenities/4.jpg",
        title: "Open Air Theatre",
    },
];

const Amenities = () => {
    return (
        <section>
            <div className="project-details-secC">
                <div className="heading" data-animate="fade-up">
                    <p>Amenities</p>
                    <h2>Everything You Need,
                        Right Where You Live</h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    className="photo-gallery-swiper"
                    navigation={{
                        prevEl: ".photo-gallery-swiper-prev",
                        nextEl: ".photo-gallery-swiper-next",
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    spaceBetween={7}
                    slidesPerView={1.2}
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {galleryData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <figure>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                />
                                <div className="figinfo">
                                    <h3>{item.title}</h3>
                                </div>
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-pagination">
                    <div className="swiper-pagination"></div>

                    <div className="swiper-nav">
                        <button
                            className="photo-gallery-swiper-prev"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="m14 7-5 5 5 5"
                                />
                            </svg>
                        </button>

                        <button
                            className="photo-gallery-swiper-next"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="m10 17 5-5-5-5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;