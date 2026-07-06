"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css";
import VideoPop from "../molecules/Modal/VideoPop";
import HamburgerModel from "../molecules/Modal/HamburgerModel";
import Overlay from "../atoms/Overlay";
import { useGetFooterContactDataQuery } from "@/store/backendSlice/frontendAPISlice";
import EnquirePop from "../molecules/Modal/EnquirePop";

const Footer = () => {
    const { data: contactData } = useGetFooterContactDataQuery();
    const staticData = contactData?.data;

    return (
        <>
            <footer>

                <div className="bottom-sec">
                    <div className="container">
                        <div className="grid-box">

                            <div className="grid-box-item">
                                <figure>
                                    <Image src="/assets/footer-logo.svg" width={196} height={66} alt="footer logo"></Image>
                                </figure>

                                <div className="social-icons">
                                    {staticData?.StaticLinkedInLink && (
                                        <Link href={staticData.StaticLinkedInLink} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                                        </Link>
                                    )}
                                    {staticData?.StaticFacebookLink && (
                                        <Link href={staticData.StaticFacebookLink} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                                        </Link>
                                    )}
                                    {staticData?.StaticInstagramLink && (
                                        <Link href={staticData.StaticInstagramLink} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="grid-box-item">
                                <div className="col-md">
                                    <h6>Company</h6>
                                    <ul>
                                        <li><Link href="/about-us">Who We Are</Link></li>
                                        <li><Link href="/career">Beyond the Screens</Link></li>
                                        <li><Link href="/legal">Investor Relations</Link></li>
                                        <li><Link href="/blogs">Insights</Link></li>
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md contact">
                                    <h6>Contact us</h6>
                                    <ul>
                                        <li>
                                            <Link href={staticData?.StaticAddress ? "https://maps.google.com/?q=" + encodeURIComponent(staticData.StaticAddress) : "#"}>
                                                <figure>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <g fill="none" fillRule="evenodd">
                                                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                            <path fill="#fff" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
                                                        </g>
                                                    </svg>
                                                </figure>
                                                <span>{staticData?.StaticAddress || "14th Floor, Two Horizon Center, Golf Course Rd, DLF Phase 5, Sector 43, Gurugram, Haryana 122002"}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={staticData?.StaticPhoneNumber ? "tel:" + staticData.StaticPhoneNumber : "tel:01244267422"}>
                                                <figure>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                                                        <path d="M0 0h20v20H0z" fill="none" />
                                                        <path fill="#fff" d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.5 2.5 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095m1.49 1.505l.66 1.471a1.5 1.5 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548" />
                                                    </svg>
                                                </figure>
                                                <span>{staticData?.StaticPhoneNumber || "0124 - 4267422"}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={staticData?.StaticEmail ? "mailto:" + staticData.StaticEmail : "mailto:hrconnect@quadeye.com"}>
                                                <figure>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <path fill="#fff" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" />
                                                    </svg>
                                                </figure>
                                                <span>{staticData?.StaticEmail || "hrconnect@quadeye.com"}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="flex-box">
                        <p>© Quadeye. All rights reserved.</p>

                        <span>|</span>

                        <Link
                            href="https://www.prettifycreative.com/"
                            className="prettify"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Made by</span>

                            <figure>
                                <Image src="/assets/icon/prettify-light.svg" width={57} height={21} alt="prettify creative"></Image>
                            </figure>
                        </Link>
                    </div>

                </div>

            </footer>
            <HamburgerModel />
            <Overlay />
            <VideoPop />
            <EnquirePop />
        </>
    );
};

export default Footer;