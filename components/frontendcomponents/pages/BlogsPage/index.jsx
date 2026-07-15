import React from "react";
import Hero from "../../molecules/Hero";
import "../../../../uploads/styles/blog/blog.css";
import BlogCard from "./BlogCard";

const BlogsPage = () => {
    return (
        <>
            <Hero
                bgType="video"
                imgSrc="/assets/video/blogs-banner.mp4"
                poster="/assets/video/blogs-banner.mp4"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="blog-banner"
                heading="Blogs"
                description="Expert Perspectives on Real Estate & Development"
            />

            <section>
                <div className="blog-secA">
                    <div className="container">
                        <div className="grid-box">
                            {blogData.map((item) => (
                                <BlogCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogsPage;

const blogData = [
    {
        id: 1,
        detailLink: "/blogs/investment-guide-2026",
        blogImage: "/assets/images/Others/blogs/1.jpg",
        title: "The Ultimate Guide to Real Estate Investment in 2026",
        date: "15 January 2026",
    },
    {
        id: 2,
        detailLink: "/blogs/home-buying-checklist",
        blogImage: "/assets/images/Others/blogs/2.jpg",
        title: "10 Things Every Homebuyer Should Check Before Purchasing",
        date: "28 February 2026",
    },
    {
        id: 3,
        detailLink: "/blogs/sustainable-living",
        blogImage: "/assets/images/Others/blogs/3.jpg",
        title: "Why Sustainable Communities Are the Future",
        date: "09 March 2026",
    },
    {
        id: 4,
        detailLink: "/blogs/luxury-apartments",
        blogImage: "/assets/images/Others/blogs/1.jpg",
        title: "Luxury Apartments: Features That Truly Matter",
        date: "22 April 2026",
    },
    {
        id: 5,
        detailLink: "/blogs/property-appreciation",
        blogImage: "/assets/images/Others/blogs/2.jpg",
        title: "How to Identify High-Growth Investment Locations",
        date: "11 June 2026",
    },
    {
        id: 6,
        detailLink: "/blogs/first-time-buyers",
        blogImage: "/assets/images/Others/blogs/3.jpg",
        title: "A First-Time Buyer's Guide to Owning Your Dream Home",
        date: "30 July 2026",
    },
];