import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
    detailLink,
    image,
    title,
    tagName,
    subtitle,
    details,
    enquireLink,
}) => {
    return (
        <div className="project-card">
            <Link href={`/projects/${detailLink}`}>
                <figure>
                    <Image
                        src={image}
                        width={409}
                        height={279}
                        alt={title}
                    />
                    <div className="tag">
                        <p>{tagName}</p>
                    </div>
                </figure>
            </Link>
            <figcaption>
                <Link href={`/projects/${detailLink}`}>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </Link>
                <div className="detail-flex">
                    {details.map((item, index) => (
                        <div className="col" key={index}>
                            <div className="icon">
                                <Image
                                    src={item.icon}
                                    width={25}
                                    height={25}
                                    alt={item.label}
                                />
                            </div>

                            <div className="content">
                                <p>{item.label}</p>
                                <h5>{item.value}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btn-flex">
                    <Link href={enquireLink} className="btn primary-btn">
                        <span>Enquire Now</span>
                    </Link>

                    <Link href={`/projects/${detailLink}`} className="btn black-border-btn">
                        <span>View Details</span>
                    </Link>
                </div>
            </figcaption>
        </div>
    );
};

export default ProjectCard;
