import Hero from "../../molecules/Hero";
import "../../../../uploads/styles/contact/contact.css";
import Connect from "./Connect";
import Map from "./Map";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <Hero
        bgType="video"
        imgSrc="/assets/video/contact-banner.mp4"
        poster="/assets/video/contact-banner.png"
        imgHeight="626"
        imgWidth="1028"
        bannerClassName="contact-banner"
        heading="Contact Us"
        description="We're here to provide guidance, answers, and expert support."
      />
      <Connect />
      <Form />
      <Map />
    </>
  );
};

export default Contact;
