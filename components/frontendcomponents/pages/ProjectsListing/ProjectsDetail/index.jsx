import Motion from '../../../molecules/Animate'
import "../../../../../uploads/styles/components/components.css"
import "../../../../../uploads/styles/projects/projects.css"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FeelTheLuxury from './FeelTheLuxury'
import VideoWrapper from './VideoWrapper'
import Ammenities from './Amenities'
import LocationAdvantages from './LocationAdvantages'
import FloorPlans from './FloorPlans'
import GallerySec from './GallerySec'
import ConnectSec from './ConnectSec'
import EMICalculator from './EMICalculator'
import MoreProjects from './MoreProjects'

const ProjectsDetail = () => {
    return (
        <>
            <div className="hero-banner projects-detail-banner">
                <div className="video-wrapper">
                    <video autoPlay muted loop playsInline >
                        <source src="/assets/video/project-detail-banner.mp4" type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="bg-wrapper">
                            <Motion variant="fadeUp">
                                <h1>Fairmont by Courtyard</h1>
                                <p>Possession : Dec 2028 | Sevasi, Vadodara</p>

                                <div className="bottom-flex">
                                    <ul className="left">
                                        <li className="col">
                                            <div className="icon">
                                                <Image src="/assets/images/Project/apartment.svg" width={25} height={25} alt="ico" />
                                            </div>
                                            <div className="content">
                                                <p>Type</p>
                                                <h5>4 BHK Apartment</h5>
                                            </div>
                                        </li>

                                        <li className="col">
                                            <div className="icon">
                                                <Image src="/assets/images/Project/size.svg" width={25} height={25} alt="ico" />
                                            </div>
                                            <div className="content">
                                                <p>Size</p>
                                                <h5>3024 Sq. Ft.</h5>
                                            </div>
                                        </li>

                                        <li className="col">
                                            <div className="icon">
                                                <Image src="/assets/images/Project/currency-inr.svg" width={25} height={25} alt="ico" />
                                            </div>
                                            <div className="content">
                                                <p>Prices From</p>
                                                <h5>4 BHK Apartment</h5>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="btn-flex">
                                        <Link href="/" className="whatsapp-btn" >
                                            <Image src="/assets/icon/whatsapp.svg" width={24} height={24} alt='ico'></Image>
                                        </Link>
                                        <button className='btn circle-btn circle-btn-white'>Enquire Now</button>
                                    </div>
                                </div>
                            </Motion>
                        </div>
                    </div>
                </div>
            </div>

            <FeelTheLuxury />
            <VideoWrapper />
            <Ammenities />
            <LocationAdvantages />
            <FloorPlans />
            <GallerySec />
            <ConnectSec />
            <EMICalculator />
            <MoreProjects />
        </>
    )
}

export default ProjectsDetail