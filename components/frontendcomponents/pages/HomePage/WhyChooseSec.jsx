"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const WhyChooseSec = () => {

    const whyChooseData = [
        {
            id: 1,
            image: "/assets/images/Home/why-choose/1.jpg",
            title: "Location with a Future",
            description:
                "We choose locations based on growth potential, connectivity, and long-term liveability—not short-term convenience. This ensures that every Courtyard home stands on a foundation that supports appreciation and everyday ease.",
            link: "/",
        },
        {
            id: 2,
            image: "/assets/images/Home/why-choose/2.png",
            title: "Thoughtfully Designed Homes",
            description:
                "Every Courtyard home is designed to maximize natural light, ventilation, and functional living spaces, creating homes that feel comfortable every day.",
            link: "/",
        },
        {
            id: 3,
            image: "/assets/images/Home/why-choose/1.jpg",
            title: "Trusted Construction Quality",
            description:
                "We build with premium materials and proven construction practices to ensure durability, safety, and lasting value for generations.",
            link: "/",
        },
        {
            id: 4,
            image: "/assets/images/Home/why-choose/2.png",
            title: "Community Living",
            description:
                "Our projects are planned around community-focused amenities that encourage healthier, happier, and more connected lifestyles.",
            link: "/",
        },
        {
            id: 5,
            image: "/assets/images/Home/why-choose/1.jpg",
            title: "Transparent Buying Experience",
            description:
                "From booking to possession, we maintain complete transparency so every homeowner enjoys a smooth and stress-free journey.",
            link: "/",
        },
        {
            id: 6,
            image: "/assets/images/Home/why-choose/2.png",
            title: "Value That Grows",
            description:
                "Our developments are located in high-potential areas that offer long-term appreciation, making your home a smart investment.",
            link: "/",
        },
    ];

    return (
        <>
            <section>
                <div className="home-secC">
                    <div className="heading">
                        <h2>Why Families Choose Courtyard</h2>
                    </div>
                    <div className="wrap">
                        <div className="navigation">
                            <button className="why-choose-prev">
                                <Image
                                    src="/assets/icon/left-arrow.svg"
                                    width={36}
                                    height={36}
                                    alt="ico"
                                ></Image>
                            </button>

                            <button className="why-choose-next">
                                <Image
                                    src="/assets/icon/left-arrow.svg"
                                    width={36}
                                    height={36}
                                    alt="ico"
                                ></Image>
                            </button>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".why-choose-prev",
                                nextEl: ".why-choose-next",
                            }}
                            slidesPerView={1.3}
                            spaceBetween={70}
                            loop={true}
                            centeredSlides={true}
                            speed={1000}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.1,
                                },
                                768: {
                                    slidesPerView: 1.4,
                                },
                                1200: {
                                    slidesPerView: 1.3,
                                },
                            }}
                        >
                            {whyChooseData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link href={item.link} className="why-choose-card">
                                        <figure>
                                            <Image
                                                src={item.image}
                                                width={566}
                                                height={401}
                                                alt={item.title}
                                            />
                                        </figure>

                                        <figcaption>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </figcaption>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseSec;
