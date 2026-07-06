import "../../../../uploads/styles/home/home.css"
import Hero from "../../molecules/Hero"
import "../../../../uploads/styles/components/components.css"

const HomePage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/home-banner.mp4"
                poster="/assets/video/home-banner.png"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="home-banner"
                heading="Homes Designed for Sensible Living"
                description="At Courtyard, we create thoughtfully planned homes and communities where space, location, and long-term value come together so families can live with confidence, comfort, and peace of mind."
                isLinkAvalible
                linkHref="/projects"
                linkText="Explore Our Projects"
            />

        </>
    )
}

export default HomePage