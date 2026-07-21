"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Motion from "../../../molecules/Animate";

import "swiper/css";
import "swiper/css/navigation";

const GallerySec = () => {
    const [activeTab, setActiveTab] = useState("photo");

    const photoGallery = [
        {
            id: 1,
            type: "image",
            image: "/assets/images/Others/gallery.jpg",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Photo Gallery 1",
        },
        {
            id: 2,
            type: "image",
            image: "/assets/images/Others/gallery2.png",
            thumb: "/assets/images/Others/gallery2.png",
            alt: "Photo Gallery 2",
        },
        {
            id: 3,
            type: "image",
            image: "/assets/images/Others/gallery.jpg",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Photo Gallery 3",
        },
        {
            id: 4,
            type: "image",
            image: "/assets/images/Others/gallery2.png",
            thumb: "/assets/images/Others/gallery2.png",
            alt: "Photo Gallery 4",
        },
        {
            id: 5,
            type: "image",
            image: "/assets/images/Others/gallery.jpg",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Photo Gallery 5",
        },
    ];

    const videoGallery = [
        {
            id: 1,
            type: "video",
            video: "https://www.youtube.com/embed/5yQufmXEKbw?si=mnbU0wEQHKDl-JlV",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Video Gallery 1",
        },
        {
            id: 2,
            type: "video",
            video: "https://www.youtube.com/embed/HKFRFaUWsWA?si=oS4U0HfFl8cv4O5S",
            thumb: "/assets/images/Others/gallery2.png",
            alt: "Video Gallery 2",
        },
        {
            id: 3,
            type: "video",
            video: "https://www.youtube.com/embed/54JLM-Ao8EU?si=Sxuef2LOkudYJjLA",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Video Gallery 3",
        },
    ];

    const sampleHouseGallery = [
        {
            id: 1,
            type: "image",
            image: "/assets/images/Others/gallery2.png",
            thumb: "/assets/images/Others/gallery2.png",
            alt: "Sample House 1",
        },
        {
            id: 2,
            type: "image",
            image: "/assets/images/Others/gallery.jpg",
            thumb: "/assets/images/Others/gallery.jpg",
            alt: "Sample House 2",
        },
        {
            id: 3,
            type: "image",
            image: "/assets/images/Others/gallery2.png",
            thumb: "/assets/images/Others/gallery2.png",
            alt: "Sample House 3",
        },
    ];

    const galleryData =
        activeTab === "photo"
            ? photoGallery
            : activeTab === "video"
                ? videoGallery
                : sampleHouseGallery;

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery2']", {
            Thumbs: false,
        });

        return () => {
            Fancybox.unbind("[data-fancybox='gallery2']");
        };
    }, [activeTab]);
    return (
        <section>
            <div className="project-detail-secF">
                <div className="heading">
                    <Motion variant="fadeUp">
                        <div className="container">
                            <div className="left">
                                <h2>Gallery</h2>

                                <ul>
                                    <li
                                        className={activeTab === "photo" ? "active" : ""}
                                        onClick={() => setActiveTab("photo")}
                                    >
                                        Photo Gallery
                                    </li>

                                    <li
                                        className={activeTab === "video" ? "active" : ""}
                                        onClick={() => setActiveTab("video")}
                                    >
                                        Video Gallery
                                    </li>

                                    <li
                                        className={activeTab === "sample" ? "active" : ""}
                                        onClick={() => setActiveTab("sample")}
                                    >
                                        Sample House
                                    </li>
                                </ul>
                            </div>

                            <div className="swiper-nav">
                                <button className="gallery-prev">
                                    <Image
                                        src="/assets/icon/left-arrow-icon.svg"
                                        width={37}
                                        height={21}
                                        alt="Previous"
                                    />
                                </button>

                                <button className="gallery-next">
                                    <Image
                                        src="/assets/icon/right-arrow-icon.svg"
                                        width={37}
                                        height={21}
                                        alt="Next"
                                    />
                                </button>
                            </div>
                        </div>
                    </Motion>
                </div>

                <Motion variant="fadeUp">
                    <Swiper
                        modules={[Navigation]}
                        className="gallery-swiper"
                        navigation={{
                            prevEl: ".gallery-prev",
                            nextEl: ".gallery-next",
                        }}
                        spaceBetween={10}
                        slidesPerView={1.3}
                        speed={800}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1.2,
                            },
                            992: {
                                slidesPerView: 1.2,
                            },
                            1200: {
                                slidesPerView: 1.4,
                            },
                        }}
                    >
                        {galleryData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    href={item.type === "video" ? item.video : item.image}
                                    data-fancybox="gallery2"
                                >
                                    <figure
                                        style={{
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src={item.thumb}
                                            width={930}
                                            height={532}
                                            alt={item.alt}
                                        />

                                        {item.type === "video" && (
                                            <div className="play-btn">
                                            </div>
                                        )}
                                    </figure>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Motion>
            </div>
        </section>
    );
};

export default GallerySec;