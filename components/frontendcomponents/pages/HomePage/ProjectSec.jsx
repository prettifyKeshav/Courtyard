"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import Motion from "../../molecules/Animate";

const projectData = {
    residential: [
        {
            title: "Courtyard Prime",
            desc: "3BHK Large Apartments & Shops",
            image: "/assets/images/Home/projects/1.jpg",
        },
        {
            title: "Courtyard Phoenix",
            desc: "4BHK Luxurious Flats, Penthouse, Showrooms",
            image: "/assets/images/Home/projects/2.jpg",
        },
        {
            title: "Courtyard Regalia",
            desc: "3BHK & Shops",
            image: "/assets/images/Home/projects/3.jpg",
        },
        {
            title: "Courtyard Elite",
            desc: "Luxury Living",
            image: "/assets/images/Home/projects/1.jpg",
        },
    ],

    commercial: [
        {
            title: "Courtyard Business Hub",
            desc: "Premium Offices",
            image: "/assets/images/Home/projects/1.jpg",
        },
        {
            title: "Courtyard Square",
            desc: "Retail Spaces",
            image: "/assets/images/Home/projects/2.jpg",
        },
    ],

    mixed: [
        {
            title: "Courtyard One",
            desc: "Mixed Use Development",
            image: "/assets/images/Home/projects/1.jpg",
        },
        {
            title: "Courtyard Two",
            desc: "Commercial + Residential",
            image: "/assets/images/Home/projects/2.jpg",
        },
    ],
};

const tabs = [
    {
        id: "residential",
        label: "Residential",
    },
    {
        id: "commercial",
        label: "Commercial",
    },
    {
        id: "mixed",
        label: "Resi-Commercial Developments",
    },
];

const ProjectSec = () => {
    const [activeTab, setActiveTab] = useState("residential");

    return (
        <section className="home-secB">
            <div className="container">
                <Motion variant="fadeUp">
                    <div className="heading">
                        <h2>Spaces That Matter</h2>
                        <p>
                            Whether residential, commercial, or mixed-use, every Courtyard
                            project follows the same principle of thoughtful planning, long-term
                            responsibility, and sensible value.
                        </p>
                    </div>
                </Motion>

                <div className="top-row">
                    <ul className="tabs">
                        {tabs.map((tab) => (
                            <li
                                key={tab.id}
                                className={activeTab === tab.id ? "active" : ""}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>

                    <div className="navigation">
                        <button className="matter-prev">
                            <Image src="/assets/icon/left-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                        </button>

                        <button className="matter-next">
                            <Image src="/assets/icon/right-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                        </button>
                    </div>
                </div>

                <Motion variant="fadeUp">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".matter-prev",
                            nextEl: ".matter-next",
                        }}
                        slidesPerView={3}
                        spaceBetween={20}
                        speed={800}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {projectData[activeTab].map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href="/" className="project-card">
                                    <figure>
                                        <Image
                                            src={item.image}
                                            width={404}
                                            height={404}
                                            alt="ico"
                                        ></Image>
                                    </figure>
                                    <figcaption>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </figcaption>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Motion>
            </div>
        </section>
    );
};

export default ProjectSec;
