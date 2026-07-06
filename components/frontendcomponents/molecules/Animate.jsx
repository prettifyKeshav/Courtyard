"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const animations = {
    fadeUp: {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        initial: { opacity: 0, x: 60 },
        whileInView: { opacity: 1, x: 0 },
    },
    fadeRight: {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
    },
    zoomIn: {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
    },
};

const Motion = ({
    children,
    className = "",
    variant = "fadeUp",
    delay = 0,
    duration = 0.8,
    as = "div",
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 540);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const Component = motion[as];

    if (isMobile) {
        const RegularComponent = as === "div" ? "div" : as;
        return <RegularComponent className={className}>{children}</RegularComponent>;
    }

    return (
        <Component
            className={className}
            initial="initial"
            whileInView="whileInView"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            {...animations[variant]}
        >
            {children}
        </Component>
    );
};

export default Motion;