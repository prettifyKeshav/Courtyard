import Hero from "../components/frontendcomponents/molecules/Hero";
import Footer from "../components/frontendcomponents/organisms/Footer";
import Header from "../components/frontendcomponents/organisms/Header";
import "../uploads/styles/components/components.css"
const NotFound = () => {
    return (
        <>
            <Header />
            <Hero
                bgType="video"
                imgSrc="/assets/video/blogs-banner.mp4"
                poster="/assets/video/blogs-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="not-found-banner"
                heading="PAGE NOT FOUND!"
                description="Sorry, the page you are looking for doesn't exist or has been moved"
                isLinkAvalible
                linkHref="/"
                linkClass="btn primary-btn"
                linkText="BACK TO HOME"
            />
            <Footer />
        </>
    );
};

export default NotFound;