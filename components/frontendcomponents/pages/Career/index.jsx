import Hero from "../../molecules/Hero";
import "../../../../uploads/styles/careers/careers.css";
import HomeownerSec from "../HomePage/HomeownerSec";
import Power from "./Power";
import OurLife from "./OurLife";
import Openings from "./Openings";

const Career = () => {
  return (
    <>
      <Hero
        bgType="video"
        imgSrc="/assets/video/career-banner.mp4"
        poster="/assets/video/career-banner.png"
        imgHeight="626"
        imgWidth="1028"
        bannerClassName="career-banner"
        heading="Building the Future with Trust & Excellence"
        description="Join us in shaping the future of real estate through innovation, quality, and sustainable development. Building vibrant communities and creating lasting value for generations to come."
        isLinkAvalible
        linkHref="#Opning_section"
        linkText="View Current Openings"
        linkClass="btn"
        isPlayBtn
      />
      <Power />
      <OurLife />
      <Openings />
      <HomeownerSec isCareerPage />
    </>
  );
};

export default Career;
