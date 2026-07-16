"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Motion from "../../molecules/Animate";

const Journey = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [leftSwiper, setLeftSwiper] = useState(null);
  const [middleSwiper, setMiddleSwiper] = useState(null);
  const [rightSwiper, setRightSwiper] = useState(null);

  const handleActive = (index) => {
    setActiveTimeline(index);
    leftSwiper.slideTo(index);
    middleSwiper.slideTo(index);
    rightSwiper.slideTo(index);
  };

  return (
    <section className="about-secC">
      <video
        src="/assets/video/sky.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="container">
        <Motion variant="fadeUp">
          <h2>Journey</h2>
        </Motion>
        <div className="row">
          <div className="left">
            <Motion variant="fadeUp">
              <Swiper
                loop={false}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".timeline-prev",
                  nextEl: ".timeline-next",
                }}
                spaceBetween={250}
                speed={2000}
                onSwiper={setLeftSwiper}
                allowTouchMove={false}
              >
                {data?.map(({ title }, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <p>{title}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Motion>
          </div>

          <div className="middle">
            <Motion variant="fadeUp">
              <Swiper
                loop={false}
                direction="vertical"
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".timeline-prev",
                  nextEl: ".timeline-next",
                }}
                spaceBetween={250}
                speed={2000}
                onSwiper={setMiddleSwiper}
                allowTouchMove={false}
              >
                {data?.map(({ image, year }, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <figure>
                        <Image src={image} alt={year} width={322} height={364} />
                        <figcaption>
                          <p>{year}</p>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Motion>
          </div>

          <div className="right">
            <Motion variant="fadeUp">
              <Swiper
                loop={false}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".timeline-prev",
                  nextEl: ".timeline-next",
                }}
                spaceBetween={250}
                speed={2000}
                onSwiper={setRightSwiper}
                allowTouchMove={false}
              >
                {data?.map(({ description }, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <p>{description}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Motion>
          </div>
        </div>

        <div className="timeline">
          <button
            onClick={() => handleActive(activeTimeline - 1)}
            className="timeline-prev"
          >
            <Image
              src="/assets/icon/arrow-right.svg"
              alt="arrow-left-circle"
              width={11}
              height={25}
            />
          </button>

          <ul className="timeline-year">
            {data?.map(({ year }, index) => {
              const isActive = activeTimeline === index;
              return (
                <li
                  onClick={() => handleActive(index)}
                  className={`timeline-tab ${isActive ? "active" : ""}`}
                  key={index}
                >
                  <p>{year}</p>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => handleActive(activeTimeline + 1)}
            className="timeline-next"
          >
            <Image
              src="/assets/icon/arrow-right.svg"
              alt="arrow-left-circle"
              width={11}
              height={25}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journey;

const data = [
  {
    year: "1996",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2015",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2017",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2018",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2020",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2021",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2022",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2023",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
  {
    year: "2024",
    title:
      "Our journey began with a vision to redefine real estate and create spaces that inspire better living.",
    description:
      "From humble beginnings to trusted milestones, we continue to build not just structures, but lasting relationships.",
    image: "/assets/images/journey/1996.png",
  },
];
