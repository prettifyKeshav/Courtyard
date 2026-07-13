"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";

const categories = [
    "All",
    "Residential",
    "Commercial",
    "Resi–Commercial Developments",
];

const statusOptions = [
    "All",
    "Ongoing",
    "Newly Launched",
    "Ready to Move",
    "Limited Units",
    "Premium Living",
    "Exclusive Launch",
];

const CardSec = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProjects = projectData.filter((project) => {
        const categoryMatch =
            activeCategory === "All" || project.category === activeCategory;

        const statusMatch =
            selectedStatus === "All" || project.tagName === selectedStatus;

        return categoryMatch && statusMatch;
    });

    return (
        <section>
            <div className="container">
                <div className="top-flex">
                    <div className="colA">
                        <ul>
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={
                                        activeCategory === category ? "active" : ""
                                    }
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="colB">
                        <div className="custom-select">
                            <div
                                className="option-type"
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                            >
                                <p>{selectedStatus}</p>

                                <div className="ico">
                                    <Image
                                        src="/assets/icon/dropdown_down.svg"
                                        width={20}
                                        height={9}
                                        alt="arrow"
                                    />
                                </div>
                            </div>

                            <div
                                className={`options-wrapper ${isDropdownOpen ? "open" : ""
                                    }`}
                            >
                                <ul className="options">
                                    {statusOptions.map((status) => (
                                        <li
                                            key={status}
                                            onClick={() => {
                                                setSelectedStatus(status);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {status}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-box">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
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
                        ))
                    ) : (
                        <p>No projects found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CardSec;
const projectData = [
    {
        detailLink: "/courtyard-enclave",
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
        detailLink: "/skyline-heights",
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
        detailLink: "/green-valley-residency",
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
        detailLink: "/royal-greens-business-hub",
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
        detailLink: "/lakeview-residency",
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
        detailLink: "/the-grand-horizon",
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