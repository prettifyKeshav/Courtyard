import React from 'react'
import Hero from '../../molecules/Hero'
import "../../../../uploads/styles/components/components.css"

const ThankYouPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/blogs-banner.mp4"
                poster="/assets/video/blogs-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="not-found-banner"
                heading="THANK YOU!"
                description="We have received your message and will get back to you shortly"
                isLinkAvalible
                linkHref="/"
                linkClass="btn primary-btn"
                linkText="BACK TO HOME"
            />
        </>
    )
}

export default ThankYouPage
