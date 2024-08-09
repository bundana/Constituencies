import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {router, usePage} from '@inertiajs/react';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa'; // Zoom icons from react-icons
import ConstituencyCard from '@/Components/ConstituencyCard'; // Adjust import path as needed
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MapContainer({ constituencies, map }) {
    const { props } = usePage();
    const { ghana_map } = props;

    const ghanaMap = ghana_map;

    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [infoCard, setInfoCard] = useState(null);
    const [selectedConstituency, setSelectedConstituency] = useState(null);
    const [visitConstituency, setVisitConstituency] = useState(null);
    const colorsRef = useRef([]);

    useEffect(() => {
        if (selectedConstituency && visitConstituency) {
            router.visit(route('constituency.view', selectedConstituency.id), {
                method: 'get',
                data: { 'referral': 'map' },
                replace: false,
                preserveState: false,
                preserveScroll: false,
            });
        }
    }, [selectedConstituency, visitConstituency]);

    useEffect(() => {
        const loadSVG = async () => {
            try {
                const response = await fetch(`${ghanaMap}`);
                if (!response.ok) {
                    toast.error('😒 Network error!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const svgText = await response.text();
                if (mapRef.current) {
                    mapRef.current.innerHTML = svgText;
                    mapRef.current.style.transform = `scale(${zoom}) translate(${translateX}px, ${translateY}px)`;

                    const paths = mapRef.current.querySelectorAll('path');

                    if (colorsRef.current.length === 0) {
                        colorsRef.current = Array.from(paths).map(() => getRandomNDCColor());
                    }

                    paths.forEach((path, index) => {
                        path.style.fill = colorsRef.current[index];
                        path.style.stroke = "none";

                        path.addEventListener("mouseover", handleMouseOver);
                        path.addEventListener("click", handleClick);
                        path.addEventListener("mouseout", handleMouseOut);
                    });
                }
            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        loadSVG();

        function handleMouseOver(event) {
            const titleElement = event.target.querySelector("title");
            const title = titleElement ? titleElement.textContent.trim() : null;
            const constituency = constituencies.find(c => c.constituency.trim() === title);
            setSelectedConstituency(constituency);
            if (infoCard) {
                infoCard.style.display = "block";
                infoCard.style.left = `${event.pageX + 10}px`;
                infoCard.style.top = `${event.pageY + 10}px`;
            }
        }

        function handleClick(event) {
            const titleElement = event.target.querySelector("title");
            const title = titleElement ? titleElement.textContent.trim() : null;
            const constituency = constituencies.find(c => c.constituency.trim() === title);
            setSelectedConstituency(constituency);
            setVisitConstituency(constituency);
        }

        function handleMouseOut() {
            setSelectedConstituency(null);
            if (infoCard) {
                infoCard.style.display = "none";
            }
        }

        return () => {
            const paths = mapRef.current?.querySelectorAll('path');
            paths?.forEach(path => {
                path.removeEventListener("mouseover", handleMouseOver);
                path.removeEventListener("click", handleClick);
                path.removeEventListener("mouseout", handleMouseOut);
            });
        };
    }, [zoom, translateX, translateY, constituencies]);

    useEffect(() => {
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
        setZoom(prevZoom => Math.min(prevZoom + 0.1, 3));
    };

    const zoomOut = () => {
        setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5));
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

    function getRandomNDCColor() {
        const colors = ["#e4161d", "#fbf1f1", "#096537", "#000000"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <>
            <ToastContainer />
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
                {infoCard && (
                    ReactDOM.createPortal(
                        <ConstituencyCard constituency={selectedConstituency} />,
                        infoCard
                    )
                )}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button
                        className="text-primary-green text-white p-2 rounded-full shadow-md"
                        onClick={zoomIn}
                    >
                        <FaSearchPlus className="text-xl" />
                    </button>
                    <button
                        className="text-primary-red text-white p-2 rounded-full shadow-md"
                        onClick={zoomOut}
                    >
                        <FaSearchMinus className="text-xl" />
                    </button>
                </div>
            </div>
        </>
    );
}
