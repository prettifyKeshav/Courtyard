"use client";
import Image from "next/image";
import { useState } from "react";
import MapFilter from "./MapFilter";
import ProjectsMap from "./ProjectsMap";

const MapCity = () => {
    const [activeRegion, setActiveRegion] = useState(0);
    const [projectStatus, setProjectStatus] = useState("");
    const [activeProject, setActiveProject] = useState(0);
    return (
        <>
            <section>
                <div className="home-secD">
                    <div className="container">
                        <div className="heading">
                            <h2>Projects Across the City</h2>
                        </div>

                        <div className="content">
                            <div className="left">
                                <div className="upper">
                                    <h4>Search Projects</h4>
                                    <div className="map-filter">
                                        <MapFilter
                                            type="country"
                                            data={data.map(({ country }) => country)}
                                            state={projectStatus}
                                            setState={setProjectStatus}
                                        />
                                        <MapFilter
                                            type="status"
                                            data={["Ongoing", "Delivered"]}
                                            state={projectStatus}
                                            setState={setProjectStatus}
                                        />
                                    </div>
                                </div>
                                <ul className="filter-content">
                                    {data[activeRegion].projects.map(
                                        ({ projectName, role, focus }, i) => {
                                            const isProjectActive = activeProject === i;
                                            return (
                                                <li
                                                    key={i}
                                                    className={isProjectActive ? "active" : ""}
                                                    onClick={() => setActiveProject(i)}
                                                >
                                                    <div className="info">
                                                        <h5>{projectName}</h5>
                                                        <p>{focus} </p>
                                                    </div>
                                                    <figure className="icon">
                                                        <Image
                                                            src="/assets/images/Home/map-sec/right-arrow.svg"
                                                            alt="icon"
                                                            width={26}
                                                            height={11}
                                                        />
                                                    </figure>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </div>

                            <div className="right">
                                <ProjectsMap projects={data[0].projects} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default MapCity


const data = [
    {
        country: "Sierra Leone",
        projects: [
            {
                projectName: "Courtyard Prime",
                focus: "3BHK Large Apartments & Shops ",
                coordinates: {
                    lat: 8.483833040218455,
                    lng: -13.233723242889049,
                },
                status: "ongoing",
            },
            {
                projectName: "Courtyard Phoenix",
                focus: "4BHK Luxurious Flats, Penthouse, Showrooms",
                coordinates: {
                    lat: 8.49169,
                    lng: -13.24062,
                },
                status: "delivered",
            },
            {
                projectName: "Courtyard Regalia",
                focus: "3BHK & Shops",
                coordinates: {
                    lat: 8.489519778033253,
                    lng: -13.290272987751994,
                },
                status: "ongoing",
            },
            {
                projectName: "Courtyard Prime",
                focus: "3BHK Large Apartments & Shops",
                coordinates: {
                    lat: 8.489519778033253,
                    lng: -13.290272987751994,
                },
                status: "ongoing",
            },
            {
                projectName: "Courtyard Prime",
                focus: "3BHK Large Apartments & Shops ",
                coordinates: {
                    lat: 8.483833040218455,
                    lng: -13.233723242889049,
                },
                status: "ongoing",
            },
            {
                projectName: "Courtyard Phoenix",
                focus: "4BHK Luxurious Flats, Penthouse, Showrooms",
                coordinates: {
                    lat: 8.49169,
                    lng: -13.24062,
                },
                status: "delivered",
            },
            {
                projectName: "Courtyard Regalia",
                focus: "3BHK & Shops",
                coordinates: {
                    lat: 8.489519778033253,
                    lng: -13.290272987751994,
                },
                status: "ongoing",
            },
            {
                projectName: "Courtyard Prime",
                focus: "3BHK Large Apartments & Shops",
                coordinates: {
                    lat: 8.489519778033253,
                    lng: -13.290272987751994,
                },
                status: "ongoing",
            },

        ],
    },
    {
        country: "Tanzania",
        projects: [
            {
                projectName: "Kijichi Secondary School Site – Dar es Salaam, Tanzania",
                role: "Preliminary Assessment Site",
                focus: "Roof-structure evaluation for MEER installations",
                coordinates: {
                    lat: "",
                    long: "",
                },
                status: "delivered",
            },
        ],
    },
    {
        country: "India",
        projects: [
            {
                projectName: "Pune Site – Maharashtra, India",
                role: "Experimental Demonstration Site",
                focus:
                    "Rooftop reflector installation and monitoring for urban cooling performance assessment",
                coordinates: {
                    lat: 18.511086,
                    lng: 73.822747,
                },
                status: "delivered",
            },
        ],
    },
    {
        country: "United States",
        projects: [
            {
                projectName: "California Rooftop Experiment",
                role: "Historical Pilot Site",
                focus: "Early rooftop reflector testing under real-world conditions",
                coordinates: {
                    lat: "",
                    long: "",
                },
                status: "delivered",
            },
        ],
    },
    {
        country: "China",
        projects: [
            {
                projectName: "Beijing",
                role: "Material Science Testing Site",
                focus: "PDRC paint development",
                coordinates: {
                    lat: "",
                    long: "",
                },
                status: "delivered",
            },
        ],
    },
];
