"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Motion from "../../../molecules/Animate";
import Image from "next/image";
import ProjectCard from '../ProjectCard';

const MoreProjects = () => {
    return (
        <>
            <section>
                <div className="project-detail-secI">
                    <div className="container">
                        <Motion variant="fadeUp">
                            <div className="heading">
                                <h2>More Projects</h2>
                                <div className="swiper-nav">
                                    <button className="more-project-prev">
                                        <Image src="/assets/icon/left-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                    </button>
                                    <button className="more-project-next">
                                        <Image src="/assets/icon/right-arrow-icon.svg" width={37} height={21} alt="ico" ></Image>
                                    </button>
                                </div>
                            </div>
                        </Motion>

                        <Motion variant="fadeUp">
                            <Swiper
                                modules={[Navigation]}
                                className="more-project-swiper"
                                navigation={{
                                    prevEl: ".more-project-prev",
                                    nextEl: ".more-project-next",
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
                                {projectData.length > 0 ? (
                                    projectData.map((project, index) => (
                                        <SwiperSlide>
                                            <ProjectCard
                                                key={index}
                                                detailLink={project.detailLink}
                                                image={project.image}
                                                tagName={project.tagName}
                                                title={project.title}
                                                subtitle={project.subtitle}
                                                details={project.details}
                                                enquireLink={project.enquireLink}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p>No projects found.</p>
                                )}
                            </Swiper>
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreProjects

const projectData = [
    {
        detailLink: "courtyard-enclave",
        category: "Residential",
        image: "/assets/images/Others/project-card-img/1.png",
        tagName: "Newly Launched",
        title: "Courtyard Enclave",
        subtitle: "2 & 3 BHK Flats & Shops",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "3024 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Bhayli T.P 3",
            },
        ],
    },
    {
        detailLink: "skyline-heights",
        category: "Residential",
        image: "/assets/images/Others/project-card-img/2.png",
        tagName: "Ready to Move",
        title: "Skyline Heights",
        subtitle: "3 & 4 BHK Premium Residences",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "2850 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Gotri, Vadodara",
            },
        ],
    },
    {
        detailLink: "green-valley-residency",
        category: "Commercial",
        image: "/assets/images/Others/project-card-img/3.png",
        tagName: "Ongoing",
        title: "Green Valley Residency",
        subtitle: "Office & Retail Spaces",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "2450 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Vasna Road, Vadodara",
            },
        ],
    },
    {
        detailLink: "royal-greens-business-hub",
        category: "Commercial",
        image: "/assets/images/Others/project-card-img/4.png",
        tagName: "Limited Units",
        title: "Royal Greens Business Hub",
        subtitle: "Premium Commercial Spaces",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "4200 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Atladara, Vadodara",
            },
        ],
    },
    {
        detailLink: "lakeview-residency",
        category: "Resi–Commercial Developments",
        image: "/assets/images/Others/project-card-img/5.png",
        tagName: "Premium Living",
        title: "Lakeview Residency",
        subtitle: "Mixed Use Development",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "3180 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Sevasi, Vadodara",
            },
        ],
    },
    {
        detailLink: "the-grand-horizon",
        category: "Resi–Commercial Developments",
        image: "/assets/images/Others/project-card-img/6.png",
        tagName: "Exclusive Launch",
        title: "The Grand Horizon",
        subtitle: "Residential & Commercial Towers",
        enquireLink: "/contact",
        details: [
            {
                icon: "/assets/images/Project/size_icon.svg",
                label: "Size",
                value: "3360 Sq. Ft.",
            },
            {
                icon: "/assets/images/Project/location_icon.svg",
                label: "Location",
                value: "Kalali, Vadodara",
            },
        ],
    },
];