"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const GallerySec = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery2']", {
            Thumbs: false,
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const galleryData = [
        {
            id: 1,
            image: "/assets/images/Others/gallery.jpg",
            alt: "Gallery Image 1",
        },
        {
            id: 2,
            image: "/assets/images/Others/gallery2.png",
            alt: "Gallery Image 2",
        },
        {
            id: 3,
            image: "/assets/images/Others/gallery.jpg",
            alt: "Gallery Image 3",
        },
        {
            id: 4,
            image: "/assets/images/Others/gallery2.png",
            alt: "Gallery Image 4",
        },
        {
            id: 5,
            image: "/assets/images/Others/gallery.jpg",
            alt: "Gallery Image 5",
        },
    ];

    return (
        <>
            <section>
                <div className="project-detail-secF">
                    <div className="heading">
                        <div className="container">
                            <div className="left">
                                <h2>Gallery</h2>
                                <ul>
                                    <li className='active'>Photo Gallery</li>
                                    <li>Video Gallery</li>
                                    <li>Sample House</li>
                                </ul>
                            </div>
                            <div className="swiper-nav">
                                <button className="gallery-prev">
                                    <Image src="/assets/icon/left-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                </button>
                                <button className="gallery-next">
                                    <Image src="/assets/icon/right-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                </button>
                            </div>
                        </div>
                    </div>

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
                                slidesPerView: 1.2,
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
                                <Link href={item.image} data-fancybox="gallery2">
                                    <figure>
                                        <Image
                                            src={item.image}
                                            width={930}
                                            height={532}
                                            alt={item.alt}
                                        />
                                    </figure>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default GallerySec