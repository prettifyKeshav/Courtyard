"use client";

import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Motion from '../../molecules/Animate'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const WhatHappeningSec = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileToggle = () => {
            setIsMobile(window.innerWidth < 770);
        };

        mobileToggle();

        window.addEventListener("resize", mobileToggle);

        return () => {
            window.removeEventListener("resize", mobileToggle);
        };
    }, []);


    const ImageData = [
        {
            ImageSrc: "/assets/images/Home/whats-happening/1.jpg"
        },
        {
            ImageSrc: "/assets/images/Home/whats-happening/2.jpg"
        },
        {
            ImageSrc: "/assets/images/Home/whats-happening/33.jpg"
        },
        {
            ImageSrc: "/assets/images/Home/whats-happening/4.jpg"
        }
    ]
    return (
        <>
            <section>
                <div className="home-secE">
                    <div className="container">
                        <Motion variant="fadeUp">
                            <div className="heading">
                                <h2>What’s Happening at Courtyard</h2>
                                <p>From new project launches and construction milestones to community events and important updates, stay connected with what’s shaping Courtyard today</p>
                                <Link href="/" className="btn white-btn">
                                    <span>View All Updates</span>
                                    <Image className="arrow-ico" src="/assets/icon/btn-arrow.svg" width={20} height={8} alt="right ico" />
                                </Link>
                            </div>
                        </Motion>

                        <Motion variant="fadeUp">
                            {
                                isMobile ?
                                    <Swiper
                                        slidesPerView={1.4}
                                        spaceBetween={20}
                                        speed={800}
                                    >
                                        {
                                            ImageData.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="col">
                                                        <Image src={item.ImageSrc} width={309} height={227} alt='ico' ></Image>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper> :
                                    <div className="grid-box">
                                        {
                                            ImageData.map((item, i) => {
                                                return (
                                                    <div className="col" key={i}>
                                                        <Image src={item.ImageSrc} width={309} height={227} alt='ico' ></Image>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }


                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatHappeningSec