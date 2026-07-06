import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/uploads/styles/component/component.css"

const ThankYouPage = () => {
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
                        <h1>THANK YOU!</h1>
                        <p>We have received your message and will get back to you shortly.</p>
                        <Link href="/" className='btn primary-btn'>
                            <span>Back to Home</span>
                            <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYouPage
