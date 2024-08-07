import AppLayout from "@/Layouts/AppLayout.jsx";
import {Head} from "@inertiajs/react";
import MapLoader from "@/Components/MapComponent.jsx";
import SearchComponent from "@/Components/SearchComponent.jsx";

export default function Index({logo}) {
    return (
        <AppLayout logo={logo} >
            <Head title="Welcome"/>
            <div className="flex min-h-screen w-full bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
                   <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
                        <div className="grid gap-8">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                                data-v0-t="card"
                            >
                                <div className="flex flex-col space-y-1.5 p-6 text-center">
                                    <h1 className="whitespace-nowrap text-2xl
                                    leading-none tracking-tight font-extrabold">
                                        2024 Election Strategy: Key Constituencies to Defend and Flip
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        A high-level summary of your business performance.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div
                                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 border border-gray-200">
                                            <div className="text-gray-500 text-sm font-medium">Total Regions</div>
                                            <div className="text-3xl font-extrabold text-gray-800">128</div>
                                        </div>
                                        <div
                                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 border border-gray-200">
                                            <div className="text-gray-500 text-sm font-medium">Constituencies</div>
                                            <div className="text-3xl font-extrabold text-gray-800">128</div>
                                        </div>
                                        {/* Add more cards here if needed */}
                                    </div>
                                </div>

                            </div>

                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                                data-v0-t="card"
                            >

                                <div className="flex flex-col space-y-1.5 p-6">
                                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                                        Interactive Map
                                    </h3>
                                    <SearchComponent />
                                </div>
                                <div className="p-6">
                                    <div className="relative w-full overflow-auto">
                                        <MapLoader/>
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
