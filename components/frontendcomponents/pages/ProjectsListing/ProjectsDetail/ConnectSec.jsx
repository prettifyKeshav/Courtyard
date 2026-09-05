"use client"

import Image from 'next/image'
import FormCompo from './FormCompo'
const ConnectSec = () => {

    return (
        <>
            <section>
                <div className="project-detail-secG">
                    <div className="container">
                        <div className="heading">
                            <figure>
                                <Image src="/assets/vector/white-vector.svg" width={86} height={64} alt="ico"></Image>
                            </figure>
                            <h2>Connect With Our Property Experts</h2>
                        </div>

                        <FormCompo />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConnectSec