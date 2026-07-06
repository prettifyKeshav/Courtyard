"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.3,
                easing: (t) => 1 - Math.pow(1 - t, 4),
                smoothWheel: true,
                smoothTouch: false,
                wheelMultiplier: 0.9,
                touchMultiplier: 1.5,
            }}
        >
            {children}
        </ReactLenis>
    );
}