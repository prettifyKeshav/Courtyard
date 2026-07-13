import Hero from "../../molecules/Hero";
import "../../../../uploads/styles/about/about.css";
import CounterSec from "../../molecules/CounterSec";
import Intro from "./Intro";
import OurMission from "./OurMission";
import Founder from "./Founder";
import Awards from "./Awards";
import Journey from "./Journey";

const About = () => {
  return (
    <>
      <Hero
        bgType="video"
        imgSrc="/assets/video/about-banner.mp4"
        poster="/assets/video/about-banner.png"
        imgHeight="626"
        imgWidth="1028"
        bannerClassName="about-banner"
        heading="Courtyard Group"
        description="The Best Construction with Design Consistency"
      />
      <CounterSec />
      <Intro />
      <OurMission />
      <Journey />
      <Founder />
      <Awards />
    </>
  );
};

export default About;
