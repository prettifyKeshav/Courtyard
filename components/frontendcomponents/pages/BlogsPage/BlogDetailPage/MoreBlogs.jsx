"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BlogCard from '../BlogCard';

const MoreBlogs = () => {
    return (
        <>
            <section>
                <div className="blog-detail-secC">
                    <div className="container">
                        <div className="heading">
                            <h2>More Blogs</h2>
                            <div className="swiper-nav">
                                <button className="more-blogs-prev">
                                    <Image src="/assets/icon/left-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                </button>
                                <button className="more-blogs-next">
                                    <Image src="/assets/icon/right-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                </button>
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            className="more-blogs-swiper"
                            navigation={{
                                prevEl: ".more-blogs-prev",
                                nextEl: ".more-blogs-next",
                            }}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            speed={800}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {
                                blogData.map((item) => (
                                    <SwiperSlide>
                                        <BlogCard key={item.id} {...item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreBlogs

const blogData = [
    {
        id: 1,
        detailLink: "/blogs/investment-guide-2026",
        blogImage: "/assets/images/Others/blogs/1.jpg",
        title: "The Ultimate Guide to Real Estate Investment in 2026",
        date: "15 January 2026",
    },
    {
        id: 2,
        detailLink: "/blogs/home-buying-checklist",
        blogImage: "/assets/images/Others/blogs/2.jpg",
        title: "10 Things Every Homebuyer Should Check Before Purchasing",
        date: "28 February 2026",
    },
    {
        id: 3,
        detailLink: "/blogs/sustainable-living",
        blogImage: "/assets/images/Others/blogs/3.jpg",
        title: "Why Sustainable Communities Are the Future",
        date: "09 March 2026",
    },
    {
        id: 4,
        detailLink: "/blogs/luxury-apartments",
        blogImage: "/assets/images/Others/blogs/1.jpg",
        title: "Luxury Apartments: Features That Truly Matter",
        date: "22 April 2026",
    },
    {
        id: 5,
        detailLink: "/blogs/property-appreciation",
        blogImage: "/assets/images/Others/blogs/2.jpg",
        title: "How to Identify High-Growth Investment Locations",
        date: "11 June 2026",
    },
    {
        id: 6,
        detailLink: "/blogs/first-time-buyers",
        blogImage: "/assets/images/Others/blogs/3.jpg",
        title: "A First-Time Buyer's Guide to Owning Your Dream Home",
        date: "30 July 2026",
    },
];