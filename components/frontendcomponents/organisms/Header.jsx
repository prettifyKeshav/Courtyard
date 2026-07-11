"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../uploads/styles/header/header.css";
import { useModalStore } from "../../../store/modelStore";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);
    const [isFixed, setIsFixed] = useState(false);

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
        <header className={`${isFixed ? "header-fixed" : ""}`} >
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
                                <Link href="contact.html">
                                    <span>CONTACT US</span>
                                </Link>
                            </li>
                            {/* <li class="btn">
                                <a href="javascript:void(0);" data-model=".enquire-pop">get in touch</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header