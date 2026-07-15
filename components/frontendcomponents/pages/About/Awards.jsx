"use client";

import Image from "next/image";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Awards = () => {
    return (
        <section className="about-secE">
            <div className="container">
                <h2>Awards & Recognition</h2>
                <div className="row">
                    <Swiper
                        effect="coverflow"
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        slidesPerView="auto"
                        spaceBetween={10}
                        modules={[EffectCoverflow, Navigation]}
                        navigation={{
                            nextEl: ".awards-button-next",
                            prevEl: ".awards-button-prev",
                        }}
                        coverflowEffect={{
                            rotate: -34,
                            stretch: 40,
                            depth: 165,
                            modifier: 1,
                            slideShadows: true,
                        }}
                    >
                        {data.map(({ title, image }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <figure>
                                        <Image src={image} alt="award" width={570} height={419} />
                                        <figcaption>{title}</figcaption>
                                    </figure>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="swiper-nav center-full">
                        <button className="swiper-prev awards-button-prev">
                            <Image
                                src="/assets/icon/right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        <button className="swiper-next awards-button-next">
                            <Image
                                src="/assets/icon/right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;

const data = [
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/1.png",
    },
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/2.png",
    },
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/3.png",
    },
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/1.png",
    },
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/2.png",
    },
    {
        title: "Divya Bhaskar Real Estate Awards 2024",
        image: "/assets/images/award/3.png",
    },
];
