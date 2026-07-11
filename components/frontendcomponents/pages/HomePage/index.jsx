import "../../../../uploads/styles/home/home.css"
import Hero from "../../molecules/Hero"
import "../../../../uploads/styles/components/components.css"
import CounterSec from "../../molecules/CounterSec"
import AboutUs from "./AboutUs"
import ProjectSec from "./ProjectSec"
import WhyChooseSec from "./WhyChooseSec"
import WhatHappeningSec from "./WhatHappeningSec"
import HomeownerSec from "./HomeownerSec"
import MapCity from "./MapCity"

const HomePage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/Home/home-banner.mp4"
                poster="/assets/video/Home/home-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="home-banner"
                heading="Homes Designed for Sensible Living"
                description="At Courtyard, we create thoughtfully planned homes and communities where space, location, and long-term value come together so families can live with confidence, comfort, and peace of mind."
                isLinkAvalible
                linkHref="/projects"
                linkText="Explore Our Projects"
                linkClass="white-btn"
            />
            <CounterSec />
            <AboutUs />
            <ProjectSec />
            <WhyChooseSec />
            <MapCity />
            <WhatHappeningSec />
            <HomeownerSec />
            <Hero
                bgType="video"
                imgSrc="/assets/video/Home/secF-banner.mp4"
                poster="/assets/video/Home/secF-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="home-secG"
                subHeading="A Home that Feels Sensible Today"
                description="A lifestyle that feels right for years to come"
                isLinkAvalible
                linkHref="/contact-us"
                linkText="Connect with us"
                linkClass="white-btn"
            />
        </>
    )
}

export default HomePage