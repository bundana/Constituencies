import React, { useEffect, useRef, useState } from 'react';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa'; // Zoom icons from react-icons

export default function MapContainer() {
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [infoCard, setInfoCard] = useState(null);

    // Use useRef to store the colors so they persist across renders
    const colorsRef = useRef([]);

    useEffect(() => {
        // Function to get a random NDC color
        function getRandomNDCColor() {
            const colors = ["#e4161d", "#fbf1f1", "#096537", "#000000"]; // NDC Red, White, Green, Black
            return colors[Math.floor(Math.random() * colors.length)];
        }

        const loadSVG = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/ghana-map.svg");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const svgText = await response.text();
                if (mapRef.current) {
                    mapRef.current.innerHTML = svgText;

                    // Set initial zoom level and position
                    mapRef.current.style.transform = `scale(${zoom}) translate(${translateX}px, ${translateY}px)`;

                    // Add hover effects and color paths
                    const paths = mapRef.current.querySelectorAll('path');

                    if (colorsRef.current.length === 0) {
                        // Generate and store colors only once
                        colorsRef.current = Array.from(paths).map(() => getRandomNDCColor());
                    }

                    paths.forEach((path, index) => {
                        path.style.fill = colorsRef.current[index]; // Apply stored color
                        path.style.stroke = "none"; // Remove black borders

                        path.addEventListener("mouseover", (event) => {
                            const title = event.target.querySelector("title")
                                ? event.target.querySelector("title").textContent
                                : "No title";
                            if (infoCard) {
                                infoCard.textContent = `Information about ${title}`;
                                infoCard.style.display = "block";
                                infoCard.style.left = `${event.pageX + 10}px`; // Adjust position as needed
                                infoCard.style.top = `${event.pageY + 10}px`; // Adjust position as needed
                            }
                        });

                        path.addEventListener("mouseout", () => {
                            if (infoCard) {
                                infoCard.style.display = "none";
                            }
                        });
                    });
                }

            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        loadSVG();
    }, [zoom, translateX, translateY, infoCard]);

    useEffect(() => {
        // Create and append info card to body
        const card = document.createElement('div');
        card.style.position = 'absolute';
        card.style.background = '#fff';
        card.style.border = '1px solid #ccc';
        card.style.padding = '8px';
        card.style.borderRadius = '4px';
        card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        card.style.display = 'none';
        document.body.appendChild(card);
        setInfoCard(card);

        return () => {
            document.body.removeChild(card);
        };
    }, []);

    const zoomIn = () => {
        setZoom(prevZoom => Math.min(prevZoom + 0.1, 3)); // Max zoom level 3
    };

    const zoomOut = () => {
        setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level 0.5
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.clientX - translateX);
        setStartY(e.clientY - translateY);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setTranslateX(e.clientX - startX);
            setTranslateY(e.clientY - startY);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                id="map-container"
                ref={mapRef}
                className="map-container"
                onMouseDown={handleMouseDown}
            />
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={zoomIn}
                >
                    <FaSearchPlus className="text-xl" />
                </button>
                <button
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={zoomOut}
                >
                    <FaSearchMinus className="text-xl" />
                </button>
            </div>
        </div>
    );
}
cle
