"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Motion from "../../molecules/Animate";

const OurMission = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [imageSwiper, setImageSwiper] = useState(null);
    const [textSwiper, setTextSwiper] = useState(null);

    const handleTabChange = (index) => {
        setActiveTab(index);

        imageSwiper?.slideTo(index);
        textSwiper?.slideTo(index);
    };

    return (
        <section className="about-secB">
            <div className="top-flex-box">
                <div className="col"></div>
                <div className="col">
                    <div className="col-child kmr-animate" data-animate="fade-up">
                        <Motion variant="fadeUp">
                            <h2>Our Mission</h2>
                        </Motion>
                    </div>
                    <div className="col-child"></div>
                </div>
            </div>

            <div className="flex-box tab-section">
                <div className="col">
                    <Motion variant="fadeUp">
                        <div className="tab-nav">
                            <ul>
                                {data?.map(({ title }, index) => {
                                    const isActive = index === activeTab;
                                    return (
                                        <li
                                            className={`${isActive ? "active" : ""}`}
                                            key={index}
                                            onClick={() => handleTabChange(index)}
                                        >
                                            {title}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Motion>
                </div>
                <div className="col">
                    <Motion variant="fadeUp">
                        <div className="tab-nav-content">
                            <div className="tabs active">
                                <div className="col-child">
                                    <Swiper
                                        className="image-slider"
                                        slidesPerView={1}
                                        direction="vertical"
                                        speed={1500}
                                        onSwiper={setImageSwiper}
                                    >
                                        {data.map(({ image }, idx) => {
                                            return (
                                                <SwiperSlide key={idx}>
                                                    <figure>
                                                        <Image src={image} alt="ico" width={533} height={320} />
                                                    </figure>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </div>

                                <div className="col-child">
                                    <div className="content">
                                        <Swiper
                                            className="text-slider"
                                            slidesPerView={1}
                                            direction="vertical"
                                            speed={1500}
                                            onSwiper={setTextSwiper}
                                        >
                                            {data.map(({ description }, idx) => {
                                                return (
                                                    <SwiperSlide key={idx}>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: description,
                                                            }}
                                                        ></p>
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Motion>
                </div>
            </div>

            <div className="bottom-flex-box">
                <div className="col"></div>
                <div className="col">
                    <div className="col-child">
                        <h2></h2>
                    </div>
                    <div className="col-child"></div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;

const data = [
    {
        title: "Innovate",
        description: `Innovate Real Estate <strong>Construction specializes</strong> in delivering modern, sustainable, and high-quality construction`,
        image: "/assets/images/about/mission/1.jpg",
    },
    {
        title: "Build",
        description: `We build exceptional <strong>residential, commercial, and industrial</strong> spaces with a commitment to quality`,
        image: "/assets/images/about/mission/2.jpg",
    },
    {
        title: "Deliver",
        description: `We deliver projects with <strong>excellence, ensuring quality craftsmanship,</strong> timely completion, and complete client satisfaction`,
        image: "/assets/images/about/mission/3.jpg",
    },
];
