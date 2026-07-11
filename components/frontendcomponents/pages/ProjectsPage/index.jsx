import React from 'react'
import Hero from '../../molecules/Hero'
import "../../../../uploads/styles/components/components.css"
import "../../../../uploads/styles/projects/projects.css"

const ProjectsPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/project-banner.mp4"
                poster="/assets/video/project-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="projects-banner"
                heading="Residential"
                description="At Courtyard, we create thoughtfully planned homes and communities where space, location, and long-term value come together so families can live with confidence, comfort, and peace of mind."
            />
        </>
    )
}

export default ProjectsPage