import React from "react";
import Image from "next/image";
import Link from "next/link";
import Motion from "./Animate";
import "../../../uploads/styles/components/components.css";

const Hero = ({
  imgSrc,
  imgHeight,
  imgWidth,
  heading,
  subHeading, 
  description,
  bannerClassName,
  bgType = "image",
  isLinkAvalible,
  linkHref,
  linkText,
  linkClass,
  poster,
}) => {
  return (
    <div className={`hero-banner ${bannerClassName || ""}`}>
      <div className="video-wrapper">
        {bgType === "video" ? (
          <video autoPlay muted loop playsInline poster={poster}>
            <source src={imgSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imgSrc}
            height={imgHeight}
            width={imgWidth}
            alt="banner image"
          />
        )}
        <div className="container">
          <div  className="bg-wrapper">
              <h2>{subHeading}</h2>
              <h1>{heading}</h1>
              <p>{description}</p>
              {isLinkAvalible && (
                <Link
                  href={linkHref}
                  className={`${linkClass} btn primary-btn`}
                >
                  <span>{linkText}</span>
                  <Image
                    className="arrow-ico"
                    src="/assets/icon/btn-arrow.svg"
                    width={20}
                    height={8}
                    alt="right ico"
                  />
                </Link>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
