import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ ...item }) => {
    return (
        <Link href={item.detailLink} className="blog-card">
            <figure>
                <Image
                    src={item.blogImage}
                    width={380}
                    height={253}
                    alt={item.title}
                />
            </figure>

            <figcaption>
                <h4>{item.title}</h4>
                <p>{item.date}</p>
            </figcaption>
        </Link>
    );
};

export default BlogCard;