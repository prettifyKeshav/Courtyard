"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Motion from '../../../molecules/Animate'

import FormCompo from './FormCompo'

const FeelTheLuxury = () => {

    return (
        <>
            <section>
                <div className="project-detail-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="colA">
                                <Motion variant="fadeUp">
                                    <h2>Feel The Luxury</h2>
                                    <p>Feel a lifestyle defined by grandeur and refinement. From the meticulously crafted interiors to the premium finishes, every corner of your home reflects an unmatched level of sophistication. The thoughtful use of textures, materials, and design elements creates an environment where luxury becomes a part of everyday life.</p>

                                    <div className="wrap">
                                        <h5>RERA No</h5>
                                        <p>PR/GJ/VADODARA/VADODARA/Vadodara Urban Development Authority/MAA15320/090625/311230</p>
                                    </div>

                                    <div className="btn-flex">
                                        <Link href="/" className="btn primary-btn "><span>Download Brochure</span></Link>
                                        <Link href="/" className="btn black-border-btn "><span>View RERA Certificate</span></Link>
                                    </div>
                                </Motion>
                            </div>

                            <div className="colB">
                                <Motion variant="fadeUp">

                                    <div className="heading">
                                        <figure>
                                            <Image src="/assets/favicon.svg" width={56} height={60} alt="ico" ></Image>
                                        </figure>
                                        <h4>Connect With Our Property Experts</h4>
                                    </div>
                                    <FormCompo />

                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeelTheLuxury