"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Motion from '../../../molecules/Animate';


const LocationAdvantages = () => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery1']", {
            Thumbs: false,
        });
        return () => {
            Fancybox.unbind("[data-fancybox='gallery1']");
        };
    }, []);

    return (
        <>
            <section>
                <div className="project-detail-secD">
                    <div className="container">
                        <div className="flex-box">
                            <div className="colA">
                                <Motion variant="fadeUp">
                                    <h2>Location Advantages</h2>
                                    <p>Feel a lifestyle defined by grandeur and refinement. From the meticulously crafted interiors to the premium finishes, every corner of your home reflects an unmatched level of sophistication</p>

                                    <div className="grid-box">
                                        <div className="col">
                                            <h4>5 MIN</h4>
                                            <p>Fun Time Arena</p>
                                        </div>
                                        <div className="col">
                                            <h4>10 MIN</h4>
                                            <p>Akshar Public School</p>
                                        </div>
                                        <div className="col">
                                            <h4>6 MIN</h4>
                                            <p>Hyatt Place Vadodara</p>
                                        </div>
                                        <div className="col">
                                            <h4>12 MIN</h4>
                                            <p>Navrachana University</p>
                                        </div>
                                    </div>

                                    <div className="btn-flex">
                                        <Link href="/" className="btn primary-btn "><span>View on google maps</span></Link>
                                        <Link href="/" className="btn black-border-btn "><span>Enquire Now</span></Link>
                                    </div>
                                </Motion>
                            </div>

                            <div className="colB">
                                <Motion variant="fadeUp">
                                    <Link href="/assets/images/Project/location-advantage.png" data-fancybox="gallery1">
                                        <figure>
                                            <Image src="/assets/images/Project/location-advantage.png" width={696} height={484} alt="ico" ></Image>
                                            <figcaption>
                                                <Image src="/assets/icon/zoom-ico.svg" width={24} height={24} alt='ico'  ></Image>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LocationAdvantages