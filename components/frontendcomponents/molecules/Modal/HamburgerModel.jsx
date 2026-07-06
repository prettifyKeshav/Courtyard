"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "@/uploads/styles/header/header.css"
import { useModalStore } from '../../../../store/modelStore'; 
import { useGetFooterContactDataQuery } from '@/store/backendSlice/frontendAPISlice';

const HamburgerModel = () => {
    const isOpen = useModalStore((state) => state.isHamOpen)
    const closeHam = useModalStore((state) => state.closeHam)

    const { data: contactData } = useGetFooterContactDataQuery();
    const staticData = contactData?.data;

    const menuItems = [
        { id: 1, title: "Who We Are ", href: "/" },
        { id: 2, title: "Careers ", href: "/jobs" },
        { id: 3, title: "Beyond the Screens", href: "/career" },
        { id: 4, title: "Investor Relations", href: "/legal" },
        { id: 5, title: "Insights", href: "/blogs" },
        { id: 6, title: "Contact Us", href: "/contact-us" },
    ];

    return (
        <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeHam}>
                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="model-body">
                <div className="icon">
                    <Image src="/assets/logo-q.svg" width={50} height={50} className="svg" alt="icon" />
                </div>

                <nav>
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    onClick={closeHam}
                                    target={item.targetBlank ? "_blank" : "_self"}
                                    rel={item.targetBlank ? "noopener noreferrer" : undefined}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="bottom-list">
                    <div className="social-icons">
                        {staticData?.StaticLinkedInLink && (
                            <Link href={staticData.StaticLinkedInLink} target="_blank" rel="noopener noreferrer" title="LinkedIn" onClick={closeHam}>
                                <Image src="/assets/icon/linkedin.svg" width={25} height={25} alt="LinkedIn" />
                            </Link>
                        )}
                        {staticData?.StaticFacebookLink && (
                            <Link href={staticData.StaticFacebookLink} target="_blank" rel="noopener noreferrer" title="Facebook" onClick={closeHam}>
                                <Image src="/assets/icon/facebook.svg" width={25} height={25} alt="Facebook" />
                            </Link>
                        )}
                        {staticData?.StaticInstagramLink && (
                            <Link href={staticData.StaticInstagramLink} target="_blank" rel="noopener noreferrer" title="Instagram" onClick={closeHam}>
                                <Image src="/assets/icon/instagram.svg" width={25} height={25} alt="Instagram" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerModel;