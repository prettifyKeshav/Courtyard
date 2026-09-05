"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Motion from "../../molecules/Animate";

const OurLife = () => {
    return (
        <section className="career-secB">
            <div className="heading">
                <Motion variant="fadeUp">
                    <h2>
                        See Yourself Here <span>Life at Courtyard Group</span>
                    </h2>
                    <p>
                        Innovation thrives where people feel valued. Get a glimpse of the
                        environment we've built—a place where collaboration, learning, and
                        celebration are part of the everyday.
                    </p>
                </Motion>
            </div>

            <Motion variant="fadeUp">
                <Swiper
                    slidesPerView={1.8}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    className="life-swiper"
                    navigation={{
                        prevEl: ".life-prev",
                        nextEl: ".life-next",
                    }}
                    pagination={{
                        el: ".life-pagination",
                        type: "progressbar",
                    }}
                    modules={[Navigation, Pagination]}
                >
                    {data?.map((img, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <figure className="item">
                                    <Image src={img} alt="image" width={1920} height={1080} />
                                </figure>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Motion>

            <div className="swiper-nav swiper-group">
                <button className="life-prev swiper-prev">
                    <Image
                        src="/assets/icon/arrow-right.svg"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                </button>
                <div className="life-pagination"></div>
                <button className="life-next swiper-next">
                    <Image
                        src="/assets/icon/arrow-right.svg"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </section>
    );
};

export default OurLife;

const data = [
    "/assets/images/career/life/1.jpg",
    "/assets/images/career/life/2.png",
    "/assets/images/career/life/3.png",
    "/assets/images/career/life/1.jpg",
    "/assets/images/career/life/2.png",
    "/assets/images/career/life/3.png",
];
