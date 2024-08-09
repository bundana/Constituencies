import React, {useEffect} from 'react';

const MapComponent = React.lazy(() => import("@/Components/MapContainer.jsx"));

export default function MapLoader({constituencies, map}) {
    return (
        <React.Suspense fallback={<SkeletonLoader/>}>
            <MapComponent constituencies={constituencies} map={map}/>
        </React.Suspense>
    );
}

function SkeletonLoader() {
    const skeletonLimit = 10;
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {Array.from({length: skeletonLimit}).map((_, index) => (
                    <div key={index} className="skeleton-loader p-4">
                        <div className="skeleton-1 bg-gray-300 h-24 rounded"></div>
                        <div className="skeleton-2 bg-gray-300 h-12 mt-4 rounded"></div>
                        <div className="skeleton-3 bg-gray-300 h-8 mt-2 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

