"use client";

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Motion from '../../molecules/Animate';

const AboutUs = () => {
    const [isAnimationActive, setIsAnimationActive] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimationActive(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.6, }
        );
        if (animationRef.current) { observer.observe(animationRef.current); }
        return () => observer.disconnect();
    }, []);
    return (
        <>
            <section>
                <div className="home-secA">
                    <div className="container">
                        <div className="flex-box">

                            <figcaption>
                                <Motion variant="fadeUp">
                                    <h2>More than Homes. A Way of Living</h2>
                                    <p>A home is one of life’s most important decisions. It affects how families live every day, how
                                        children grow, and how the future unfolds.</p>
                                    <p>At Courtyard, we believe homes should be designed with real life in mind practical spaces,
                                        sensible layouts, strong locations, and communities that feel secure and welcoming. Our focus
                                        has always been on creating environments that make sense today and continue to add value tomorrow.</p>
                                    <Link href="/about-us" className="btn primary-btn">
                                        <span>Read Our Story</span>
                                        <Image className="arrow-ico" src="/assets/icon/btn-arrow.svg" width={20} height={8} alt="right ico" />
                                    </Link>
                                </Motion>
                            </figcaption>
                            <div className="right-col">
                                <div ref={animationRef} className={`animation-sec ${isAnimationActive ? "active" : ""}`} >
                                    <div className="c-vector">
                                        <Image src="/assets/images/Home/secA/c-vector.svg" width={188} height={286} alt='g-ico'></Image>
                                    </div>
                                    <div className="g-vector">
                                        <Image src="/assets/images/Home/secA/g-vector.svg" width={286} height={286} alt='g-ico'></Image>
                                    </div>
                                    <div className="building">
                                        <Image src="/assets/images/Home/secA/building.svg" width={286} height={286} alt='g-ico'></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs