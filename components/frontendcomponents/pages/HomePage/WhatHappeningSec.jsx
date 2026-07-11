import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Motion from '../../molecules/Animate'

const WhatHappeningSec = () => {
    return (
        <>
            <section>
                <div className="home-secE">
                    <div className="container">
                        <Motion variant="fadeUp">
                            <div className="heading">
                                <h2>What’s Happening at Courtyard</h2>
                                <p>From new project launches and construction milestones to community events and important updates, stay connected with what’s shaping Courtyard today</p>
                                <Link href="/" className="btn white-btn">
                                    <span>View All Updates</span>
                                    <Image className="arrow-ico" src="/assets/icon/btn-arrow.svg" width={20} height={8} alt="right ico" />
                                </Link>
                            </div>
                        </Motion>

                        <Motion variant="fadeUp">
                            <div className="grid-box">
                                <div className="col">
                                    <Image src="/assets/images/Home/whats-happening/1.jpg" width={309} height={227} alt='ico' ></Image>
                                </div>
                                <div className="col">
                                    <Image src="/assets/images/Home/whats-happening/2.jpg" width={309} height={227} alt='ico' ></Image>
                                </div>
                                <div className="col">
                                    <Image src="/assets/images/Home/whats-happening/33.jpg" width={309} height={227} alt='ico' ></Image>
                                </div>
                                <div className="col">
                                    <Image src="/assets/images/Home/whats-happening/4.jpg" width={309} height={227} alt='ico' ></Image>
                                </div>
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatHappeningSec