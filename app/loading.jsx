"use client";
import { useEffect, useState } from "react";

export default function LoaderPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    if (!loading) return (
        <div className="loading">
            <div className="loading__spinner"></div>
        </div>
    );

    return (
        <div className="loading">
            <div className="loading__spinner"></div>
        </div>
    );
}