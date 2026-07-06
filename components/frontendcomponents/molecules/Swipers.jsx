"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BlogCard from "../pages/BlogPage/BlogCard";
import WorkLifeCard from "../pages/CareerPage/WorkLifeCard";
import TestimonalsCard from "../pages/CareerPage/TestimonalsCard";

const Swipers = ({
    onSlideClick,
    activeTab,

    className = "",
    spaceBetween = 0,
    slidesPerView = 1,
    imageWidth = 69,
    imageHeight = 69,
    data = [],
    autoplay,
    effectcoverflow = false,
    coverflowConfig = {},
    loop,
    speed,
    pagination = false,
    navigation = false,
    swiperSlideCard,
    swiperNavBtn,
    swiperNavClass,
    SwiperPaginationClass,
    centeredSlides = false,
    breakpoints = {},

    // NEW PROPS
    enableFancybox = false,
    fancyboxGroup = "gallery"
}) => {

    const [isLocked, setIsLocked] = useState(false);

    const [swiperInstance, setSwiperInstance] = useState(null);
    const paginationRef = useRef(null);
    const modules = [];

    if (effectcoverflow) modules.push(EffectCoverflow);
    if (autoplay) modules.push(Autoplay);
    if (pagination) modules.push(Pagination);

    return (
        <>
            <div className="swiper-group">
                <Swiper
                    modules={modules}
                    breakpoints={breakpoints}
                    spaceBetween={spaceBetween}
                    slidesPerView={slidesPerView}
                    centeredSlides={centeredSlides}
                    className={className}
                    loop={loop}
                    speed={speed}
                    autoplay={autoplay ? { delay: 0, disableOnInteraction: false } : false}
                    effect={effectcoverflow ? "coverflow" : "slide"}
                    coverflowEffect={
                        effectcoverflow
                            ? coverflowConfig
                            : undefined
                    }
                    navigation={false}
                    onSwiper={setSwiperInstance}

                    preventClicks={true}
                    preventClicksPropagation={true}
                    onSlideClick={(swiper) => {
                        const clickedItem = data[swiper.clickedIndex];
                        if (clickedItem) {
                            onSlideClick?.(clickedItem);
                        }
                    }}

                    pagination={
                        pagination
                            ? {
                                type: "progressbar",
                                clickable: true,
                                el: paginationRef.current,
                            }
                            : false
                    }
                    onBeforeInit={(swiper) => {
                        if (pagination && paginationRef.current) {
                            swiper.params.pagination.el = paginationRef.current;
                        }
                    }}

                    onInit={(swiper) => {
                        setIsLocked(swiper.isLocked);
                    }}
                    onResize={(swiper) => {
                        setIsLocked(swiper.isLocked);
                    }}
                    onSlidesLengthChange={(swiper) => {
                        setIsLocked(swiper.isLocked);
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            {swiperSlideCard === "BlogCard" ? (<BlogCard {...item} />) :
                                swiperSlideCard === "WorkLifeCard" ? (<WorkLifeCard {...item} />) :
                                    swiperSlideCard === "TestimonalsCard" ? (<TestimonalsCard {...item} />) :
                                        enableFancybox ? (
                                            <a href={item.figureImageSrc}
                                                data-fancybox={fancyboxGroup}
                                                data-caption={item.caption || ""}
                                                style={{ display: "block" }}
                                                onClick={(e) => {
                                                    if (swiperInstance?.isDragging) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                <figure>
                                                    <Image
                                                        src={item.figureImageSrc}
                                                        width={imageWidth}
                                                        height={imageHeight}
                                                        alt="figure image"
                                                    />
                                                </figure>

                                                {(item.heading || item.description) && (
                                                    <figcaption>
                                                        {item.heading && <h4>{item.heading}</h4>}
                                                        {item.description && <p>{item.description}</p>}
                                                    </figcaption>
                                                )}
                                            </a>
                                        ) : (
                                            <>
                                                <div
                                                    onClick={() => onSlideClick?.(item)}
                                                    className={activeTab === item.dataTab ? "active" : ""}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <figure>
                                                        <Image
                                                            src={item.figureImageSrc}
                                                            width={imageWidth}
                                                            height={imageHeight}
                                                            alt="figure image"
                                                        />
                                                    </figure>

                                                    {(item.heading || item.description) && (
                                                        <figcaption>
                                                            {item.heading && <h4>{item.heading}</h4>}
                                                            {item.description && <p>{item.description}</p>}
                                                        </figcaption>
                                                    )}
                                                </div>
                                            </>
                                        )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {(pagination || navigation) && (
                    <div className="custom-pagination">
                        {pagination && (
                            <div
                                className={`swiper-pagination ${SwiperPaginationClass || ""}`}
                                ref={paginationRef}
                            ></div>
                        )}

                        {navigation && data.length > slidesPerView && (
                            <div className={`swiper-nav ${swiperNavClass}`}>
                                <button className={`swiper-nav-prev ${swiperNavBtn}`} onClick={() => swiperInstance?.slidePrev()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                        <path fill="#173254" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
                                    </svg>
                                </button>
                                <button className={`swiper-nav-next ${swiperNavBtn}`} onClick={() => swiperInstance?.slideNext()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                        <path fill="#173254" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Swipers;