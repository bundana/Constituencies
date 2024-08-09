import AppLayout from "@/Layouts/AppLayout.jsx";
import {Head} from "@inertiajs/react";
import MapLoader from "@/Components/MapComponent.jsx";
import SearchComponent from "@/Components/SearchComponent.jsx";
import {useEffect, useState} from "react";
import { usePage } from '@inertiajs/react'

export default function Index({logo, constituencies}) {


    const [constituenciesData, setConstituenciesData] = useState(constituencies);
    // const [ghanaMap, setGhanaMap] = useState(null);

    useEffect(() => {
        setConstituenciesData(constituencies);
    }, [constituencies]);

    return (
        <AppLayout logo={logo}>
            <Head title="2024 Election Strategy | NDC"/>
            <div className="flex min-h-screen w-full bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
                    <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
                        <div className="grid gap-8">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 p-6 text-center">
                                    <h1 className="text-2xl leading-none tracking-tight font-extrabold text-primary-green">
                                        2024 Election Strategy: Key Constituencies to Defend and Flip
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Key Constituencies to be defended and those that could be targeted for flipping
                                        in 2024
                                    </p>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div
                                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 border border-gray-200 text-primary-green">
                                            <div className="text-gray-500 text-sm font-medium">Total Regions</div>
                                            <div
                                                className="text-3xl font-extrabold text-gray-800 text-primary-green">{constituencies.length.toFixed()}</div>
                                        </div>
                                        <div
                                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 border border-gray-200 text-primary-green">
                                            <div className="text-gray-500 text-sm font-medium">Constituencies</div>
                                            <div
                                                className="text-3xl font-extrabold text-gray-800 text-primary-green">{constituencies.length.toFixed()}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:space-x-6 p-6">
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-extrabold leading-none tracking-tight m-3 text-primary-green">
                                            Interactive Map
                                        </h1>
                                    </div>
                                    <div className="flex-1">
                                        <SearchComponent constituencies={constituencies}/>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="relative w-full overflow-auto">
                                        <MapLoader constituencies={constituenciesData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    );
}
