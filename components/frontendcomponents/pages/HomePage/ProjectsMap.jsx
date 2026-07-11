"use client";

import {
    GoogleMap,
    Marker,
    InfoWindow,
    useLoadScript,
} from "@react-google-maps/api";
import { useState, useRef, useCallback } from "react";

export default function ProjectsMap({ projects }) {
    const [selected, setSelected] = useState(0);
    const mapRef = useRef(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `AIzaSyC7epHDKQBc1ii0DYxe-6tnUIFCrjFbrXU&libraries`,
    });

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const handleMarkerClick = useCallback((project) => {
        setSelected(project);

        const lat = Number(project.coordinates.lat);
        const lng = Number(project.coordinates.lng);

        if (mapRef.current) {
            setTimeout(() => {
                mapRef.current.panTo({ lat, lng });
                mapRef.current.setZoom(10);
            }, 0);
        }
    }, []);

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <GoogleMap
            zoom={4}
            center={{ lat: 20.5937, lng: 78.9629 }}
            mapContainerStyle={{ width: "100%", height: "600px" }}
            options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: [{ featureType: "all", stylers: [{ saturation: -100 }] }],
            }}
            onLoad={onMapLoad}
        >
            {projects.map((project, index) => (
                <Marker
                    key={index}
                    icon={{
                        url: "/icon/pointer.svg",
                        scaledSize: { width: 40, height: 40 },
                    }}
                    position={{
                        lat: Number(project.coordinates.lat),
                        lng: Number(project.coordinates.lng),
                    }}
                    onClick={() => handleMarkerClick(project)}
                />
            ))}

            {selected && (
                <InfoWindow
                    position={{
                        lat: Number(selected.coordinates.lat),
                        lng: Number(selected.coordinates.lng),
                    }}
                    onCloseClick={() => setSelected(null)}
                >
                    <div className="map-pointer">
                        <h4>{selected.projectName}</h4>
                        <p>
                            <strong>Role:</strong> {selected.role}
                        </p>
                        <p>
                            <strong>Focus:</strong> {selected.focus}
                        </p>
                        <p>{selected.focus}</p>
                        <button className="btn btn-primary">View Detail</button>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
