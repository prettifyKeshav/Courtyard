import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/uploads/styles/component/component.css"

const SomethingWentWrong = () => {
    return (
        <>
            <section className='sec-pad'>
                <div className="not-found-banner">
                    <div className="content text-center">
                        <div className="logo">
                            <div className="">
                                <Image src="/assets/logo-q.svg" width={108} height={108} alt="ico"></Image>
                            </div>
                        </div>
                        <h1>SOMETHING WENT WRONG!</h1>
                        <p>An unexpected error occurred. Please try again later or contact support.</p>
                        <Link href="/contact-us" className='btn primary-btn'>
                            <span>Go to Contact Us</span>
                            <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SomethingWentWrong
