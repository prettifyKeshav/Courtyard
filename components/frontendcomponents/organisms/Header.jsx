"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../uploads/styles/header/header.css";
import { useModalStore } from "../../../store/modelStore";
import { usePathname } from "next/navigation";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);
    const [isFixed, setIsFixed] = useState(false);
    const pathname = usePathname();
    const isFixedPage = pathname === "/privacy-policy";

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`${isFixed || isFixedPage ? "header-fixed" : ""}`} >
            <div className="container-fluid">
                <div className="header-wrapper">

                    <button type="button" className="ham-btn" data-model=".ham-pop" onClick={openHam}>
                        <div className="dot">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <div className="colA">
                        <Link href="/" className="logo">
                            <Image src="/assets/logo.svg" width={100} height={96} alt="ico"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="right-menu-list">
                            <li className="phone-ico">
                                <Link href="/contact-us">
                                    <span>CONTACT US</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header