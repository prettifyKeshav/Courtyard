"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Motion from "../../molecules/Animate";
import "../../../../uploads/styles/components/components.css";
import Link from "next/link";

const HomeownerSec = ({ isCareerPage }) => {
  const homeownerData = [
    {
      id: 1,
      image: "/assets/images/Home/homeowners/1.jpg",
      name: "Rahul Sharma",
      location: "Vadodara",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: "/assets/images/Home/homeowners/2.jpg",
      name: "Priya Patel",
      location: "Ahmedabad",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: "/assets/images/Home/homeowners/1.jpg",
      name: "Rohan Shah",
      location: "Surat",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      image: "/assets/images/Home/homeowners/1.jpg",
      name: "Sneha Mehta",
      location: "Rajkot",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      image: "/assets/images/Home/homeowners/1.jpg",
      name: "Amit Joshi",
      location: "Mumbai",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <section>
      <div className="testimonial-section">
        <div className="container">
          <div className="flex-box">
            <div className="colA">
              <Motion variant="fadeUp">
                {isCareerPage && (
                  <>
                    <h2>
                      Join the Conversation:{" "}
                      <span>Meet Your Future Colleagues</span>
                    </h2>
                  </>
                )}

                {!isCareerPage && (
                  <>
                    {" "}
                    <h2>Stories from our Homeowners</h2>
                    <p>
                      The true measure of a home is how it feels to live in.
                      Hear from families who have experienced life at Courtyard,
                      from the moment they received their keys to the years that
                      followed.{" "}
                    </p>{" "}
                  </>
                )}

                <div className="swiper-nav">
                  <div className="home-prev">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      {" "}
                      <path
                        d="M11.25 3.75L6 9L11.25 14.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {!isCareerPage && <div className="home-pagination"></div>}

                  <div className="home-next">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M6.75 3.75L12 9L6.75 14.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {isCareerPage && (
                  <div className="contact">
                    <h5>Feel free to contact us directly:</h5>
                    <Link href="mailto:hellohr@courtyardgroup.in">
                      hellohr@courtyardgroup.in
                    </Link>
                    <Link href="tel:+910000000000">+91 000 000 0000</Link>
                  </div>
                )}
              </Motion>
            </div>

            <div className="colB">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.65}
                spaceBetween={24}
                speed={600}
                loop={false}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = ".home-prev";
                  swiper.params.navigation.nextEl = ".home-next";
                  swiper.params.pagination.el = ".home-pagination";
                  swiper.params.pagination.clickable = true;
                }}
                navigation
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.15,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 1.65,
                    spaceBetween: 24,
                  },
                }}
              >
                {homeownerData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-card">
                      <div className="top">
                        <div className="user">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={82}
                            height={82}
                          />
                        </div>

                       {!isCareerPage && <div className="quote">
                          <Image
                            src="/assets/icon/qoma.svg"
                            width={67}
                            height={50.25}
                            alt="ico"
                          ></Image>
                        </div>}
                      </div>

                      <p>{item.review}</p>

                      <div className="bottom">
                        <h4>{item.name}</h4>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeownerSec;
