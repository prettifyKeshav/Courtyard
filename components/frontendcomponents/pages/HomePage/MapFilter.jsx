"use client";
import Image from "next/image";
import { useState } from "react";

const MapFilter = ({ type, data, state, setState }) => {
    const isCountry = type === "country";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="map-select" onClick={() => setIsOpen(!isOpen)}>
            <figure className="type-icon">
                <Image
                    src={`/assets/images/Home/${isCountry ? "location" : "watch"}.svg`}
                    alt="icon"
                    width={16}
                    height={16}
                />
            </figure>
            <figcaption>
                <p className="type">{isCountry ? "Country" : "Project Status"}</p>
                <p className="value">India</p>
            </figcaption>
            <figure className="icon">
                <Image src="/assets/images/Home/down-blue.svg" alt="icon" width={16} height={16} />
            </figure>

            <div className={`option-container ${isOpen ? "open" : ""}`}>
                <ul className="options">
                    {data?.map((val, i) => {
                        const isSelected = state == val;
                        return (
                            <li
                                onClick={() => setState(val)}
                                className={isSelected ? "selected" : ""}
                                key={i}
                            >
                                {val}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MapFilter;
